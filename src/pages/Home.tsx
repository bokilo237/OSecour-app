// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import { useState, useEffect } from 'react';
//import { useRef, useEffect } from 'react';
//import Swiper from 'swiper';
//import { Swiper, SwiperSlide } from 'swiper/react';
//import { Pagination, Autoplay } from 'swiper/modules'; 

import "tailwindcss";
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import ServiceCard from '../components/ServiceCard';
import Testimonials from '../components/Testimonials';
import MapSection from '../components/MapSection';
import ContactSection from '../components/ContactSection';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Home = () => {
  const { t } = useTranslation();
  /* const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    // Configuration Swiper
    swiperRef.current = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: 'slide',
      speed: 800,
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 }
      }
    });

    // Nettoyage
    return () => {
      swiperRef.current?.destroy();
    };
  }, []); */
  //const [currentSlide, setCurrentSlide] = useState(0);
  //const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Données des écrans téléphone
  const phoneScreens = [
    {
      id: 1,
      title: "Recherche d'agents de santé",
      description: "Trouvez rapidement les agents de santé les plus proches",
      image: "https://readdy.ai/api/search-image?query=smartphone%20app%20screen%20showing%20African%20healthcare%20professional%20finder%20with%20a%20modern%20UI%20design%2C%20map%20interface%20with%20nearby%20African%20medical%20professionals%2C%20app%20interface%20showing%20African%20doctors%20and%20nurses%20locations%2C%20clean%20design%20with%20blue%20and%20white%20color%20scheme%2C%20professional%20medical%20application&width=300&height=600&seq=1&orientation=portrait"
    },
    {
      id: 2,
      title: "Mise en relation",
      description: "Contactez directement les agents de santé disponibles",
      image: "https://readdy.ai/api/search-image?query=smartphone%20app%20screen%20showing%20African%20healthcare%20professional%20contact%20interface%20with%20call%20buttons%2C%20chat%20feature%20with%20African%20doctors%20and%20nurses%2C%20professional%20healthcare%20app%20UI%2C%20clean%20design%20with%20African%20medical%20professional%20profiles%20and%20quick%20contact%20options&width=300&height=600&seq=2&orientation=portrait"
    },
    {
      id: 3,
      title: "Profil médical",
      description: "Partagez vos informations médicales avec les agents de santé",
      image: "https://readdy.ai/api/search-image?query=smartphone%20app%20screen%20showing%20medical%20profile%20interface%20with%20African%20user%20health%20information%20to%20share%20with%20healthcare%20professionals%2C%20medication%20list%2C%20allergies%20section%2C%20blood%20type%20and%20emergency%20contacts%2C%20professional%20healthcare%20app%20UI%20with%20clean%20blue%20and%20white%20design&width=300&height=600&seq=3&orientation=portrait"
    },
    {
      id: 4,
      title: "Assistance rapide",
      description: "Recevez une assistance médicale d'urgence en temps réel",
      image: "https://readdy.ai/api/search-image?query=smartphone%20app%20screen%20showing%20emergency%20medical%20assistance%20interface%20with%20African%20healthcare%20professionals%20responding%20to%20urgent%20calls%2C%20real-time%20assistance%20features%2C%20emergency%20response%20tracking%2C%20professional%20healthcare%20app%20UI%20with%20clean%20blue%20and%20white%20design&width=300&height=600&seq=4&orientation=portrait"
    }
  ]; 
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % phoneScreens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [phoneScreens.length]);



  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Section Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-3">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mb-8">
                {t('hero.subtitle')}
              </p>
              <div className="hero-actions">
                <button className="cta-button-primary">
                  <i className="fa-solid fa-download mr-2"></i>
                  {t('hero.downloadApp')}
                </button>
              </div>
            </div>
            <div className="lg:col-span-4 mt-10 lg:mt-0">
              <img className="w-full rounded-xl" src="https://readdy.ai/api/search-image?query=African%20patient%20in%20emergency%20situation%20using%20healthcare%20mobile%20app%20to%20call%20for%20help%2C%20urgent%20medical%20assistance%20needed%2C%20person%20in%20distress%20using%20smartphone%20application%2C%20soft%20blue%20gradient%20background%20that%20seamlessly%20blends%20with%20text%20area&width=800&height=600&seq=8&orientation=landscape" alt="Hero Image"/>
            </div>
          </div>
        </div>
      </section> 

      {/* Section Services */}
      <section id="services" className="services">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
              {t('services.title')}
            </h2>
            <p className="services-subtitle" style={{ animationDelay: '0.2s' }}>
              {t('services.subtitle')}
            </p>
          <div className="service-cards">
            {/* {services.map((service, index) => (
              <div className='service-card'>
                <ServiceCard key={index} {...service} />
              </div>
            ))} */}
             
            <div className="service-card">
              <h3>📍 Localisation d'agents de santé</h3>
              <p>Trouvez rapidement les médecins, infirmiers et autres professionnels de santé pour une intervention d'urgence immédiate.</p>
            </div>

            <div className="service-card">
              <h3>🩺 Mise en relation directe</h3>
              <p>Contactez directement les agents de santé disponibles pour une assistance rapide avec géolocalisation automatique 24h/24.</p>
            </div>
            
            <div className="service-card">
              <h3>📋 Profil médical partagé</h3>
              <p>Partagez vos informations médicales essentielles avec les agents de santé consultés.</p>
            </div>

            <div className="service-card">
              <h3>📋 Suivi Médical</h3>
              <p>Bénéficiez d'une assistance médicale d'urgence en temps réel et d'un suivi médical par des professionnels qualifiés.</p>
            </div>
          </div>
      </section>

      {/* Section Application mobile */}
      <section id="app" className="app-section">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-2/3 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"> {t('app.title')} </h2>
            <p className="text-lg text-gray-600 mb-8"> {t('app.description')} </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-700">Localisation précise des agents de santé pour une intervention rapide</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-700">Mise en relation directe avec les professionnels pour une assistance immédiate</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-700">Profil médical partagé avec les agents de santé consultés</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span className="text-gray-700">Suivi médical personnalisé par des professionnels de confiance</span>
              </li>
            </ul>
            <div className="flex space-x-4 app-download">
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center !rounded-button whitespace-nowrap cursor-pointer">
                <i className="fa-brands fa-google-play mr-2"></i>Google Play
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center !rounded-button whitespace-nowrap cursor-pointer">
                <i className="fa-brands fa-apple mr-2"></i>App Store
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-[300px] h-[600px] overflow-hidden rounded-xl shadow-xl">
              {/* Phone content */}
              {phoneScreens.map((screen, index) => (
                <div key={screen.id} className={`absolute inset-0 transition-opacity duration-500 ${ index === currentSlide ? 'opacity-100' : 'opacity-0' }`}>
                  <img src={screen.image} alt={screen.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white text-xl font-bold mb-1">{screen.title}</h3>
                    <p className="text-white text-sm">{screen.description}</p>
                  </div>
                </div>
              ))}
              {/* Navigation dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {phoneScreens.map((_, index) => (
                  <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300' }`}  aria-label={`Voir écran ${index + 1}`}>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Carte */}
      <div id='map' className="container mx-auto p-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Trouvez les agents de santé à proximité pour une intervention d'urgence rapide
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Visualisez rapidement les médecins, infirmiers et autres professionnels de santé prêts à intervenir en urgence près de chez vous
          </p>
        </div>
        <MapSection />
      </div>

      {/* Section Témoignages */}
      <Testimonials />

      {/* Section CTA */}
      <section className="cta-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="app-buttons">
            <button className="play-store">
              <i className="fa-brands fa-google-play mr-2"></i>
              Google Play
            </button>
            <button className="app-store">
              <i className="fa-brands fa-apple mr-2"></i>
              App Store
            </button>
          </div>
      </section>

      {/* Section Contact */}
      <ContactSection />
      
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Home;