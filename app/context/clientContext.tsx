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
}

const defaultState = {
  user: {
    username: "",
    email: "",
    profileImage: "",
    isAdmin: false,
    isMod: false,
    isMember: false,
    isBanned: false,
  },
  setUser: (user: User) => {},
} as UserContextInterface;

export const ClientContext = createContext<UserContextInterface>(defaultState);

type UserProviderProps = {
  children: ReactNode;
};

export default function ClientProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    profileImage: "",
    isAdmin: false,
    isMod: false,
    isMember: false,
    isBanned: false,
  });

  return (
    <ClientContext.Provider value={{ user, setUser }}>
      {children}
    </ClientContext.Provider>
  );
}
