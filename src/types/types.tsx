
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


// export interface Post {
//   id: string;
//   title: string;
//   content: string;
// }

// export interface User {
//   username: string;
// }

// export interface AuthContextType {
//   user: User | null;
//   login: (username: string) => void;
//   logout: () => void;
// }
