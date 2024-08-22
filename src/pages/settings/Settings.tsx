import React, { useContext } from 'react';
import { IonAccordion, IonAccordionGroup, IonCard, IonContent, IonGrid, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonSearchbar, IonToggle } from '@ionic/react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { ThemeContext } from '../../hook/Context';
import { accessibility, airplane, bluetooth, build, cellular, chevronForward, hourglass, list, logoCapacitor, logOut, moon, notifications, person, radio, settingsOutline, sunny, trash, volumeHigh, wifi } from 'ionicons/icons';
import './Settings.css';
import { useHistory } from 'react-router';


const Settings: React.FC = () => {

    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null; // Manejo de caso en el que el contexto no esté disponible
    const { theme, toggleTheme } = themeContext;


    const history = useHistory();

    const handleLogOut = () => {
        removeFromLocalStorage('email');
        history.push('/login');
    }

    return (
        <IonPage>
            <Header title='Configuración' icon={settingsOutline} />
            <IonContent color={theme}>
                <div className='settings-container'>
                    <IonCard className="settings-card" >
                        <IonList style={{ padding: '0px' }} >

                            <IonItem color='medium'>
                                <div className={`icon ${theme === 'light' ? 'warning-background' : 'dark-background'}`}>
                                    <IonIcon slot="start" icon={theme === 'light' ? sunny : moon} color="light" />
                                </div>
                                <IonLabel>{theme === 'light' ? 'Tema claro' : 'Tema oscuro'}</IonLabel>
                                <IonToggle
                                    slot="end"
                                    color={"success"}
                                    checked={theme === 'dark'}
                                    onIonChange={toggleTheme}
                                />
                            </IonItem>

                            <IonItem color='medium'>
                                <div className="icon primary-background">
                                    <IonIcon slot="start" icon={build} color="light" />
                                </div>
                                <IonLabel>General</IonLabel>
                                <IonIcon icon={chevronForward} slot="end" />
                            </IonItem>

                            <IonItem button routerLink='/profile' color='medium'>
                                <div className="icon primary-background">
                                    <IonIcon slot="start" icon={person} color="light" />
                                </div>
                                <IonLabel>Perfil</IonLabel>
                                <IonIcon icon={chevronForward} slot="end" />
                            </IonItem>

                            <IonItem color='medium'>
                                <div className="icon primary-background">
                                    <IonIcon slot="start" icon={notifications} color="light" />
                                </div>
                                <IonLabel>Notificaciones</IonLabel>
                                <IonIcon icon={chevronForward} slot="end" />
                            </IonItem>

                            <IonItem button color='medium'>
                                <div className="icon danger-background">
                                    <IonIcon slot="start" icon={trash} color="light" />
                                </div>
                                <IonLabel>Eliminar cuenta</IonLabel>
                            </IonItem>

                            <IonItem button onClick={handleLogOut} color='medium'>
                                <div className="icon danger-background">
                                    <IonIcon slot="start" icon={logOut} color="light" />
                                </div>
                                <IonLabel>Cerrar sesion</IonLabel>
                            </IonItem>
                        </IonList>
                    </IonCard>
                </div>
            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default Settings;
function removeFromLocalStorage(arg0: string) {
    throw new Error('Function not implemented.');
}

