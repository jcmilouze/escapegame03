import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CV from './pages/CV';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Notes from './pages/Notes';
import Emergency from './pages/Emergency';
import Success from './pages/Success';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
  const location = useLocation();
  
  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

interface LoginCredentials {
  username: string;
  password: string;
  location: 'home' | 'classroom';
}

interface ValidationErrors {
  username?: string;
  password?: string;
}

const VALID_CREDENTIALS = {
  username: 'SIMONI',
  password: '000000'
};

interface LoginProps {
  onLogin: () => void;
}

function Login({ onLogin }: LoginProps) {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: '',
    password: '',
    location: 'classroom'
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showPasswordHelp, setShowPasswordHelp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateField = (name: keyof LoginCredentials, value: string) => {
    if (name === 'username') {
      if (!value) return 'Le nom d\'utilisateur est requis';
      if (value.length < 3) return 'Le nom d\'utilisateur doit contenir au moins 3 caractères';
    }
    if (name === 'password') {
      if (!value) return 'Le mot de passe est requis';
      if (value.length < 6) return 'Le mot de passe doit contenir au moins 6 caractères';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const transformedValue = name === 'username' ? value.toUpperCase() : value;
    
    setCredentials(prev => ({ ...prev, [name]: transformedValue }));
    
    if (name === 'username' || name === 'password') {
      const error = validateField(name, transformedValue);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
    setShowError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShowError(false);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (
      credentials.username === VALID_CREDENTIALS.username &&
      credentials.password === VALID_CREDENTIALS.password
    ) {
      // Store session data securely
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('location', credentials.location);
      onLogin();
    } else {
      setShowError(true);
    }

    setIsLoading(false);
  };

  const isValid = !errors.username && !errors.password && 
    credentials.username && credentials.password;

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Espace Professeurs</h1>
          <div className="relative inline-block mt-4">
            <img
              src="https://filedn.eu/l2dkKFuRGueFx6uQAnQW97B/teacher.svg"
              alt="Teacher Avatar"
              className="w-24 h-24 rounded-full border-4 border-gray-200"
            />
          </div>
        </div>

        <div className="mt-4">
          <p className="text-gray-700 mb-3 text-center">Mode de connexion</p>
          <div className="flex items-center justify-center gap-6 mb-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="location"
                value="home"
                checked={credentials.location === 'home'}
                onChange={handleChange}
                className="w-4 h-4 text-green-600 mr-2 focus:ring-0 focus:ring-offset-0"
              />
              <span className="text-gray-700">Domicile</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="location"
                value="classroom"
                checked={credentials.location === 'classroom'}
                onChange={handleChange}
                className="w-4 h-4 text-green-600 mr-2 focus:ring-0 focus:ring-offset-0"
              />
              <span className="text-gray-700">Dans la classe</span>
            </label>
            <button
              type="button"
              onClick={() => setShowPasswordHelp(!showPasswordHelp)}
              className="ml-2"
            >
              <HelpCircle className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Identifiant *
            </label>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 ${
                errors.username ? 'border-red-500' : ''
              }`}
              placeholder="Saisissez votre identifiant"
              autoComplete="username"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mot de passe *
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 ${
                  errors.password ? 'border-red-500' : ''
                }`}
                placeholder="Saisissez votre mot de passe"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400"
              >
                <Eye className="w-5 h-5" />
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {showError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Erreur!</strong>
              <span className="block sm:inline"> Identifiants incorrects. Veuillez réessayer.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={!isValid || isLoading}
            className="w-full py-2 px-4 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                Vérification...
              </span>
            ) : (
              'Se connecter'
            )}
          </button>
        </form>
        <div className="flex justify-between mt-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/fr/3/38/Logo_de_la_R%C3%A9publique_fran%C3%A7aise_%281999%29.svg"
            alt="République Française"
            className="h-8"
          />
           <img
            src="https://upload.wikimedia.org/wikipedia/fr/7/72/Logo_de_l%27%C3%89ducation_Nationale_%28depuis_2021%29.svg"
            alt="Logo de l'Éducation Nationale"
            className="h-8"
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('isAuthenticated') === 'true');

  useEffect(() => {
    setIsAuthenticated(sessionStorage.getItem('isAuthenticated') === 'true');
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <Login onLogin={() => setIsAuthenticated(true)} /> : <Navigate to="/home" replace />} />
        <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="home" element={<Home />} />
          <Route path="cv" element={<CV />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="notes" element={<Notes />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="success" element={<Success />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
        <Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
