import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className='services-grid'>
      <div className="service-card bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all">
        <div className="icon-container bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
          <i className={`${icon} text-blue-600 text-2xl`}></i>
        </div>
        <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;