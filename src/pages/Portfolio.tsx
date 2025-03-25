import React from 'react';
import { Plus, FlaskRound as Flask, Lightbulb, Zap } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "L'expérience de la Flamme Bleue",
      description: "Une démonstration fascinante de la chimie des sels métalliques ! Les élèves ont découvert comment différents composés peuvent produire des flammes de couleurs spectaculaires. Un moment magique qui allie science et émerveillement.",
      image: "https://filedn.eu/l2dkKFuRGueFx6uQAnQW97B/image%20(1).jpg",
      quote: "'C'est comme de la magie, mais c'est de la science !'",
      tags: ["#ExperienceScientifique", "#PhysiqueChimie"]
    },
    {
      title: "La Réaction Catalytique",
      description: "Une expérience captivante sur les réactions catalytiques. Les élèves ont pu observer comment un catalyseur peut accélérer une réaction chimique, créant un spectacle visuel impressionnant avec des changements de couleur instantanés.",
      image: "https://filedn.eu/l2dkKFuRGueFx6uQAnQW97B/image%20(2).jpg",
      quote: "'Les changements de couleur étaient incroyables !'",
      tags: ["#ExperienceScientifique", "#PhysiqueChimie"]
    },
    {
      title: "L'Électrolyse en Action",
      description: "Une démonstration puissante de l'électrolyse qui montre la décomposition de l'eau en hydrogène et oxygène. Les élèves ont été fascinés par la formation des bulles et la compréhension des principes électrochimiques.",
      image: "https://filedn.eu/l2dkKFuRGueFx6uQAnQW97B/image%20(3).jpg",
      quote: "'Voir l'eau se transformer en gaz, c'est impressionnant !'",
      tags: ["#ExperienceScientifique", "#PhysiqueChimie"]
    },
    {
      title: "La Cristallisation Instantanée",
      description: "Une expérience surprenante sur la cristallisation instantanée d'une solution supersaturée. Les élèves ont été émerveillés de voir des cristaux se former sous leurs yeux en quelques secondes.",
      image: "https://filedn.eu/l2dkKFuRGueFx6uQAnQW97B/image%20(4).jpg",
      quote: "'C'est comme si on créait des cristaux magiques !'",
      tags: ["#ExperienceScientifique", "#PhysiqueChimie"]
    },
    {
      title: "Les Réactions en Chaîne",
      description: "Une série de réactions chimiques en chaîne qui illustrent les principes de cause à effet en chimie. Les élèves ont appris comment une réaction peut en déclencher une autre, créant un spectacle scientifique fascinant.",
      image: "https://filedn.eu/l2dkKFuRGueFx6uQAnQW97B/image%20(5).jpg",
      quote: "'Chaque étape était plus surprenante que la précédente !'",
      tags: ["#ExperienceScientifique", "#PhysiqueChimie"]
    },
    {
      title: "L'Analyse Spectrale",
      description: "Une exploration des spectres lumineux et de leur analyse. Les élèves ont découvert comment la lumière peut nous révéler la composition chimique des substances, ouvrant une fenêtre sur l'invisible.",
      image: "https://filedn.eu/l2dkKFuRGueFx6uQAnQW97B/image%20(6).jpg",
      quote: "'Je ne savais pas que la lumière pouvait nous dire tant de choses !'",
      tags: ["#ExperienceScientifique", "#PhysiqueChimie"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Portfolio d'Expériences</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Nouvelle expérience
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Flask className="w-5 h-5 text-blue-600" />
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4">
                  {project.quote}
                </blockquote>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <blockquote className="text-gray-700 italic text-center">
          "N'oubliez jamais : la science est partout autour de nous, et chaque expérience est une nouvelle opportunité d'apprentissage !"
        </blockquote>
        <p className="text-right mt-2 text-gray-600">- Mme Simoni</p>
      </div>
    </div>
  );
}
