# Contributing to Arc Design System

## Development Setup

### Prerequisites

- **Node.js** >= 18
- **pnpm** >= 10 (`npm install -g pnpm`)

### Getting Started

```bash
git clone <repo-url>
cd arc-design-system
pnpm install
pnpm build
```

### Development Workflow

```bash
# Start all dev servers (Stencil watch + demo apps + Storybook)
pnpm dev

# Build everything
pnpm build

# Run tests
pnpm test

# Clean all build artifacts
pnpm clean
```

## Adding a New Component

1. **Generate the component scaffold:**
   ```bash
   pnpm --filter @arctech/core generate
   ```

2. **Implement the component** in `packages/core/src/components/<name>/`
   - `<name>.tsx` — Stencil component with `@Prop`, `@Event`, `@Method` decorators
   - `<name>.css` — Scoped styles using design token CSS variables
   - `<name>.spec.ts` — Unit tests

3. **Add framework wrappers:**
   - `packages/react/src/types.ts` — Add prop interface extending `ArcBaseProps`
   - `packages/react/src/components.ts` — Add `createWebComponentWrapper` call
   - `packages/react/src/index.ts` — Re-export the component
   - `packages/vue/src/components.ts` — Add `defineComponent` wrapper
   - `packages/angular/src/directives/proxies.ts` — Add `@Component` proxy class
   - `packages/svelte/src/components/` — Add `.svelte` wrapper

4. **Add a Storybook story** in `apps/storybook/stories/<name>.stories.ts`

5. **Update demo apps** to showcase the new component

## Code Conventions

- **Immutability** — Always create new objects; never mutate in place
- **Union types** — Use string literal unions for variants, not `string`
- **Shadow DOM** — All core components use shadow encapsulation
- **CSS variables** — Use `var(--arc-*)` tokens, never hardcoded values
- **Accessibility** — Include `aria-*` attributes, `role`, keyboard handling
- **Event naming** — Prefix custom events with `arc` (e.g., `arcClick`, `arcClose`)

## Testing

Tests are required for all core components. Run with:

```bash
pnpm --filter @arctech/core test        # Unit tests
pnpm --filter @arctech/core test:watch  # Watch mode
pnpm --filter @arctech/tokens test      # Token validation
```

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes following the conventions above
3. Run `pnpm build && pnpm test` to verify
4. Create a changeset if your change affects published packages:
   ```bash
   pnpm changeset
   ```
5. Open a PR using the provided template
6. Ensure all checks pass

## Code Ownership

See [CODEOWNERS](.github/CODEOWNERS) for team ownership of each package.
