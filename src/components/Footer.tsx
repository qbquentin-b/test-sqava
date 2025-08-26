import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Som'Ergo</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Cabinet d'ergothérapie à Amiens, spécialisé dans l'accompagnement bienveillant 
              des enfants, adultes et seniors vers plus d'autonomie et de bien-être.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100063558730334"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/equipe" className="text-gray-300 hover:text-white transition-colors duration-200">
                  L'équipe
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Nos services
                </Link>
              </li>
              <li>
                <Link to="/rendez-vous" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Rendez-vous
                </Link>
              </li>
              <li>
                <Link to="/actualites" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Actualités
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <div>
                  <p className="text-gray-300">47 Avenue du Royaume-Uni</p>
                  <p className="text-gray-300">80090 Amiens</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <p className="text-gray-300">03 XX XX XX XX</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <p className="text-gray-300">contact@somergo.fr</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Som'Ergo - Cabinet d'Ergothérapie. Tous droits réservés.
          </p>
          <p className="text-gray-400 mt-2 flex items-center justify-center">
            Fait avec <Heart className="h-4 w-4 text-red-500 mx-1" /> pour nos patients
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;