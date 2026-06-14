import { defineConfig } from '@pandacss/dev';
import { createPreset } from '@park-ui/panda-preset';
import sandColor from '@park-ui/panda-preset/colors/sand';
import { createColorTokens } from './src/tokens/colors';
import { mildang } from './src/tokens/semanticColors/intent-first-slotfirst/mildang';

// INV arm = inverse-desc(slot-first 네이밍 + 설명). 셀 E와 동일 값/토큰을 {slot}.{intent}.{step} 이름으로 노출.
// intent-first config와 골격 동일 — semanticTokens(slot-first)·outdir·importMap·include만 다름.
const parkUiPreset = createPreset({ accentColor: sandColor, grayColor: sandColor, radius: 'md' });

export default defineConfig({
  presets: ['@pandacss/preset-base', parkUiPreset],
  preflight: true,
  strictTokens: false,
  jsxFramework: 'react',
  importMap: '@ds-token-test/styled-system-intent-first-slotfirst',
  outdir: 'styled-system-intent-first-slotfirst',
  include: ['./src/app/inverse-desc/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      tokens: {
        colors: createColorTokens(),
      },
      semanticTokens: {
        colors: mildang,
      },
    },
  },
});
