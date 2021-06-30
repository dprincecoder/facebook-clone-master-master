import React, { createContext, useContext, useReducer } from 'react'    //create context api, react hooks, reducers from react

export const StateContext = createContext();

//use provider that can take a parameter either string, boolean or number
export const StateProvider = ({ reducer, initialState, children }) =>
  (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


export const useStateValue = () =>  useContext(StateContext);