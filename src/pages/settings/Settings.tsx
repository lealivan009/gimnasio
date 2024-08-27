import React, { useContext } from 'react';
import { IonCard, IonCol, IonContent, IonGrid, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonToggle } from '@ionic/react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { ThemeContext } from '../../hook/Context';
import { build, chevronForward, logOut, moon, notifications, person, settingsOutline, sunny, trash } from 'ionicons/icons';
import './Settings.css';
import { useHistory } from 'react-router';
import { removeFromLocalStorage } from '../../utilities';


const Settings: React.FC = () => {

    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null; // Manejo de caso en el que el contexto no esté disponible
    const { theme, toggleTheme } = themeContext;


    const history = useHistory();

    const handleLogOut = () => {
        removeFromLocalStorage('token');
        removeFromLocalStorage('id');
        history.push('/login');
    }

    return (
        <IonPage>
            <Header title='Configuración' icon={settingsOutline} />
            <IonContent color={theme}>
                <IonGrid>
                    <IonRow >
                        <IonCol size="12" sizeLg="8" offsetLg='2'>
                            <IonCard  >
                                <IonList style={{ padding: '0px' }} >
                                    <IonItem button color='medium'>
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

                                    <IonItem button routerLink='/profile' color='medium'>
                                        <div className="icon primary-background">
                                            <IonIcon slot="start" icon={person} color="light" />
                                        </div>
                                        <IonLabel>Perfil</IonLabel>
                                    </IonItem>

                                    <IonItem button color='medium'>
                                        <div className="icon primary-background">
                                            <IonIcon slot="start" icon={notifications} color="light" />
                                        </div>
                                        <IonLabel>Notificaciones</IonLabel>
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
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default Settings;

