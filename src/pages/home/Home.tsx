import Footer from '../../components/footer/Footer'
import { IonCol, IonContent, IonGrid, IonLoading, IonPage, IonRow } from '@ionic/react'
import './Home.css';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../hook/Context';
import MenuGrid from './components/menuGrid/MenuGrid';
import Header from '../../components/header/Header';
import MenuCarrusel from './components/menuCarrusel/MenuCarrusel';
import Calendar from './components/calendar/Calendar';
import FooterHome from './components/footerHome/FooterHome';
import WeatherCard from './components/weather/WeatherCard';
import { getInLocalStorage } from '../../utilities';
import { getOneUser } from '../../services/User.service';
import { User } from '../../models/User';
import { person } from 'ionicons/icons';
import SplashScreen from '../splashScreen/SplashScreen';
import { UseTheme } from '../../hook/UseTheme';

const gymImages = [
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-gym-1-design-template-8fa0abe40edd45b0d5d56fbf4658d1d7_screen.jpg',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-gym-1-design-template-8fa0abe40edd45b0d5d56fbf4658d1d7_screen.jpg',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-gym-1-design-template-8fa0abe40edd45b0d5d56fbf4658d1d7_screen.jpg',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-gym-1-design-template-8fa0abe40edd45b0d5d56fbf4658d1d7_screen.jpg'
];

const Home = () => {
    //Custom hook for themes
    const { theme } = UseTheme();

    //variable para almacenar el usuario
    const [user, setUser] = useState<User | null>(null);

    //spinner
    const [isLoading, setIsLoading] = useState(true); // Estado de carga

    useEffect(() => {
        //get user with id stored in localstorage, simulate 1 second waiting api
        const fetchUser = async () => {
            //get userId from localstorage
            const userId = getInLocalStorage("id");
            //get user with id from localstorage
            const data = await getOneUser(userId);
            setUser(data);
            setTimeout(() => {
                setIsLoading(false); // Termina la carga
            }, 1000);
        }
        fetchUser(); // Llamada inicial al cargar la página
    }, []);

    return (isLoading ? (
        <SplashScreen />
    ) : (
        <IonPage>
            <IonContent color={theme}>
                <Header title={`¡Bienvenido ${user ? user.name : ''}!`} icon={person} />
                <IonGrid>
                    <IonRow>
                        <IonCol size="12" sizeLg='8' offsetLg='2'>
                            <MenuGrid />
                        </IonCol>
                        <IonCol size="12" sizeLg='8' offsetLg='2'>
                            <WeatherCard />
                        </IonCol>
                        <IonCol size="12" sizeLg='8' offsetLg='2'>
                            <MenuCarrusel images={gymImages} nameSection='Promociones' />
                        </IonCol>
                        <IonCol size="12" sizeLg='8' offsetLg='2'>
                            <Calendar />
                        </IonCol>
                        <IonCol size="12" sizeLg='8' offsetLg='2'>
                            <FooterHome />
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>

            <Footer />

        </IonPage>
    )
    )
}
export default Home;



