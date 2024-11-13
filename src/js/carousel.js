class Carousel {
    constructor() {
        this.container = document.querySelector('.carousel-container');
        this.slides = [];
        this.currentSlide = 0;
        this.init();
    }

    init() {
        const images = [
            '/src/assets/img/sliders/slide1.png',
            '/src/assets/img/sliders/slide2.png',
            '/src/assets/img/sliders/slide3.png',
        ];

        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            if (index === 0) img.classList.add('active');
            img.onload = () => console.log(`Imagen cargada: ${src}`);
            img.onerror = () => console.log(`Error cargando: ${src}`);
            this.container.appendChild(img);
            this.slides.push(img);
        });

        this.startAutoPlay();
        this.addControls();
    }

    nextSlide() {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.slides[this.currentSlide].classList.add('active');
    }

    prevSlide() {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.slides[this.currentSlide].classList.add('active');
    }

    startAutoPlay() {
        setInterval(() => this.nextSlide(), 3000);
    }

    addControls() {
        const prevButton = document.createElement('button');
        const nextButton = document.createElement('button');
        
        prevButton.classList.add('carousel-button', 'prev');
        nextButton.classList.add('carousel-button', 'next');
        
        prevButton.innerHTML = '←';
        nextButton.innerHTML = '→';
        
        prevButton.addEventListener('click', () => this.prevSlide());
        nextButton.addEventListener('click', () => this.nextSlide());
        
        this.container.parentElement.appendChild(prevButton);
        this.container.parentElement.appendChild(nextButton);
    }
}
  document.addEventListener('DOMContentLoaded', () => {
      const slides = document.querySelectorAll('.carousel-slide');
      const prevButton = document.querySelector('.carousel-button.prev');
      const nextButton = document.querySelector('.carousel-button.next');
      let currentSlide = 0;

      function showSlide() {
          slides.forEach(slide => slide.classList.remove('active'));
          slides[currentSlide].classList.add('active');
          console.log('Slide actual:', currentSlide); // Para verificar
      }

      function nextSlide() {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide();
      }

      function prevSlide() {
          currentSlide = (currentSlide - 1 + slides.length) % slides.length;
          showSlide();
      }

      // Eventos
      nextButton.addEventListener('click', nextSlide);
      prevButton.addEventListener('click', prevSlide);

      // Autoplay
      const autoplay = setInterval(nextSlide, 3000);

      // Iniciar
      showSlide();
  });});const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');    const themeToggle = document.querySelector('.theme-toggle');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    themeToggle.addEventListener('click', () => {
        document.documentElement.dataset.theme = 
            document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    });

});
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    const modal = document.querySelector('.contact-form-modal');
    const form = document.getElementById('contactForm');

    ctaButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí iría la lógica de envío del formulario
        modal.style.display = 'none';
    });
});
