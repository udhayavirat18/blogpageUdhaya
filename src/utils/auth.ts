import { User } from '../types';

const ADMIN_EMAIL = 'admin@travelblog.com';
const ADMIN_PASSWORD = 'admin123';

export const validateCredentials = (email: string, password: string): User | null => {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return {
      id: '1',
      username: 'Admin',
      role: 'admin'
    };
  }
  
  // For regular users, just check if the email is valid
  if (email && password.length >= 6) {
    return {
      id: Date.now().toString(),
      username: email.split('@')[0],
      role: 'user'
    };
  }

  return null;
};