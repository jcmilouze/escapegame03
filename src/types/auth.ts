export interface LoginCredentials {
  username: string;
  password: string;
  location: 'home' | 'classroom';
}

export interface ValidationErrors {
  username?: string;
  password?: string;
}
