# Arc Design System

Cross-framework design system built with [Stencil](https://stenciljs.com/) Web Components, with first-class wrappers for React, Vue, Angular, and Svelte.

## Packages

| Package | Description | Peer Dependencies |
|---------|-------------|-------------------|
| `@arctech/core` | Stencil Web Components (10 components) | — |
| `@arctech/tokens` | Design tokens (light + dark themes) | — |
| `@arctech/react` | React wrapper components | `react >= 18` |
| `@arctech/vue` | Vue 3 plugin + wrapper components | `vue >= 3.3` |
| `@arctech/angular` | Angular NgModule + proxy directives | `@angular/core >= 17` |
| `@arctech/svelte` | Svelte wrapper components | `svelte >= 4` |

## Components

`arc-button` `arc-card` `arc-input` `arc-badge` `arc-avatar` `arc-alert` `arc-modal` `arc-tooltip` `arc-icon` `arc-theme-provider`

## Quick Start

### Prerequisites

- Node.js >= 18
- pnpm >= 10

### Install & Build

```bash
pnpm install
pnpm build
```

### Development

```bash
pnpm dev
```

This starts all dev servers in parallel (Stencil watch, demo apps, Storybook).

<!-- AUTO-GENERATED:SCRIPTS -->
### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm build` | Build all packages and apps (via Turborepo) |
| `pnpm dev` | Start all dev servers with hot reload |
| `pnpm test` | Run all test suites |
| `pnpm lint` | Lint all packages |
| `pnpm clean` | Remove all build artifacts |
| `pnpm changeset` | Create a changeset for versioning |
| `pnpm version` | Apply changesets and bump versions |
| `pnpm release` | Publish packages to registry |
<!-- /AUTO-GENERATED:SCRIPTS -->

## Project Structure

```
arc-design-system/
├── packages/
│   ├── core/          # Stencil Web Components
│   ├── tokens/        # Design tokens (Style Dictionary)
│   ├── react/         # React wrappers
│   ├── vue/           # Vue 3 wrappers
│   ├── angular/       # Angular wrappers
│   └── svelte/        # Svelte wrappers
├── apps/
│   ├── demo-react/    # React demo dashboard
│   ├── demo-vue/      # Vue demo dashboard
│   ├── demo-angular/  # Angular demo dashboard
│   ├── demo-svelte/   # Svelte demo dashboard
│   └── storybook/     # Storybook documentation site
├── turbo.json         # Turborepo task config
├── pnpm-workspace.yaml
└── tailwind.preset.js # Tailwind CSS preset with design tokens
```

## Usage

### React

```tsx
import { ArcButton, ArcCard } from '@arctech/react';

function App() {
  return (
    <ArcCard variant="elevated" padding="lg">
      <ArcButton variant="primary" onArcClick={() => console.log('clicked')}>
        Click me
      </ArcButton>
    </ArcCard>
  );
}
```

### Vue

```ts
import { createApp } from 'vue';
import { ArcDesignSystemPlugin } from '@arctech/vue';

createApp(App).use(ArcDesignSystemPlugin).mount('#app');
```

### Angular

```ts
import { ArcComponentsModule } from '@arctech/angular';

@NgModule({
  imports: [ArcComponentsModule],
})
export class AppModule {}
```

### Vanilla / Any Framework

```html
<script type="module">
  import { defineCustomElements } from '@arctech/core/loader';
  defineCustomElements(window);
</script>

<arc-button variant="primary">Click me</arc-button>
```

## Theming

The design system uses CSS custom properties generated from design tokens. Light and dark themes are provided out of the box.

```html
<!-- Import tokens -->
<link rel="stylesheet" href="@arctech/tokens/css/tokens.css" />

<!-- Use the theme provider -->
<arc-theme-provider theme="system">
  <!-- Your app -->
</arc-theme-provider>
```

## Testing

```bash
# Run all tests
pnpm test

# Run core component tests only
pnpm --filter @arctech/core test

# Watch mode
pnpm --filter @arctech/core test:watch

# Token validation tests
pnpm --filter @arctech/tokens test
```

## Build Pipeline

Turborepo orchestrates the build in dependency order:

```
tokens → core → react/vue/angular/svelte → demo apps + storybook
```

## License

ISC
