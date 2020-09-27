import React, { useState, createContext } from 'react';

export interface IProviderProps {
    children?: any;
  }
  
  const initialState = {
    globalData: {} as any,
    // eslint-disable-next-line no-empty-pattern
    setGlobalData: ({}) => {},
    showLoading: true,
    setShowLoading: (prevState: boolean) => {},
    countryArray: [] as any,
    setCountryArray: ([])=>{},
  };

const DataContext = createContext(initialState);

export const DataProvider = (props: IProviderProps) => {
  const [globalData,setGlobalData] = useState(initialState.globalData);
  const [showLoading, setShowLoading] = useState(true);
  const [countryArray,setCountryArray] = useState(initialState.countryArray);

  return (
    <DataContext.Provider value={{globalData,setGlobalData, showLoading, setShowLoading, countryArray, setCountryArray}}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;