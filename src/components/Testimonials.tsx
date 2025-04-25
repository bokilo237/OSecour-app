import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
//import React from 'react'; 
import { useTranslation } from 'react-i18next';


const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = [
    {
        id: "1",
        name: "Sophie Ngo lithoum",
        role: "Utilisatrice",
        text: "Osecour m'a permis de trouver un médecin disponible en quelques minutes alors que j'étais souffrante. L'application est intuitive et la mise en relation avec les agents de santé est vraiment rapide.",
        avatar: "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20African%20woman%20with%20short%20brown%20hair%2C%20natural%20makeup%2C%20friendly%20smile%2C%20neutral%20background%2C%20professional%20portrait%2C%20high%20quality%20professional%20photo%2C%20dark%20skin%20tone&width=100&height=100&seq=4&orientation=squarish"
    },
    {
        id: "2",
        name: "Jean-Pierre Avomo",
        role: "Médecin généraliste",
        text: "En tant que professionnel de santé, Osecour me permet d'être plus accessible pour mes patients. La plateforme facilite grandement la mise en relation et le suivi médical personnalisé.",
        avatar: "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20middle-aged%20African%20man%20with%20glasses%2C%20short%20hair%2C%20professional%20attire%2C%20friendly%20expression%2C%20neutral%20background%2C%20high%20quality%20professional%20portrait%2C%20dark%20skin%20tone&width=100&height=100&seq=5&orientation=squarish"
    },
    {
      id: "3",
      name: "Mohamadou Zachee",
      role: "Utilisateur",
      text: "Merci à Osecour, il fallait vraiment cette application. N'importe ou que je suis ils sont la et rapidement.",
      avatar: "https://img.freepik.com/photos-gratuite/portrait-homme-afro-americain_23-2149072178.jpg?t=st=1744887352~exp=1744890952~hmac=3622033baca338a77c36f2b1332f6c2c10100aeee1f7cfd51b1fe23442e8a1fc&w=996"
    }, 
    {
        id: "4",
        name: "Ghislaine Ndonfack",
        role: "Infirmière",
        text: "Osecour connecte parfaitement les patients aux agents de santé comme moi. Je peux désormais offrir mes services à domicile et suivre mes patients plus efficacement grâce à cette plateforme innovante.",
        avatar: "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20African%20woman%20with%20hair%20tied%20back%2C%20wearing%20nurse%20uniform%2C%20warm%20smile%2C%20neutral%20background%2C%20high%20quality%20professional%20portrait%20photo%2C%20dark%20skin%20tone&width=100&height=100&seq=6&orientation=squarish"
    },
  ];

  return (
    <section id="testimonials" className="testimonials-carousel">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"> {t('testimonials.title')} </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto"> {t('testimonials.subtitle')} </p>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]} spaceBetween={30} slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }} autoplay={{ delay: 5000 }} className="testimonial-swiper" effect="coverflow" grabCursor={true} centeredSlides={true}>
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 testimonial-card">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-400 p-1 testimonial-avatar-container">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full rounded-full object-cover testimonial-avatar"/>
                  </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2 testimonial-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <p className="text-gray-700 italic flex-grow">{testimonial.text}</p>
                <div className="absolute -bottom-2 -right-2 text-blue-100 opacity-20">
                  <i className="fa-solid fa-quote-right text-6xl"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
  
};

export default Testimonials;