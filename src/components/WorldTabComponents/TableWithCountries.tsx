import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';
import { IonCard, IonCol, IonGrid, IonRow } from '@ionic/react';


export const TableWithCountries = () => {
    const { showLoading, countryArray } = useContext(DataContext)

    var tempCountryArray = [] as any;

    if (!showLoading && countryArray.length !== 0) {
        countryArray.forEach(async(element: any) => {
            await tempCountryArray.push(element);
        });
    }
        return (    
                <IonCard>
                    <IonGrid>
                        <IonRow class="tableTitle">
                            <IonCol col-4 class="tableCountry">Country</IonCol>
                            <IonCol class="tableCol">Active</IonCol>
                            <IonCol class="tableCol">Confirmed</IonCol>
                            <IonCol class="tableCol">Recovered</IonCol>
                            <IonCol class="tableCol">Deaths</IonCol>
                        </IonRow>
                        {tempCountryArray.map((item: any, index: number) => (
                            <IonRow class="tableZebraStrip" key={index}>
                                <IonCol col-4 class="tableCountry">{item.countryName}</IonCol>
                                <IonCol class="tableCol">{item.countryConfirmed - item.countryRecovered - item.countryDeaths}</IonCol>
                                <IonCol class="tableCol">{item.countryConfirmed}</IonCol>
                                <IonCol class="tableCol">{item.countryRecovered}</IonCol>
                                <IonCol class="tableCol">{item.countryDeaths}</IonCol>
                            </IonRow>
                        ))}
                    </IonGrid>
                </IonCard>
            
        );

}