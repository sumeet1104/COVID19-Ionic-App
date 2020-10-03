# Ionic Angular Conference Application

COVID-19 Application using Ionic components with React Typescript. 

The application has been developed for PWA, Android and IOS.


## Table of Contents
- [Getting Started](#getting-started)
- [App Preview](#app-preview)
  - [World Tab](#world-tab)
  - [Country Tab](#country-tab)
  - [News Tab](#news-tab)
  - [Guidelines Tab](#guidelines-tab)
  - [Help Tab](#help-tab)
- [Design](#design)
- [API](#api)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


## Getting Started

* [Download the installer](https://nodejs.org/) for Node LTS.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/sumeet1104/COVID19-Ionic-App.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Done. :tada:


## App Preview

### World Tab

![World](/public/assets/screenshots/world.png)


### Country Tab

![Country](/public/assets/screenshots/country.png)

### News Tab

![News](/public/assets/screenshots/news.png)

### Guidelines Tab

![Guidelines](/public/assets/screenshots/guidelines.png)

### Help tab

![Help](/public/assets/screenshots/help.png)


## Design

### World

1. 4 different boxes to show actual numbers: Active, Confirmed, Recovered and Deaths
2. A Pie Chart depicting the number of cases
3. Slideshows for basic health tips
4. All countries listed with their COVID-19 data.

### Country
1. Drop Down and button to select the country
2. Boxes with numbers : Total, Active, Recovered and Deaths
3. A Pie Chart depicting the number of cases
4. Line Chart with Recovery Rate and Case Load Rate.
5. Bar Chart with Daily Trends.

### News
1. Clickable Cards with News related to Coronavirus from  different sources using News API.

### Guidelines
1. Youtube video by WHO highlighting guidlines to be followed.
2. Posters from different sources with tips and other informations.

### Help
1. Static tab with contact information from World Health Organisation (WHO).


## API

For the purpose of the app, we'll be consuming the following APIs:

1. [https://covid19.mathdro.id/](https://covid19.mathdro.id/) - Serving data from John Hopkins University CSSE as a JSON API. Information regarding API can be found on the GitHub Page.

2. [https://covidapi.info/api/v1/country/{country-iso-code}/timeseries/{startDate}/{endDate}](https://covidapi.info/api/v1/country/IND/timeseries/2020-09-25/2020-09-30) - We'll be consuming this API for getting data of a particular Country within a range of dates.

3. [https://newsapi.org/v2/top-headlines?q=coronavirus&language=en&apiKey=YOUR_API_KEY](https://newsapi.org/v2/top-headlines?q=coronavirus&language=en&apiKey=YOUR_API_KEY) - This API will be consumed to render cards with News Data.


## Deploying

### Progressive Web App

1. Run `ionic build --prod`
2. Push the `build` folder to your hosting service

### Android

1. Run `ionic cap sync`
2. Run `ionic capacitor run android`

### iOS

1. Run `ionic cap sync`
2. Run `ionic capacitor run ios`