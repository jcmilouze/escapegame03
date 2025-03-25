import React, { useState, useEffect } from 'react';
import { CircleUserRound, Calendar, Clock, ListTodo, CheckSquare } from 'lucide-react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    return date.toLocaleDateString('fr-FR', options);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const tasks = [
    { id: 1, title: "Mettre à jour le portfolio des expériences pédagogiques", time: "14:30", completed: false },
    { id: 2, title: "Préparer la présentation pour le conseil pédagogique", time: "16:00", completed: true },
    { id: 3, title: "Rédiger le rapport d'activités du trimestre", time: "17:30", completed: false },
    { id: 4, title: "Planifier les ateliers scientifiques de la semaine prochaine", time: "18:00", completed: false },
    { id: 5, title: "Réviser les supports de cours de physique-chimie", time: "Demain", completed: false }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg shadow-lg p-6 mb-6 text-white">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <CircleUserRound className="w-8 h-8" />
              Bienvenue dans votre espace
            </h1>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {formatDate(currentTime)}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {formatTime(currentTime)}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ListTodo className="w-6 h-6 text-gray-500" />
            Tâches du jour
          </h2>
          <div className="space-y-3">
            {tasks.map(task => (
              <div 
                key={task.id} 
                className={`flex items-center justify-between p-3 rounded ${
                  task.completed ? 'bg-green-50 line-through text-gray-500' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <CheckSquare className={`w-5 h-5 ${task.completed ? 'text-green-500' : 'text-gray-400'}`} />
                  <span>{task.title}</span>
                </div>
                <span className="text-sm text-gray-500">{task.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Statistiques</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-gray-600 mb-2">Tâches complétées</h3>
              <p className="text-3xl font-bold text-gray-800">1/5</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-gray-600 mb-2">Prochaine échéance</h3>
              <p className="text-3xl font-bold text-gray-800">14:30</p>
              <p className="text-sm text-gray-500">Mise à jour du portfolio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
