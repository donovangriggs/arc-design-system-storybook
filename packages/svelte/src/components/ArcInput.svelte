<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let type: 'text' | 'email' | 'password' | 'search' | 'number' | 'tel' | 'url' = 'text';
  export let value: string = '';
  export let placeholder: string = '';
  export let label: string | undefined = undefined;
  export let helperText: string | undefined = undefined;
  export let errorMessage: string | undefined = undefined;
  export let disabled: boolean = false;
  export let required: boolean = false;
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let name: string | undefined = undefined;

  const dispatch = createEventDispatcher<{
    arcInput: string;
    arcChange: string;
    arcFocus: void;
    arcBlur: void;
  }>();

  function handleArcInput(event: CustomEvent<string>) {
    value = event.detail;
    dispatch('arcInput', event.detail);
  }

  function handleArcChange(event: CustomEvent<string>) {
    value = event.detail;
    dispatch('arcChange', event.detail);
  }

  function handleArcFocus() {
    dispatch('arcFocus');
  }

  function handleArcBlur() {
    dispatch('arcBlur');
  }
</script>

<arc-input
  type={type}
  value={value}
  placeholder={placeholder}
  label={label}
  helper-text={helperText}
  error-message={errorMessage}
  disabled={disabled}
  required={required}
  size={size}
  name={name}
  on:arcInput={handleArcInput}
  on:arcChange={handleArcChange}
  on:arcFocus={handleArcFocus}
  on:arcBlur={handleArcBlur}
>
  <slot />
</arc-input>
