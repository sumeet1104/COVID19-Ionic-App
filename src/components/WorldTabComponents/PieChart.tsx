import { IonCard } from '@ionic/react';
import React, { useContext } from 'react';
import {Pie} from 'react-chartjs-2';
import DataContext from '../../context/DataContext';
import './PieChart.css';

const PieChart = () => {
    const {globalData,showLoading} = useContext(DataContext);
    //let globalCasesPieChart = null;

    var confirmed = 0;
    var recovered = 0;
    var deaths = 0;

    if(!showLoading){
      confirmed = globalData.confirmed.value;
      recovered = globalData.recovered.value;
      deaths = globalData.deaths.value;
    }


    const globalCasesPieChart = {
        labels: ['Confirmed', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'Covid-19',
            backgroundColor: [
              '#4399F6',
              '#37EA61',
              '#F34943'
            ],
            hoverBackgroundColor: [
              '#007bff',
              '#127729',
              '#ff073a'
            ],
            data: [confirmed, recovered, deaths]
          }
        ]
      }


    return(
        <IonCard class="pieCard">
          <Pie data={globalCasesPieChart}
             options={{
               legend: {
                 display: true,
                 position: 'bottom',
               },
               plugins: {
                 datalabels: {
                   anchor: 'end',
                   clamp: 'true',
                   align: 'bottom',
                   color: 'black',
                   labels: {
                     title: {
                       font: {
                         weight: 'bold'
                       }
                     }
                   }
                 }
               }
            }} />
        </IonCard>
        
    );

}
export default PieChart;