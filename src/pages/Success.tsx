import React from 'react';
import { Trophy, Users, MapPin, Volume2 } from 'lucide-react';

export default function Success() {
  return (
    <div className="fixed inset-0 bg-[#0a0f1a] text-white">
      <div className="max-w-4xl mx-auto p-8">
        <div className="mb-12">
          <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4 mb-8 animate-pulse">
            <h1 className="text-2xl font-mono flex items-center gap-3 text-red-500">
              ⚠️ ÉVACUATION IMMÉDIATE
            </h1>
            <p className="text-red-400 mt-2">
              La porte est déverrouillée. Suivez les consignes d'évacuation.
            </p>
          </div>

          <div className="bg-[#1a1812] border border-yellow-500/30 rounded-lg p-8 text-center mb-8">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-mono text-yellow-500 mb-4">
              Félicitations ! 🎉
            </h2>
            <p className="text-yellow-400">
              Vous avez brillamment réussi l'escape game en 11 minutes et 41 secondes ! 
              Votre esprit d'équipe, votre logique et votre persévérance ont payé.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-[#111827] rounded-lg p-6 border border-blue-900/30">
              <h3 className="text-xl font-mono mb-4 flex items-center gap-2 text-blue-500">
                <MapPin className="w-5 h-5" />
                Point de rassemblement
              </h3>
              <p className="text-gray-400">
                Plateau sportif
              </p>
            </div>

            <div className="bg-[#111827] rounded-lg p-6 border border-blue-900/30">
              <h3 className="text-xl font-mono mb-4 flex items-center gap-2 text-blue-500">
                <Volume2 className="w-5 h-5" />
                Consignes sonores
              </h3>
              <p className="text-gray-400">
                Suivez les instructions diffusées par le système de sonorisation.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-[#111827] rounded-lg p-6 border border-red-900/30">
            <h3 className="text-xl font-mono mb-4 flex items-center gap-2 text-red-500">
              <Users className="w-5 h-5" />
              Procédure d'évacuation
            </h3>
            <ol className="space-y-4 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-red-500">1.</span>
                Quittez immédiatement le bâtiment
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">2.</span>
                Suivez les panneaux de sortie de secours
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">3.</span>
                Rejoignez le point de rassemblement
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
