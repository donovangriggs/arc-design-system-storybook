import type { Preview } from '@storybook/web-components';

// Register all arc-* custom elements via Stencil custom elements bundle
// Uses dist-custom-elements with auto-define, so importing registers all tags
import '@arctech/core/dist/components';

// Import design tokens (light + dark)
import '@arctech/tokens/css/tokens.css';
import '@arctech/tokens/css/tokens-dark.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme ?? 'light';
      document.documentElement.setAttribute('data-theme', theme);
      return story();
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
};

export default preview;
