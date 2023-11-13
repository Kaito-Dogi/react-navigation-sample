export type Dimen = "xs" | "s" | "m" | "l" | "xl";

export const dimens: {
  [key in Dimen]: number;
} = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
};
