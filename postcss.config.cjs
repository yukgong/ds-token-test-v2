// PandaCSS postcss 플러그인 제거: 메인 panda.config.ts 기준으로 globals.css를
// 재생성하면 arm별 격리 styled-system(특히 styled-system-intent-first)의 유틸리티가 누락된다.
// 대신 각 arm 레이아웃이 자기 사전생성 styles.css(panda cssgen)를 import한다.
module.exports = {
  plugins: {},
};
