import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

document.addEventListener("DOMContentLoaded", () => {
    initScrollReveal(targetElements, defaultProps);
    initTiltEffect();
});
