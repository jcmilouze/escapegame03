import React, { useState, useEffect } from 'react';
import { AlertTriangle, Power, Wind, Activity, Lock, Radiation, Skull, Siren, Shield, XCircle, ArrowRight, HelpCircle, Loader2 } from 'lucide-react';

const GAS_CODE = '00000';
const VENTILATION_CODE = '11111';
const DOOR_CODE = '22222';

const VALID_CREDENTIALS = {
  username: 'SIMONI',
  password: '000000'
};

const VENTILATION_ERROR_MESSAGES = [
  "Pas de panique, une simple erreur peut transformer un petit problème en une catastrophe monumentale. Bravo, champion !",
  "Appuyez sur ce bouton rouge, qu'est-ce qui pourrait mal tourner ? Oh, juste tout.",
  "Se tromper, c'est humain. Mais déclencher l'irréparable, c'est du grand art !",
  "Une mauvaise décision ? Pas grave, c'est juste votre avenir qui part en fumée.",
  "Rassurez-vous, il n'y a pas de retour en arrière... mais au moins, vous avez appris une leçon que vous ne pourrez jamais appliquer."
];

const DOOR_ERROR_MESSAGES = [
  "La porte reste fermée, comme votre esprit apparemment...",
  "Essayez encore ! La persévérance est la clé... mais pas celle-ci.",
  "Raté ! Mais ne vous inquiétez pas, vous finirez bien par sortir... un jour.",
  "C'est presque ça ! Non, en fait, pas du tout.",
  "La liberté est à portée de main... mais pas avec ce code !"
];

const ERROR_MESSAGES = [
  "Pas de panique, une simple erreur peut transformer un petit problème en une catastrophe monumentale. Bravo, champion !",
  "Appuyez sur ce bouton rouge, qu'est-ce qui pourrait mal tourner ? Oh, juste tout.",
  "Se tromper, c'est humain. Mais déclencher l'irréparable, c'est du grand art !",
  "Une mauvaise décision ? Pas grave, c'est juste votre avenir qui part en fumée.",
  "Rassurez-vous, il n'y a pas de retour en arrière... mais au moins, vous avez appris une leçon que vous ne pourrez jamais appliquer."
];

const CANCEL_MESSAGES = [
  "La lâcheté est une fuite en avant, surtout quand on court dans le mauvais sens.",
  "Fuir est une stratégie intelligente, surtout si l'on ne sait pas où aller.",
  "La fuite est une forme d'audace, pour ceux qui n'ont pas le courage de rester."
];

export default function Emergency() {
  const [showLogin, setShowLogin] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [procedureStarted, setProcedureStarted] = useState(false);
  const [showGasSystem, setShowGasSystem] = useState(false);
  const [gasPressure, setGasPressure] = useState(100);
  const [systemStatus, setSystemStatus] = useState('ON');
  const [securityCode, setSecurityCode] = useState<string>('');
  const [isDeactivating, setIsDeactivating] = useState(false);
  const [showVentilation, setShowVentilation] = useState(false);
  const [airQuality, setAirQuality] = useState(20);
  const [fanSpeed, setFanSpeed] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [ventilationActive, setVentilationActive] = useState(false);
  const [showDoorSystem, setShowDoorSystem] = useState(false);
  const [doorUnlocked, setDoorUnlocked] = useState(false);
  const [verificationSteps, setVerificationSteps] = useState({
    gas: false,
    ventilation: false,
    door: false
  });
  const [redirectCountdown, setRedirectCountdown] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState<'gas' | 'ventilation' | 'door'>('gas');
  const [isSuccess, setIsSuccess] = useState(false);

  // Login state
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [loginErrors, setLoginErrors] = useState({
    username: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showLoginError, setShowLoginError] = useState(false);
  const [showPasswordHelp, setShowPasswordHelp] = useState(false);

  const validateField = (name: string, value: string) => {
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

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const transformedValue = name === 'username' ? value.toUpperCase() : value;
    
    setCredentials(prev => ({ ...prev, [name]: transformedValue }));
    
    const error = validateField(name, transformedValue);
    setLoginErrors(prev => ({ ...prev, [name]: error }));
    setShowLoginError(false);
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShowLoginError(false);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (
      credentials.username === VALID_CREDENTIALS.username &&
      credentials.password === VALID_CREDENTIALS.password
    ) {
      setShowLogin(false);
    } else {
      setShowLoginError(true);
    }

    setIsLoading(false);
  };

  const handleCodeSubmit = () => {
    setErrorMessage('');
    setIsSuccess(false);
    
    if (currentStep === 'gas' && securityCode === GAS_CODE) {
      setIsSuccess(true);
      setIsDeactivating(true);
      
      const interval = setInterval(() => {
        setGasPressure(prev => {
          if (prev <= 0) {
            clearInterval(interval);
            setSystemStatus('OFF');
            setVerificationSteps(prev => ({ ...prev, gas: true }));
            setTimeout(() => {
              setCurrentStep('ventilation');
            }, 1000);
            return 0;
          }
          return prev - 1;
        });
      }, 50);
    } else if (currentStep === 'ventilation' && securityCode === VENTILATION_CODE) {
      setIsSuccess(true);
      setVentilationActive(true);
      let quality = airQuality;
      let speed = fanSpeed;
      
      const interval = setInterval(() => {
        if (quality < 100 || speed < 100) {
          if (quality < 100) quality += 1;
          if (speed < 100) speed += 1;
          
          setAirQuality(quality);
          setFanSpeed(speed);
        } else {
          clearInterval(interval);
          setVerificationSteps(prev => ({ ...prev, ventilation: true }));
          setTimeout(() => {
            setCurrentStep('door');
          }, 1000);
        }
      }, 50);
    } else if (currentStep === 'door' && securityCode === DOOR_CODE) {
      setIsSuccess(true);
      setDoorUnlocked(true);
      setVerificationSteps(prev => ({ ...prev, door: true }));
      
      setTimeout(() => {
        setRedirectCountdown(5);
        
        const redirectTimer = setInterval(() => {
          setRedirectCountdown(prev => {
            if (prev <= 1) {
              clearInterval(redirectTimer);
              window.location.href = '/success';
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }, 1000);
    } else {
      const messages = currentStep === 'door' ? DOOR_ERROR_MESSAGES : 
                      showVentilation ? VENTILATION_ERROR_MESSAGES : 
                      ERROR_MESSAGES;
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setErrorMessage(randomMessage);
      setSecurityCode('');
    }
  };

  useEffect(() => { 
    if (showVentilation) {
      setAirQuality(20);
      setFanSpeed(0);
      setSecurityCode('');
      setVentilationActive(false);
      setErrorMessage('');
    }
  }, [showVentilation]);

  useEffect(() => {
    if (showDoorSystem) {
      setSecurityCode('');
      setDoorUnlocked(false);
    }
  }, [showDoorSystem]);

  if (showLogin) {
    return (
      <div className="fixed inset-0 bg-[#0a0f1a] text-white">
        <div className="max-w-md mx-auto p-8">
          <div className="bg-[#2a1f1f] rounded-lg p-6 border border-red-900/30">
            <h1 className="text-2xl font-mono flex items-center gap-3 text-red-500 mb-6">
              <AlertTriangle className="w-6 h-6" />
              ACCÈS SÉCURISÉ
            </h1>

            <form onSubmit={handleLoginSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Identifiant *
                </label>
                <div className="relative flex">
                  <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleLoginChange}
                    className={`w-full bg-[#0a0f1a] border ${
                      loginErrors.username ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg px-4 py-3 text-white font-mono tracking-[0.25em]`}
                    placeholder="Entrez votre identifiant"
                    autoComplete="username"
                  />
                </div>
                {loginErrors.username && (
                  <p className="text-red-500 text-sm mt-1">{loginErrors.username}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Mot de passe *
                </label>
                <div className="relative flex">
                  <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleLoginChange}
                    className={`w-full bg-[#0a0f1a] border ${
                      loginErrors.password ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg px-4 py-3 text-white font-mono tracking-[0.25em]`}
                    placeholder="Entrez votre mot de passe"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswordHelp(!showPasswordHelp)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <HelpCircle className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                {loginErrors.password && (
                  <p className="text-red-500 text-sm mt-1">{loginErrors.password}</p>
                )}
              </div>

              {showLoginError && (
                <div className="bg-red-900/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg">
                  Identifiants incorrects. Veuillez réessayer.
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-red-600 hover:bg-red-500 rounded-lg text-white font-medium transition-all"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                    Vérification...
                  </span>
                ) : (
                  'Accéder à la procédure'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const startProcedure = () => {
    setShowConfirmation(false);
    setProcedureStarted(true);
  };

  if (showConfirmation) {
    return (
      <div className="fixed inset-0 bg-[#0a0f1a] text-white">
        <div className="max-w-2xl mx-auto p-8">
          <div className="bg-[#2a1f1f] rounded-lg p-6 border border-red-900/30">
            <h1 className="text-2xl font-mono flex items-center gap-3 text-red-500 mb-6">
              <AlertTriangle className="w-6 h-6" />
              PROCÉDURE D'URGENCE
            </h1>

            <div className="bg-[#3a1f1f] rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 text-xl text-yellow-500 mb-4">
                <Shield className="w-6 h-6" />
                <span>ATTENTION - Action Irréversible</span>
              </div>

              <p className="text-gray-300 mb-4">
                Vous êtes sur le point de démarrer la procédure d'urgence. Cette action est IRRÉVERSIBLE
                et aura les conséquences suivantes :
              </p>

              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  La procédure ne peut pas être interrompue une fois commencée
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  Toute interruption ou sortie entraînera la perte du temps restant
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  La partie se terminera automatiquement si vous quittez la procédure
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  L'accès aux autres sections du site sera bloqué jusqu'à la fin de la procédure
                </li>
              </ul>

              <div className="bg-[#4a1f1f] rounded-lg p-4 mb-6">
                <p className="text-yellow-500 text-center">
                  Êtes-vous sûr(e) de vouloir continuer ? Cette action ne peut pas être annulée.
                </p>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  onClick={() => window.history.back()}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                  <XCircle className="w-5 h-5" />
                  Annuler
                </button>
                <button
                  onClick={startProcedure}
                  className="flex items-center gap-2 px-6 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition-colors"
                >
                  Démarrer la procédure
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#0a0f1a] text-white">
      <div className="max-w-2xl mx-auto p-8">
        <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4 mb-8 animate-pulse">
          <h1 className="text-2xl font-mono flex items-center gap-3 text-red-500">
            <AlertTriangle className="w-6 h-6 animate-bounce" />
            Procédure d'Urgence
            <Siren className="w-6 h-6 animate-spin ml-auto" />
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <Radiation className="w-4 h-4 text-yellow-500 animate-pulse" />
            <span className="text-yellow-500 text-sm">Niveau d'alerte: CRITIQUE</span>
            <Skull className="w-4 h-4 text-red-500 animate-pulse ml-auto" />
          </div>
        </div>

        <div className="space-y-6">
          {/* Gas System */}
          <div className={`bg-[#111827] rounded-lg p-6 border transition-all duration-300 ${
            currentStep === 'gas' ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' : 
            verificationSteps.gas ? 'border-green-500/50 opacity-50 scale-95' : 'border-gray-800'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <Power className={`w-6 h-6 ${
                verificationSteps.gas ? 'text-green-500' : 
                currentStep === 'gas' ? 'text-blue-500 animate-pulse' : 'text-blue-500'
              }`} />
              <h2 className="text-xl font-mono">Système de Gaz</h2>
            </div>
            
            {currentStep === 'gas' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Activity className={`w-4 h-4 ${gasPressure > 50 ? 'text-red-500' : 'text-yellow-500'}`} />
                    <span>Pression: {gasPressure}%</span>
                  </div>
                  <span className={`${systemStatus === 'ON' ? 'text-red-500' : 'text-green-500'}`}>
                    {systemStatus}
                  </span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      gasPressure > 50 ? 'bg-red-500' : 'bg-yellow-500'
                    }`}
                    style={{ width: `${gasPressure}%` }}
                  />
                </div>
                
                <div className="relative">
                  <input
                    type="password"
                    value={securityCode}
                    onChange={(e) => setSecurityCode(e.target.value)}
                    className={`w-full bg-[#0a0f1a] border ${
                      isSuccess ? 'border-green-500' : errorMessage ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg px-4 py-3 text-white font-mono tracking-[0.25em]`}
                    placeholder="Entrez le code de sécurité"
                    maxLength={5}
                  />
                  <button
                    onClick={handleCodeSubmit}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400 transition-colors"
                  >
                    <Lock className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                
                {errorMessage && (
                  <p className="text-red-500 text-sm italic">{errorMessage}</p>
                )}
              </div>
            )}
          </div>

          {/* Ventilation System */}
          <div className={`bg-[#111827] rounded-lg p-6 border transition-all duration-300 ${
            currentStep === 'ventilation' ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' : 
            verificationSteps.ventilation ? 'border-green-500/50 opacity-50 scale-95' : 'border-gray-800'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <Wind className={`w-6 h-6 ${
                verificationSteps.ventilation ? 'text-green-500' : 
                currentStep === 'ventilation' ? 'text-blue-500 animate-spin' : 'text-blue-500'
              }`} />
              <h2 className="text-xl font-mono">Système de Ventilation</h2>
            </div>
            
            {currentStep === 'ventilation' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Qualité de l'air: {airQuality}%</span>
                  <span>Vitesse: {fanSpeed}%</span>
                </div>
                
                <div className="relative">
                  <input
                    type="password"
                    value={securityCode}
                    onChange={(e) => setSecurityCode(e.target.value)}
                    className={`w-full bg-[#0a0f1a] border ${
                      isSuccess ? 'border-green-500' : errorMessage ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg px-4 py-3 text-white font-mono tracking-[0.25em]`}
                    placeholder="Entrez le code de sécurité"
                    maxLength={5}
                  />
                  <button
                    onClick={handleCodeSubmit}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400 transition-colors"
                  >
                    <Lock className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                
                {errorMessage && (
                  <p className="text-red-500 text-sm italic">{errorMessage}</p>
                )}
              </div>
            )}
          </div>

          {/* Door System */}
          <div className={`bg-[#111827] rounded-lg p-6 border transition-all duration-300 ${
            currentStep === 'door' ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' : 
            verificationSteps.door ? 'border-green-500/50 opacity-50 scale-95' : 'border-gray-800'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <Lock className={`w-6 h-6 ${
                verificationSteps.door ? 'text-green-500' : 
                currentStep === 'door' ? 'text-blue-500 animate-pulse' : 'text-blue-500'
              }`} />
              <h2 className="text-xl font-mono">Système de Verrouillage</h2>
            </div>
            
            {currentStep === 'door' && (
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="password"
                    value={securityCode}
                    onChange={(e) => setSecurityCode(e.target.value)}
                    className={`w-full bg-[#0a0f1a] border ${
                      isSuccess ? 'border-green-500' : errorMessage ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg px-4 py-3 text-white font-mono tracking-[0.25em]`}
                    placeholder="Entrez le code de sécurité"
                    maxLength={5}
                  />
                  <button
                    onClick={handleCodeSubmit}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400 transition-colors"
                  >
                    <Lock className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                
                {errorMessage && (
                  <p className="text-red-500 text-sm italic">{errorMessage}</p>
                )}
                
                {redirectCountdown !== null && (
                  <div className="text-center text-green-500">
                    <div className="animate-bounce">
                      Redirection dans {redirectCountdown} secondes...
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 flex justify-between">
          <div className={`h-2 w-1/3 rounded-l ${
            verificationSteps.gas ? 'bg-green-500 animate-pulse' : 'bg-gray-700'
          }`} />
          <div className={`h-2 w-1/3 ${
            verificationSteps.ventilation ? 'bg-green-500 animate-pulse' : 'bg-gray-700'
          }`} />
          <div className={`h-2 w-1/3 rounded-r ${
            verificationSteps.door ? 'bg-green-500 animate-pulse' : 'bg-gray-700'
          }`} />
        </div>
        
        {/* Step Labels */}
        <div className="mt-2 flex justify-between text-xs text-gray-500">
          <div className={verificationSteps.gas ? 'text-green-500' : ''}>
            Gaz
          </div>
          <div className={verificationSteps.ventilation ? 'text-green-500' : ''}>
            Ventilation
          </div>
          <div className={verificationSteps.door ? 'text-green-500' : ''}>
            Porte
          </div>
        </div>
      </div>
    </div>
  );
}
