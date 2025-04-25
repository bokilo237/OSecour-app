import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AgentInscription = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    experience: '',
    specialty: '',
    license: '',
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  /* const [files, setFiles] = useState({
    professionalCard: null,
    certifications: null,
    insurance: null,
  }); */

  const steps = [
    { id: 1, title: 'Informations personnelles' },
    { id: 2, title: 'Documents professionnels' },
    { id: 3, title: 'Validation' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Soumission du formulaire
  };

  /* const handleFileChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(prev => ({ ...prev, [name]: e.target.files![0] }));
    }
  }; */
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    // Gestion des fichiers
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('register.Title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('register.Subtitle')}
          </p>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className=" avantage bg-blue-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('register.avantage.title')}</h2>
            <ul className="grid md:grid-cols-3 gap-6">
              <li className="flex items-start">
                <i className="fa-solid fa-user-plus text-blue-600 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold">{t('register.avantage.h1')}</h3>
                  <p className="text-gray-600 text-sm">{t('register.avantage.p1')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-shield-heart text-blue-600 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold">{t('register.avantage.h2')}</h3>
                  <p className="text-gray-600 text-sm">{t('register.avantage.p2')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-briefcase-medical text-blue-600 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold">{t('register.avantage.h3')}</h3>
                  <p className="text-gray-600 text-sm">{t('register.avantage.p3')}</p>
                </div>
              </li>
            </ul>
            <div className="mt-6 text-center text-sm text-red-600">
             {t('register.frais')}
            </div>
            <div className="mt-4 text-center text-sm text-blue-600">
              {t('register.delais')}
            </div>
          </div>
           {/* Progress Bar */}
          <div className="bg-gray-50 py-8">
            <div className="container mx-auto px-4">
              <div className="flex justify-center">
                {steps.map(step => (
                  <div key={step.id} className="flex flex-col items-center mx-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                      ${currentStep >= step.id ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                      {step.id}
                    </div>
                    <span className="text-sm mt-2">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formulaire */}
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Devenez Agent Partenaire
              </h2>

              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label>{t('firstName')} *</label>
                      <input type="text" required className="form-input" onChange={(e) => setFormData({...formData, firstName: e.target.value})}/>
                    </div>
                    <div>
                      <label>{t('lastName')} *</label>
                      <input type="text" required className="form-input" onChange={(e) => setFormData({...formData, lastName: e.target.value})}/>
                    </div>
                    {/* Ajouter les autres champs */}
                    <div>
                      <label>{t('email')} *</label>
                      <input type="email" required className="form-input" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                    </div>
                    <div>
                      <label>{t('phone')} *</label>
                      <input type="phone" required placeholder='+2376xxxxxxxx' className="form-input" onChange={(e) => setFormData({...formData, phone: e.target.value})}/>
                    </div> 
                    <div>
                      <label>{t('address')} *</label>
                      <input type="text" required placeholder='Votre lieu de residence' className="form-input" onChange={(e) => setFormData({...formData, address: e.target.value})}/>
                    </div> 
                    <div>
                      <label>{t('specialty')} *</label>
                      <input type="text" placeholder='Votre spécialité..' required className="form-input" onChange={(e) => setFormData({...formData, specialty: e.target.value})}/>
                    </div> 
                    <div>
                      <label>Compétences *</label>
                      <textarea id="experience" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Renseignez vos compétences techniques & pratiques" onChange={(e) => setFormData({...formData, experience: e.target.value})} ></textarea>                  
                    </div> 
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="file-upload-container">
                    <label> {t('professionalCarte')} *</label>
                    <div className="file-upload-box">
                      <input type="file" onChange={(e) => handleFileUpload(e, 'professionalCard')} />
                      <i className="fas fa-file-upload text-3xl"></i>
                      <p>Glissez votre fichier ici</p>
                    </div>
                  </div>
                  {/* Ajouter les autres zones de fichier */}
                </div>
              )}

              {currentStep === 3 && (
                <div className="text-center">
                  <i className="fas fa-check-circle text-6xl text-green-500 mb-6"></i>
                  <h3 className="text-2xl font-bold mb-4">Candidature soumise !</h3>
                  <p className="text-gray-600">
                    Notre équipe vous contactera dans les 48 heures
                  </p>
                </div>
              )}

              <div className="flex justify-between mt-12">
                {currentStep > 1 && (
                  <button 
                    className="secondary-button"
                    onClick={() => setCurrentStep(currentStep - 1)}>
                    Précédent
                  </button>
                )}
                {currentStep < 3 ? (
                  <button
                    className="primary-button ml-auto"
                    onClick={() => setCurrentStep(currentStep + 1)}>
                    Suivant
                  </button>
                ) : (
                  <button className="primary-button" onClick={handleSubmit}>
                    Terminer
                  </button>
                )}
              </div>
            </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AgentInscription;