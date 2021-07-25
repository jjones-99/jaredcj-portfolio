export const setOverlayOpacity = (opacity: string) => {
  const overlayElement = document.getElementById("mainOverlay");
  if (!overlayElement) return;
  overlayElement.style.opacity = opacity;
};

export const toggleBodyScrolling = (enable: boolean) => {
  const bodyElement = document.querySelector("body");
  if (!bodyElement) return;
  if (enable) {
    bodyElement.classList.remove("disabled-scrolling");
  } else {
    bodyElement.classList.add("disabled-scrolling");
  }
};
