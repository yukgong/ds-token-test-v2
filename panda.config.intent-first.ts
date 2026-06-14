import { defineConfig } from '@pandacss/dev';
import { createPreset } from '@park-ui/panda-preset';
import sandColor from '@park-ui/panda-preset/colors/sand';
import { createColorTokens } from './src/tokens/colors';
import { mildang } from './src/tokens/semanticColors/intent-first/mildang';

// ※ park-ui accent/gray를 'sand'로 둔다(B는 'neutral'). 이유: park-ui의 neutral 색은
//    name:"neutral" + neutral.{text,fg,default,emphasized} 시맨틱을 등록해 E의 intent-first
//    `neutral.*` 그룹과 충돌·오염(특히 neutral.text 그룹이 통째로 사라짐). sand는 우리 8개
//    intent 어느 것과도 이름이 겹치지 않아 E `neutral.*`를 우리 토큰 21개만 차지하게 만든다.
//    park-ui 컴포넌트 chrome(gray)만 미세하게 달라질 뿐, css() 시맨틱 오용률 측정엔 무관.
const parkUiPreset = createPreset({ accentColor: sandColor, grayColor: sandColor, radius: 'md' });

// 셀 E (E−/E+ 공유) = intent-first arm. property-first(B) config와 동일 골격 — semanticTokens·outdir·importMap만 다름.
// E−와 E+는 같은 styled-system-intent-first를 쓰고, 차이는 프롬프트 설명 부록 유무뿐.
export default defineConfig({
  presets: ['@pandacss/preset-base', parkUiPreset],
  preflight: true,
  strictTokens: false,
  jsxFramework: 'react',
  importMap: '@ds-token-test/styled-system-intent-first',
  outdir: 'styled-system-intent-first',
  include: ['./src/app/intent-first/**/*.{js,jsx,ts,tsx}', './src/app/e-nodesc/**/*.{js,jsx,ts,tsx}', './src/app/e-canvas-hint/**/*.{js,jsx,ts,tsx}'],
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
