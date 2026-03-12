import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'arc-avatar',
  styleUrl: 'arc-avatar.css',
  shadow: true,
})
export class ArcAvatar {
  @Prop() src: string = '';
  @Prop() alt: string = '';
  @Prop() name: string = '';
  @Prop({ reflect: true }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Prop({ reflect: true }) shape: 'circle' | 'square' = 'circle';

  @State() imageError: boolean = false;

  private handleImageError = (): void => {
    this.imageError = true;
  };

  private getInitials(): string {
    if (!this.name) {
      return '';
    }
    const parts = this.name.trim().split(/\s+/);
    if (parts.length === 1) {
      return parts[0].charAt(0).toUpperCase();
    }
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }

  private renderFallbackIcon() {
    return (
      <svg
        class="avatar-fallback-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    );
  }

  render() {
    const showImage = this.src && !this.imageError;
    const showInitials = !showImage && this.name;
    const showFallback = !showImage && !this.name;

    const avatarClasses = {
      'avatar': true,
      [`avatar--${this.size}`]: true,
      [`avatar--${this.shape}`]: true,
    };

    return (
      <div class={avatarClasses} part="avatar" role="img" aria-label={this.alt || this.name || 'User avatar'}>
        {showImage && (
          <img
            class="avatar-image"
            part="image"
            src={this.src}
            alt={this.alt || this.name || ''}
            onError={this.handleImageError}
          />
        )}
        {showInitials && (
          <span class="avatar-initials" part="initials" aria-hidden="true">
            {this.getInitials()}
          </span>
        )}
        {showFallback && (
          <span class="avatar-fallback" part="fallback" aria-hidden="true">
            {this.renderFallbackIcon()}
          </span>
        )}
      </div>
    );
  }
}
