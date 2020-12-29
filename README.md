# Temperature/Humidity Bot

I developed it with the following technologies

Node.js                              |  AWS Lambda                             | React.js                             | Arduino                                 | Firebase 
:-----------------------------------:|:---------------------------------------:|:------------------------------------:|:---------------------------------------:|:-------------------------
![node.js](./images/banners/node.png)  |![node.js](./images/banners/lambda.png)| ![react](./images/banners/react.png) | ![arduino](./images/banners/arduino.png)| ![firebase](./images/banners/firebase.png)


## What is it?

It's an IOT application that lets you measure temperature and humidity of your device's environment and it finds your device's location. 

There is a frontend application for monitoring and sharing the data via e-mail and twitter(limited with my account).
Also there is a backend service for fetching sensor data from database, tweeting, sending an e-mail and for user operations.


## How it works? 

### ESP8266

<br />

![Development kit](./images/devre.png) 

There is a DHT 11 (for measuring temperature and humidity) sensor connected to NodeMCU LoLin ESP8266. Development kit has a WiFi module so it can have internet connection. 

Using Google's Geolocation API for finding connected router's latitude and longitude.
Around every 30 seconds sending sensor and location data to Firebase.  

<br/> ![Firebase-2](./images/Fbase2.png) <br/>  <hr>
![Firebase-1](./images/Fbase1.png) 

### Backend

<br />

![Endpoints](./images/endpoints.png)

Backend service interacts with database and frontend application. I used Node.js, AWS Lambda and Serverless Framework.  

Purpose of endpoints :

- Creating a new user 
- Authentication for login
- Returning sensor data
- Returning location data (It's returning city and district not latitude and longitude. To find exact location using Google's Geocoding API)
- Sending e-mail (Using nodemailer)
- Tweeting (Using Twitter API)

### Frontend

Used React.js, Material-UI, Recharts, react-svg-worldmap and react-circularprogressbar. Deployed to Heroku.

![Dashboard-1](./images/dashboard1.png)
![Dashboard-2](./images/dashboard3.png)
![Dashboard-3](./images/tweeted.png) <hr>
![Mail](./images/mail.png) <br />
![Tweet](./images/tweet.png)

### Architecture Diagram

<br />

![Tweet](./images/architecture.png)

