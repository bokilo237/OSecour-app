
// Initialisation de Swiper après le chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    // Vérification du chargement de Swiper
    if(typeof Swiper === 'undefined') {
        console.error('Swiper non chargé !');
        return;
    }

    // Vérification de l'existence du conteneur
    const swiperEl = document.querySelector('.swiper-container');
    if(!swiperEl) {
        console.error('Élément .swiper-container introuvable');
        return;
    }
    const swiper = new Swiper('.swiper-container', {
        // Configuration de base
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Options de transition
        effect: 'slide',
        speed: 800,
    
        // Responsive breakpoints
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            878: {
                slidesPerView: 1,
                spaceBetween: 35,
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 40,
            }
        }   
    });
    
    console.log('Swiper initialisé avec succès !', swiper);
});