import { newSpecPage } from '@stencil/core/testing';
import { ArcIcon } from './arc-icon';

describe('arc-icon', () => {
  it('renders SVG for known icon', async () => {
    const page = await newSpecPage({
      components: [ArcIcon],
      html: '<arc-icon name="check"></arc-icon>',
    });
    const svg = page.root!.querySelector('svg');
    expect(svg).not.toBeNull();
  });

  it('renders nothing for unknown icon', async () => {
    const page = await newSpecPage({
      components: [ArcIcon],
      html: '<arc-icon name="nonexistent-icon"></arc-icon>',
    });
    const svg = page.root!.querySelector('svg');
    expect(svg).toBeNull();
  });

  it('size prop sets width and height', async () => {
    const page = await newSpecPage({
      components: [ArcIcon],
      html: '<arc-icon name="check" size="32"></arc-icon>',
    });
    const svg = page.root!.querySelector('svg');
    expect(svg!.getAttribute('width')).toBe('32');
    expect(svg!.getAttribute('height')).toBe('32');
  });

  it('color prop sets stroke color', async () => {
    const page = await newSpecPage({
      components: [ArcIcon],
      html: '<arc-icon name="check" color="red"></arc-icon>',
    });
    const svg = page.root!.querySelector('svg');
    expect(svg!.getAttribute('stroke')).toBe('red');
  });

  it('all 15 included icons render', async () => {
    const iconNames = [
      'chevron-down',
      'chevron-up',
      'chevron-left',
      'chevron-right',
      'x',
      'check',
      'plus',
      'minus',
      'search',
      'menu',
      'user',
      'heart',
      'star',
      'info',
      'alert-triangle',
    ];

    for (const name of iconNames) {
      const page = await newSpecPage({
        components: [ArcIcon],
        html: `<arc-icon name="${name}"></arc-icon>`,
      });
      const svg = page.root!.querySelector('svg');
      expect(svg).not.toBeNull();
    }
  });
});
