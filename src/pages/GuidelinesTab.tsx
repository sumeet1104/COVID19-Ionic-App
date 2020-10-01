import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import GuidelinesCards from '../components/GuidelinesTabComponents/GuidelinesCards';

const GuidelinesTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Guidelines</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Guidelines</IonTitle>
          </IonToolbar>
        </IonHeader>
        <GuidelinesCards/>
      </IonContent>
    </IonPage>
  );
};

export default GuidelinesTab;
