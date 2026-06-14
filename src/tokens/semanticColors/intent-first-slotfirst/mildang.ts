/**
 * 셀 E 토큰 — slot-first 네이밍 (inverse-desc arm 전용).
 * intent-first mildang을 {intent}.{slot}.{step} → {slot}.{intent}.{step} 자동 변환(값 동일). inverse/overlay/focus 그대로.
 */
export const mildang = {
  "canvas": {
    "neutral": {
      "01": {
        "value": {
          "base": "{colors.neutral.light.100}",
          "_dark": "{colors.neutral.dark.100}"
        }
      },
      "02": {
        "value": {
          "base": "{colors.neutral.light.300}",
          "_dark": "{colors.neutral.dark.300}"
        }
      },
      "03": {
        "value": {
          "base": "{colors.neutral.light.100}",
          "_dark": "{colors.neutral.dark.100}"
        }
      }
    }
  },
  "surface": {
    "neutral": {
      "transparent": {
        "value": {
          "base": "{colors.white.a000}",
          "_dark": "{colors.black.a000}"
        }
      },
      "base": {
        "value": {
          "base": "{colors.neutral.light.100}",
          "_dark": "{colors.neutral.dark.100}"
        }
      },
      "high": {
        "value": {
          "base": "{colors.neutral.light.300}",
          "_dark": "{colors.neutral.dark.300}"
        }
      }
    },
    "positive": {
      "base": {
        "value": {
          "base": "{colors.green.light.200}",
          "_dark": "{colors.green.dark.400}"
        }
      },
      "high": {
        "value": {
          "base": "{colors.green.light.300}",
          "_dark": "{colors.green.dark.300}"
        }
      }
    },
    "critical": {
      "base": {
        "value": {
          "base": "{colors.red.light.200}",
          "_dark": "{colors.red.dark.400}"
        }
      },
      "high": {
        "value": {
          "base": "{colors.red.light.300}",
          "_dark": "{colors.red.dark.300}"
        }
      }
    },
    "warning": {
      "base": {
        "value": {
          "base": "{colors.orange.light.200}",
          "_dark": "{colors.orange.dark.400}"
        }
      },
      "high": {
        "value": {
          "base": "{colors.orange.light.300}",
          "_dark": "{colors.orange.dark.300}"
        }
      }
    },
    "info": {
      "base": {
        "value": {
          "base": "{colors.blue.light.200}",
          "_dark": "{colors.blue.dark.400}"
        }
      },
      "high": {
        "value": {
          "base": "{colors.blue.light.300}",
          "_dark": "{colors.blue.dark.300}"
        }
      }
    },
    "primary": {
      "base": {
        "value": {
          "base": "{colors.neutral.light.200}",
          "_dark": "{colors.neutral.dark.200}"
        }
      },
      "high": {
        "value": {
          "base": "{colors.neutral.light.300}",
          "_dark": "{colors.neutral.dark.300}"
        }
      }
    }
  },
  "fill": {
    "neutral": {
      "base": {
        "value": {
          "base": "{colors.gray.light.600}",
          "_dark": "{colors.gray.dark.600}"
        }
      },
      "high": {
        "value": {
          "base": "{colors.gray.light.1200}",
          "_dark": "{colors.gray.dark.1200}"
        }
      }
    },
    "positive": {
      "base": {
        "value": {
          "base": "{colors.green.light.700}",
          "_dark": "{colors.green.dark.900}"
        }
      }
    },
    "critical": {
      "base": {
        "value": {
          "base": "{colors.red.light.700}",
          "_dark": "{colors.red.dark.900}"
        }
      }
    },
    "warning": {
      "base": {
        "value": {
          "base": "{colors.orange.light.700}",
          "_dark": "{colors.orange.dark.900}"
        }
      }
    },
    "info": {
      "base": {
        "value": {
          "base": "{colors.blue.light.700}",
          "_dark": "{colors.blue.dark.900}"
        }
      }
    },
    "primary": {
      "base": {
        "value": {
          "base": "{colors.neutral.light.1200}",
          "_dark": "{colors.neutral.dark.1200}"
        }
      }
    }
  },
  "border": {
    "neutral": {
      "transparent": {
        "value": {
          "base": "{colors.neutral.light.a300}",
          "_dark": "{colors.neutral.dark.a300}"
        }
      },
      "low": {
        "value": {
          "base": "{colors.neutral.light.400}",
          "_dark": "{colors.neutral.dark.400}"
        }
      },
      "base": {
        "value": {
          "base": "{colors.neutral.light.500}",
          "_dark": "{colors.neutral.dark.500}"
        }
      },
      "high": {
        "value": {
          "base": "{colors.neutral.light.600}",
          "_dark": "{colors.neutral.dark.600}"
        }
      }
    },
    "positive": {
      "base": {
        "value": {
          "base": "{colors.green.light.500}",
          "_dark": "{colors.green.dark.500}"
        }
      },
      "high": {
        "value": {
          "base": "{colors.green.light.600}",
          "_dark": "{colors.green.dark.600}"
        }
      },
      "highest": {
        "value": {
          "base": "{colors.green.light.700}",
          "_dark": "{colors.green.dark.900}"
        }
      }
    },
    "critical": {
      "base": {
        "value": {
          "base": "{colors.red.light.500}",
          "_dark": "{colors.red.dark.500}"
        }
      },
      "high": {
        "value": {
          "base": "{colors.red.light.600}",
          "_dark": "{colors.red.dark.600}"
        }
      },
      "highest": {
        "value": {
          "base": "{colors.red.light.700}",
          "_dark": "{colors.red.dark.900}"
        }
      }
    },
    "warning": {
      "base": {
        "value": {
          "base": "{colors.orange.light.500}",
          "_dark": "{colors.orange.dark.500}"
        }
      },
      "high": {
        "value": {
          "base": "{colors.orange.light.600}",
          "_dark": "{colors.orange.dark.600}"
        }
      },
      "highest": {
        "value": {
          "base": "{colors.orange.light.700}",
          "_dark": "{colors.orange.dark.900}"
        }
      }
    },
    "info": {
      "base": {
        "value": {
          "base": "{colors.blue.light.500}",
          "_dark": "{colors.blue.dark.500}"
        }
      },
      "high": {
        "value": {
          "base": "{colors.blue.light.600}",
          "_dark": "{colors.blue.dark.600}"
        }
      },
      "highest": {
        "value": {
          "base": "{colors.blue.light.700}",
          "_dark": "{colors.blue.dark.900}"
        }
      }
    },
    "primary": {
      "base": {
        "value": {
          "base": "{colors.neutral.light.500}",
          "_dark": "{colors.neutral.dark.500}"
        }
      },
      "high": {
        "value": {
          "base": "{colors.neutral.light.600}",
          "_dark": "{colors.neutral.dark.600}"
        }
      },
      "highest": {
        "value": {
          "base": "{colors.neutral.light.1200}",
          "_dark": "{colors.neutral.dark.1200}"
        }
      }
    }
  },
  "icon": {
    "neutral": {
      "base": {
        "value": {
          "base": "{colors.neutral.light.900}",
          "_dark": "{colors.neutral.dark.900}"
        }
      }
    },
    "positive": {
      "base": {
        "value": {
          "base": "{colors.green.light.700}",
          "_dark": "{colors.green.dark.900}"
        }
      }
    },
    "critical": {
      "base": {
        "value": {
          "base": "{colors.red.light.700}",
          "_dark": "{colors.red.dark.900}"
        }
      }
    },
    "warning": {
      "base": {
        "value": {
          "base": "{colors.orange.light.650}",
          "_dark": "{colors.orange.dark.1000}"
        }
      }
    },
    "info": {
      "base": {
        "value": {
          "base": "{colors.blue.light.700}",
          "_dark": "{colors.blue.dark.900}"
        }
      }
    },
    "primary": {
      "base": {
        "value": {
          "base": "{colors.neutral.light.1200}",
          "_dark": "{colors.neutral.dark.1200}"
        }
      }
    }
  },
  "text": {
    "neutral": {
      "lowest": {
        "value": {
          "base": "{colors.neutral.light.1000}",
          "_dark": "{colors.neutral.dark.1000}"
        }
      },
      "low": {
        "value": {
          "base": "{colors.neutral.light.1100}",
          "_dark": "{colors.neutral.dark.1100}"
        }
      },
      "base": {
        "value": {
          "base": "{colors.neutral.light.1200}",
          "_dark": "{colors.neutral.dark.1200}"
        }
      }
    },
    "positive": {
      "base": {
        "value": {
          "base": "{colors.green.light.1000}",
          "_dark": "{colors.green.dark.1000}"
        }
      }
    },
    "critical": {
      "base": {
        "value": {
          "base": "{colors.red.light.1000}",
          "_dark": "{colors.red.dark.1000}"
        }
      }
    },
    "warning": {
      "base": {
        "value": {
          "base": "{colors.orange.light.1000}",
          "_dark": "{colors.orange.dark.1000}"
        }
      }
    },
    "info": {
      "base": {
        "value": {
          "base": "{colors.blue.light.1000}",
          "_dark": "{colors.blue.dark.1000}"
        }
      }
    },
    "primary": {
      "base": {
        "value": {
          "base": "{colors.neutral.light.1200}",
          "_dark": "{colors.neutral.dark.1200}"
        }
      }
    }
  },
  "inverse": {
    "icon": {
      "base": {
        "value": {
          "base": "{colors.white.a1300}",
          "_dark": "{colors.black.a1300}"
        }
      }
    },
    "text": {
      "base": {
        "value": {
          "base": "{colors.white.a1300}",
          "_dark": "{colors.black.a1300}"
        }
      }
    }
  },
  "overlay": {
    "lighten": {
      "hover": {
        "value": {
          "base": "{colors.white.a400}",
          "_dark": "{colors.black.a100}"
        }
      },
      "pressed": {
        "value": {
          "base": "{colors.white.a600}",
          "_dark": "{colors.black.a200}"
        }
      }
    },
    "darken": {
      "hover": {
        "value": {
          "base": "{colors.neutral.light.a100}",
          "_dark": "{colors.neutral.dark.a100}"
        }
      },
      "pressed": {
        "value": {
          "base": "{colors.neutral.light.a200}",
          "_dark": "{colors.neutral.dark.a200}"
        }
      }
    },
    "scrim": {
      "value": {
        "base": "{colors.black.a900}",
        "_dark": "{colors.black.a900}"
      }
    }
  },
  "focus": {
    "border": {
      "value": {
        "base": "{colors.blue.light.700}",
        "_dark": "{colors.blue.dark.900}"
      }
    }
  }
} as const;
