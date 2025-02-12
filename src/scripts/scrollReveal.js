import ScrollReveal from "scrollreveal";

export default function initScrollReveal(targetElements, defaultProps) {
  if (!targetElements || targetElements.length === 0) return;

  const sr = ScrollReveal({ reset: false });

  targetElements.forEach(({ element, animation }) => {
    sr.reveal(element, { ...defaultProps, ...animation });
  });
}
