import { newSpecPage } from '@stencil/core/testing';
import { ArcInput } from './arc-input';

describe('arc-input', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ArcInput],
      html: '<arc-input></arc-input>',
    });

    const input = page.root!.shadowRoot!.querySelector('input');
    expect(input).not.toBeNull();
    expect(input!.getAttribute('type')).toBe('text');
    expect(page.root!.shadowRoot!.querySelector('.input-wrapper--md')).not.toBeNull();
  });

  it('renders label when provided', async () => {
    const page = await newSpecPage({
      components: [ArcInput],
      html: '<arc-input label="Email Address"></arc-input>',
    });

    const label = page.root!.shadowRoot!.querySelector('.input-label');
    expect(label).not.toBeNull();
    expect(label!.textContent).toContain('Email Address');
  });

  it('does not render label when not provided', async () => {
    const page = await newSpecPage({
      components: [ArcInput],
      html: '<arc-input></arc-input>',
    });

    const label = page.root!.shadowRoot!.querySelector('.input-label');
    expect(label).toBeNull();
  });

  it('shows error message and applies error styling', async () => {
    const page = await newSpecPage({
      components: [ArcInput],
      html: '<arc-input error-message="This field is required"></arc-input>',
    });

    const error = page.root!.shadowRoot!.querySelector('.input-error');
    expect(error).not.toBeNull();
    expect(error!.textContent).toBe('This field is required');

    const wrapper = page.root!.shadowRoot!.querySelector('.input-wrapper--error');
    expect(wrapper).not.toBeNull();

    const input = page.root!.shadowRoot!.querySelector('input');
    expect(input!.getAttribute('aria-invalid')).toBe('true');
  });

  it('shows helper text when no error', async () => {
    const page = await newSpecPage({
      components: [ArcInput],
      html: '<arc-input helper-text="Enter your email"></arc-input>',
    });

    const helper = page.root!.shadowRoot!.querySelector('.input-helper');
    expect(helper).not.toBeNull();
    expect(helper!.textContent).toBe('Enter your email');

    const error = page.root!.shadowRoot!.querySelector('.input-error');
    expect(error).toBeNull();
  });

  it('hides helper text when error message is present', async () => {
    const page = await newSpecPage({
      components: [ArcInput],
      html: '<arc-input helper-text="Enter your email" error-message="Invalid email"></arc-input>',
    });

    const helper = page.root!.shadowRoot!.querySelector('.input-helper');
    expect(helper).toBeNull();

    const error = page.root!.shadowRoot!.querySelector('.input-error');
    expect(error).not.toBeNull();
    expect(error!.textContent).toBe('Invalid email');
  });

  it('emits arcInput event on input', async () => {
    const page = await newSpecPage({
      components: [ArcInput],
      html: '<arc-input></arc-input>',
    });

    const spy = jest.fn();
    page.root!.addEventListener('arcInput', spy);

    const input = page.root!.shadowRoot!.querySelector('input');
    input!.value = 'hello';
    input!.dispatchEvent(new Event('input'));
    await page.waitForChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('applies disabled state', async () => {
    const page = await newSpecPage({
      components: [ArcInput],
      html: '<arc-input disabled></arc-input>',
    });

    const input = page.root!.shadowRoot!.querySelector('input');
    expect(input!.disabled).toBe(true);

    const wrapper = page.root!.shadowRoot!.querySelector('.input-wrapper--disabled');
    expect(wrapper).not.toBeNull();
  });

  it('sets required attribute on input', async () => {
    const page = await newSpecPage({
      components: [ArcInput],
      html: '<arc-input required label="Name"></arc-input>',
    });

    const input = page.root!.shadowRoot!.querySelector('input');
    expect(input!.required).toBe(true);

    const requiredIndicator = page.root!.shadowRoot!.querySelector('.input-label__required');
    expect(requiredIndicator).not.toBeNull();
  });

  it('renders sm size correctly', async () => {
    const page = await newSpecPage({
      components: [ArcInput],
      html: '<arc-input size="sm"></arc-input>',
    });

    const wrapper = page.root!.shadowRoot!.querySelector('.input-wrapper--sm');
    expect(wrapper).not.toBeNull();
  });

  it('renders md size correctly', async () => {
    const page = await newSpecPage({
      components: [ArcInput],
      html: '<arc-input size="md"></arc-input>',
    });

    const wrapper = page.root!.shadowRoot!.querySelector('.input-wrapper--md');
    expect(wrapper).not.toBeNull();
  });

  it('renders lg size correctly', async () => {
    const page = await newSpecPage({
      components: [ArcInput],
      html: '<arc-input size="lg"></arc-input>',
    });

    const wrapper = page.root!.shadowRoot!.querySelector('.input-wrapper--lg');
    expect(wrapper).not.toBeNull();
  });
});
