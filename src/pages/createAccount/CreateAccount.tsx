import { IonButton, IonCard, IonCheckbox, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonText, IonToast } from '@ionic/react'
import Header from '../../components/header/Header'
import { personAdd } from 'ionicons/icons'
import { UseTheme } from '../../hook/UseTheme';
import { useState } from 'react';
import { User } from '../../models/User';
import Footer from '../../components/footer/Footer';

const CreateAccount = () => {

    //Custom hook for themes
    const { theme } = UseTheme();

    const [user, setUser] = useState<User>();

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastColor, setToastColor] = useState<'success' | 'danger'>('success');

    const alert = (message: string, color: 'danger' | 'success', isVisible: boolean) => {
        setToastMessage(message);
        setToastColor(color);
        setShowToast(isVisible);
    }

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

    const handleSubmit = async () => { }

    return (
        <IonPage>
            <Header title='Crear cuenta' icon={personAdd} />
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
                                            value={user?.birthDate}
                                            label='Fecha de nacimiento'
                                            placeholder='Ingrese su fecha de nacimiento'
                                            type='date'
                                            name='birthDate'
                                            labelPlacement='floating'
                                            onIonInput={handleInputChange}
                                        />
                                    </IonItem>
                                    <IonItem>
                                        <IonInput
                                            value={user?.username}
                                            label='Nombre de usuario'
                                            placeholder='Ingrese su nombre de usuario'
                                            type='text'
                                            name='username'
                                            labelPlacement='floating'
                                            onIonInput={handleInputChange}
                                        />
                                    </IonItem>
                                    <IonItem>
                                        <IonInput
                                            value={user?.email}
                                            label='Email'
                                            placeholder='Ingrese su email'
                                            type='text'
                                            name='email'
                                            labelPlacement='floating'
                                            onIonInput={handleInputChange}
                                        />
                                    </IonItem>
                                    <IonItem>
                                        <IonInput
                                            value={user?.password}
                                            label='Password'
                                            placeholder='Ingrese su contraseña'
                                            type='password'
                                            name='password'
                                            labelPlacement='floating'
                                            onIonInput={handleInputChange}
                                        />
                                    </IonItem>
                                    <IonItem>
                                        <IonInput
                                            value={user?.dni}
                                            label='DNI'
                                            placeholder='Ingrese su dni'
                                            type='text'
                                            name='dni'
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
                                    <IonItem>
                                        <IonLabel>Foto</IonLabel>
                                        <input type="file" accept="image/*" />
                                    </IonItem>
                                    <IonRow>
                                        <IonItem>
                                            <IonText>
                                                Roles:
                                            </IonText>
                                        </IonItem>
                                        <IonItem>
                                            <IonCheckbox labelPlacement="start">User</IonCheckbox>
                                        </IonItem>
                                        <IonItem>
                                            <IonCheckbox labelPlacement="start">Admin</IonCheckbox>
                                        </IonItem>
                                    </IonRow>

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

export default CreateAccount
