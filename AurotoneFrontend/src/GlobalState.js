import React from "react";

const GlobalContext = React.createContext({});


const GlobalProvider = (props) => {

  const initialState = {
    firstTime: true,
    AppName: 'Aurotone',
    siteMap: [
      'This',
      'That',
    ],
    setState: (newState) => {
      updateState((state) => {
        return { ...state, ...newState };
      });
    },
  };

  const [state, updateState] = React.useState(initialState);

  return (
    <GlobalContext.Provider value={state}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };