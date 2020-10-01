import React from 'react';
import { IonCard, IonButton, IonIcon, IonItem, IonLabel, IonList } from '@ionic/react';
import { callOutline, mailOutline, logoWhatsapp, walletOutline } from 'ionicons/icons';

const HelpCard = () => {
    return (
        <div className="help-card">
        <h6>WHO Help Information</h6>
        <IonCard>
            <IonList>
                <IonItem>
                    <IonLabel>Call WHO helpline Number</IonLabel>
                    <IonButton color='warning' href="tel:+41-22-7912111"><IonIcon slot="start" icon={callOutline} /> Call</IonButton>
                </IonItem>
                <IonItem>
                    <IonLabel>Email WHO Team</IonLabel>
                    <IonButton color='warning' href="mailto:mediainquiries@who.int"><IonIcon slot="start" icon={mailOutline} /> Email</IonButton>
                </IonItem>
                <IonItem>
                    <IonLabel>Text 'Hi' to WHO helpdesk</IonLabel>
                    <IonButton color='warning' href="https://api.whatsapp.com/send?phone=41798931892&text=hi&source=&data="><IonIcon slot="start" icon={logoWhatsapp} /> WhatsApp</IonButton>
                </IonItem>
                <IonItem>
                    <IonLabel>Donate via WHO website</IonLabel>
                    <IonButton color='warning' href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate"><IonIcon slot="start" icon={walletOutline} /> Donate</IonButton>
                </IonItem>
            </IonList>
        </IonCard>
        </div>
        );
}

export default HelpCard;