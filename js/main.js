<<<<<<< HEAD
(function () {
  document.addEventListener('DOMContentLoaded', function () {

    function splitToLetters(el) {
      const text = el.textContent.trim();
      el.innerHTML = '';
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = (ch === ' ') ? '\u00A0' : ch;
        const delay = 50 * i;
        span.style.animation = `letterIn 650ms cubic-bezier(.2,.9,.2,1) forwards`;
        span.style.animationDelay = (delay / 1000) + 's';
        span.setAttribute('aria-hidden', 'true');
        el.appendChild(span);
      }
    }

    const heading = document.getElementById('animated-heading');
    if (heading) {
      const lines = heading.querySelectorAll('.line');
      lines.forEach((ln) => splitToLetters(ln));

      if (lines[1]) {
        const secondLineLetters = lines[1].querySelectorAll('.letter');
        secondLineLetters.forEach((s) => {
          const curr = parseFloat(s.style.animationDelay || 0) || 0;
          s.style.animationDelay = (curr + 0.8) + 's';
        });
      }
    }

    const quotes = document.querySelectorAll('.quote');
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(ent => {
          if (ent.isIntersecting) ent.target.classList.add('visible');
        });
      }, { threshold: 0.18 });
      quotes.forEach(q => obs.observe(q));
    } else {
      quotes.forEach(q => q.classList.add('visible'));
    }

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      document.querySelectorAll('.letter').forEach((s) => {
        s.style.transition = 'none';
        s.style.opacity = 1;
        s.style.transform = 'translateY(0)';
        s.style.animation = 'none';
      });
      quotes.forEach(q => q.classList.add('visible'));
    }

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });
})();
=======
(function () {
  document.addEventListener('DOMContentLoaded', function () {

    function splitToLetters(el) {
      const text = el.textContent.trim();
      el.innerHTML = '';
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = (ch === ' ') ? '\u00A0' : ch;
        const delay = 50 * i;
        span.style.animation = `letterIn 650ms cubic-bezier(.2,.9,.2,1) forwards`;
        span.style.animationDelay = (delay / 1000) + 's';
        span.setAttribute('aria-hidden', 'true');
        el.appendChild(span);
      }
    }

    const heading = document.getElementById('animated-heading');
    if (heading) {
      const lines = heading.querySelectorAll('.line');
      lines.forEach((ln) => splitToLetters(ln));

      if (lines[1]) {
        const secondLineLetters = lines[1].querySelectorAll('.letter');
        secondLineLetters.forEach((s) => {
          const curr = parseFloat(s.style.animationDelay || 0) || 0;
          s.style.animationDelay = (curr + 0.8) + 's';
        });
      }
    }

    const quotes = document.querySelectorAll('.quote');
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(ent => {
          if (ent.isIntersecting) ent.target.classList.add('visible');
        });
      }, { threshold: 0.18 });
      quotes.forEach(q => obs.observe(q));
    } else {
      quotes.forEach(q => q.classList.add('visible'));
    }

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      document.querySelectorAll('.letter').forEach((s) => {
        s.style.transition = 'none';
        s.style.opacity = 1;
        s.style.transform = 'translateY(0)';
        s.style.animation = 'none';
      });
      quotes.forEach(q => q.classList.add('visible'));
    }

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });
})();
>>>>>>> d2b95820ecc3b93a47095929fa230a9922d5e399
