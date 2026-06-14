import { defineConfig } from '@pandacss/dev';
import { createPreset } from '@park-ui/panda-preset';
import neutralColor from '@park-ui/panda-preset/colors/neutral';
import { createColorTokens } from './src/tokens/colors';
import { mildang } from './src/tokens/semanticColors/property-first/mildang';

const parkUiPreset = createPreset({ accentColor: neutralColor, grayColor: neutralColor, radius: 'md' });

// 메인 styled-system: 홈 인덱스(src/app/page.tsx) + property-first 스토리 렌더용.
// (role-first arm은 v3에서 제거됨 — 실험은 property-first vs E+ 2군.)
export default defineConfig({
  presets: ['@pandacss/preset-base', parkUiPreset],
  preflight: true,
  strictTokens: false,
  jsxFramework: 'react',
  importMap: '@ds-token-test/styled-system',
  outdir: 'styled-system',
  include: [
    './src/app/page.tsx',
    './src/app/property-first/**/*.{js,jsx,ts,tsx}',
    './src/stories/**/*.{js,jsx,ts,tsx}',
  ],
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
