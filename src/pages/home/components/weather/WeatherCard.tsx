import React, { useContext, useEffect, useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/react';
import { locationOutline, cloudOutline } from 'ionicons/icons';
import { ThemeContext } from '../../../../hook/Context';

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
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null; // Manejo de caso en el que el contexto no esté disponible
    const { theme } = themeContext;

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
                        fetchWeather(-32.8302, -68.5792); // Coordenadas de Rivadavia, Mendoza
                    }
                );
            } else {
                console.warn("Geolocation not supported, defaulting to Rivadavia, Mendoza");
                // Si el navegador no soporta geolocalización, usar la ubicación por defecto
                fetchWeather(-32.8302, -68.5792); // Coordenadas de Rivadavia, Mendoza
            }
        };

        getUserLocation();
    }, []);


    if (!weather) {
        return <p>Loading weather...</p>;
    }

    if (!weather.weather || weather.weather.length === 0) {
        return <p>No weather data available</p>;
    }

    return (
        <IonGrid>
            <IonRow>
                <IonCol size="12" >
                    <IonCard color={theme === 'light' ? 'light' : 'medium'}>
                        <IonCardHeader>
                            <IonCardTitle>
                                <IonIcon icon={locationOutline} /> {weather.name}
                            </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <div>
                                <IonIcon icon={cloudOutline} style={{ fontSize: '24px', verticalAlign: 'middle' }} />
                                <IonLabel style={{ fontSize: '20px', marginLeft: '8px' }}>{weather.weather[0].description}</IonLabel>
                            </div>
                            <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
                            <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
                            <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default WeatherCard;
