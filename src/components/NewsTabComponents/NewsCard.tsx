import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { IonCard, IonImg, IonLoading, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import DataContext from '../../context/DataContext';
import moment from 'moment';

const NewsCard = () => {

    const { setShowLoading, showLoading, newsDataArray, setNewsDataArray } = useContext(DataContext);

    useEffect(() => {
        const getCountryData = async () => {
            try {
                var tempNewsDataArray = [] as any;

                const result = await axios('https://newsapi.org/v2/top-headlines?q=coronavirus&language=en&apiKey=a6e1894001a741e581319b2bc04acd99');
                result.data.articles.forEach((item: any) => {
                    tempNewsDataArray.push(item);
                })
                setNewsDataArray(tempNewsDataArray);
                setShowLoading(false);
            } catch (err) {
                console.log(err);

                const articles = [
                    {
                        source: {
                            id: "financial-times",
                            name: "Financial Times"
                        },
                        author: null,
                        title: "Contact tracing Donald Trump: the president’s schedule this week",
                        description: "A debate in Ohio, a rally in Minnesota, a fundraiser in New Jersey, then a positive coronavirus test",
                        url: "https://www.ft.com/content/611dd5f1-6d8b-4d33-8162-50c641d6c918",
                        urlToImage: "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fd8b316c1-7c6e-49df-b963-0ee698c2bd45.jpg?source=next-opengraph&fit=scale-down&width=900",
                        publishedAt: "2020-10-03T12:22:19.2471096Z",
                        content: "The disclosure in the early hours of Friday morning that President Donald Trump and his wife Melania had tested positive for coronavirus sent officials scrambling to find out who else in the presiden… [+3564 chars]"
                    },
                    {
                        source: {
                            id: "cbs-news",
                            name: "CBS News"
                        },
                        author: "CBS News",
                        title: "Biden sends prayers to Trump, knocks September jobs report",
                        description: "Joe Biden and his wife Jill Biden tested negative for the coronavirus after concerns over President Trump and the first lady's positive diagnoses. Speaking outside a union hall in Michigan, Biden sent prayers to the Trumps, but also criticized a Friday jobs r…",
                        url: "https://www.cbsnews.com/video/biden-sends-prayers-to-trump-knocks-september-jobs-report/",
                        urlToImage: "https://cbsnews3.cbsistatic.com/hub/i/r/2020/10/03/cb084da9-242e-4e2e-acc3-c60de2964b23/thumbnail/1200x630/87628e2debb1db7631825292ac3d4c2b/cbsn-fusion-biden-sends-prayers-to-trump-knocks-september-jobs-report-thumbnail-559090-640x360.jpg",
                        publishedAt: "2020-10-03T11:56:42+00:00",
                        content: "Watch CBSN Live\r\nCopyright © 2020 CBS Interactive Inc. All rights reserved."
                    },
                    {
                        source: {
                            id: "fox-news",
                            name: "Fox News"
                        },
                        author: "Fox News",
                        title: "Judith Miller: Reopening too soon risks coronavirus second wave or spike, evidence suggests",
                        description: "The Fox News contributor weighs in on fighting the pandemic with lockdowns.",
                        url: "https://video.foxnews.com/v/6197095586001/",
                        urlToImage: "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/7f2dc2cd-ee83-47c3-b4d0-2b1e94a4e598/27f6fc75-d352-4f72-bf44-d547c035010f/1280x720/match/image.jpg",
                        publishedAt: "2020-10-03T11:37:17.7749907Z",
                        content: null
                    },
                    {
                        source: {
                            id: "fox-news",
                            name: "Fox News"
                        },
                        author: "Fox News",
                        title: "Trump White House, Congress facing unclear coronavirus implications",
                        description: "President Trump, several top White House aides and Republican lawmakers have tested positive for the coronavirus, -- likely restructuring the final weeks of the presidential campaign, the race to confirm Trump's Supreme Court pick and even the day-to-day work…",
                        url: "https://www.foxnews.com/politics/trump-white-house-congress-facing-unclear-coronavirus-implications",
                        urlToImage: "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/a417b281-fff3-41a8-a9d3-50d3b5c23041/f1ce1dc2-9104-42cc-a149-b50f0983c206/1280x720/match/image.jpg",
                        publishedAt: "2020-10-03T11:22:20.230899Z",
                        content: "President Trump, several top White House aides and Republican lawmakers have tested positive for the coronavirus, -- likely restructuring the final weeks of the presidential campaign, the race to con… [+3454 chars]"
                    },
                    {
                        source: {
                            id: "cnn",
                            name: "CNN"
                        },
                        author: "Pete Muntean, CNN",
                        title: "Trump team's Covid-19 infections raise questions about coronavirus aboard Air Force One",
                        description: "The positive coronavirus test for a high-profile Air Force One passenger raises the possibility that has concerned aviation experts for months: that the virus can easily spread inside a confined aircraft cabin.",
                        url: "http://us.cnn.com/2020/10/03/politics/air-force-one-coronavirus/index.html",
                        urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/200515145956-air-force-one-1-super-tease.jpg",
                        publishedAt: "2020-10-03T11:12:25Z",
                        content: "(CNN)The positive coronavirus test for a high-profile Air Force One passenger raises the possibility that has concerned aviation experts for months: that the virus can easily spread inside a confined… [+5655 chars]"
                    },
                    {
                        source: {
                            id: "fox-news",
                            name: "Fox News"
                        },
                        author: "Fox News",
                        title: "Sen. Graham pushes for Judge Barrett's confirmation hearing after four senators test positive for COVID-19",
                        description: "Joel Rubin and Brad Blakeman examine whether President Trump's nominee faces new hurdles on her way to confirmation to the Supreme Court amid coronavirus outbreak.",
                        url: "https://video.foxnews.com/v/6197104012001/",
                        urlToImage: "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/9af17a59-e0ca-4c04-a670-5ca59aeed40a/84488fd4-b50a-47c5-b59f-68b577c462ce/1280x720/match/image.jpg",
                        publishedAt: "2020-10-03T10:52:18.3699653Z",
                        content: null
                    },
                    {
                        source: {
                            id: "google-news-in",
                            name: "Google News (India)"
                        },
                        author: "PTI",
                        title: "Trump undergoing Remdesivir therapy for Covid treatment: White House doctor",
                        description: "The Trump administration had issued an emergency use authorisation for Remdesivir earlier this year after the drug showed moderate effectiveness in improving outcomes for patients who were hospitalised with the coronavirus.",
                        url: "https://indianexpress.com/article/world/donald-trump-coronavirus-hospitalised-remdesivir-6680512/",
                        urlToImage: "https://images.indianexpress.com/2020/10/trump4-1.jpg",
                        publishedAt: "2020-10-03T10:40:47+00:00",
                        content: "By: PTI | Washington | \r\nUpdated: October 3, 2020 4:40:47 pm\r\nUS President Donald Trump tested positive for Covid on Friday. (The New York Times) US President Donald Trump, who was shifted to a milit… [+1647 chars]"
                    },
                    {
                        source: {
                            id: "usa-today",
                            name: "USA Today"
                        },
                        author: null,
                        title: "'The likely outcome': Trump's COVID diagnosis followed waning precautions at the White House",
                        description: "From the earliest days of the coronavirus pandemic, there has been a disconnect between Trump's actions and the guidance of public health experts.",
                        url: "https://www.usatoday.com/story/news/nation/2020/10/03/trumps-covid-diagnosis-followed-waning-precautions-white-house/3594403001/",
                        urlToImage: "https://www.gannett-cdn.com/presto/2020/10/02/USAT/4033240f-564e-4327-bf2c-c724f07888f1-TRUMP_POSITIVE_CORONAVIRUS_09.JPG?crop=5618,3160,x0,y0&width=3200&height=1680&fit=bounds",
                        publishedAt: "2020-10-03T10:32:52+00:00",
                        content: "President Donald Trump said we were \"rounding the turn\" and that the \"end of the pandemic is in sight\" just before he tested positive for COVID-19.\r\nUSA TODAY\r\nAs President Donald Trump quarantined i… [+12219 chars]"
                    },
                    {
                        source: {
                            id: "google-news-au",
                            name: "Google News (Australia)"
                        },
                        author: null,
                        title: "Coronavirus: Donald Trump defiant despite being taken to hospital for COVID-19 treatment - Courier Mail",
                        description: "Subscribe to The Courier-Mail to get unrestricted digital access, home paper delivery, Apps for iPad and Android, member only +Rewards and much more...",
                        url: "https://www.couriermail.com.au/subscribe/news/1/",
                        urlToImage: null,
                        publishedAt: "2020-10-03T10:28:00+00:00",
                        content: "Subscribe to The Courier-Mail to get unrestricted digital access, home paper delivery, Apps for iPad and Android, member only +Rewards and much more..."
                    },
                    {
                        source: {
                            id: "financial-times",
                            name: "Financial Times"
                        },
                        author: null,
                        title: "With 1m dead, are we any better at treating Covid-19?",
                        description: "The survival rate for people suffering from coronavirus has improved but doctors still want more effective therapies",
                        url: "https://www.ft.com/content/11113534-9531-4fab-ba2c-039644134e70",
                        urlToImage: "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F6a7223ca-68c6-44d1-bae0-77fc1d0183d7.jpg?source=next-opengraph&fit=scale-down&width=900",
                        publishedAt: "2020-10-03T10:07:28.3631407Z",
                        content: "Tending to Covid-19 patients in the early days of the pandemic, Leora Horwitz felt like a doctor from the 18th century, desperately trying to discover more about a new disease to learn how to stop pe… [+10754 chars]"
                    },
                    {
                        source: {
                            id: "business-insider",
                            name: "Business Insider"
                        },
                        author: "Sophia Ankel",
                        title: "Trump to Bob Woodward: I'm 'just not' worried about getting COVID-19 - Business Insider",
                        description: "The new audio recording comes as Trump announced on Friday that he is being taken to Walter Reed hospital after testing positive for the coronavirus.",
                        url: "http://www.businessinsider.com/trump-bob-woodward-im-just-not-worried-getting-covid-19-2020-10",
                        urlToImage: "https://i.insider.com/5f782dcd282c500018c786ff?width=1200&format=jpeg",
                        publishedAt: "2020-10-03T09:59:55Z",
                        content: "President Donald Trump told the journalist Bob Woodward that he wasn't afraid of contracting the coronavirus, according to a newly released audio by CNN.\r\nIn an April 13 interview, the Washington Pos… [+2031 chars]"
                    },
                    {
                        source: {
                            id: "business-insider-uk",
                            name: "Business Insider (UK)"
                        },
                        author: "Sophia Ankel",
                        title: "Trump to Bob Woodward: I'm 'just not' worried about getting COVID-19 - Business Insider",
                        description: "The new audio recording comes as Trump announced on Friday that he is being taken to Walter Reed hospital after testing positive for the coronavirus.",
                        url: "http://uk.businessinsider.com/trump-bob-woodward-im-just-not-worried-getting-covid-19-2020-10",
                        urlToImage: "https://i.insider.com/5f782dcd282c500018c786ff?width=1200&format=jpeg",
                        publishedAt: "2020-10-03T09:59:55Z",
                        content: "President Donald Trump told the journalist Bob Woodward that he wasn't afraid of contracting the coronavirus, according to a newly released audio by CNN.\r\nIn an April 13 interview, the Washington Pos… [+2031 chars]"
                    },
                    {
                        source: {
                            id: "news24",
                            name: "News24"
                        },
                        author: null,
                        title: "SANDF troops back in barracks after Covid-19 lockdown deployment",
                        description: "South African soldiers deployed to enforce one of the world's strictest lockdowns to control the spread of coronavirus have returned to barracks as new infections slowed, the SANDF says",
                        url: "https://www.news24.com/news24/SouthAfrica/News/sandf-troops-back-in-barracks-after-covid-19-lockdown-deployment-20201003",
                        urlToImage: "https://cdn.24.co.za/files/Cms/General/d/6517/eb26ee84dd024398947403cfa59d8d63.jpg",
                        publishedAt: "2020-10-03T09:49:33+00:00",
                        content: "<ul><li>SANDF members who were deployed from the beginning of Level 5 lockdown have returned to barracks.</li><li>Initially, 2 820 soldiers were deployed in March to enforce lockdown, with an additio… [+1715 chars]"
                    },
                    {
                        source: {
                            id: "business-insider",
                            name: "Business Insider"
                        },
                        author: "Sinéad Baker",
                        title: "Trump aides fear voters will hold COVID-19 diagnosis against him: NYT - Business Insider",
                        description: "Trump was already behind in the polls and had been trying to move the conversation away from the US handling of the coronavirus pandemic.",
                        url: "http://www.businessinsider.com/trump-aides-worry-voters-covid-19-diagnosis-against-him-nyt-2020-10",
                        urlToImage: "https://i.insider.com/5f782ff8282c500018c78701?width=1200&format=jpeg",
                        publishedAt: "2020-10-03T09:44:37Z",
                        content: "President Donald Trump's aides fear that voters could hold his COVID-19 diagnosis against him, and are concerned that it will lead to more in-depth questioning of his response to the pandemic, The Ne… [+4551 chars]"
                    },
                    {
                        source: {
                            id: "business-insider-uk",
                            name: "Business Insider (UK)"
                        },
                        author: "Sinéad Baker",
                        title: "Trump aides fear voters will hold COVID-19 diagnosis against him: NYT - Business Insider",
                        description: "Trump was already behind in the polls and had been trying to move the conversation away from the US handling of the coronavirus pandemic.",
                        url: "http://uk.businessinsider.com/trump-aides-worry-voters-covid-19-diagnosis-against-him-nyt-2020-10",
                        urlToImage: "https://i.insider.com/5f782ff8282c500018c78701?width=1200&format=jpeg",
                        publishedAt: "2020-10-03T09:44:37Z",
                        content: "President Donald Trump's aides fear that voters could hold his COVID-19 diagnosis against him, and are concerned that it will lead to more in-depth questioning of his response to the pandemic, The Ne… [+4551 chars]"
                    },
                    {
                        source: {
                            id: "the-wall-street-journal",
                            name: "The Wall Street Journal"
                        },
                        author: "Rebecca Ballhaus, Catherine Lucey",
                        title: "Covid-19 Cases Mount in Trump’s Orbit as President Remains Hospitalized",
                        description: "Trump is being treated at Walter Reed, as six others who attended a White House event with the president have tested positive for the coronavirus",
                        url: "https://www.wsj.com/articles/covid-19-cases-mount-in-trumps-orbit-as-president-remains-hospitalized-11601717979",
                        urlToImage: "https://images.wsj.net/im-240289/social",
                        publishedAt: "2020-10-03T09:39:00Z",
                        content: "WASHINGTONPresident Trump remained hospitalized at Walter Reed military hospital Saturday after a positive Covid-19 test, raising questions about the future of his health, his government and his re-e… [+9694 chars]"
                    },
                    {
                        source: {
                            id: "financial-times",
                            name: "Financial Times"
                        },
                        author: null,
                        title: "Trump’s coronavirus October surprise",
                        description: "President’s positive Covid-19 test focuses more attention on his poor handling of pandemic",
                        url: "https://www.ft.com/content/d65c19f4-49f6-410c-9e79-9edcb77308d9",
                        urlToImage: "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fdc42f4e7-9407-4754-beba-1bf7efc13c43.jpg?source=next-opengraph&fit=scale-down&width=900",
                        publishedAt: "2020-10-03T09:07:16.5244176Z",
                        content: "People are calling it Donald Trump’s October surprise. But in most respects the US president’s positive coronavirus test is very different to the traditional pre-election bombshell.\r\nUnlike, say, an … [+4031 chars]"
                    },
                    {
                        source: {
                            id: "bbc-news",
                            name: "BBC News"
                        },
                        author: "BBC News",
                        title: "New restrictions for swathes of northern England",
                        description: "Tighter rules come into effect in five further areas amid a rising number of new coronavirus cases.",
                        url: "http://www.bbc.co.uk/news/uk-england-54399271",
                        urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/CC81/production/_114735325_mediaitem114735324.jpg",
                        publishedAt: "2020-10-03T08:26:45Z",
                        content: "Image copyrightPA Media\r\nTighter restrictions have come into force in parts of northern England after a spike in coronavirus cases.\r\nIt is now illegal to meet people indoors from other households in … [+3545 chars]"
                    },
                    {
                        source: {
                            id: "cbc-news",
                            name: "CBC News"
                        },
                        author: "CBC News",
                        title: "Why a second wave of coronavirus is more dangerous than you might think | CBC News",
                        description: "Despite a rapid rise in new cases across the country, hospitalizations and deaths are comparatively lower so far, but experts say the second wave is just getting started.",
                        url: "http://www.cbc.ca/news/health/coronavirus-canada-second-wave-lockdown-1.5748106",
                        urlToImage: "https://i.cbc.ca/1.5742954.1601387984!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_620/2nd-wave.jpg",
                        publishedAt: "2020-10-03T08:07:19.4647718Z",
                        content: "This is an excerpt from Second Opinion, a weekly roundup of health and medical science news emailed to subscribers every Saturday morning. If you haven't subscribed yet, you can do that by clicking h… [+8676 chars]"
                    },
                    {
                        source: {
                            id: "usa-today",
                            name: "USA Today"
                        },
                        author: null,
                        title: "Trump given remdesivir to fight his COVID-19 infection. Here's what you need to know about it",
                        description: "President Trump's doctors are already employing remdesivir in the fight against the coronavirus to help shorten his illness.",
                        url: "https://www.usatoday.com/story/news/2020/10/03/president-donald-trump-remdesivir-coronavirus-treatment/3606497001/",
                        urlToImage: "https://www.gannett-cdn.com/-mm-/5761a5644dbbbc0d07f1118b0a22ef5d2dbaa88b/c=0-54-1024-630/local/-/media/2020/08/18/USATODAY/usatsports/ghows-TX-200729805-a27cf4b3.jpg?width=1024&height=576&fit=crop&format=pjpg&auto=webp",
                        publishedAt: "2020-10-03T07:57:05+00:00",
                        content: "President Donald Trump's doctors are already employing one of the most prominent experimental drugs in the fight against the coronavirus to help shorten his illness.\r\nThe president's physician, Navy … [+2607 chars]"
                    }
                ]

                setNewsDataArray(articles);
                setShowLoading(false);
                
            }
        };
        getCountryData();

    }, [setNewsDataArray, setShowLoading]);


    return (
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
                    <IonCardContent class="newsAuthorAndPublished">-- by {(news?.author) ? news?.author : "Anonymous"} published on {moment(news?.publishedAt).format('DD MMM YYYY')}</IonCardContent>
                </IonCard>
            ))}


        </div>
    );

}

export default NewsCard;