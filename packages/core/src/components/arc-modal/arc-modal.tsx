import { Component, Prop, Event, EventEmitter, Element, Method, Watch, h } from '@stencil/core';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

@Component({
  tag: 'arc-modal',
  styleUrl: 'arc-modal.css',
  shadow: true,
})
export class ArcModal {
  @Element() hostEl!: HTMLElement;

  /** Whether the modal is open */
  @Prop({ mutable: true, reflect: true }) open: boolean = false;

  /** Modal size variant */
  @Prop() size: 'sm' | 'md' | 'lg' | 'full' = 'md';

  /** Whether clicking the overlay closes the modal */
  @Prop() closeOnOverlay: boolean = true;

  /** Whether pressing Escape closes the modal */
  @Prop() closeOnEscape: boolean = true;

  /** Emitted when the modal requests to be closed */
  @Event() arcClose!: EventEmitter<void>;

  private previouslyFocusedEl: HTMLElement | null = null;
  private keydownHandler: ((e: KeyboardEvent) => void) | null = null;

  /** Programmatically show the modal */
  @Method()
  async show(): Promise<void> {
    this.open = true;
  }

  /** Programmatically hide the modal */
  @Method()
  async hide(): Promise<void> {
    this.requestClose();
  }

  @Watch('open')
  onOpenChange(isOpen: boolean): void {
    if (isOpen) {
      this.onModalOpen();
    } else {
      this.onModalClose();
    }
  }

  disconnectedCallback(): void {
    this.removeKeydownListener();
  }

  private onModalOpen(): void {
    this.previouslyFocusedEl = document.activeElement as HTMLElement | null;

    this.addKeydownListener();

    // Defer focus until the DOM has updated
    requestAnimationFrame(() => {
      const modal = this.hostEl.shadowRoot?.querySelector('[role="dialog"]') as HTMLElement | null;
      if (modal) {
        // Try to focus the first focusable element inside the modal's light DOM (slotted content)
        const firstFocusable = this.hostEl.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
        if (firstFocusable) {
          firstFocusable.focus();
        } else {
          // Fallback: focus the close button inside shadow DOM
          const closeBtn = this.hostEl.shadowRoot?.querySelector<HTMLElement>('.close-button');
          closeBtn?.focus();
        }
      }
    });
  }

  private onModalClose(): void {
    this.removeKeydownListener();

    // Restore focus to the element that opened the modal
    if (this.previouslyFocusedEl) {
      this.previouslyFocusedEl.focus();
      this.previouslyFocusedEl = null;
    }
  }

  private addKeydownListener(): void {
    this.removeKeydownListener();

    this.keydownHandler = (event: KeyboardEvent) => {
      if (!this.open) return;

      if (this.closeOnEscape && event.key === 'Escape') {
        this.requestClose();
        return;
      }

      // Trap focus within the modal
      if (event.key === 'Tab') {
        this.trapFocus(event);
      }
    };

    document.addEventListener('keydown', this.keydownHandler);
  }

  private removeKeydownListener(): void {
    if (this.keydownHandler) {
      document.removeEventListener('keydown', this.keydownHandler);
      this.keydownHandler = null;
    }
  }

  private trapFocus(event: KeyboardEvent): void {
    // Collect focusable elements from both shadow DOM and light DOM (slotted)
    const shadowFocusable = Array.from(
      this.hostEl.shadowRoot?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR) ?? [],
    );
    const lightFocusable = Array.from(
      this.hostEl.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    );
    const focusableEls = [...shadowFocusable, ...lightFocusable];

    if (focusableEls.length === 0) return;

    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    if (event.shiftKey) {
      // Shift+Tab: wrap from first to last
      if (document.activeElement === firstEl || this.hostEl.shadowRoot?.activeElement === firstEl) {
        event.preventDefault();
        lastEl.focus();
      }
    } else {
      // Tab: wrap from last to first
      if (document.activeElement === lastEl || this.hostEl.shadowRoot?.activeElement === lastEl) {
        event.preventDefault();
        firstEl.focus();
      }
    }
  }

  private requestClose(): void {
    this.open = false;
    this.arcClose.emit();
  }

  private handleOverlayClick = (event: MouseEvent): void => {
    if (this.closeOnOverlay && event.target === event.currentTarget) {
      this.requestClose();
    }
  };

  private handleCloseClick = (): void => {
    this.requestClose();
  };

  render() {
    const modalClasses = {
      modal: true,
      [`size-${this.size}`]: true,
    };

    return (
      <div
        part="overlay"
        class={{ overlay: true, open: this.open }}
        onClick={this.handleOverlayClick}
        aria-hidden={!this.open ? 'true' : null}
      >
        <div
          part="modal"
          class={modalClasses}
          role="dialog"
          aria-modal="true"
        >
          <div part="header" class="header">
            <slot name="header" />
            <button
              part="close-button"
              class="close-button"
              onClick={this.handleCloseClick}
              aria-label="Close modal"
              type="button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div part="body" class="body">
            <slot />
          </div>
          <div part="footer" class="footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    );
  }
}
