//setup of data layer 
//we need this to track basket

import React,{createContext,useContext,useReducer } from "react";

//This is data layer
export const StateContext=createContext();

//Build a Provider
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)
/*
'initialState' is a initial state of data layer that what data layer
look initially or in start.

'reducer'  is where all logic of datalayer is written 

 'children' is app  
*/

// This is how we use it inside of a component
export const useStateValue = ()=> useContext(StateContext);

export default StateContext;