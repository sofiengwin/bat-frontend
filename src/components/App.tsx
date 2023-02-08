import React, {createContext, useContext, useEffect, useState} from 'react';
import {IUser} from '../models/User';
import meQuery from '../data/graphql/me';
import { gql, useLazyQuery } from "@apollo/client";

import AppLoadingModal from "./ui/AppLoadingModal";

interface IAppContext {
  user: IUser | null;
  addUser: (user: IUser) => void;
  removeUser: () => void;
  logOut: () => void;
  appLoading: boolean;
  setAppLoading: (isLoading: boolean) => void;
}

const AppContext = createContext<IAppContext>({
  user: null,
  addUser: () => null,
  removeUser: () => null,
  logOut: () => null,
  appLoading: false,
  setAppLoading: () => null,
});

const App: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [appLoading, setAppLoading] = useState<boolean>(false);
  const addUser = (user: IUser) => setUser(user);
  const removeUser = () => setUser(null);
  const logOut = () => {
    removeUser()
    localStorage.removeItem("session")
  }

  const [fetchMe, { loading, error, data }] = useLazyQuery(gql(meQuery), {
    onCompleted: (data: { me: IUser }) => {
      setUser(data.me);
      // setAppLoading(false);
    },
    onError: (error: any) => {
      console.log({ error }, "appolo error");
      // setAppLoading(false);
    },
  });

  useEffect(() => {
    fetchMe()
  }, [])

  return (
    <AppContext.Provider
      value={{ user, addUser, removeUser, appLoading, setAppLoading, logOut }}
    >
      <AppLoadingModal visible={appLoading || loading} />
      {children}
    </AppContext.Provider>
  );
};

export default App;

export const useAppContext = () => useContext<IAppContext>(AppContext);
