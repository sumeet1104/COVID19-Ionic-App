import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './CountryTab.css';
import CountryUIComponent from '../components/CountryTabComponents/UIComponent';

const CountryTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Country</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Country</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CountryUIComponent/>
      </IonContent>
    </IonPage>
  );
};

export default CountryTab;
