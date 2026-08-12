// Añade un desplazamiento (scroll) suave a todos los enlaces de navegación interna
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Obtiene el elemento destino por su ID
        const targetElement = document.querySelector(this.getAttribute('href'));
        
        // Si el elemento existe, hace scroll suave hacia él
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Este script también se encargará de hacer scroll cuando hagas clic en las tarjetas de producto
document.querySelectorAll('.tarjeta-producto').forEach(card => {
    card.addEventListener('click', function() {
        const targetId = this.getAttribute('onclick').match(/'#(.*)'/)[1];
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});