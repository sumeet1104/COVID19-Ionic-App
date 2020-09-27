import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
//import ExploreContainer from '../components/ExploreContainer';
import Section1Boxes from "../components/WorldTabComponents/DataBoxes";
import './WorldTab.css';
import PieChart from '../components/WorldTabComponents/PieChart';
import { SlidesOnSafety } from '../components/WorldTabComponents/SlidesOnSafety';
import { TableWithCountries } from '../components/WorldTabComponents/TableWithCountries';

const WorldTab: React.FC = () => {
  return (
    <IonContent>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>World</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>World</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Section1Boxes name="Tab 1 page" />
        <PieChart/>
        <SlidesOnSafety/>
        <TableWithCountries/>
      </IonContent>
    </IonPage>
    </IonContent>
  );
};

export default WorldTab;
