import React from 'react';
import { Baby, Users, UserCheck, Home, Monitor, Phone, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Pédiatrie",
      icon: <Baby className="h-8 w-8" />,
      description: "Accompagnement des enfants de 0 à 18 ans",
      details: [
        "Développement moteur et sensoriel",
        "Troubles neurodéveloppementaux (TND)",
        "Graphomotricité et écriture",
        "Troubles alimentaires pédiatriques",
        "Intégration sensorielle",
        "Accompagnement scolaire"
      ]
    },
    {
      title: "Adultes",
      icon: <Users className="h-8 w-8" />,
      description: "Solutions pour les adultes actifs",
      details: [
        "Ergonomie au travail",
        "Troubles musculo-squelettiques",
        "Rééducation neurologique",
        "Adaptation du poste de travail",
        "Gestion du stress professionnel",
        "Retour à l'emploi"
      ]
    },
    {
      title: "Seniors",
      icon: <UserCheck className="h-8 w-8" />,
      description: "Maintien de l'autonomie des personnes âgées",
      details: [
        "Maintien à domicile",
        "Prévention des chutes",
        "Aménagement du logement",
        "Troubles cognitifs",
        "Aide technique",
        "Accompagnement des aidants"
      ]
    }
  ];

  const modalities = [
    {
      title: "Au cabinet",
      icon: <MapPin className="h-6 w-6" />,
      description: "Consultations dans nos locaux équipés"
    },
    {
      title: "À domicile",
      icon: <Home className="h-6 w-6" />,
      description: "Interventions dans votre environnement"
    },
    {
      title: "Téléconsultation",
      icon: <Monitor className="h-6 w-6" />,
      description: "Suivi à distance sécurisé"
    },
    {
      title: "Téléphone",
      icon: <Phone className="h-6 w-6" />,
      description: "Conseils et orientation"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos services d'ergothérapie
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Une prise en charge globale et personnalisée pour tous les âges, 
              adaptée à vos besoins spécifiques et à votre environnement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                  <div className="text-blue-600">{service.icon}</div>
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3 lg:mb-4">{service.title}</h3>
                <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm lg:text-base text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6 lg:mb-8 text-center">
              Modalités d'intervention
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {modalities.map((modality, index) => (
                <div key={index} className="text-center p-4 lg:p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4 mx-auto">
                    <div className="text-green-600">{modality.icon}</div>
                  </div>
                  <h4 className="text-sm lg:text-lg font-semibold text-gray-900 mb-2">{modality.title}</h4>
                  <p className="text-gray-600 text-xs lg:text-sm">{modality.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;