import React, { useContext, useState } from 'react';
import { IonContent, IonPage, IonCard, IonAvatar, IonGrid, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonButton, IonText, IonIcon, IonLabel, IonItem, IonList, IonFab, IonFabButton, IonAccordion, IonAccordionGroup } from '@ionic/react';
import { chevronForward, pencil, person } from 'ionicons/icons';
import Footer from '../../components/footer/Footer';
import { ThemeContext } from '../../hook/Context';
import Header from '../../components/header/Header';

const Profile: React.FC = () => {

    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null; // Manejo de caso en el que el contexto no esté disponible
    const { theme, toggleTheme } = themeContext;

    const [name, setName] = useState<string>('Iván Elías Leal');
    const [description, setDescription] = useState<string>('Soy una persona apasionada por el deporte,  me gusta practicar deporte todos los dias, juego al padel y al futbol.')
    const [dob, setDob] = useState<string>('16/03/1993');
    const [address, setAddress] = useState<string>('Godoy Cruz 447');

    return (
        <IonPage>
            <Header title="Perfil" icon={person} />
            <IonContent color={theme} >
                <IonGrid>
                    <IonRow>
                        <IonCol size="12" className="ion-text-center" style={{ position: 'relative' }}>
                            <IonAvatar style={{
                                margin: 'auto',
                                marginTop: "10px",
                                height: '200px',
                                width: '200px',
                                boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
                                position: 'relative'
                            }}>
                                <img src="https://www.kindpng.com/picc/m/9-99641_pensando-especialmente-en-las-personas-con-movilidad-persona.png" alt="Avatar" />
                                <IonFab
                                    style={{
                                        position: 'absolute',
                                        top: '0px',
                                        right: '0px'
                                    }}>
                                    <IonFabButton size="small" color={theme === 'light' ? 'light' : 'light'}>
                                        <IonIcon icon={pencil}></IonIcon>
                                    </IonFabButton>
                                </IonFab>
                            </IonAvatar>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12">
                            <IonCard >
                                <IonList style={{ padding: '0px' }} >
                                    <IonItem color={theme === 'light' ? 'light' : 'medium'}>
                                        <h1>{name}</h1>
                                    </IonItem>
                                    <IonItem color={theme === 'light' ? 'light' : 'medium'} button>
                                        <p><i>"{description}"</i></p>
                                        <IonIcon icon={chevronForward} slot="end" />
                                    </IonItem>
                                    <IonItem color={theme === 'light' ? 'light' : 'medium'} >
                                        <p><strong>Fecha de nacimiento:</strong> {dob}</p>
                                    </IonItem>
                                    <IonItem color={theme === 'light' ? 'light' : 'medium'} button>
                                        <p><strong>Domicilio:</strong> {address}</p>
                                        <IonIcon icon={chevronForward} slot="end" />
                                    </IonItem>
                                    <IonItem color={theme === 'light' ? 'light' : 'medium'} button>
                                        <p><strong>Altura:</strong> 1.86m</p>
                                        <IonIcon icon={chevronForward} slot="end" />
                                    </IonItem>
                                    <IonItem color={theme === 'light' ? 'light' : 'medium'} button>
                                        <p><strong>Peso:</strong> 94kg</p>
                                        <IonIcon icon={chevronForward} slot="end" />
                                    </IonItem>
                                    <IonAccordionGroup>
                                        <IonAccordion value='plan'>
                                            <IonItem slot='header' color={theme === 'light' ? 'light' : 'medium'}>
                                                <IonLabel><strong>Plan</strong></IonLabel>
                                            </IonItem>
                                            <div slot="content"
                                                style={{
                                                    padding: '10px',
                                                    backgroundColor: theme === 'light' ? '#ffffff' : '#1e1e1e',
                                                    color: theme === 'light' ? '#000000' : '#ffffff'
                                                }}>
                                                <IonText>
                                                    <p><strong>Plan:</strong> Personalizado </p>
                                                    <p><strong>Dias de entrenamiento:</strong> Lunes, Miercoles, Viernes</p>
                                                    <p><strong>Horario:</strong> 20:00hs a 21:30hs </p>
                                                    <p><strong>Valor de cuota:</strong> $10000</p>
                                                    <p><strong>Estado de cuenta:</strong> Al día</p>
                                                    <p><strong>Fecha de inicio:</strong> 01/08/2024</p>
                                                </IonText>
                                            </div>
                                        </IonAccordion>
                                    </IonAccordionGroup>
                                    <IonItem color={theme === 'light' ? 'light' : 'medium'}>
                                        <p><strong>Ultima visita al sitio:</strong> 01/08/2024</p>
                                    </IonItem>
                                </IonList>
                            </IonCard>
                            <IonCard >
                                <IonButton expand="block" color="danger" style={{ margin: '0px' }}>
                                    Eliminar cuenta
                                </IonButton>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
            <Footer />
        </IonPage >
    );
};

export default Profile;
