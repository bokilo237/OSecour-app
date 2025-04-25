import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC<{ className?: string }> = ({ className }) => {
  const { i18n } = useTranslation();

  return (
    <div className={`flex gap-2 ${className}`}>
      <button
        onClick={() => i18n.changeLanguage('fr')}
        className={`px-3 py-1 rounded ${i18n.language === 'fr' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      >
        FR
      </button>
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;