export const COLOR_HUE = "250";
export const COLOR_PRIMARY = `hsl(${COLOR_HUE}, 69%, 61%)`;
export const FONT_FAMILY_PRIMARY = '"Spartan", sans-serif';
export const FONT_FAMILY_SECONDARY = '"Roboto Slab", serif';

// The bars that stretch the screen and animate with the mouse.
export const BARS = [
  { color: "GoldenRod", size: "18rem" },
  { color: "DodgerBlue", size: "14rem" },
  { color: "Maroon", size: "8rem" },
];

export const theme = {
  // ========== Colors ==========

  colorPrimary: COLOR_PRIMARY,
  colorPrimaryLight: `hsl(${COLOR_HUE}, 70%, 70%)`,
  colorPrimaryDark: `hsl(${COLOR_HUE}, 92%, 8%)`,

  colorTitle: "hsl(0, 0%, 0%)",
  colorSubtitle: "hsl(0, 0%, 50%)",
  colorText: "hsl(0, 0%, 0%)",
  colorEmphasis: COLOR_PRIMARY,
  colorMuted: "hsl(0, 0%, 83%)",

  colorBackgroundDark: "hsl(0, 0%, 17%)",
  colorBackgroundLight: "hsl(0, 0%, 87%)",

  // ========= Fonts =========

  fontTitle: `400 1em ${FONT_FAMILY_SECONDARY}`,
  fontSubtitle: `400 1em ${FONT_FAMILY_PRIMARY}`,
  fontText: `400 1em ${FONT_FAMILY_PRIMARY}`,
  fontMuted: `400 1em ${FONT_FAMILY_PRIMARY}`,
  fontAside: `400 1em ${FONT_FAMILY_SECONDARY}`,
  fontButton: `600 1em ${FONT_FAMILY_PRIMARY}`,
  fontDecor: `800 1em ${FONT_FAMILY_PRIMARY}`,

  // ========== Sizing ==========

  headerHeight: `3rem`,

  // ========== Effects ==========

  boxShadow: `0 1.3rem 5rem 0 rgb(0 0 0 / 35%)`,
  textShadow: `5px 5px 11px rgb(74 74 74 / 70%)`,
};
