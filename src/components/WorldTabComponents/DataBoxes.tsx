/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import './DataBoxes.css';
import { IonCol, IonRow } from '@ionic/react';
import DataContext from '../../context/DataContext';

interface ContainerProps {
  name: string;
}

const Section1Boxes: React.FC<ContainerProps> = () => {
  const { globalData, setGlobalData, setShowLoading, showLoading, setCountryArray, setCountryNameArray, countryArray } = useContext(DataContext);
  const tempCountryNameArray = [] as any;
  const tempCountryCOVIDDetailArray = [] as any;

  useEffect(() => {
    const getGlobalData = async () => {
      const result = await axios('https://covid19.mathdro.id/api');
      setGlobalData(result.data);
      // setShowLoading(false);
    };
    const getGlobalCountryData = async () => {
      const result = await axios('https://covid19.mathdro.id/api/countries');
      result.data.countries.forEach((item: { name: any, iso3: any })=>{
        tempCountryNameArray.push({name: item.name, iso3: item.iso3});
      })
      setCountryNameArray(tempCountryNameArray);
    
    
      const arrayLength = tempCountryNameArray.length-1;
      tempCountryNameArray.forEach(async(country: any)=>{
        if(country.name!=='Gambia'){
            const result = await axios('https://covid19.mathdro.id/api/countries/'+country.name);
                const countryJSON = {
                    countryName : country.name,
                    countryConfirmed: result.data.confirmed.value,
                    countryRecovered: result.data.recovered.value,
                    countryDeaths: result.data.deaths.value
                }
                tempCountryCOVIDDetailArray.push(countryJSON);
                if(country===tempCountryNameArray[arrayLength]){
                setCountryArray(tempCountryCOVIDDetailArray);
              }
        }
      })
      setShowLoading(false);
    };
    getGlobalData();
    getGlobalCountryData();

  }, [setGlobalData, setShowLoading,setCountryArray]);

  var cases = {
    confirmed: 0,
    recovered: 0,
    deaths: 0
  };

  if (!showLoading && globalData) {
    cases = {
      confirmed: globalData?.confirmed?.value,
      recovered: globalData?.recovered?.value,
      deaths: globalData?.deaths?.value
    }
  }


  return (
    <div className="data-boxes">
      <IonRow class="casesBox-1strow">
        <IonCol class="totalCases">Active {cases.confirmed - cases.recovered - cases.deaths}</IonCol>
        <IonCol class="confirmedBox">Confirmed {cases.confirmed}</IonCol>
      </IonRow>
      <IonRow class="casesBox-2ndrow">
        <IonCol class="recoveredBox">Recovered {cases.recovered}</IonCol>
        <IonCol class="deathsBox">Deaths {cases.deaths}</IonCol>
      </IonRow>
    </div>
  );
};

export default Section1Boxes;
