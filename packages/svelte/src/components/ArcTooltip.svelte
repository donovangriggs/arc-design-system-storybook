<script lang="ts">
  export let content: string = '';
  export let position: 'top' | 'right' | 'bottom' | 'left' = 'top';
  export let delay: number = 200;
</script>

<arc-tooltip
  content={content}
  position={position}
  delay={delay}
>
  <slot />
</arc-tooltip>
