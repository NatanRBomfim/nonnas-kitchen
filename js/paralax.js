function setupHeroParalax(selector) {
  const hero = document.querySelector(selector);

  if (!hero) return;

  const paralaxSpeed1 = 0.3;
  const paralaxSpeed2 = 0.6;

  function updateParalax() {
    const scrollY = window.scrollY;
    const heroHeigh = parseInt(getComputedStyle(hero).height);

    if (scrollY < heroHeigh) {
      hero.style.backgroundPosition = `
      left 5% top calc(${scrollY * paralaxSpeed1}px), 
      right 5% top calc(${scrollY * paralaxSpeed1}px), 
      left -1% bottom calc(5% + ${scrollY * paralaxSpeed2}px), 
      right -1% bottom calc(5% + ${scrollY * paralaxSpeed2}px)`;
    }
  }
  window.addEventListener("scroll", updateParalax);
}
setupHeroParalax(".hero");
