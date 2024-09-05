import React from 'react';
import { IonCol, IonContent, IonGrid, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonText, IonToggle } from '@ionic/react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { book, key, logOut, moon, personAddSharp, settingsOutline, sunny, trash } from 'ionicons/icons';
import './Settings.css';
import { useHistory } from 'react-router';
import { removeFromLocalStorage } from '../../utilities';
import { UseTheme } from '../../hook/UseTheme';


const Settings: React.FC = () => {

    //Custom hook for themes
    const { theme, toggleTheme } = UseTheme();

    const history = useHistory();

    const handleLogOut = () => {
        // Redirect to login
        history.push('/login');
        // Delete token and id from localstorage
        removeFromLocalStorage('token');
        removeFromLocalStorage('id');
    };

    return (
        <IonPage>
            <Header title='Configuración' icon={settingsOutline} />
            <IonContent color={theme}>
                <IonGrid >
                    <IonRow >
                        <IonCol size="12" sizeLg="8" offsetLg='2' >
                            <IonItem color='medium'>
                                <div className={`icon ${theme === 'light' ? 'warning-background' : 'light-background'}`}>
                                    <IonIcon slot="start" icon={theme === 'light' ? sunny : moon} color={theme == 'light' ? 'light' : 'dark'} />
                                </div>
                                <IonLabel>{theme === 'light' ? 'Tema claro' : 'Tema oscuro'}</IonLabel>
                                <IonToggle
                                    slot="end"
                                    color={"success"}
                                    checked={theme === 'dark'}
                                    onIonChange={toggleTheme}
                                />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow >
                        <IonCol size="12" sizeLg="8" offsetLg='2'>

                        </IonCol>
                    </IonRow>

                    <IonRow >
                        <IonCol size="12" sizeLg="8" offsetLg='2'>
                            <IonItem>
                                <div style={{ margin: "auto" }}>
                                    <h4 ><i>Configuraciones para administradores</i></h4>
                                </div>
                            </IonItem>

                            <IonItem>
                                <IonText>
                                    <h4><i>Administrar usuarios</i></h4>
                                </IonText>
                            </IonItem>

                            <IonItem button color='medium'>
                                <div className="icon success-background">
                                    <IonIcon slot="start" icon={personAddSharp} color="light" />
                                </div>
                                <IonLabel>Crear usuario</IonLabel>
                            </IonItem>

                            <IonItem button color='medium'>
                                <div className="icon primary-background">
                                    <IonIcon slot="start" icon={personAddSharp} color="light" />
                                </div>
                                <IonLabel>Actualizar usuario</IonLabel>
                            </IonItem>

                            <IonItem button color='medium'>
                                <div className="icon primary-background">
                                    <IonIcon slot="start" icon={book} color="light" />
                                </div>
                                <IonLabel>Cambiar plan a usuario</IonLabel>
                            </IonItem>

                            <IonItem button color='medium'>
                                <div className="icon primary-background">
                                    <IonIcon slot="start" icon={book} color="light" />
                                </div>
                                <IonLabel>Cambiar agenda a usuario</IonLabel>
                            </IonItem>

                            <IonItem button color='medium'>
                                <div className="icon danger-background">
                                    <IonIcon slot="start" icon={key} color="light" />
                                </div>
                                <IonLabel>Blanquear contraseña</IonLabel>
                            </IonItem>

                            <IonItem button color='medium'>
                                <div className="icon danger-background">
                                    <IonIcon slot="start" icon={trash} color="light" />
                                </div>
                                <IonLabel>Eliminar cuenta de usuario</IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonText>
                                    <h4><i>Administrar planes</i></h4>
                                </IonText>
                            </IonItem>

                            <IonItem button color='medium'>
                                <div className="icon success-background">
                                    <IonIcon slot="start" icon={book} color="light" />
                                </div>
                                <IonLabel>Crear plan</IonLabel>
                            </IonItem>

                            <IonItem button color='medium'>
                                <div className="icon primary-background">
                                    <IonIcon slot="start" icon={book} color="light" />
                                </div>
                                <IonLabel>Actualizar plan</IonLabel>
                            </IonItem>

                            <IonItem button color='medium'>
                                <div className="icon danger-background">
                                    <IonIcon slot="start" icon={key} color="light" />
                                </div>
                                <IonLabel>Eliminar plan</IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonText>
                                    <h4><i>Administrar Rutinas</i></h4>
                                </IonText>
                            </IonItem>

                            <IonItem button color='medium'>
                                <div className="icon success-background">
                                    <IonIcon slot="start" icon={book} color="light" />
                                </div>
                                <IonLabel>Crear Rutina</IonLabel>
                            </IonItem>

                            <IonItem button color='medium'>
                                <div className="icon primary-background">
                                    <IonIcon slot="start" icon={book} color="light" />
                                </div>
                                <IonLabel>Editar rutina</IonLabel>
                            </IonItem>

                            <IonItem button color='medium'>
                                <div className="icon danger-background">
                                    <IonIcon slot="start" icon={key} color="light" />
                                </div>
                                <IonLabel>Eliminar rutina</IonLabel>
                            </IonItem>

                        </IonCol>
                    </IonRow>

                    <IonRow >
                        <IonCol size="12" sizeLg="8" offsetLg='2'>
                            <IonText>
                                <h4><i>Configuraciones para usuario</i></h4>
                            </IonText>

                            <IonItem button color='medium'>
                                <div className="icon danger-background">
                                    <IonIcon slot="start" icon={key} color="light" />
                                </div>
                                <IonLabel>Cambiar contraseña</IonLabel>
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
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default Settings;

