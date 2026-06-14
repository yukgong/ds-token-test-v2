/**
 * 셀 E — 시맨틱 컬러 토큰 (intent-first / category-first)
 * 구조: {intent}.{slot}.{step}. 값 { value: { base, _dark } } — base=mildangPT-light, _dark=mildangPT-dark (시트 정본).
 * 2026-06-12: 시트(token-descriptions) 동기화 — 63토큰. inverse 별도 intent, overlay 최상위(lighten/darken.hover/pressed + scrim), focus.border. 다크=시트 col E.
 * ※ E−/E+ 공유.
 */
export const mildang = {
  neutral: {
    canvas: {
      '01': { value: { base: '{colors.neutral.light.100}', _dark: '{colors.neutral.dark.100}' } },
      '02': { value: { base: '{colors.neutral.light.300}', _dark: '{colors.neutral.dark.300}' } },
      '03': { value: { base: '{colors.neutral.light.100}', _dark: '{colors.neutral.dark.100}' } },
    },
    surface: {
      transparent: { value: { base: '{colors.white.a000}', _dark: '{colors.black.a000}' } },
      base: { value: { base: '{colors.neutral.light.100}', _dark: '{colors.neutral.dark.100}' } },
      high: { value: { base: '{colors.neutral.light.300}', _dark: '{colors.neutral.dark.300}' } },
    },
    fill: {
      base: { value: { base: '{colors.gray.light.600}', _dark: '{colors.gray.dark.600}' } },
      high: { value: { base: '{colors.gray.light.1200}', _dark: '{colors.gray.dark.1200}' } },
    },
    border: {
      transparent: { value: { base: '{colors.neutral.light.a300}', _dark: '{colors.neutral.dark.a300}' } },
      low: { value: { base: '{colors.neutral.light.400}', _dark: '{colors.neutral.dark.400}' } },
      base: { value: { base: '{colors.neutral.light.500}', _dark: '{colors.neutral.dark.500}' } },
      high: { value: { base: '{colors.neutral.light.600}', _dark: '{colors.neutral.dark.600}' } },
    },
    icon: {
      base: { value: { base: '{colors.neutral.light.900}', _dark: '{colors.neutral.dark.900}' } },
    },
    text: {
      lowest: { value: { base: '{colors.neutral.light.1000}', _dark: '{colors.neutral.dark.1000}' } },
      low: { value: { base: '{colors.neutral.light.1100}', _dark: '{colors.neutral.dark.1100}' } },
      base: { value: { base: '{colors.neutral.light.1200}', _dark: '{colors.neutral.dark.1200}' } },
    },
  },

  positive: {
    surface: {
      base: { value: { base: '{colors.green.light.200}', _dark: '{colors.green.dark.400}' } },
      high: { value: { base: '{colors.green.light.300}', _dark: '{colors.green.dark.300}' } },
    },
    fill: {
      base: { value: { base: '{colors.green.light.700}', _dark: '{colors.green.dark.900}' } },
    },
    border: {
      base: { value: { base: '{colors.green.light.500}', _dark: '{colors.green.dark.500}' } },
      high: { value: { base: '{colors.green.light.600}', _dark: '{colors.green.dark.600}' } },
      highest: { value: { base: '{colors.green.light.700}', _dark: '{colors.green.dark.900}' } },
    },
    icon: {
      base: { value: { base: '{colors.green.light.700}', _dark: '{colors.green.dark.900}' } },
    },
    text: {
      base: { value: { base: '{colors.green.light.1000}', _dark: '{colors.green.dark.1000}' } },
    },
  },

  critical: {
    surface: {
      base: { value: { base: '{colors.red.light.200}', _dark: '{colors.red.dark.400}' } },
      high: { value: { base: '{colors.red.light.300}', _dark: '{colors.red.dark.300}' } },
    },
    fill: {
      base: { value: { base: '{colors.red.light.700}', _dark: '{colors.red.dark.900}' } },
    },
    border: {
      base: { value: { base: '{colors.red.light.500}', _dark: '{colors.red.dark.500}' } },
      high: { value: { base: '{colors.red.light.600}', _dark: '{colors.red.dark.600}' } },
      highest: { value: { base: '{colors.red.light.700}', _dark: '{colors.red.dark.900}' } },
    },
    icon: {
      base: { value: { base: '{colors.red.light.700}', _dark: '{colors.red.dark.900}' } },
    },
    text: {
      base: { value: { base: '{colors.red.light.1000}', _dark: '{colors.red.dark.1000}' } },
    },
  },

  warning: {
    surface: {
      base: { value: { base: '{colors.orange.light.200}', _dark: '{colors.orange.dark.400}' } },
      high: { value: { base: '{colors.orange.light.300}', _dark: '{colors.orange.dark.300}' } },
    },
    fill: {
      base: { value: { base: '{colors.orange.light.700}', _dark: '{colors.orange.dark.900}' } },
    },
    border: {
      base: { value: { base: '{colors.orange.light.500}', _dark: '{colors.orange.dark.500}' } },
      high: { value: { base: '{colors.orange.light.600}', _dark: '{colors.orange.dark.600}' } },
      highest: { value: { base: '{colors.orange.light.700}', _dark: '{colors.orange.dark.900}' } },
    },
    icon: {
      base: { value: { base: '{colors.orange.light.650}', _dark: '{colors.orange.dark.1000}' } },
    },
    text: {
      base: { value: { base: '{colors.orange.light.1000}', _dark: '{colors.orange.dark.1000}' } },
    },
  },

  info: {
    surface: {
      base: { value: { base: '{colors.blue.light.200}', _dark: '{colors.blue.dark.400}' } },
      high: { value: { base: '{colors.blue.light.300}', _dark: '{colors.blue.dark.300}' } },
    },
    fill: {
      base: { value: { base: '{colors.blue.light.700}', _dark: '{colors.blue.dark.900}' } },
    },
    border: {
      base: { value: { base: '{colors.blue.light.500}', _dark: '{colors.blue.dark.500}' } },
      high: { value: { base: '{colors.blue.light.600}', _dark: '{colors.blue.dark.600}' } },
      highest: { value: { base: '{colors.blue.light.700}', _dark: '{colors.blue.dark.900}' } },
    },
    icon: {
      base: { value: { base: '{colors.blue.light.700}', _dark: '{colors.blue.dark.900}' } },
    },
    text: {
      base: { value: { base: '{colors.blue.light.1000}', _dark: '{colors.blue.dark.1000}' } },
    },
  },

  primary: {
    surface: {
      base: { value: { base: '{colors.neutral.light.200}', _dark: '{colors.neutral.dark.200}' } },
      high: { value: { base: '{colors.neutral.light.300}', _dark: '{colors.neutral.dark.300}' } },
    },
    fill: {
      base: { value: { base: '{colors.neutral.light.1200}', _dark: '{colors.neutral.dark.1200}' } },
    },
    border: {
      base: { value: { base: '{colors.neutral.light.500}', _dark: '{colors.neutral.dark.500}' } },
      high: { value: { base: '{colors.neutral.light.600}', _dark: '{colors.neutral.dark.600}' } },
      highest: { value: { base: '{colors.neutral.light.1200}', _dark: '{colors.neutral.dark.1200}' } },
    },
    icon: {
      base: { value: { base: '{colors.neutral.light.1200}', _dark: '{colors.neutral.dark.1200}' } },
    },
    text: {
      base: { value: { base: '{colors.neutral.light.1200}', _dark: '{colors.neutral.dark.1200}' } },
    },
  },

  inverse: {
    icon: {
      base: { value: { base: '{colors.white.a1300}', _dark: '{colors.black.a1300}' } },
    },
    text: {
      base: { value: { base: '{colors.white.a1300}', _dark: '{colors.black.a1300}' } },
    },
  },

  overlay: {
    lighten: {
      hover: { value: { base: '{colors.white.a400}', _dark: '{colors.black.a100}' } },
      pressed: { value: { base: '{colors.white.a600}', _dark: '{colors.black.a200}' } },
    },
    darken: {
      hover: { value: { base: '{colors.neutral.light.a100}', _dark: '{colors.neutral.dark.a100}' } },
      pressed: { value: { base: '{colors.neutral.light.a200}', _dark: '{colors.neutral.dark.a200}' } },
    },
    scrim: { value: { base: '{colors.black.a900}', _dark: '{colors.black.a900}' } },
  },

  focus: {
    border: { value: { base: '{colors.blue.light.700}', _dark: '{colors.blue.dark.900}' } },
  },
} as const;
