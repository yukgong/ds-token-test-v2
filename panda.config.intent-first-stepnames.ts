import { defineConfig } from '@pandacss/dev';
import { createPreset } from '@park-ui/panda-preset';
import sandColor from '@park-ui/panda-preset/colors/sand';
import { createColorTokens } from './src/tokens/colors';
import { mildang } from './src/tokens/semanticColors/intent-first-stepnames/mildang';

// 셀 ES = intent-first 토큰의 step 어휘만 교체한 arm (muted/subtle/default/strongest/emphasis).
// 토큰 구조·색상값·순서는 셀 E와 동일. panda.config.intent-first.ts와 동일 골격 —
// semanticTokens·outdir·importMap·include만 다름. (sand accent/gray 이유는 intent-first config 주석 참고)
const parkUiPreset = createPreset({ accentColor: sandColor, grayColor: sandColor, radius: 'md' });

export default defineConfig({
  presets: ['@pandacss/preset-base', parkUiPreset],
  preflight: true,
  strictTokens: false,
  jsxFramework: 'react',
  importMap: '@ds-token-test/styled-system-intent-first-stepnames',
  outdir: 'styled-system-intent-first-stepnames',
  include: ['./src/app/step-rename/**/*.{js,jsx,ts,tsx}'],
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
