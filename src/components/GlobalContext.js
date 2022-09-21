import React, { createContext, useReducer, useEffect } from 'react';
import { Reducer } from '../components/Reducer';

export const GlobalContext = createContext();

const GlobalContextProvider = props => {
  const [data, dispatch] = useReducer(Reducer, [], () => {
    const localData = localStorage.getItem('data');
    return localData ? JSON.parse(localData) : [];
  }); //useReducer accepts a reducer of type (state,action)=> NewState,and returns the new state passed with a dispatch method
  useEffect(() => {
    console.log(props.children);
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);
  return (
    <GlobalContext.Provider value={{ data, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
