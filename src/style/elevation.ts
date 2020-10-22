import { ViewStyle } from "react-native";

const ELEVATION_STYLES: Record<
  number,
  Pick<
    ViewStyle,
    | "elevation"
    | "shadowColor"
    | "shadowOffset"
    | "shadowRadius"
    | "shadowOpacity"
  >
> = {
  1: {
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1.0,
    shadowOpacity: 0.18,
  },
  2: {
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1.41,
    shadowOpacity: 0.2,
  },
  3: {
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2.22,
    shadowOpacity: 0.22,
  },
  4: {
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2.62,
    shadowOpacity: 0.23,
  },
  5: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
  },
  6: {
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 4.65,
    shadowOpacity: 0.27,
  },
  7: {
    elevation: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 4.65,
    shadowOpacity: 0.29,
  },
  8: {
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4.65,
    shadowOpacity: 0.3,
  },
  9: {
    elevation: 9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
  },
  10: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 6.27,
    shadowOpacity: 0.34,
  },
  11: {
    elevation: 11,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 6.68,
    shadowOpacity: 0.36,
  },
  12: {
    elevation: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 7.49,
    shadowOpacity: 0.37,
  },
  13: {
    elevation: 13,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 8.3,
    shadowOpacity: 0.39,
  },
  14: {
    elevation: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowRadius: 9.11,
    shadowOpacity: 0.41,
  },
  15: {
    elevation: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowRadius: 9.51,
    shadowOpacity: 0.43,
  },
  16: {
    elevation: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 10.32,
    shadowOpacity: 0.44,
  },
  17: {
    elevation: 17,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 11.14,
    shadowOpacity: 0.46,
  },
  18: {
    elevation: 19,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowRadius: 11.95,
    shadowOpacity: 0.48,
  },
  19: {
    elevation: 19,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowRadius: 12.35,
    shadowOpacity: 0.5,
  },
  20: {
    elevation: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 13.16,
    shadowOpacity: 0.51,
  },
  21: {
    elevation: 21,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 13.97,
    shadowOpacity: 0.53,
  },
  22: {
    elevation: 22,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowRadius: 14.78,
    shadowOpacity: 0.55,
  },
  23: {
    elevation: 23,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowRadius: 15.19,
    shadowOpacity: 0.57,
  },
  24: {
    elevation: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 16.0,
    shadowOpacity: 0.58,
  },
};

const elevation = (n: number) => ELEVATION_STYLES[n];
export default elevation;
