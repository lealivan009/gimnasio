import Footer from '../../components/footer/Footer'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react'
import { barbell, barbellOutline, calendarNumber, callOutline, checkmarkDone, closeCircleOutline, fitness, locationOutline, logoFacebook, logoInstagram, logoTwitter, logoUsd, mailOutline, notifications, podium, stopwatchOutline, watchOutline } from 'ionicons/icons'
import './Home.css';


import { useContext, useState } from 'react';
import CardInformation from './components/CardInformation/CardInformation';
import { ThemeContext } from '../../hook/Context';
import MenuGrid from './components/menuGrid/MenuGrid';
import Header from '../../components/header/Header';
import Post from './components/post/Post';
import MenuCarrusel from './components/menuCarrusel/MenuCarrusel';
import Calendar from './components/calendar/Calendar';
import FooterHome from './components/footerHome/FooterHome';
import WeatherCard from './components/weather/WeatherCard';

const gymImages = [
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-gym-1-design-template-8fa0abe40edd45b0d5d56fbf4658d1d7_screen.jpg',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-gym-1-design-template-8fa0abe40edd45b0d5d56fbf4658d1d7_screen.jpg',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-gym-1-design-template-8fa0abe40edd45b0d5d56fbf4658d1d7_screen.jpg',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-gym-1-design-template-8fa0abe40edd45b0d5d56fbf4658d1d7_screen.jpg'
];

const Home = () => {

    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null; // Manejo de caso en el que el contexto no esté disponible
    const { theme, toggleTheme } = themeContext;


    return (
        <IonPage>
            <IonContent color={theme}>

                <Header title='¡Bienvenido Iván!' icon='' />

                <MenuGrid />

                <WeatherCard />

                <MenuCarrusel images={gymImages} nameSection='Promociones' />

                <Calendar />

                <FooterHome />

            </IonContent>

            <Footer />

        </IonPage>
    )
}
export default Home;



