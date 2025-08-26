import React from 'react';
import { Calendar, ArrowRight, Heart, Users, Award } from 'lucide-react';

const News = () => {
  const articles = [
    {
      title: "Semaine Nationale de l'Ergothérapie 2024",
      date: "15 Mars 2024",
      excerpt: "Découvrez les événements organisés par Som'Ergo pour sensibiliser le grand public à l'ergothérapie.",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      category: "Événement"
    },
    {
      title: "Troubles alimentaires chez l'enfant : comment l'ergothérapie peut aider",
      date: "8 Mars 2024",
      excerpt: "Comprendre les troubles alimentaires pédiatriques et les solutions proposées par l'ergothérapie.",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      category: "Conseil"
    },
    {
      title: "Témoignage : 'L'ergothérapie a changé notre quotidien'",
      date: "1 Mars 2024",
      excerpt: "Marie, maman de Lucas, nous raconte comment l'ergothérapie a aidé son fils avec ses troubles sensoriels.",
      image: "https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      category: "Témoignage"
    },
    {
      title: "Ergonomie au travail : prévenir les troubles musculo-squelettiques",
      date: "22 Février 2024",
      excerpt: "Nos conseils pour adapter votre poste de travail et prévenir les douleurs chroniques.",
      image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      category: "Prévention"
    },
    {
      title: "L'intégration sensorielle : comprendre et accompagner",
      date: "15 Février 2024",
      excerpt: "Focus sur les troubles de l'intégration sensorielle et les approches thérapeutiques adaptées.",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      category: "Formation"
    },
    {
      title: "Maintien à domicile des seniors : le rôle de l'ergothérapeute",
      date: "8 Février 2024",
      excerpt: "Comment l'ergothérapie contribue au maintien de l'autonomie des personnes âgées à domicile.",
      image: "https://images.pexels.com/photos/5327689/pexels-photo-5327689.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      category: "Conseil"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Actualités & Conseils
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Retrouvez nos derniers articles, témoignages et événements 
              pour mieux comprendre l'ergothérapie et ses bienfaits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-40 lg:h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 lg:p-6">
                  <div className="flex items-center text-gray-500 text-xs lg:text-sm mb-2 lg:mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {article.date}
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 text-sm lg:text-base"
                  >
                    Lire la suite
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6 text-center">
              Nos engagements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">Formation continue</h4>
                <p className="text-sm lg:text-base text-gray-600">
                  Nos ergothérapeutes se forment régulièrement aux dernières techniques 
                  et approches thérapeutiques.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-4 mx-auto">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">Travail en équipe</h4>
                <p className="text-sm lg:text-base text-gray-600">
                  Collaboration étroite avec les médecins, enseignants et autres professionnels 
                  de santé pour un suivi optimal.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-lg mb-4 mx-auto">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">Qualité des soins</h4>
                <p className="text-sm lg:text-base text-gray-600">
                  Respect des recommandations de bonnes pratiques et évaluation 
                  continue de nos interventions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;