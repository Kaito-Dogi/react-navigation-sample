type Color =
  | "primary"
  | "onPrimary"
  | "secondary"
  | "onSecondary"
  | "background"
  | "onBackground"
  | "surface"
  | "onSurface"
  | "error";

export const colors: {
  [key in Color]: `#${string}`;
} = {
  primary: "#fff",
  onPrimary: "#222",
  secondary: "#fff",
  onSecondary: "#222",
  background: "#fff",
  onBackground: "#222",
  surface: "#fff",
  onSurface: "#222",
  error: "#f00",
};
