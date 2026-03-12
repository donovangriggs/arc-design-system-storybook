import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'arc-badge',
  styleUrl: 'arc-badge.css',
  shadow: true,
})
export class ArcBadge {
  /** Color variant */
  @Prop() variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral' = 'primary';

  /** Badge size */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /** Show a dot indicator instead of content */
  @Prop() dot: boolean = false;

  /** Use pill (fully rounded) shape */
  @Prop() pill: boolean = true;

  render() {
    const classes = {
      badge: true,
      [`variant-${this.variant}`]: true,
      [`size-${this.size}`]: true,
      dot: this.dot,
      pill: this.pill,
    };

    return (
      <span part="badge" class={classes}>
        {this.dot ? <span class="dot-indicator" aria-hidden="true" /> : <slot />}
      </span>
    );
  }
}
