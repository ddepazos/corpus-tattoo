document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImage');

    modal.addEventListener('show.bs.modal', function(event) {
        const img = event.relatedTarget;
        modalImg.src = img.getAttribute('data-bs-img');
    });
});
