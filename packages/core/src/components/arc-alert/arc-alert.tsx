import { Component, Prop, State, Watch, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'arc-alert',
  styleUrl: 'arc-alert.css',
  shadow: true,
})
export class ArcAlert {
  @Prop({ reflect: true }) variant: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Prop() alertTitle?: string;
  @Prop() dismissible: boolean = false;
  @Prop() icon: boolean = true;

  /** Whether the alert is visible. Set to false to programmatically dismiss, or back to true to restore. */
  @Prop({ mutable: true, reflect: true }) visible: boolean = true;

  @State() dismissed: boolean = false;

  @Watch('visible')
  onVisibleChange(newValue: boolean): void {
    this.dismissed = !newValue;
  }

  @Event() arcDismiss!: EventEmitter<void>;

  private handleDismiss = (): void => {
    this.dismissed = true;
    this.visible = false;
    this.arcDismiss.emit();
  };

  private renderIcon() {
    switch (this.variant) {
      case 'info':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
        );
      case 'success':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        );
      case 'warning':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
          </svg>
        );
      case 'error':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        );
    }
  }

  render() {
    if (this.dismissed) {
      return null;
    }

    const alertClasses = {
      'alert': true,
      [`alert--${this.variant}`]: true,
    };

    return (
      <div class={alertClasses} part="alert" role="alert">
        {this.icon && (
          <div class="alert-icon" part="icon">
            {this.renderIcon()}
          </div>
        )}
        <div class="alert-content" part="content">
          {this.alertTitle && (
            <div class="alert-title" part="title">
              {this.alertTitle}
            </div>
          )}
          <div class="alert-message" part="message">
            <slot></slot>
          </div>
          <div class="alert-action" part="action">
            <slot name="action"></slot>
          </div>
        </div>
        {this.dismissible && (
          <button
            class="alert-dismiss"
            part="dismiss-button"
            type="button"
            aria-label="Dismiss alert"
            onClick={this.handleDismiss}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        )}
      </div>
    );
  }
}
