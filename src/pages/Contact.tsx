import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Votre message a été envoyé. Nous vous répondrons rapidement.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nous contacter
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Une question ? Un besoin d'information ? N'hésitez pas à nous contacter, 
              nous sommes là pour vous accompagner.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 lg:mb-6">Informations de contact</h3>
                
                <div className="space-y-4 lg:space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-base lg:text-lg font-semibold text-gray-900">Adresse</h4>
                      <p className="text-sm lg:text-base text-gray-600">47 Avenue du Royaume-Uni</p>
                      <p className="text-sm lg:text-base text-gray-600">80090 Amiens</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-base lg:text-lg font-semibold text-gray-900">Téléphone</h4>
                      <p className="text-sm lg:text-base text-gray-600">03 XX XX XX XX</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-base lg:text-lg font-semibold text-gray-900">Email</h4>
                      <p className="text-sm lg:text-base text-gray-600">contact@somergo.fr</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mr-4">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-base lg:text-lg font-semibold text-gray-900">Horaires</h4>
                      <p className="text-sm lg:text-base text-gray-600">Lundi - Vendredi : 8h00 - 18h00</p>
                      <p className="text-sm lg:text-base text-gray-600">Samedi : 9h00 - 12h00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">Suivez-nous</h3>
                <a
                  href="https://www.facebook.com/profile.php?id=100063558730334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 text-sm lg:text-base"
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  Cabinet Som'Ergo - Cabinet d'Ergothérapie
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 lg:p-8 hidden lg:block">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">Localisation</h3>
                <div className="bg-gray-200 rounded-lg h-48 lg:h-64 flex items-center justify-center">
                  <p className="text-gray-500 text-sm lg:text-base">Carte interactive à intégrer</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 lg:mb-6">Envoyer un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre demande..."
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 lg:py-3 px-4 lg:px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-sm lg:text-base"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
          
          {/* Carte mobile */}
          <div className="lg:hidden mt-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Localisation</h3>
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <p className="text-gray-500 text-sm">Carte interactive à intégrer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;