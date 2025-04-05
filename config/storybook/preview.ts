import type { Preview } from '@storybook/react';

import { StoreDecorator, StyleDecorator, TranslationDecorator } from '../../src/shared/config';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    StoreDecorator,
    TranslationDecorator,
  ],
};

export default preview;
