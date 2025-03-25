import React from 'react';
import { Plus, Search } from 'lucide-react';

export default function Notes() {
  const notes = [
    {
      title: "Vérifier les stocks",
      content: "Vérifier les stocks de produits chimiques",
      date: "2024-03-16",
      category: "Laboratoire",
      color: "bg-blue-200"
    },
    {
      title: "Fiches de sécurité",
      content: "Mettre à jour les fiches de sécurité",
      date: "2024-03-16",
      category: "Sécurité",
      color: "bg-purple-100"
    },
    {
      title: "Réunion pédagogique",
      content: "Réunion pédagogique jeudi 14h",
      date: "2024-03-16",
      category: "Réunion",
      color: "bg-pink-100"
    },
    {
      title: "Préparation TP",
      content: "Penser à préparer les TP de la semaine prochaine",
      date: "2024-03-16",
      category: "Cours",
      color: "bg-yellow-100"
    },
    {
      title: "Inventaire matériel",
      content: "Préparer l'inventaire du matériel",
      date: "2024-03-16",
      category: "Laboratoire",
      color: "bg-yellow-100"
    },
    {
      title: "Commande matériel",
      content: "Commander du matériel pour les expériences",
      date: "2024-03-16",
      category: "Laboratoire",
      color: "bg-green-100"
    },
    {
      title: "Mot de passe gaz - IMPORTANT",
      content: "Les vapeurs s'élèvent, les souvenirs s'effacent.",
      date: "2024-03-16",
      category: "Sécurité",
      color: "bg-yellow-100"
    },
    {
      title: "Préparation cours Terminale",
      content: "Points à aborder: limites, continuité, dérivation...",
      date: "2024-03-15",
      category: "Cours",
      color: "bg-blue-100"
    },
    {
      title: "Idées projet interdisciplinaire",
      content: "Collaboration possible avec prof de physique sur les fonctions...",
      date: "2024-03-12",
      category: "Projets",
      color: "bg-green-100"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Notes personnelles</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          Nouvelle note
        </button>
      </div>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Rechercher dans les notes..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="grid gap-6">
        {notes.map((note, index) => (
          <div key={index} className={`${note.color} rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-200`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{note.title}</h2>
                <span className="inline-block bg-white bg-opacity-60 text-gray-700 text-sm px-3 py-1 rounded-full mt-2">
                  {note.category}
                </span>
              </div>
              <span className="text-sm text-gray-500">{note.date}</span>
            </div>
            <p className={`${note.title.includes("IMPORTANT") ? "font-medium italic" : ""} text-gray-700`}>
              {note.content}
            </p>
            <div className="mt-4 flex justify-end space-x-2">
              <button className="text-gray-600 hover:text-gray-800 transition-colors">Modifier</button>
              <button className="text-gray-600 hover:text-gray-800 transition-colors">Supprimer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
