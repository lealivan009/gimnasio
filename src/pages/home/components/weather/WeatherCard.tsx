import { useEffect, useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonLabel, IonGrid, IonRow, IonCol, IonSkeletonText } from '@ionic/react';
import { locationOutline, cloudOutline, rainyOutline, sunnyOutline, thunderstormOutline } from 'ionicons/icons';
import { UseTheme } from '../../../../hook/UseTheme';

const API_KEY = '9b3a619ceb737937e2022f70a2784715';  // Asegúrate de que esta sea la key correcta

interface WeatherData {
    name: string;
    weather: {
        description: string;
    }[];
    main: {
        temp: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
}

const WeatherCard = () => {
    //Custom hook for themes
    const { theme } = UseTheme();

    const [weather, setWeather] = useState<WeatherData | null>(null);

    useEffect(() => {
        const fetchWeather = async (lat: number, lon: number) => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
                );

                if (response.status === 401) {
                    throw new Error("Unauthorized: Check your API key");
                }

                const data: WeatherData = await response.json();
                setWeather(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        const getUserLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        fetchWeather(latitude, longitude);
                    },
                    (error) => {
                        console.warn("Error getting location, defaulting to Rivadavia, Mendoza:", error);
                        // Si hay un error con la geolocalización, usar la ubicación por defecto
                        fetchWeather(-33.18332, -68.4667); // Coordenadas de Rivadavia, Mendoza
                    }
                );
            } else {
                console.warn("Geolocation not supported, defaulting to Rivadavia, Mendoza");
                // Si el navegador no soporta geolocalización, usar la ubicación por defecto
                fetchWeather(-33.18332, -68.4667); // Coordenadas de Rivadavia, Mendoza
            }
        };

        getUserLocation();
    }, []);

    const getIcon = (description: string) => {
        switch (description) {
            case 'clear sky':
                return sunnyOutline;
            case 'rain':
            case 'shower rain':
                return rainyOutline;
            case 'thunderstorm':
                return thunderstormOutline;
            default:
                return cloudOutline;
        }
    };

    return (
        <IonGrid >
            <IonRow>
                <IonCol size="12" sizeLg='12'>
                    {weather &&
                        <IonCard
                            style={{
                                backgroundImage: "url('https://get.wallhere.com/photo/sky-storm-evening-Sun-atmosphere-dusk-light-cloud-weather-dawn-thunderstorm-distance-afterglow-meteorological-phenomenon-cumulus-593098.jpg')",
                                backgroundSize: "cover", // Ajusta para que la imagen cubra toda la card
                                backgroundPosition: "center", // Centra la imagen
                            }}
                            color='dark'
                        >
                            <IonCardHeader>
                                <IonCardTitle className='ion-text-center'>
                                    <IonIcon icon={locationOutline} /> {weather.name}
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <div>
                                    <IonLabel style={{ fontSize: '20px', marginLeft: '8px' }}>{weather.weather[0].description}</IonLabel>
                                    <IonIcon icon={getIcon(weather.weather[0].description)} style={{ marginLeft: "10px", fontSize: '35px', verticalAlign: 'middle' }} />
                                </div>
                                <p><strong>Temperatura:</strong> {weather.main.temp} °C</p>
                                <p><strong>Humedad:</strong> {weather.main.humidity}%</p>
                                <p><strong>Velocidad del viento:</strong> {weather.wind.speed} m/s</p>
                            </IonCardContent>
                        </IonCard>
                    }
                    {!weather &&
                        <IonCard color={theme === 'light' ? 'primary' : 'medium'}>
                            <IonCardHeader>
                                <IonCardTitle style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                    <IonSkeletonText animated={true} style={{ width: "200px", height: '15px' }} />
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <div>
                                    <IonSkeletonText animated={true} style={{ width: "200px", height: '15px' }} />
                                    <IonSkeletonText animated={true} style={{ width: "200px", height: '15px' }} />
                                </div>
                                <IonSkeletonText animated={true} style={{ width: "200px", height: '15px' }} />
                                <IonSkeletonText animated={true} style={{ width: "200px", height: '15px' }} />
                                <IonSkeletonText animated={true} style={{ width: "200px", height: '15px' }} />
                            </IonCardContent>
                        </IonCard>
                    }
                </IonCol >
            </IonRow>
        </IonGrid>
    );
};

export default WeatherCard;
