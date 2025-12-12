export interface User {
  username: string;
  email?: string;
}

export interface Comment {
  id: string;
  user: string;
  text: string;
  date: string;
  rating: number;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  platform: string;
  rating: number;
}

export interface AuthContextType {
  user: User | null;
  login: (username: string) => void;
  logout: () => void;
}
