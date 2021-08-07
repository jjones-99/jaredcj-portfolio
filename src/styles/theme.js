// Reused constants.
const FONT_FAMILY_PRIMARY = '"Spartan", sans-serif';
const FONT_FAMILY_SECONDARY = '"Roboto Slab", serif';
const COLOR_PRIMARY_LIGHT = `hsl(261, 92%, 70%)`;
const COLOR_PRIMARY = "hsl(261, 49%, 55%)";
const COLOR_PRIMARY_DARK = "hsl(261, 40%, 41%)";

// The bars that stretch the screen and animate with the mouse.
export const BARS = [
  { color: COLOR_PRIMARY_LIGHT, size: "18rem" },
  { color: COLOR_PRIMARY, size: "14rem" },
  { color: COLOR_PRIMARY_DARK, size: "8rem" },
];

// The theme to use with styled components.
export const theme = {
  // ========== Colors ==========

  colorPrimary: COLOR_PRIMARY,
  colorPrimaryLight: COLOR_PRIMARY_LIGHT,
  colorPrimaryDark: COLOR_PRIMARY_DARK,

  colorTitle: "hsl(0, 0%, 0%)",
  colorSubtitle: "hsl(0, 0%, 50%)",
  colorText: "hsl(0, 0%, 0%)",
  colorEmphasis: COLOR_PRIMARY,
  colorMuted: "hsl(0, 0%, 83%)",

  colorBackgroundDark: "hsl(0, 0%, 17%)",
  colorBackgroundLight: "hsl(0, 0%, 87%)",

  colorMenuBackground: `hsl(${COLOR_HUE}, 54%, 71%)`,
  colorCardBackground: `hsl(${COLOR_HUE}, 34%, 50%)`,

  // ========= Fonts =========

  fontTitle: `400 1em ${FONT_FAMILY_SECONDARY}`,
  fontSubtitle: `400 1em ${FONT_FAMILY_PRIMARY}`,
  fontText: `400 1em ${FONT_FAMILY_PRIMARY}`,
  fontMuted: `400 1em ${FONT_FAMILY_PRIMARY}`,
  fontAside: `400 1em ${FONT_FAMILY_SECONDARY}`,
  fontButton: `600 1em ${FONT_FAMILY_PRIMARY}`,
  fontDecor: `400 1em ${FONT_FAMILY_PRIMARY}`,

  // ========== Sizing ==========

  sectionSpacerHeight: "8rem",

  // ========== Effects ==========

  boxShadow: `1rem 1rem 2rem rgba(0, 0, 0, 0.5)`,
  textShadow: `5px 5px 11px rgba(0, 0, 0, 0.7)`,
};
