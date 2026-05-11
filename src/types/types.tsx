
export interface Post {
  id: string;
  title: string;
  content: string;
}

export interface AuthContextType {
  user: string | null;
  login: (name: string) => void;
  logout: () => void;
}