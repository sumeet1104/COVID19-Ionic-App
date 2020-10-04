/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
//import './DataBoxes.css';
import { IonButton, IonCard, IonCol, IonItem, IonLabel, IonLoading, IonRow, IonSelect, IonSelectOption } from '@ionic/react';
import DataContext from '../../context/DataContext';
import { Pie, Line, Bar } from 'react-chartjs-2';
import moment from 'moment';



const CountryUIComponent = () => {
    const { setShowLoading, showLoading, setCountryNameArray, countryNameArray } = useContext(DataContext);
    const [country, setCountry] = useState<{ name: any, iso3: any }>({ name: '', iso3: '' });
    const [cases, setCases] = useState<{ confirmed: number, recovered: number, deaths: number, lastUpdated: string }>({
        confirmed: 0,
        recovered: 0,
        deaths: 0,
        lastUpdated: ''
    })
    const [dateArray, setDateArray] = useState<[{ confirmed: number, date: string, deaths: number, recovered: number }]>([{ confirmed: 0, date: "", deaths: 0, recovered: 0 }])

    const tempCountryNameArray = [] as any;

    useEffect(() => {
        const getCountryData = async () => {
            const result = await axios('https://covid19.mathdro.id/api/countries');
            result.data.countries.forEach((item: { name: any, iso3: any }) => {
                tempCountryNameArray.push({ name: item.name, iso3: item.iso3 });
            })
            setCountryNameArray(tempCountryNameArray);
            setShowLoading(false);
        };
        getCountryData();

    }, [setShowLoading]);

    const getCountryDetails = async () => {
        setShowLoading(true);
        const result = await axios('https://covid19.mathdro.id/api/countries/' + country.name);

        console.log(result.data);
        setCases({
            confirmed: result.data.confirmed.value,
            recovered: result.data.recovered.value,
            deaths: result.data.deaths.value,
            lastUpdated: moment(result.data.lastUpdate).format("YYYY-DD-MM")
        });

        const endDate = moment(result.data.lastUpdate).subtract(1, 'days').format("YYYY-MM-DD");

        const startDate = moment(result.data.lastUpdate).subtract(6, 'days').format("YYYY-MM-DD");

        console.log(startDate, endDate);


        const res = await axios('https://cors-anywhere.herokuapp.com/https://covidapi.info/api/v1/country/' + country.iso3 + '/timeseries/' + startDate + '/' + endDate);

        setDateArray(res.data.result);
        setShowLoading(false);
    }

    const labelArray: string[] = [];
    const confirmedArray: number[] = [];
    const recoveredArray: number[] = [];
    const deathsArray: number[] = [];
    const recoveryRateArray: number[] = [];
    const caseLoadRateArray: number[] = [];


    dateArray.forEach((element) => {
        labelArray.push(element.date);
        confirmedArray.push(element.confirmed);
        recoveredArray.push(element.recovered);
        deathsArray.push(element.deaths);
        recoveryRateArray.push((element.recovered * 100) / element.confirmed);

        var caseLoad = element.confirmed - element.recovered - element.deaths;
        caseLoadRateArray.push((caseLoad * 100) / element.confirmed);
    })

    const BarChartByDate = {
        labels: labelArray,
        datasets: [
            {
                label: 'Confirmed',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(255,255,0,1)',
                borderColor: 'rgba(255,255,0,1)',
                borderWidth: 2,
                data: confirmedArray
            },
            {
                label: 'Recovered',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(0,255,0,1)',
                borderColor: 'rgba(0,255,0,1)',
                borderWidth: 2,
                data: recoveredArray
            },
            {
                label: 'Deaths',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(255,0,0,1)',
                borderColor: 'rgba(255,0,0,1)',
                borderWidth: 2,
                data: deathsArray
            }
        ]
    }


    const LineChartByDate = {
        labels: labelArray,
        datasets: [
            {
                label: 'Recovery Rate',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(255,0,255,1)',
                borderColor: 'rgba(255,0,255,1)',
                borderWidth: 2,
                data: recoveryRateArray
            },
            {
                label: 'Case Load Rate',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(192,192,192,1)',
                borderColor: 'rgba(192,192,192,1)',
                borderWidth: 2,
                data: caseLoadRateArray
            }
        ]
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
                data: [cases.confirmed, cases.recovered, cases.deaths]
            }
        ]
    }


    return (
        <div className="country-ui-component">

            <IonLoading
                cssClass='my-custom-class'
                isOpen={showLoading}
                onDidDismiss={() => setShowLoading(false)}
                message={'Please wait...'}
                duration={5000}
            />
            <IonItem>
                <IonLabel>Country</IonLabel>
                <IonSelect value={country} placeholder="Select One" onIonChange={e => setCountry(e.detail.value)}>
                    {countryNameArray.map((item: any, index: number) => (
                        <IonSelectOption key={index} value={item}>{item.name}</IonSelectOption>
                    ))}
                </IonSelect>
                <IonButton color="success" onClick={getCountryDetails}>Change Country</IonButton>
            </IonItem>


            <div className='data-boxes'>
                <IonRow class="casesBox-1strow">
                    <IonCol class="totalCases">Active {cases.confirmed - cases.recovered - cases.deaths}</IonCol>
                    <IonCol class="confirmedBox">Confirmed {cases.confirmed}</IonCol>
                </IonRow>
                <IonRow class="casesBox-2ndrow">
                    <IonCol class="recoveredBox">Recovered {cases.recovered}</IonCol>
                    <IonCol class="deathsBox">Deaths {cases.deaths}</IonCol>
                </IonRow>
            </div>


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


            <IonCard class="lineCard">
                <Line
                    data={LineChartByDate}
                    options={{
                        title: {
                            display: true,
                            text: 'Recovery Rate & Case Load Rate',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </IonCard>


            <IonCard class="barCard">
                <Bar
                    data={BarChartByDate}
                    options={{
                        title: {
                            display: true,
                            text: 'Daily Trend By Country',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </IonCard>

        </div>


    );
};

export default CountryUIComponent;
