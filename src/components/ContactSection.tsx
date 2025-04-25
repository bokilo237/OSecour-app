import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const { t } = useTranslation();

  return(
    <section id="contact" className="contact-section">
      <h1>{t('contact.title')}</h1>
      <p className="subtitle">{t('contact.subtitle')}</p>
      <div className="contact-container">
        {/* Partie Formulaire */}
        <div className="contact-form"> 
          <div className="form-section">
            <h3>{t('contact.formTitle')}</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5 mt-12 lg:pb-12">
              <div className="form-group">
                <div>
                  <label className="block text-gray-700 mb-2">Nom complet *</label>
                  <input type="text" required className="form-input" placeholder="Entrez votre nom complet"/>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email *</label>
                  <input type="email" required className="form-input" />
                </div>
              </div>
    
              <div className="form-group">
                <label>Objet  *</label>
                <input type="text" required placeholder="Objet du message"/>
              </div>
    
              <div className="form-group">
                <label>Message *</label>
                <textarea required rows={5} placeholder="Écrivez votre message ici..."></textarea>
              </div>

              <button type="submit" className="submit-btn bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                <i className="fa-solid fa-paper-plane mr-2"></i> Envoyer le message
              </button>
            </form>
          </div>
        </div>
    
        {/* Partie Informations  */}
        <div className="contact-info">
          <div className="info-section">
            <h3>{t('contact.infoTitle')}</h3>
            
            <div className="info-item">
              <i className="fas fa-map-marker-alt text-blue-600 mt-1 mr-4"></i>
              <span className="info-item-span">  Adresse </span>
              <p className="text-gray-600"> Pk14 Face collège Minfang, Douala Cameroun</p>
              
            </div>
    
            <div className="info-item">
              <i className="fas fa-phone text-blue-600 mt-1 mr-4"></i>
              <span className="info-item-span"> Contact</span>
              <p className="text-gray-600">+237 620 73 04 23</p>
              <p>
                <a href="https://wa.me/237620730423" target="_blank" rel="noopener noreferrer" className="whatsapp-link inline-flex items-center mt-2 text-green-600 hover:text-green-700 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fab fa-whatsapp mr-2"></i>  Chat WhatsApp
                </a>
              </p>
            </div>
    
            <div className="info-item">
              <i className="fa-solid fa-envelope text-blue-600 text-xl"></i>
              <span className="info-item-span"> Email</span>
              <p className="text-gray-600">contact@osecour.cm</p>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">Heures d'ouverture</h3>
                <p className="text-gray-600">
                  Service disponible 24h/24 - 7j/7 pour les urgences
                </p>
              </div>
            </div>
          </div>
    
          <div className="agent-section">
            <h2>Vous êtes un agent de santé ?</h2>
            <p>Rejoignez notre réseau de professionnels de santé et intervenez rapidement lors des urgences médicales.</p>
            
            <ul className="benefits-list">
              <li>Augmentez votre visibilité</li>
              <li>Gérez facilement vos interventions</li>
              <li>Recevez des paiements sécurisés</li>
            </ul>
            <Link to="/inscription-agent">
              <button className="agent-btn">Devenir partenaire</button>
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;