document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const themeToggle = document.querySelector('.theme-toggle');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    themeToggle.addEventListener('click', () => {
        document.documentElement.dataset.theme = 
            document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    });
});

console.log('JavaScript conectado correctamente');
