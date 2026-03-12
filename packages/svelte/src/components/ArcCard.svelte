<script lang="ts">
  export let variant: 'default' | 'elevated' | 'outlined' = 'default';
  export let padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
  export let clickable: boolean = false;
</script>

<arc-card
  variant={variant}
  padding={padding}
  clickable={clickable}
>
  <slot />
</arc-card>
