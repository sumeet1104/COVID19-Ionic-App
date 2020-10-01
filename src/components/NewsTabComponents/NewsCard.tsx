import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { IonCard, IonImg, IonLoading, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import DataContext from '../../context/DataContext';
import moment from 'moment';

const NewsCard = () => {

    const { setShowLoading, showLoading, newsDataArray, setNewsDataArray } = useContext(DataContext);

    useEffect(() => {
        const getCountryData = async () => {
            var tempNewsDataArray = [] as any;

            const result = await axios('https://newsapi.org/v2/top-headlines?q=coronavirus&language=en&apiKey=a6e1894001a741e581319b2bc04acd99');
            result.data.articles.forEach((item:  any ) => {
                tempNewsDataArray.push(item);
            })
            setNewsDataArray(tempNewsDataArray);
            setShowLoading(false);
        };
        getCountryData();

    }, [setNewsDataArray, setShowLoading]);


    return(
        <div className="news-cards">
            <IonLoading
                cssClass='my-custom-class'
                isOpen={showLoading}
                onDidDismiss={() => setShowLoading(false)}
                message={'Please wait...'}
                duration={5000}
            />

   {newsDataArray.map((news: any, idx: number) => (
       <IonCard key={idx} href={news?.url} target="_blank">
         <IonImg src={news?.urlToImage} class="newsImage" ></IonImg>
         <IonCardHeader>
             <IonCardTitle class="newsTitle">{news?.title}</IonCardTitle>
             <IonCardSubtitle class="newsSource">Source: {news?.source?.name}</IonCardSubtitle>
         </IonCardHeader>
         <IonCardContent class="newsContent">{news?.description}</IonCardContent>
         <IonCardContent class="newsAuthorAndPublished">-- by {(news?.author)? news?.author : "Anonymous"} published on {moment(news?.publishedAt).format('DD MMM YYYY')}</IonCardContent>
       </IonCard>
   ))}


        </div>
    );

}

export default NewsCard;