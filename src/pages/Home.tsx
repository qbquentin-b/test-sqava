import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Award, ArrowRight, Calendar, Phone } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
              Cabinet <span className="text-blue-600">Som'Ergo</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 lg:mb-8 max-w-3xl mx-auto px-2">
              Votre cabinet d'ergothérapie à Amiens, spécialisé dans l'accompagnement bienveillant 
              des enfants, adultes et seniors vers plus d'autonomie et de bien-être.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center mb-8 lg:mb-12 px-4">
              <Link
                to="/rendez-vous"
                className="bg-blue-600 text-white px-6 lg:px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl text-center"
              >
                Prendre rendez-vous
              </Link>
              <Link
                to="/equipe"
                className="bg-white text-blue-600 px-6 lg:px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl border border-blue-200 text-center"
              >
                Découvrir l'équipe
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8 lg:mt-16">
            <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 mx-auto">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4 text-center">Approche bienveillante</h3>
              <p className="text-sm lg:text-base text-gray-600 text-center">
                Une écoute attentive et un accompagnement personnalisé pour chaque patient, 
                dans le respect de ses besoins et de son rythme.
              </p>
            </div>

            <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6 mx-auto">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4 text-center">Équipe experte</h3>
              <p className="text-sm lg:text-base text-gray-600 text-center">
                Des ergothérapeutes diplômés et spécialisés dans différents domaines, 
                pour répondre à tous vos besoins avec expertise.
              </p>
            </div>

            <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 mx-auto">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4 text-center">Prise en charge globale</h3>
              <p className="text-sm lg:text-base text-gray-600 text-center">
                Du nourrisson à la personne âgée, nous proposons des solutions adaptées 
                à chaque étape de la vie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos domaines d'expertise
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Une prise en charge adaptée à chaque âge et chaque besoin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
            <div className="bg-gray-50 p-6 lg:p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">Pédiatrie</h3>
              <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">
                Accompagnement des enfants de 0 à 18 ans : troubles neurodéveloppementaux, 
                troubles sensoriels, graphomotricité, troubles alimentaires.
              </p>
              <Link 
                to="/services" 
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm lg:text-base"
              >
                En savoir plus <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 p-6 lg:p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">Adultes</h3>
              <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">
                Ergonomie au travail, troubles musculo-squelettiques, rééducation neurologique, 
                adaptation du poste de travail.
              </p>
              <Link 
                to="/services" 
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm lg:text-base"
              >
                En savoir plus <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 p-6 lg:p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">Seniors</h3>
              <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">
                Maintien à domicile, prévention des chutes, aménagement du logement, 
                troubles cognitifs, aide technique.
              </p>
              <Link 
                to="/services" 
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm lg:text-base"
              >
                En savoir plus <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-6 lg:px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Découvrir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Une équipe d'experts à votre service
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Des ergothérapeutes diplômés et passionnés, aux spécialités complémentaires
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
            <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Élodie Plommet"
                className="w-24 lg:w-32 h-24 lg:h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 text-center">Élodie Plommet</h3>
              <p className="text-blue-600 font-medium mb-3 lg:mb-4 text-center text-sm lg:text-base">Fondatrice & Ergothérapeute</p>
              <p className="text-gray-600 text-center text-xs lg:text-sm">
                Diplômée depuis 2008, spécialisée en pédiatrie et troubles neurodéveloppementaux
              </p>
            </div>

            <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Léa Dupressoir"
                className="w-24 lg:w-32 h-24 lg:h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 text-center">Léa Dupressoir</h3>
              <p className="text-blue-600 font-medium mb-3 lg:mb-4 text-center text-sm lg:text-base">Ergothérapeute</p>
              <p className="text-gray-600 text-center text-xs lg:text-sm">
                Spécialisée en troubles alimentaires, graphomotricité et accompagnement des seniors
              </p>
            </div>

            <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <img
                src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Mathilde Rouget"
                className="w-24 lg:w-32 h-24 lg:h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 text-center">Mathilde Rouget</h3>
              <p className="text-blue-600 font-medium mb-3 lg:mb-4 text-center text-sm lg:text-base">Ergothérapeute</p>
              <p className="text-gray-600 text-center text-xs lg:text-sm">
                Experte en neurologie, rééducation motrice et ergonomie
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/equipe"
              className="bg-blue-600 text-white px-6 lg:px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Rencontrer toute l'équipe
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à commencer votre accompagnement ?
          </h2>
          <p className="text-lg lg:text-xl text-blue-100 mb-6 lg:mb-8 max-w-3xl mx-auto px-4">
            Prenez rendez-vous dès aujourd'hui pour une première consultation personnalisée
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center px-4">
            <Link
              to="/rendez-vous"
              className="bg-white text-blue-600 px-6 lg:px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Prendre rendez-vous
            </Link>
            <a
              href="tel:+33000000000"
              className="bg-blue-700 text-white px-6 lg:px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;