import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'arc-button',
  styleUrl: 'arc-button.css',
  shadow: true,
})
export class ArcButton {
  /** Visual style variant */
  @Prop() variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' = 'primary';

  /** Button size */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /** Whether the button is disabled */
  @Prop({ reflect: true }) disabled: boolean = false;

  /** HTML button type attribute */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /** Whether the button is in a loading state */
  @Prop({ reflect: true }) loading: boolean = false;

  /** Emitted when the button is clicked (not emitted when disabled or loading) */
  @Event() arcClick!: EventEmitter<void>;

  private handleClick = (event: MouseEvent): void => {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.arcClick.emit();
  };

  private renderSpinner() {
    return (
      <svg
        class="spinner"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray="31.4 31.4"
        />
      </svg>
    );
  }

  render() {
    const classes = {
      button: true,
      [`variant-${this.variant}`]: true,
      [`size-${this.size}`]: true,
      loading: this.loading,
    };

    return (
      <button
        part="button"
        class={classes}
        type={this.type}
        disabled={this.disabled || this.loading}
        aria-disabled={this.disabled || this.loading ? 'true' : null}
        aria-busy={this.loading ? 'true' : null}
        onClick={this.handleClick}
      >
        {this.loading && this.renderSpinner()}
        <span class={{ content: true, hidden: this.loading }}>
          <slot />
        </span>
      </button>
    );
  }
}
