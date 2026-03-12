import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'arc-card',
  styleUrl: 'arc-card.css',
  shadow: true,
})
export class ArcCard {
  /** Visual style variant */
  @Prop() variant: 'default' | 'elevated' | 'outlined' = 'default';

  /** Inner padding size */
  @Prop() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';

  /** Whether the card is interactive/clickable */
  @Prop({ reflect: true }) clickable: boolean = false;

  render() {
    const classes = {
      card: true,
      [`variant-${this.variant}`]: true,
      [`padding-${this.padding}`]: true,
      clickable: this.clickable,
    };

    return (
      <div
        part="card"
        class={classes}
        role={this.clickable ? 'button' : undefined}
        tabindex={this.clickable ? 0 : undefined}
      >
        <div part="header" class="header">
          <slot name="header" />
        </div>
        <div part="body" class="body">
          <slot />
        </div>
        <div part="footer" class="footer">
          <slot name="footer" />
        </div>
      </div>
    );
  }
}
