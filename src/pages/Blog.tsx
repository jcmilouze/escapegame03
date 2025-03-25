import React from 'react';
import { Calendar, Clock, Plus } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: "Les Tendances Tech 2025 : Entre Innovation et Responsabilité",
      excerpt: "De l'informatique quantique aux technologies vertes, découvrez les innovations qui façonnent notre avenir. Focus sur la durabilité, l'edge computing et les nouveaux paradigmes de programmation qui révolutionnent le secteur technologique.",
      date: "2024-03-15",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800"
    },
    {
      title: "L'IA dans notre Quotidien : Une Révolution Silencieuse",
      excerpt: "Comment l'intelligence artificielle transforme subtilement notre vie quotidienne, de l'éducation à la santé. Analyse des impacts positifs et des défis éthiques que pose cette technologie omniprésente.",
      date: "2024-03-10",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
    },
    {
      title: "Escape Games Mathématiques : Apprendre en s'Amusant",
      excerpt: "Les escape games pédagogiques révolutionnent l'apprentissage des mathématiques. Découvrez comment ces jeux d'évasion stimulent la réflexion logique et rendent les concepts abstraits plus concrets et engageants pour les élèves.",
      date: "2024-03-05",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=800"
    }
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Blog</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          Nouvel article
        </button>
      </div>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-gray-500 text-sm space-x-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{new Date(post.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
