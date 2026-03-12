import { newSpecPage } from '@stencil/core/testing';
import { ArcTooltip } from './arc-tooltip';

describe('arc-tooltip', () => {
  it('is not visible by default', async () => {
    const page = await newSpecPage({
      components: [ArcTooltip],
      html: '<arc-tooltip content="Hello"><button>Hover me</button></arc-tooltip>',
    });
    const tooltip = page.root!.shadowRoot!.querySelector('.tooltip');
    expect(tooltip).not.toHaveClass('visible');
  });

  it('becomes visible on mouseenter', async () => {
    const page = await newSpecPage({
      components: [ArcTooltip],
      html: '<arc-tooltip content="Hello" delay="0"><button>Hover me</button></arc-tooltip>',
    });

    const wrapper = page.root!.shadowRoot!.querySelector('.wrapper') as HTMLElement;
    wrapper.dispatchEvent(new MouseEvent('mouseenter'));

    // Allow the 0ms timeout to resolve
    await new Promise(r => setTimeout(r, 10));
    await page.waitForChanges();

    const tooltip = page.root!.shadowRoot!.querySelector('.tooltip');
    expect(tooltip).toHaveClass('visible');
  });

  it('hides on mouseleave', async () => {
    const page = await newSpecPage({
      components: [ArcTooltip],
      html: '<arc-tooltip content="Hello" delay="0"><button>Hover me</button></arc-tooltip>',
    });

    const wrapper = page.root!.shadowRoot!.querySelector('.wrapper') as HTMLElement;
    wrapper.dispatchEvent(new MouseEvent('mouseenter'));
    await new Promise(r => setTimeout(r, 10));
    await page.waitForChanges();

    wrapper.dispatchEvent(new MouseEvent('mouseleave'));
    await page.waitForChanges();

    const tooltip = page.root!.shadowRoot!.querySelector('.tooltip');
    expect(tooltip).not.toHaveClass('visible');
  });

  it('position prop applies correct class', async () => {
    const positions = ['top', 'right', 'bottom', 'left'] as const;

    for (const position of positions) {
      const page = await newSpecPage({
        components: [ArcTooltip],
        html: `<arc-tooltip content="Hello" position="${position}"><button>Trigger</button></arc-tooltip>`,
      });
      const tooltip = page.root!.shadowRoot!.querySelector('.tooltip');
      expect(tooltip).toHaveClass(`position-${position}`);
    }
  });

  it('content prop renders in tooltip', async () => {
    const page = await newSpecPage({
      components: [ArcTooltip],
      html: '<arc-tooltip content="Test tooltip text"><button>Hover me</button></arc-tooltip>',
    });
    const tooltip = page.root!.shadowRoot!.querySelector('.tooltip');
    expect(tooltip!.textContent).toContain('Test tooltip text');
  });

  it('has aria attributes for accessibility', async () => {
    const page = await newSpecPage({
      components: [ArcTooltip],
      html: '<arc-tooltip content="Accessible tooltip"><button>Hover me</button></arc-tooltip>',
    });
    const tooltip = page.root!.shadowRoot!.querySelector('.tooltip');
    expect(tooltip!.getAttribute('role')).toBe('tooltip');
    expect(tooltip!.getAttribute('aria-hidden')).toBe('true');
  });
});
