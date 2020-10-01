import React from 'react';
import { IonCard, IonCardHeader, IonImg } from '@ionic/react';

const GuidelinesCards = () => {
return(
    <div className="guideline-cards">
    <IonCard>
     <iframe title="WHO" width="100%" height="200" src="https://www.youtube.com/embed/5jD2xd3Cv80"
       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
     </iframe>
   </IonCard>
   <IonCard>
     <IonCardHeader>Symptoms</IonCardHeader>
     <IonImg class="guidlineImages" src="https://i.ytimg.com/vi/F70BzSFAZfw/maxresdefault.jpg"></IonImg>
   </IonCard>
   <IonCard>
     <IonCardHeader>Prevention is better than Cure</IonCardHeader>
     <IonImg class="guidlineImages" src="https://www.gillettechildrens.org/images/made/assets/blog/COVID-19-Updated-Mar12-KHM-Graphic-1500px-_1500_1110_70.jpg"></IonImg>
   </IonCard>
   <IonCard>
     <IonCardHeader>Myths Busted</IonCardHeader>
     <IonImg class="guidlineImages" src="https://bl.thgim.com/incoming/8anj0a/article31418094.ece/alternates/FREE_435/BL24Covidmythsjpg"></IonImg>
   </IonCard>
   <IonCard>
     <IonCardHeader>Stress Relief Tips</IonCardHeader>
     <IonImg class="guidlineImages" src="https://www.verywellmind.com/thmb/0d5yHkUf2BUshyNOhzkorZSMdHE=/1600x900/filters:fill(ABEAC3,1)/how-to-cope-with-loneliness-during-coronavirus-4799661-ADD-FINAL-1600x900-901ad574317a42afad714d46d13892a7.png"></IonImg>
   </IonCard>
   <IonCard>
     <IonCardHeader>Stay Home, Stay Safe</IonCardHeader>
     <IonImg class="guidlineImages" src="https://img.freepik.com/free-vector/stay-home-stay-safe-concept-heart-house-poster_1017-24658.jpg?size=338&ext=jpg"></IonImg>
   </IonCard>
   </div>
);
}

export default GuidelinesCards;