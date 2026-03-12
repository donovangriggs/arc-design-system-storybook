import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'arc-input',
  styleUrl: 'arc-input.css',
  shadow: true,
})
export class ArcInput {
  @Prop() type: 'text' | 'email' | 'password' | 'search' | 'number' | 'tel' | 'url' = 'text';
  @Prop({ mutable: true }) value: string = '';
  @Prop() placeholder: string = '';
  @Prop() label?: string;
  @Prop() helperText?: string;
  @Prop() errorMessage?: string;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() required: boolean = false;
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';
  @Prop() name?: string;

  @State() hasFocus: boolean = false;

  @Event() arcInput!: EventEmitter<string>;
  @Event() arcChange!: EventEmitter<string>;
  @Event() arcFocus!: EventEmitter<void>;
  @Event() arcBlur!: EventEmitter<void>;

  private handleInput = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.arcInput.emit(target.value);
  };

  private handleChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.arcChange.emit(target.value);
  };

  private handleFocus = (): void => {
    this.hasFocus = true;
    this.arcFocus.emit();
  };

  private handleBlur = (): void => {
    this.hasFocus = false;
    this.arcBlur.emit();
  };

  render() {
    const hasError = !!this.errorMessage;
    const wrapperClasses = {
      'input-wrapper': true,
      [`input-wrapper--${this.size}`]: true,
      'input-wrapper--focused': this.hasFocus,
      'input-wrapper--error': hasError,
      'input-wrapper--disabled': this.disabled,
    };

    return (
      <div class={wrapperClasses} part="wrapper">
        {this.label && (
          <label class="input-label" part="label" htmlFor="input">
            {this.label}
            {this.required && <span class="input-label__required" aria-hidden="true">*</span>}
          </label>
        )}
        <input
          id="input"
          class="input-field"
          part="input"
          type={this.type}
          value={this.value}
          placeholder={this.placeholder}
          disabled={this.disabled}
          required={this.required}
          name={this.name}
          aria-invalid={hasError ? 'true' : null}
          aria-describedby={hasError ? 'error' : this.helperText ? 'helper' : null}
          onInput={this.handleInput}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        {hasError && (
          <div id="error" class="input-error" part="error" role="alert">
            {this.errorMessage}
          </div>
        )}
        {!hasError && this.helperText && (
          <div id="helper" class="input-helper" part="helper">
            {this.helperText}
          </div>
        )}
      </div>
    );
  }
}
