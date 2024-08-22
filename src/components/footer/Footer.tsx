import { IonTabBar, IonTabButton, IonIcon, IonLabel, IonFooter } from '@ionic/react'
import { home, accessibility, person, settings } from 'ionicons/icons'
import { useContext } from 'react';
import { ThemeContext } from '../../hook/Context';

const Footer = () => {

    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null; // Manejo de caso en el que el contexto no esté disponible
    const { theme, toggleTheme } = themeContext;

    return (
        <IonFooter >
            <IonTabBar slot="bottom" color={theme === 'light' ? 'light' : 'dark'}>
                <IonTabButton tab="Home" href="/home">
                    <IonIcon aria-hidden="true" icon={home} />
                    <IonLabel>Inicio</IonLabel>
                </IonTabButton>
                <IonTabButton tab="Rutine" href="/rutine">
                    <IonIcon aria-hidden="true" icon={accessibility} />
                    <IonLabel>Rutina</IonLabel>
                </IonTabButton>
                <IonTabButton tab="Settings" href="/settings">
                    <IonIcon aria-hidden="true" icon={settings} />
                    <IonLabel>Configuración</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonFooter>
    )
}

export default Footer
