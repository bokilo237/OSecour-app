import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className ="footer-content">
      <div className="footer-brand">
        <Link to="/">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold">Ôsecour</h2>
          </div>
        </Link>
        <p className="text-gray-400 mb-6">
          Votre Ière plateforme de mise en relation avec des agents de santé au Cameroun. Disponible 24/7 pour une assistance rapide des professionnels lors de chaque intervention d'urgence.
        </p>
        <div className="flex space-x-12">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">  
            <i className="fa-brands fa-facebook-f text-xl"></i>     
          </a>  
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">  
            <i className="fa-brands fa-twitter text-xl"> </i>    
          </a>  
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">  
            <i className="fa-brands fa-instagram text-xl"></i>  
          </a>  
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">  
            <i className="fa-brands fa-linkedin-in text-xl"></i> 
          </a>
        </div>
      </div>
      <div className='footer-links'>
        <h4 className="text-lg font-semibold "><u>Liens rapides</u></h4>
        <ul>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Accueil</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Services</a></li>
          <li><a href="#app" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Application</a></li>
          <li><a href="#map" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Carte</a></li>
          <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Témoignages</a></li>
          <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Contact</a></li>
          <li><Link to="/inscription-agent" className="footer-link">Devenir Agent</Link></li>
        </ul>
      </div>
      <div className='footer-contact'>
        <h4 className="text-lg font-semibold"><u>Contact</u></h4>
        <p>
          <i className="fa-solid fa-location-dot text-blue-400"></i>
          <span className="text-gray-400">   Pk14 Face collège Minfang, Douala Cameroun</span>
        </p>
        <p>
          <i className="fa-solid fa-phone text-blue-400"></i>
          <span className="text-gray-400">  +237 620 73 04 23  </span>  
          <span>
            <a href="https://wa.me/237620730423" target="_blank" rel="noopener noreferrer" className="ml-3 inline-flex items-center text-red-400 !rounded-button whitespace-nowrap cursor-pointer">
               <i className="fa-brands fa-whatsapp mr-1 text-lg"></i>    WhatsApp
            </a>
          </span>
        </p>
        <p>
          <i className="fa-solid fa-envelope text-blue-400"></i>
          <span className="text-gray-400"> contact@osecour.cm</span>
        </p>
      </div>
      <div className='footer-newsletter'>
        <h4 className="text-lg font-semibold mb-6"><ul>Newsletter</ul></h4>
        <p className="text-gray-400 ">Inscrivez-vous pour recevoir nos dernières actualités et mises à jour</p>
        <input type="email" placeholder="Votre email" className="bg-gray-800 text-white rounded-l-lg w-full border-none focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <button className="bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer">
          <i className="fa-solid fa-paper-plane"> S'inscrire</i>
        </button>
      </div>
    </div>
    <div className="payment-methods">
      <h4 className="text-lg font-semibold mb-4">Moyens de paiement</h4>
        <span  className="text-gray-400 text-lg"><i className="fa-solid fa-money-bill-wave text-2xl text-gray-400"></i>Orange Money  |  </span>
        
        <span className="text-gray-400 text-lg"><i className="fa-solid fa-mobile-screen text-2xl text-gray-400"></i>MTN Mobile Money</span>
    </div>
    <div className="copyright">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Ôsecour. Tous droits réservés.</p>
        <div className="flex space-x-12">
          <a href="#" className=" hover:text-white text-sm transition-colors duration-300 cursor-pointer">Politique de confidentialité   </a>    
          <a href="#" className=" hover:text-white text-sm transition-colors duration-300 cursor-pointer">  Conditions d'utilisation   </a>    
          <a href="#" className=" hover:text-white text-sm transition-colors duration-300 cursor-pointer">  Mentions légales</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;