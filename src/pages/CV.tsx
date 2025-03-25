import React from 'react';
import { Mail, Phone, Link2 } from 'lucide-react';

export default function CV() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 flex items-start gap-6">
          <img
            src="https://filedn.eu/l2dkKFuRGueFx6uQAnQW97B/image.png"
            alt="Anne Simoni"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800">Anne Simoni</h1>
            <p className="text-lg text-blue-600 mb-4">Enseignante en Physique-Chimie</p>
            
            <div className="space-y-2">
              <a href="mailto:Anne.Simoni@email.com" className="flex items-center text-gray-600 hover:text-gray-800">
                <Mail className="w-4 h-4 mr-2" />
                Anne.Simoni@email.com
              </a>
              <p className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                06 12 34 56 78
              </p>
              <a href="https://linkedin.com/in/Anne-Simoni" className="flex items-center text-gray-600 hover:text-gray-800">
                <Link2 className="w-4 h-4 mr-2" />
                linkedin.com/in/Anne-Simoni
              </a>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Profil Professionnel</h2>
          <p className="text-gray-600 leading-relaxed">
            Enseignante expérimentée en physique-chimie, passionnée par la transmission des savoirs scientifiques et
            l'accompagnement pédagogique des élèves. Forte de plus de 15 ans d'expérience dans l'enseignement secondaire, je
            m'investis dans la réussite scolaire et le développement des compétences des jeunes générations.
          </p>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Expériences Professionnelles</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">Professeure de Physique-Chimie</h3>
                <span className="text-blue-600">2010 - Présent</span>
              </div>
              <p className="text-gray-600 mb-2">Lycée Professionnel Bort-Artense, Corrèze</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Enseignement de la physique-chimie à des élèves de lycée professionnel, avec une pédagogie adaptée aux besoins spécifiques.</li>
                <li>Conception et mise en œuvre de cours interactifs pour favoriser l'apprentissage pratique et théorique.</li>
                <li>Participation active aux conseils de classe et à l'élaboration des projets pédagogiques de l'établissement.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">Enseignante Contractuelle</h3>
                <span className="text-blue-600">2008 - 2010</span>
              </div>
              <p className="text-gray-600 mb-2">Académie de Nice</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Enseignement de la physique-chimie dans plusieurs établissements secondaires.</li>
                <li>Adaptation rapide à différents environnements scolaires et niveaux d'élèves.</li>
                <li>Organisation d'ateliers scientifiques pour stimuler l'intérêt des élèves pour les sciences.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-6">Formation</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">CAPES Physique-Chimie</h3>
              <p className="text-gray-600">2008</p>
            </div>
            <div>
              <h3 className="font-semibold">Master Sciences de la Matière</h3>
              <p className="text-gray-600">Université de Nice Sophia Antipolis, Nice</p>
              <p className="text-gray-600">2006 - 2008</p>
            </div>
            <div>
              <h3 className="font-semibold">Licence Sciences Physiques</h3>
              <p className="text-gray-600">2006</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Compétences</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-blue-700">Pédagogie différenciée</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-blue-700">Expérimentation scientifique</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-blue-700">Gestion de classe</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-blue-700">Travail en équipe</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-blue-700">Innovation pédagogique</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-blue-700">Accompagnement personnalisé</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
