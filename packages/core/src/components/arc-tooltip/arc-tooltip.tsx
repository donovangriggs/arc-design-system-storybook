import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'arc-tooltip',
  styleUrl: 'arc-tooltip.css',
  shadow: true,
})
export class ArcTooltip {
  /** Text content displayed in the tooltip */
  @Prop() content: string = '';

  /** Position of the tooltip relative to the trigger */
  @Prop() position: 'top' | 'right' | 'bottom' | 'left' = 'top';

  /** Delay in ms before showing the tooltip */
  @Prop() delay: number = 200;

  /** Whether the tooltip is currently visible */
  @State() visible: boolean = false;

  private showTimeout: ReturnType<typeof setTimeout> | null = null;

  private handleShow = (): void => {
    this.showTimeout = setTimeout(() => {
      this.visible = true;
    }, this.delay);
  };

  private handleHide = (): void => {
    if (this.showTimeout !== null) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
    this.visible = false;
  };

  disconnectedCallback(): void {
    if (this.showTimeout !== null) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }

  render() {
    const tooltipClasses = {
      tooltip: true,
      visible: this.visible,
      [`position-${this.position}`]: true,
    };

    const arrowClasses = {
      arrow: true,
      [`arrow-${this.position}`]: true,
    };

    return (
      <div
        class="wrapper"
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
        onFocusin={this.handleShow}
        onFocusout={this.handleHide}
      >
        <slot />
        <div
          part="tooltip"
          class={tooltipClasses}
          role="tooltip"
          aria-hidden={!this.visible ? 'true' : 'false'}
        >
          {this.content}
          <div part="arrow" class={arrowClasses} />
        </div>
      </div>
    );
  }
}
