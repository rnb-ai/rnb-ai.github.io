(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

  const targets = [
    'main > section:not(.hero):not(.page-hero) > .kicker', '.intro-grid > *', '.section-heading', '.card', '.section-more',
    '.signal > p', '.signal-footer', '.community-layout > *', '.metrics > div',
    '.join h2', '.join > p:not(.kicker)', '.join .button',
    '.mission-statement', '.split > *', '.value', '.program', '.contact-card', '.steps li', '.legal > section',
    '.footer-grid > div'
  ].join(',');

  const countUp = (el) => {
    const end = parseInt(el.textContent, 10);
    if (Number.isNaN(end)) return;
    const width = el.textContent.trim().length;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / 1200, 1);
      const value = Math.round(end * (1 - Math.pow(1 - t, 3)));
      el.textContent = String(value).padStart(width, '0');
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('is-visible');
      if (el.parentElement.classList.contains('metrics')) el.querySelectorAll('strong').forEach(countUp);
      observer.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll(targets).forEach((el) => {
    const siblings = [...el.parentElement.children].filter((child) => child.matches(targets));
    const index = siblings.indexOf(el);
    el.classList.add('reveal');
    if (index > 0) {
      el.style.transitionDelay = `${Math.min(index * 90, 450)}ms`;
      el.addEventListener('transitionend', () => { el.style.transitionDelay = ''; }, { once: true });
    }
    observer.observe(el);
  });
})();
