import { IonButton, IonCard, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonList, IonPage, IonRow, IonToast } from '@ionic/react'
import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import { person } from 'ionicons/icons'
import Header from '../../components/header/Header'
import { User } from '../../models/User'
import { getOneUser, updateUser } from '../../services/User.service'
import { getInLocalStorage } from '../../utilities'
import { ThemeContext } from '../../hook/Context'
import { useHistory, useLocation } from 'react-router'

const UpdateAccount = () => {

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastColor, setToastColor] = useState<'success' | 'danger'>('success');

    const alert = (message: string, color: 'danger' | 'success', isVisible: boolean) => {
        setToastMessage(message);
        setToastColor(color);
        setShowToast(isVisible);
    }


    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null; // Manejo de caso en el que el contexto no esté disponible
    const { theme } = themeContext;

    const history = useHistory();

    const [user, setUser] = useState<User>();

    const userId = getInLocalStorage("id");

    const fetchUser = async () => {
        const data = await getOneUser(userId);
        setUser(data);
    }

    useEffect(() => {
        const unlisten = history.listen(() => {
            fetchUser();
        });

        fetchUser(); // Llamada inicial al cargar la página

        return () => {
            unlisten(); // Cleanup al desmontar el componente
        };
    }, [history]);

    // Función para manejar el cambio de valor en el input
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setUser(prevUser => {
            if (prevUser) {
                const updatedUser: User = {
                    ...prevUser,
                    [name]: value
                };
                console.log(`User's ${name} updated to: `, value);
                return updatedUser;
            }
            return prevUser;
        });
    };

    const handleSubmit = async () => {
        try {
            if (user) {
                const updatedUser: Partial<User> = {
                    name: user.name,
                    lastName: user.lastName,
                    description: user.description,
                    height: user.height,
                    lastWeight: user.lastWeight,
                    phone: user.phone,
                    province: user.province,
                    departament: user.departament,
                    address: user.address
                };
                const response = await updateUser(userId, updatedUser);
                setUser(response);
                alert('Usuario actualizado correctamente', 'success', true);
                //window.location.href = '/profile';
                history.push('/profile');
            }
        } catch (error) {
            alert('Usuario no actualizado', 'danger', true);
            console.error("Failed to update user", error);
        }
    };

    return (
        <IonPage>
            <Header title="Actualizar Información" icon={person} />
            <IonContent color={theme}>
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={2000}
                    color={toastColor}
                />
                <IonGrid >
                    <IonRow>
                        <IonCol size='12' sizeLg='8' offsetLg='2'>
                            <IonCard>
                                <IonList style={{ padding: '0px' }}>
                                    <IonItem>
                                        <IonInput
                                            value={user?.name}
                                            label='Nombre'
                                            placeholder='Ingrese su nombre'
                                            type='text'
                                            name="name"
                                            labelPlacement='floating'
                                            onIonInput={handleInputChange}
                                        />
                                    </IonItem>
                                    <IonItem>
                                        <IonInput
                                            value={user?.lastName}
                                            label='Apellido'
                                            placeholder='Ingrese su apellido'
                                            type='text'
                                            name='lastName'
                                            labelPlacement='floating'
                                            onIonInput={handleInputChange}
                                        />
                                    </IonItem>
                                    <IonItem>
                                        <IonInput
                                            value={user?.description}
                                            label='Descripcion'
                                            placeholder='Ingrese su descripción'
                                            type='text'
                                            name='description'
                                            labelPlacement='floating'
                                            onIonInput={handleInputChange}
                                        />
                                    </IonItem>
                                    <IonItem>
                                        <IonInput
                                            value={user?.height}
                                            label='Altura'
                                            placeholder='Ingrese su altura'
                                            type='number'
                                            name='height'
                                            labelPlacement='floating'
                                            onIonInput={handleInputChange}
                                        />
                                    </IonItem>
                                    <IonItem>
                                        <IonInput
                                            value={user?.lastWeight}
                                            label='Peso'
                                            placeholder='Ingrese su peso'
                                            type='number'
                                            name='lastWeight'
                                            labelPlacement='floating'
                                            onIonInput={handleInputChange}
                                        />
                                    </IonItem>
                                    <IonItem>
                                        <IonInput
                                            value={user?.phone}
                                            label='Telefono'
                                            placeholder='Ingrese su telefono'
                                            type='tel'
                                            name='phone'
                                            labelPlacement='floating'
                                            onIonInput={handleInputChange}
                                        />
                                    </IonItem>
                                    <IonItem>
                                        <IonInput
                                            value={user?.province}
                                            label='Provincia'
                                            placeholder='Ingrese su provincia'
                                            type='text'
                                            name='province'
                                            labelPlacement='floating'
                                            onIonInput={handleInputChange}
                                        />
                                    </IonItem>
                                    <IonItem>
                                        <IonInput
                                            value={user?.departament}
                                            label='Departamento'
                                            placeholder='Ingrese su departamento'
                                            type='text'
                                            name='departament'
                                            labelPlacement='floating'
                                            onIonInput={handleInputChange}
                                        />
                                    </IonItem>
                                    <IonItem>
                                        <IonInput
                                            value={user?.address}
                                            label='Direccion'
                                            placeholder='Ingrese su direccion'
                                            type='text'
                                            name='address'
                                            labelPlacement='floating'
                                            onIonInput={handleInputChange}
                                        />
                                    </IonItem>
                                    <IonRow>
                                        <IonCol>
                                            <IonButton expand="block" onClick={handleSubmit}>
                                                Actualizar Información
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonList>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
            <Footer />
        </IonPage>
    )
}

export default UpdateAccount;