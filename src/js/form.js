document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    const modal = document.querySelector('.contact-form-modal');
    const form = document.getElementById('contactForm');

    // Inicializa EmailJS con tu Public Key
    emailjs.init("EoMYF81iKI_1Eel_1");

    ctaButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const templateParams = {
            to_email: 'corpustatuajes@gmail.com',
            from_name: formData.get('nombre'),
            from_email: formData.get('email'),
            phone: formData.get('telefono'),
            message: formData.get('mensaje')
        };

        try {
            await emailjs.send(
                'service_snsbak9',
                'template_grgy6bc',
                templateParams
            );
            
            modal.style.display = 'none';
            form.reset();
            alert('¡Mensaje enviado con éxito!');
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al enviar el mensaje');
        }
    });

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
