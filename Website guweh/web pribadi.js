// Toggle Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
const themeIcon = document.getElementById('theme-icon');
const themeIconMobile = document.getElementById('theme-icon-mobile');
const htmlElement = document.documentElement;

function toggleTheme() {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
        themeIcon.className = 'fa-solid fa-sun text-lg text-amber-500';
        themeIconMobile.className = 'fa-solid fa-sun text-lg text-amber-500';
        document.body.classList.remove('bg-slate-900', 'text-slate-100');
        document.body.classList.add('bg-slate-50', 'text-slate-800');
    } else {
        htmlElement.classList.remove('light');
        htmlElement.classList.add('dark');
        themeIcon.className = 'fa-solid fa-moon text-lg';
        themeIconMobile.className = 'fa-solid fa-moon text-lg';
        document.body.classList.remove('bg-slate-50', 'text-slate-800');
        document.body.classList.add('bg-slate-900', 'text-slate-100');
    }
}

themeToggleBtn.addEventListener('click', toggleTheme);
themeToggleMobileBtn.addEventListener('click', toggleTheme);