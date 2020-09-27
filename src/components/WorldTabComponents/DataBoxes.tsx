import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import './DataBoxes.css';
import { IonCol, IonRow } from '@ionic/react';
import DataContext from '../../context/DataContext';

interface ContainerProps {
  name: string;
}

const Section1Boxes: React.FC<ContainerProps> = () => {
  const { globalData, setGlobalData, setShowLoading, showLoading, setCountryArray } = useContext(DataContext);
  const tempCountryNameArray = new Array();
  const tempCountryCOVIDDetailArray = new Array();

  useEffect(() => {
    const getGlobalData = async () => {
      const result = await axios('https://covid19.mathdro.id/api');
      setGlobalData(result.data);
    };
    const getGlobalCountryData = async () => {
      const result = await axios('https://covid19.mathdro.id/api/countries');
      result.data.countries.forEach((item: { name: any; })=>{
        tempCountryNameArray.push(item.name);
      })
      console.log(tempCountryNameArray);
    
    
      const arrayLength = tempCountryNameArray.length-1;
      tempCountryNameArray.forEach(async(country)=>{
        if(country!=='Gambia'){
            const result = await axios('https://covid19.mathdro.id/api/countries/'+country);
                const countryJSON = {
                    countryName : country,
                    countryConfirmed: result.data.confirmed.value,
                    countryRecovered: result.data.recovered.value,
                    countryDeaths: result.data.deaths.value
                }
                tempCountryCOVIDDetailArray.push(countryJSON);
                if(country===tempCountryNameArray[arrayLength]){
                setCountryArray(tempCountryCOVIDDetailArray);}
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

  if (!showLoading) {
    cases = {
      confirmed: globalData.confirmed.value,
      recovered: globalData.recovered.value,
      deaths: globalData.deaths.value
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
