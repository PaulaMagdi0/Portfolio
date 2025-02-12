import VanillaTilt from "vanilla-tilt";

export default function initTiltEffect() {
  const elements = document.querySelectorAll(".js-tilt");
  if (elements.length) {
    VanillaTilt.init(elements);
  }
}
