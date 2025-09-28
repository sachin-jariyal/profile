// ---- year
    document.getElementById('year').textContent = new Date().getFullYear();

    // ---- theme toggle (light/dark)
    const root = document.documentElement;
    const btn = document.getElementById('themeBtn');
    const THEME_KEY = "pref-theme";

    function setTheme(mode) {
      if (mode === "dark") {
        root.setAttribute("data-theme", "dark");
        btn.textContent = "🌙";
      } else {
        root.setAttribute("data-theme", "light");
        btn.textContent = "☀️";
      }
      localStorage.setItem(THEME_KEY, mode);
    }

    // init theme (localStorage > system)
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) {
      setTheme(stored);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? "dark" : "light");
    }

    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });

    // ---- reveal on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));