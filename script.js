// Theme toggle (persisted)
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const STORAGE_KEY = 'site-theme';

function applyTheme(theme) {
  if (theme === 'dark') root.classList.add('dark');
  else root.classList.remove('dark');
}

function getPreferredTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return stored;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

applyTheme(getPreferredTheme());

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = root.classList.contains('dark') ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
    themeToggle.textContent = next === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
  });
}
