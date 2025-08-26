import React from 'react';
import { Heart, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="pt-16 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Cabinet <span className="text-blue-600">Som'Ergo</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Votre cabinet d'ergothérapie à Amiens, spécialisé dans l'accompagnement bienveillant 
            des enfants, adultes et seniors vers plus d'autonomie et de bien-être.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#rendez-vous"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Prendre rendez-vous
            </a>
            <a
              href="#equipe"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl border border-blue-200"
            >
              Découvrir l'équipe
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 mx-auto">
              <Heart className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Approche bienveillante</h3>
            <p className="text-gray-600 text-center">
              Une écoute attentive et un accompagnement personnalisé pour chaque patient, 
              dans le respect de ses besoins et de son rythme.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6 mx-auto">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Équipe experte</h3>
            <p className="text-gray-600 text-center">
              Des ergothérapeutes diplômés et spécialisés dans différents domaines, 
              pour répondre à tous vos besoins avec expertise.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 mx-auto">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Prise en charge globale</h3>
            <p className="text-gray-600 text-center">
              Du nourrisson à la personne âgée, nous proposons des solutions adaptées 
              à chaque étape de la vie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;