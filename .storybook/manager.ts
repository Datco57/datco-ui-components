import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'Datco Components',
  brandUrl: '/',
  brandTarget: '_self',
  
  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',
});

addons.setConfig({
  theme,
});
