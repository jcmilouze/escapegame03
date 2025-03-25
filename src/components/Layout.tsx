import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  Briefcase, 
  BookOpen, 
  StickyNote, 
  AlertTriangle,
  LogOut 
} from 'lucide-react';

export default function Layout() {
  const navigate = useNavigate();
  const location = sessionStorage.getItem('location');

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <nav className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Espace Professeurs</h2>
          <p className="text-sm text-gray-600 mt-1">
            Connecté depuis: {location === 'home' ? 'Domicile' : 'Classe'}
          </p>
        </div>
        
        <div className="py-4">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-gray-100 border-l-4 border-blue-500' : ''
              }`
            }
          >
            <Home className="w-5 h-5 mr-3" />
            Accueil
          </NavLink>

          <NavLink
            to="/cv"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-gray-100 border-l-4 border-blue-500' : ''
              }`
            }
          >
            <FileText className="w-5 h-5 mr-3" />
            CV
          </NavLink>

          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-gray-100 border-l-4 border-blue-500' : ''
              }`
            }
          >
            <Briefcase className="w-5 h-5 mr-3" />
            Portfolio
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-gray-100 border-l-4 border-blue-500' : ''
              }`
            }
          >
            <BookOpen className="w-5 h-5 mr-3" />
            Blog
          </NavLink>

          <NavLink
            to="/notes"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-gray-100 border-l-4 border-blue-500' : ''
              }`
            }
          >
            <StickyNote className="w-5 h-5 mr-3" />
            Notes personnelles
          </NavLink>

          <NavLink
            to="/emergency"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-red-600 hover:bg-red-50 ${
                isActive ? 'bg-red-50 border-l-4 border-red-500' : ''
              }`
            }
          >
            <AlertTriangle className="w-5 h-5 mr-3" />
            Procédure d'urgence
          </NavLink>
        </div>

        <div className="absolute bottom-0 w-64 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 w-full"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Se déconnecter
          </button>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
