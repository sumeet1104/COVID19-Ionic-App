import React from 'react';
import { IonSlides, IonSlide } from '@ionic/react';

const slideOpts = {
    intialSlide: 1,
    speed: 50,
    slideShadows: true,
    loop: true,
    autoplay: true
  }; 

export const SlidesOnSafety: React.FC = () => (
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide className="slide">
        <h1>Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.</h1>
      </IonSlide>
      <IonSlide className="slide">
        <h1>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.</h1>
      </IonSlide>
      <IonSlide className="slide">
        <h1>If you have fever, cough and difficulty breathing, seek medical care early.</h1>
      </IonSlide>
      <IonSlide className="slide">
        <h1>Avoid touching eyes, nose and mouth. #StayHomeStaySafe</h1>
      </IonSlide>
      <IonSlide className="slide">
        <h1>WHO Health Alert brings COVID-19 facts to billions via WhatsApp.</h1>
      </IonSlide>
    </IonSlides>
);