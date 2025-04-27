import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';

const AgentInscription = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    experience: '',
    specialty: '',
    license: '',
    professionalCard: null as File | null,
  });
  const [errors, setErrors] = useState<string[]>([]);
  const form = useRef<HTMLFormElement>(null);
  const [showResetButton, setShowResetButton] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const steps = [
    { id: 1, title: 'Informations personnelles' },
    { id: 2, title: 'Documents professionnels' },
    { id: 3, title: 'Validation' }
  ];

  const validateStep = (step: number) => {
    const newErrors: string[] = [];
    
    if (step === 1) {
      if (!formData.firstName) newErrors.push('firstName');
      if (!formData.lastName) newErrors.push('lastName');
      if (!formData.email) newErrors.push('email');
      if (!formData.phone) newErrors.push('phone');
      if (!formData.address) newErrors.push('address');
      if (!formData.specialty) newErrors.push('specialty');
    }
    
    if (step === 2 && !formData.professionalCard) {
      newErrors.push('professionalCard');
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleNextStep = () => {
    if (!validateStep(currentStep)) return;
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ajoutez cette vérification
    if (!form.current?.checkValidity()) {
      form.current?.reportValidity(); // Affiche les messages natifs
      return;
    }

    if (!form.current) return;

    
  setStatus('sending');

    
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE2_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY_USER_ID,
        
      );

      setCurrentStep(3);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        experience: '',
        specialty: '',
        license: '',
        professionalCard: null,
      });
      
      setStatus('sent');
      form.current?.reset();
      setShowResetButton(true); // Active l'affichage du bouton
      setTimeout(() => setStatus('idle'), 15000);
     
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 10000);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, [field]: e.target.files![0] }));
      setErrors(prev => prev.filter(err => err !== field));
    }
  };
  // Ajoutez cette fonction de réinitialisation
  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      experience: '',
      specialty: '',
      license: '',
      professionalCard: null,
    });
    setCurrentStep(1);
    setErrors([]);
    setShowResetButton(false);
    if(fileInputRef.current) fileInputRef.current.value = '';
    setStatus('idle');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <form ref={form} onSubmit={handleSubmit}>
        
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
                    <p className="text-gray-600 text-sm">{t('register.avantage.p1-')}</p>
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
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Devenez Agent Partenaire
                </h2>
                    
                {currentStep === 1 && (
                  <div className="space-y-6">
                    {/* Ajout des name pour EmailJS */}
{/*                     <input type="hidden" name='service_id' value="agent_inscription" />
 */}                    
                    <div className="grid md:grid-cols-2 gap-6">

                      {/* First Name */}
                      <div>
                        <label>{t('firstName')} *</label>
                        <input name='firstName' type="text" required placeholder="Nom"
                          className={`form-input ${errors.includes('firstName') ? 'border-red-500' : ''}`} value={formData.firstName}
                          onChange={(e) => {
                            setFormData({ ...formData, firstName: e.target.value });
                            setErrors(prev => prev.filter(err => err !== 'firstName'));
                          }}
                        />
                      </div>

                      {/* Last Name */}
                      <div>
                        <label>{t('lastName')} *</label>
                        <input
                          name='lastName' type="text" required placeholder="Prénom"
                          className={`form-input ${errors.includes('lastName') ? 'border-red-500' : ''}`} value={formData.lastName}
                          onChange={(e) => {
                            setFormData({ ...formData, lastName: e.target.value });
                            setErrors(prev => prev.filter(err => err !== 'lastName'));
                          }}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label>{t('email')} *</label>
                        <input name='email' type="email" required placeholder="Email" className={`form-input ${errors.includes('email') ? 'border-red-500' : ''}`} value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            setErrors(prev => prev.filter(err => err !== 'email'));
                          }}
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label>{t('phone')} *</label>
                        <input name='phone' type="tel" required placeholder="+2376xxxxxxxx" 
                          className={`form-input ${errors.includes('phone') ? 'border-red-500' : ''}`} value={formData.phone} 
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            setErrors(prev => prev.filter(err => err !== 'phone'));
                          }}
                        />
                      </div>

                      {/* Address */}
                      <div>
                        <label>{t('address')} *</label>
                        <input name='address' type="text" required placeholder="Adresse" className={`form-input ${errors.includes('address') ? 'border-red-500' : ''}`} value={formData.address}
                          onChange={(e) => {
                            setFormData({ ...formData, address: e.target.value });
                            setErrors(prev => prev.filter(err => err !== 'address'));
                          }}
                        />
                      </div>

                      {/* Specialty */}
                      <div>
                        <label>{t('specialty')} *</label>
                        <input name='specialty' type="text" required placeholder="Spécialité" className={`form-input ${errors.includes('specialty') ? 'border-red-500' : ''}`} value={formData.specialty}
                          onChange={(e) => {
                            setFormData({ ...formData, specialty: e.target.value });
                            setErrors(prev => prev.filter(err => err !== 'specialty'));
                          }}
                        />
                      </div>

                      {/* Experience */}
                      <div className="col-span-2">
                        <label>Compétences *</label>
                        <textarea name='experience' required rows={5} placeholder="Veuillez renseigner vos compétences..." className={`w-full px-4 py-3 rounded-lg border 
                          ${
                            errors.includes('experience') ? 'border-red-500' : 'border-gray-300'
                          }`}
                          value={formData.experience}
                          onChange={(e) => {
                            setFormData({ ...formData, experience: e.target.value });
                            setErrors(prev => prev.filter(err => err !== 'experience'));
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="file-upload-container">
                      <label> {t('professionalCarte')} *</label>
                      <div className={`file-upload-box ${errors.includes('professionalCard') ? 'border-red-500' : ''}`}>
                        <input type="file" ref={fileInputRef} name="professionalCard" required 
                          onChange={(e) => handleFileUpload(e, 'professionalCard')}
                        />
                        <i className="fas fa-file-upload text-3xl"></i>
                        <p>{formData.professionalCard ? formData.professionalCard.name : 'Glissez votre fichier ici'}</p>
                      </div>
                    </div>
                  </div>
                )}
                {currentStep === 3 && (
                  <div className="text-center">
                    <i className="fas fa-check-circle text-6xl text-green-500 mb-6"></i>
                    <h2 className="text-2xl font-bold mb-4">Derniere étape pour que votre Candidature soit soumise !</h2>
                    <h3 className="text-2xl font-bold mb-4">Cliquez sur Terminer </h3>
                    <p className="text-gray-600 font-bold">
                      Et Notre équipe vous contactera dans les 48 heures
                    </p>
                  </div>
                )}
                {/* Feedback utilisateur */}
                <div className='Msgvalidation'>
                  {status === 'sent' && <div className="success-message"> {t('contact.successMessage')}</div>}
                  {status === 'error' && <div className="error-message">Erreur lors de l'envoi</div>}
                </div>

                <div className="flex justify-between mt-12">
                  {currentStep > 1 && currentStep < 3 && (
                    <button 
                      type="button"
                      className="secondary-button"
                      onClick={() => setCurrentStep(prev => prev - 1)}>
                      Précédent
                    </button>
                  )}
                  
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      className="primary-button ml-auto"
                      onClick={handleNextStep}>
                      Suivant
                    </button>
                  ) : (
                    <button type="submit" disabled={status === 'sending'} className="primary-button">
                      {status === 'sending' ? (
                          <span>Envoi en cours...</span>
                        ) : (
                          <>
                            Terminer
                          </>
                        )}
                    </button>
                  )}

                  {status === 'sent' && (
                    <div className="text-center mt-8 animate-fade-in">
                      {showResetButton && (
                        <button type="button" onClick={resetForm} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all opacity-0 animate-slide-up cursor-pointer">
                          <i className="fas fa-undo mr-2"></i>
                          Revenir au début
                        </button>
                      )}
                    </div>
                  )}
                </div>
            </div>
          </div> 
        </section>
      </form>

      <Footer />
    </div>
  );
};

export default AgentInscription;