import React from 'react';
import { GraduationCap, Heart, Star } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Élodie Plommet",
      role: "Fondatrice & Ergothérapeute",
      specialties: ["Pédiatrie", "Troubles neurodéveloppementaux", "Troubles sensoriels"],
      quote: "Diplômée depuis 2008, je me passionne pour l'accompagnement des enfants et de leurs familles vers plus d'autonomie.",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      experience: "16 ans d'expérience"
    },
    {
      name: "Léa Dupressoir",
      role: "Ergothérapeute",
      specialties: ["Troubles alimentaires", "Graphomotricité", "Seniors"],
      quote: "J'accompagne avec bienveillance les patients dans leur quotidien, en adaptant l'environnement à leurs besoins.",
      image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      experience: "8 ans d'expérience"
    },
    {
      name: "Mathilde Rouget",
      role: "Ergothérapeute",
      specialties: ["Neurologie", "Rééducation motrice", "Ergonomie"],
      quote: "Spécialisée dans la rééducation neurologique, j'aide mes patients à retrouver leurs capacités fonctionnelles.",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      experience: "10 ans d'expérience"
    },
    {
      name: "Noémie",
      role: "Ergothérapeute Pédiatrique",
      specialties: ["Tout-petits (0-5 ans)", "TND", "Troubles alimentaires"],
      quote: "Spécialisée dans l'accompagnement des tout-petits, je travaille avec bienveillance sur les troubles alimentaires pédiatriques.",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      experience: "6 ans d'expérience"
    },
    {
      name: "Perrine Decourcelle",
      role: "Ergothérapeute",
      specialties: ["Troubles sensoriels", "Intégration sensorielle", "Pédiatrie"],
      quote: "J'accompagne les enfants avec troubles sensoriels pour les aider à mieux appréhender leur environnement.",
      image: "https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      experience: "7 ans d'expérience"
    },
    {
      name: "Bérénice Audureau",
      role: "Ergothérapeute",
      specialties: ["Ergonomie au travail", "Troubles musculo-squelettiques", "Adultes"],
      quote: "Experte en ergonomie, j'aide les professionnels à adapter leur poste de travail pour prévenir les troubles.",
      image: "https://images.pexels.com/photos/5327689/pexels-photo-5327689.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      experience: "12 ans d'expérience"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre équipe d'experts
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Des ergothérapeutes diplômés et passionnés, aux spécialités complémentaires, 
              pour vous offrir un accompagnement personnalisé et de qualité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 lg:w-32 h-24 lg:h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                  />
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2 text-sm lg:text-base">{member.role}</p>
                  <p className="text-xs lg:text-sm text-gray-500 flex items-center justify-center">
                    <Star className="h-4 w-4 mr-1" />
                    {member.experience}
                  </p>
                </div>

                <div className="mb-4 lg:mb-6">
                  <h4 className="text-xs lg:text-sm font-semibold text-gray-700 mb-2 lg:mb-3 flex items-center">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Spécialités
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="px-2 lg:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs lg:text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <blockquote className="text-gray-600 italic text-sm lg:text-base">
                  <Heart className="h-4 w-4 inline mr-2 text-green-500" />
                  "{member.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;