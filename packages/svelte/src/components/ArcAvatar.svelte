<script lang="ts">
  export let src: string = '';
  export let alt: string = '';
  export let name: string = '';
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let shape: 'circle' | 'square' = 'circle';
</script>

<arc-avatar
  src={src}
  alt={alt}
  name={name}
  size={size}
  shape={shape}
>
  <slot />
</arc-avatar>
