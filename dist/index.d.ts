import { FlavorName } from '@catppuccin/palette';
export { FlavorName } from '@catppuccin/palette';
import { CustomTheme } from 'daisyui';

declare function createFlavor(theme: FlavorName): CustomTheme;

export { createFlavor as default };
