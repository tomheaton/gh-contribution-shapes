export const themes = {
  official: {
    // 0: '#0d1117',
    0: "#ebedf0",
    1: "#9be9a8",
    2: "#40c463",
    3: "#30a14e",
    4: "#216e39",
    // default: '#0d1117',
    default: "#ebedf0",
  },
  normal: {
    0: "#ebedf0",
    1: "#c6e48b",
    2: "#7bc96f",
    3: "#239a3b",
    4: "#196127",
    default: "#ebedf0",
  },
  halloween: {
    0: "#ebedf0",
    1: "#fde3cf",
    2: "#fcb07e",
    3: "#f7803a",
    4: "#d15600",
    default: "#ebedf0",
  },
  winter: {
    0: "#ebedf0",
    1: "#c7e9ff",
    2: "#64c4ed",
    3: "#3490dc",
    4: "#2779bd",
    default: "#ebedf0",
  },
} as const;

export type Theme = keyof typeof themes;

export const borderRadii = {
  "rounded-none": "Square",
  "rounded-sm": "Rounded",
  "rounded-full": "Circle",
} as const;

export type BorderRadius = keyof typeof borderRadii;

export const modes = ["Standard", "Editable", "Game Of Life"] as const;

export type Mode = (typeof modes)[number];
