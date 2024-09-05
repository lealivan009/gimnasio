import React, { useContext, useEffect, useState } from 'react';
import { IonContent, IonPage, IonCard, IonGrid, IonRow, IonCol, IonButton, IonText, IonLabel, IonItem, IonList, IonAccordion, IonAccordionGroup, IonSkeletonText } from '@ionic/react';
import { person } from 'ionicons/icons';
import Footer from '../../components/footer/Footer';
import { ThemeContext } from '../../hook/Context';
import Header from '../../components/header/Header';
import { getOneUser } from '../../services/User.service';
import { User } from '../../models/User';
import { getInLocalStorage } from '../../utilities';
import WeightChart from './components/weightChart/WeightChart';
import './Profile.css';
import AvatarProfile from './components/avatarProfile/AvatarProfile';
import Refresher from '../../components/refresher/Refresher';
import { useHistory } from 'react-router-dom';
import SkeletorProfile from './components/skeletorProfile/SkeletorProfile';

const Profile: React.FC = () => {

    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const history = useHistory();

    //variable para almacenar el usuario
    const [user, setUser] = useState<User | null>(null);

    //get userId from localstorage
    const userId = getInLocalStorage("id");

    //get user with id stored in localstorage, simulate 1 second waiting api
    const fetchUser = async () => {
        const data = await getOneUser(userId);
        setUser(data);
    }

    useEffect(() => {
        fetchUser(); // Llamada inicial al cargar la página
    }, [history]);

    //refresh
    const handleRefresh = (event: CustomEvent) => {
        fetchUser();
        event.detail.complete();
    }

    return (
        <IonPage>
            <Header title="Perfil" icon={person} />
            <IonContent color={theme} >
                <Refresher onRefresh={handleRefresh} />
                {user ? (
                    <IonGrid>
                        <IonRow>
                            <IonCol size="12" sizeLg='8' offsetLg='2' className="ion-text-center avatar-container">
                                <AvatarProfile photo={user.photo} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size="12" sizeLg='8' offsetLg='2'>
                                <IonCard>
                                    <IonList style={{ padding: '0px' }}>
                                        <IonItem color={theme === 'light' ? 'light' : 'medium'}>
                                            <h1>{user.name} {user.lastName}</h1>
                                        </IonItem>
                                        <IonItem color={theme === 'light' ? 'light' : 'medium'} >
                                            <p><i>"{user.description}"</i></p>
                                        </IonItem>
                                        <IonItem color={theme === 'light' ? 'light' : 'medium'}>
                                            <p><strong>DNI:</strong> {user.dni}</p>
                                        </IonItem>
                                        <IonItem color={theme === 'light' ? 'light' : 'medium'}>
                                            <p><strong>Fecha de nacimiento:</strong> {user.birthDate}</p>
                                        </IonItem>
                                        <IonItem color={theme === 'light' ? 'light' : 'medium'}>
                                            <p><strong>Telefono:</strong> {user.phone}</p>
                                        </IonItem>
                                        <IonItem color={theme === 'light' ? 'light' : 'medium'}>
                                            <p><strong>Domicilio:</strong> {`${user.address}, ${user.departament}, ${user.province}`}</p>
                                        </IonItem>
                                        <IonItem color={theme === 'light' ? 'light' : 'medium'} >
                                            <p><strong>Altura:</strong> {user.height} m</p>
                                        </IonItem>
                                        <IonAccordionGroup>
                                            <IonAccordion value='plan'>
                                                <IonItem slot='header' color={theme === 'light' ? 'light' : 'medium'}>
                                                    <IonLabel><strong>Peso: </strong>{user.lastWeight} kg</IonLabel>
                                                </IonItem>
                                                <div slot="content"
                                                    style={{
                                                        backgroundColor: theme === 'light' ? '#ffffff' : '#1e1e1e',
                                                        color: theme === 'light' ? '#000000' : '#ffffff',
                                                    }}>
                                                    <WeightChart title="Historico de peso" labels={user.weights.map(w => w.created)} datas={user.weights.map(w => w.weight)} />
                                                </div>
                                            </IonAccordion>
                                        </IonAccordionGroup>
                                        <IonAccordionGroup>
                                            <IonAccordion value='plan'>
                                                <IonItem slot='header' color={theme === 'light' ? 'light' : 'medium'}>
                                                    <IonLabel><strong>Plan: </strong>Personalizado</IonLabel>
                                                </IonItem>
                                                <div slot="content"
                                                    style={{
                                                        padding: '10px',
                                                        backgroundColor: theme === 'light' ? '#ffffff' : '#1e1e1e',
                                                        color: theme === 'light' ? '#000000' : '#ffffff'
                                                    }}>
                                                    <IonText>
                                                        <p><strong>Dias de entrenamiento:</strong> Lunes, Miércoles, Viernes</p>
                                                        <p><strong>Horario:</strong> 20:00hs a 21:30hs </p>
                                                        <p><strong>Valor de cuota:</strong> $10000</p>
                                                        <p><strong>Estado de cuenta:</strong> Al día</p>
                                                        <p><strong>Fecha de inicio:</strong> 01/08/2024</p>
                                                    </IonText>
                                                </div>
                                            </IonAccordion>
                                        </IonAccordionGroup>
                                        <IonItem color={theme === 'light' ? 'light' : 'medium'}>
                                            <p><strong>Ultima visita al sitio:</strong> {user.lastConnection}</p>
                                        </IonItem>
                                        <IonItem color={theme === 'light' ? 'light' : 'medium'}>
                                            <p><strong>Fecha de ingreso:</strong> {user.created}</p>
                                        </IonItem>
                                    </IonList>
                                </IonCard>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size='12' sizeLg='6'  >
                                            <IonButton
                                                routerLink='/updateAccount'
                                                expand="block"
                                                color="primary"
                                                style={{ margin: '0px', marginBottom: "10px" }}>
                                                Actualizar información
                                            </IonButton>
                                        </IonCol>
                                        <IonCol size='12' sizeLg='6'  >
                                            <IonButton
                                                routerLink='/deleteAccount'
                                                expand="block"
                                                color="danger"
                                                style={{ margin: '0px', marginBottom: "10px" }}>
                                                Eliminar cuenta
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                ) : (
                    <SkeletorProfile theme={theme} />
                )}
            </IonContent>
            <Footer />
        </IonPage>
    )
};

export default Profile;