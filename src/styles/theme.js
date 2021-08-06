// Reused constants.
const COLOR_HUE = "4";
const COLOR_PRIMARY = `hsl(${COLOR_HUE}, 69%, 61%)`;
const FONT_FAMILY_PRIMARY = '"Spartan", sans-serif';
const FONT_FAMILY_SECONDARY = '"Roboto Slab", serif';

// The bars that stretch the screen and animate with the mouse.
export const BARS = [
  { color: `hsl(${COLOR_HUE}, 54%, 93%)`, size: "18rem" },
  { color: `hsl(${COLOR_HUE}, 54%, 82%)`, size: "14rem" },
  { color: `hsl(${COLOR_HUE}, 54%, 71%)`, size: "8rem" },
];

// The theme to use with styled components.
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

  boxShadow: `0 1.3rem 5rem 0 rgba(0, 0, 0, .4)`,
  textShadow: `5px 5px 11px rgba(0, 0, 0, 0.7)`,
};
