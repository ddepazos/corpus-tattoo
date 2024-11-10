// Agregar al inicio del archivo
document.addEventListener('DOMContentLoaded', () => {
    // Menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Tema oscuro/claro (mantener el código existente)
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.toggle('light-theme', savedTheme === 'light');
    }
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light' : 'dark');
    });

    // Modal de contacto
    const ctaButton = document.querySelector('.cta-button');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.querySelector('.close-modal');
    const contactForm = document.getElementById('contactForm');

    ctaButton.addEventListener('click', () => {
        contactModal.showModal();
    });

    closeModal.addEventListener('click', () => {
        contactModal.close();
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        alert('Formulario enviado correctamente');
        contactModal.close();
    });

    // Cerrar modal al hacer clic fuera
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            contactModal.close();
        }
    });

    // Promoción flotante
    const promoFloat = document.querySelector('.promo-float');
    const closePromo = document.querySelector('.close-promo');
    const copyButton = document.querySelector('.copy-code');
    const promoCode = document.querySelector('.promo-code');

    // Generar código aleatorio
    function generatePromoCode() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';
        for (let i = 0; i < 6; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
    }

    // Establecer código inicial
    promoCode.textContent = generatePromoCode();

    // Copiar código
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(promoCode.textContent)
            .then(() => {
                copyButton.textContent = '¡Copiado!';
                setTimeout(() => {
                    copyButton.textContent = 'Copiar';
                }, 2000);
            })
            .catch(err => {
                console.error('Error al copiar:', err);
            });
    });

    // Cerrar promoción
    closePromo.addEventListener('click', () => {
        promoFloat.style.display = 'none';
    });

    // Mostrar promoción después de 3 segundos
    setTimeout(() => {
        promoFloat.style.display = 'block';
    }, 3000);
});

// Clase del carrusel
class Carousel {
    constructor(element) {
        this.carousel = element;
        this.track = element.querySelector('.carousel-track');
        this.slides = Array.from(this.track.children);
        this.nextButton = element.querySelector('.carousel-button.next');
        this.prevButton = element.querySelector('.carousel-button.prev');
        this.dotsContainer = element.querySelector('.carousel-dots');
        
        this.currentSlide = 0;
        this.slideWidth = this.slides[0].getBoundingClientRect().width;
        
        this.createDots();
        this.updateDots();
        this.addEventListeners();
        this.setSlidePosition();

        // Auto play
        this.autoPlay();
    }
    
    createDots() {
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            dot.addEventListener('click', () => this.moveToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
    }
    
    updateDots() {
        const dots = this.dotsContainer.children;
        Array.from(dots).forEach((dot, index) => {
            if (index === this.currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    setSlidePosition() {
        this.track.style.transform = `translateX(-${this.currentSlide * this.slideWidth}px)`;
    }
    
    moveToSlide(index) {
        this.currentSlide = index;
        this.setSlidePosition();
        this.updateDots();
    }
    
    addEventListeners() {
        this.nextButton.addEventListener('click', () => {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            this.setSlidePosition();
            this.updateDots();
        });
        
        this.prevButton.addEventListener('click', () => {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            this.setSlidePosition();
            this.updateDots();
        });
    }

    autoPlay() {
        setInterval(() => {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            this.setSlidePosition();
            this.updateDots();
        }, 5000); // Cambia de slide cada 5 segundos
    }
}

// Inicializar el carrusel
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        new Carousel(carousel);
    }
});

// Resto del código JavaScript existente...