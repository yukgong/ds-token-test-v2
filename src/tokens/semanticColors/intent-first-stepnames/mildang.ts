/**
 * 셀 ES — 시맨틱 컬러 토큰 (intent-first / step 명칭 변경본)
 * 셀 E(intent-first)와 토큰 구조·색상값·순서 100% 동일. step(단계) 어휘만 교체:
 *   lowest→muted · low→subtle · base→default · high→strongest · highest→emphasis
 *   (canvas 01/02/03 · transparent · overlay · focus 는 step이 아니므로 그대로 유지)
 * E+와 비교하면 'step 어휘'만 다름 → step 명칭이 오용률에 영향 주는지 격리 측정용.
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
      default: { value: { base: '{colors.neutral.light.100}', _dark: '{colors.neutral.dark.100}' } },
      strongest: { value: { base: '{colors.neutral.light.300}', _dark: '{colors.neutral.dark.300}' } },
    },
    fill: {
      default: { value: { base: '{colors.gray.light.600}', _dark: '{colors.gray.dark.600}' } },
      strongest: { value: { base: '{colors.gray.light.1200}', _dark: '{colors.gray.dark.1200}' } },
    },
    border: {
      transparent: { value: { base: '{colors.neutral.light.a300}', _dark: '{colors.neutral.dark.a300}' } },
      subtle: { value: { base: '{colors.neutral.light.400}', _dark: '{colors.neutral.dark.400}' } },
      default: { value: { base: '{colors.neutral.light.500}', _dark: '{colors.neutral.dark.500}' } },
      strongest: { value: { base: '{colors.neutral.light.600}', _dark: '{colors.neutral.dark.600}' } },
    },
    icon: {
      default: { value: { base: '{colors.neutral.light.900}', _dark: '{colors.neutral.dark.900}' } },
    },
    text: {
      muted: { value: { base: '{colors.neutral.light.1000}', _dark: '{colors.neutral.dark.1000}' } },
      subtle: { value: { base: '{colors.neutral.light.1100}', _dark: '{colors.neutral.dark.1100}' } },
      default: { value: { base: '{colors.neutral.light.1200}', _dark: '{colors.neutral.dark.1200}' } },
    },
  },

  positive: {
    surface: {
      default: { value: { base: '{colors.green.light.200}', _dark: '{colors.green.dark.400}' } },
      strongest: { value: { base: '{colors.green.light.300}', _dark: '{colors.green.dark.300}' } },
    },
    fill: {
      default: { value: { base: '{colors.green.light.700}', _dark: '{colors.green.dark.900}' } },
    },
    border: {
      default: { value: { base: '{colors.green.light.500}', _dark: '{colors.green.dark.500}' } },
      strongest: { value: { base: '{colors.green.light.600}', _dark: '{colors.green.dark.600}' } },
      emphasis: { value: { base: '{colors.green.light.700}', _dark: '{colors.green.dark.900}' } },
    },
    icon: {
      default: { value: { base: '{colors.green.light.700}', _dark: '{colors.green.dark.900}' } },
    },
    text: {
      default: { value: { base: '{colors.green.light.1000}', _dark: '{colors.green.dark.1000}' } },
    },
  },

  critical: {
    surface: {
      default: { value: { base: '{colors.red.light.200}', _dark: '{colors.red.dark.400}' } },
      strongest: { value: { base: '{colors.red.light.300}', _dark: '{colors.red.dark.300}' } },
    },
    fill: {
      default: { value: { base: '{colors.red.light.700}', _dark: '{colors.red.dark.900}' } },
    },
    border: {
      default: { value: { base: '{colors.red.light.500}', _dark: '{colors.red.dark.500}' } },
      strongest: { value: { base: '{colors.red.light.600}', _dark: '{colors.red.dark.600}' } },
      emphasis: { value: { base: '{colors.red.light.700}', _dark: '{colors.red.dark.900}' } },
    },
    icon: {
      default: { value: { base: '{colors.red.light.700}', _dark: '{colors.red.dark.900}' } },
    },
    text: {
      default: { value: { base: '{colors.red.light.1000}', _dark: '{colors.red.dark.1000}' } },
    },
  },

  warning: {
    surface: {
      default: { value: { base: '{colors.orange.light.200}', _dark: '{colors.orange.dark.400}' } },
      strongest: { value: { base: '{colors.orange.light.300}', _dark: '{colors.orange.dark.300}' } },
    },
    fill: {
      default: { value: { base: '{colors.orange.light.700}', _dark: '{colors.orange.dark.900}' } },
    },
    border: {
      default: { value: { base: '{colors.orange.light.500}', _dark: '{colors.orange.dark.500}' } },
      strongest: { value: { base: '{colors.orange.light.600}', _dark: '{colors.orange.dark.600}' } },
      emphasis: { value: { base: '{colors.orange.light.700}', _dark: '{colors.orange.dark.900}' } },
    },
    icon: {
      default: { value: { base: '{colors.orange.light.650}', _dark: '{colors.orange.dark.1000}' } },
    },
    text: {
      default: { value: { base: '{colors.orange.light.1000}', _dark: '{colors.orange.dark.1000}' } },
    },
  },

  info: {
    surface: {
      default: { value: { base: '{colors.blue.light.200}', _dark: '{colors.blue.dark.400}' } },
      strongest: { value: { base: '{colors.blue.light.300}', _dark: '{colors.blue.dark.300}' } },
    },
    fill: {
      default: { value: { base: '{colors.blue.light.700}', _dark: '{colors.blue.dark.900}' } },
    },
    border: {
      default: { value: { base: '{colors.blue.light.500}', _dark: '{colors.blue.dark.500}' } },
      strongest: { value: { base: '{colors.blue.light.600}', _dark: '{colors.blue.dark.600}' } },
      emphasis: { value: { base: '{colors.blue.light.700}', _dark: '{colors.blue.dark.900}' } },
    },
    icon: {
      default: { value: { base: '{colors.blue.light.700}', _dark: '{colors.blue.dark.900}' } },
    },
    text: {
      default: { value: { base: '{colors.blue.light.1000}', _dark: '{colors.blue.dark.1000}' } },
    },
  },

  primary: {
    surface: {
      default: { value: { base: '{colors.neutral.light.200}', _dark: '{colors.neutral.dark.200}' } },
      strongest: { value: { base: '{colors.neutral.light.300}', _dark: '{colors.neutral.dark.300}' } },
    },
    fill: {
      default: { value: { base: '{colors.neutral.light.1200}', _dark: '{colors.neutral.dark.1200}' } },
    },
    border: {
      default: { value: { base: '{colors.neutral.light.500}', _dark: '{colors.neutral.dark.500}' } },
      strongest: { value: { base: '{colors.neutral.light.600}', _dark: '{colors.neutral.dark.600}' } },
      emphasis: { value: { base: '{colors.neutral.light.1200}', _dark: '{colors.neutral.dark.1200}' } },
    },
    icon: {
      default: { value: { base: '{colors.neutral.light.1200}', _dark: '{colors.neutral.dark.1200}' } },
    },
    text: {
      default: { value: { base: '{colors.neutral.light.1200}', _dark: '{colors.neutral.dark.1200}' } },
    },
  },

  inverse: {
    icon: {
      default: { value: { base: '{colors.white.a1300}', _dark: '{colors.black.a1300}' } },
    },
    text: {
      default: { value: { base: '{colors.white.a1300}', _dark: '{colors.black.a1300}' } },
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
