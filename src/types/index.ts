export interface Post {
  id: string;
  title: string;
  content: string;
  country: string;
  createdAt: string;
}

export interface User {
  id: string;
  username: string;
  role: 'admin' | 'user';
}