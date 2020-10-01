/* eslint-disable no-empty-pattern */
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
    countryNameArray: [] as any,
    setCountryNameArray: ([])=>{},
    newsDataArray: [] as any,
    setNewsDataArray: ([])=>{}
  };

const DataContext = createContext(initialState);

export const DataProvider = (props: IProviderProps) => {

  const [globalData,setGlobalData] = useState(initialState.globalData);
  const [showLoading, setShowLoading] = useState(true);
  const [countryArray,setCountryArray] = useState(initialState.countryArray);
  const [countryNameArray,setCountryNameArray] = useState(initialState.countryNameArray);
  const [newsDataArray,setNewsDataArray] = useState(initialState.newsDataArray);

  return (
    <DataContext.Provider value={{globalData,setGlobalData, showLoading, setShowLoading, countryArray, setCountryArray, countryNameArray, setCountryNameArray, newsDataArray, setNewsDataArray}}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;