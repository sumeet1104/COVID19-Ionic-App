import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { call, home, informationCircleOutline, newspaper, planet } from 'ionicons/icons';
import WorldTab from './pages/WorldTab';
import CountryTab from './pages/CountryTab';
import NewsTab from './pages/NewsTab';
import GuidelinesTab from './pages/GuidelinesTab';
import HelpTab from './pages/HelpTab';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { DataProvider } from './context/DataContext';

const App: React.FC = () => (
  <IonApp>
    <DataProvider>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/world" component={WorldTab} exact={true} />
          <Route path="/country" component={CountryTab} exact={true} />
          <Route path="/news" component={NewsTab} />
          <Route path="/guidelines" component={GuidelinesTab} />
          <Route path="/help" component={HelpTab} />
          <Route path="/" render={() => <Redirect to="/world" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="WorldTab" href="/world">
            <IonIcon icon={planet} />
            <IonLabel>World</IonLabel>
          </IonTabButton>
          <IonTabButton tab="CountryTab" href="/country">
            <IonIcon icon={home} />
            <IonLabel>Country</IonLabel>
          </IonTabButton>
          <IonTabButton tab="NewsTab" href="/news">
            <IonIcon icon={newspaper} />
            <IonLabel>News</IonLabel>
          </IonTabButton>
          <IonTabButton tab="GuidelinesTab" href="/guidelines">
            <IonIcon icon={informationCircleOutline} />
            <IonLabel>Guidelines</IonLabel>
          </IonTabButton>
          <IonTabButton tab="HelpTab" href="/help">
            <IonIcon icon={call} />
            <IonLabel>Help</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    </DataProvider>
  </IonApp>
);

export default App;
