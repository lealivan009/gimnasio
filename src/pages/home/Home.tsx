import Footer from '../../components/footer/Footer'
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'
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

const gymImages = [
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-gym-1-design-template-8fa0abe40edd45b0d5d56fbf4658d1d7_screen.jpg',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-gym-1-design-template-8fa0abe40edd45b0d5d56fbf4658d1d7_screen.jpg',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-gym-1-design-template-8fa0abe40edd45b0d5d56fbf4658d1d7_screen.jpg',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-gym-1-design-template-8fa0abe40edd45b0d5d56fbf4658d1d7_screen.jpg'
];

const Home = () => {

    //USE CONTEXT
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null; // Manejo de caso en el que el contexto no esté disponible
    const { theme, toggleTheme } = themeContext;

    //OBTENER USUARIO
    const [user, setUser] = useState<User | null>(null);
    const userId = getInLocalStorage("id");

    useEffect(() => {
        const fetchUser = async () => {
            const data = await getOneUser(userId);
            setUser(data);
        }

        fetchUser();
    }, [])

    return (
        <IonPage>
            <IonContent color={theme}>

                <Header title={`¡Bienvenido ${user?.name}!`} icon='' />
                <IonGrid>
                    <IonRow>
                        <IonCol size="12" sizeLg='8' offsetLg='2'>
                            <MenuGrid />
                        </IonCol>
                        <IonCol size="12" sizeLg='6' offsetLg='3'>
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
}
export default Home;



