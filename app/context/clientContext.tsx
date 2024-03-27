"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type User = {
  username: string;
  email: string;
  profileImage: string;
  isAdmin: boolean;
  isMod: boolean;
  isMember: boolean;
  isBanned: boolean;
};

export interface UserContextInterface {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  logout: () => void; // Add a logout function
}

const defaultUser: User = {
  username: "",
  email: "",
  profileImage: "",
  isAdmin: false,
  isMod: false,
  isMember: false,
  isBanned: false,
};

const defaultState = {
  user: defaultUser,
  setUser: () => {},
  logout: () => {}, // Initialize logout function with an empty function
} as UserContextInterface;

export const ClientContext = createContext<UserContextInterface>(defaultState);

type UserProviderProps = {
  children: ReactNode;
};

export default function ClientProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>(defaultUser);

  // Function to clear the user context (logout)
  const logout = () => {
    setUser(defaultUser);
  };

  return (
    <ClientContext.Provider value={{ user, setUser, logout }}>
      {children}
    </ClientContext.Provider>
  );
}
