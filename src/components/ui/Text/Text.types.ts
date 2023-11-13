import { Color } from "@/src/styles/colors";

/** @package */
export type TextColor = Extract<
  Color,
  "primary" | "onPrimary" | "onSurface" | "disabled"
>;

/** @package */
export type TextAlign = "left" | "center";

/** @package */
export type FontWeight = "normal" | "bold";
