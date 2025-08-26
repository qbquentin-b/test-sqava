import React, { useState } from 'react';
import { Calendar, Clock, Phone, Mail } from 'lucide-react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Votre demande de rendez-vous a été envoyée. Nous vous recontacterons rapidement.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
              Prendre rendez-vous
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Prenez rendez-vous facilement avec nos ergothérapeutes. 
              Nous vous recontacterons rapidement pour confirmer votre créneau.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 lg:mb-6">Informations pratiques</h3>
              
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-base lg:text-lg font-semibold text-gray-900">Horaires d'ouverture</h4>
                    <p className="text-sm lg:text-base text-gray-600">Lundi - Vendredi : 8h00 - 18h00</p>
                    <p className="text-sm lg:text-base text-gray-600">Samedi : 9h00 - 12h00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-base lg:text-lg font-semibold text-gray-900">Téléphone</h4>
                    <p className="text-sm lg:text-base text-gray-600">03 XX XX XX XX</p>
                    <p className="text-xs lg:text-sm text-gray-500">Appel direct pour urgences</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-base lg:text-lg font-semibold text-gray-900">Email</h4>
                    <p className="text-sm lg:text-base text-gray-600">contact@somergo.fr</p>
                    <p className="text-xs lg:text-sm text-gray-500">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-base lg:text-lg font-semibold text-gray-900">Durée des séances</h4>
                    <p className="text-sm lg:text-base text-gray-600">45 minutes - 1 heure</p>
                    <p className="text-xs lg:text-sm text-gray-500">Selon les besoins</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 lg:mb-6">Demander un rendez-vous</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
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
                    <label htmlFor="phone" className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
                    />
                  </div>
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
                  <label htmlFor="service" className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                    Service souhaité *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
                  >
                    <option value="">Choisir un service</option>
                    <option value="pediatrie">Pédiatrie</option>
                    <option value="adultes">Adultes</option>
                    <option value="seniors">Seniors</option>
                    <option value="ergonomie">Ergonomie au travail</option>
                    <option value="domicile">Visite à domicile</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                      Date souhaitée
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                      Heure souhaitée
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
                    >
                      <option value="">Choisir un créneau</option>
                      <option value="8h00">8h00</option>
                      <option value="9h00">9h00</option>
                      <option value="10h00">10h00</option>
                      <option value="11h00">11h00</option>
                      <option value="14h00">14h00</option>
                      <option value="15h00">15h00</option>
                      <option value="16h00">16h00</option>
                      <option value="17h00">17h00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm lg:text-base font-medium text-gray-700 mb-2">
                    Message (optionnel)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez brièvement votre demande..."
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 lg:py-3 px-4 lg:px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl text-sm lg:text-base"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;