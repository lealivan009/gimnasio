import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonImg, IonInput, IonItem, IonPage, IonRow, IonToast } from '@ionic/react'
import React, { useState } from 'react'

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastColor, setToastColor] = useState<'success' | 'danger'>('success');

    const alert = (message: string, color: 'danger' | 'success', isVisible: boolean) => {
        setToastMessage(message);
        setToastColor(color);
        setShowToast(isVisible);
    };

    // Funcion para detectar si ha ingresado un email
    const handleLogin = async () => {
        if (!email) {
            alert('Email is required', 'danger', true);
            return;
        }
        alert('Email sended', 'success', true);
    };

    //Funcion para que al presionar enter inicie sesion
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleLogin(); // Llamamos a la función de login cuando se presiona Enter
        }
    };

    return (
        <IonPage>
            <IonContent color='dark'>

                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={2000}
                    color={toastColor}
                />

                <div className='center-grid'>
                    <IonGrid >
                        <IonRow>
                            <IonCol size='12' sizeLg='4' offsetLg='4'>
                                <IonCard>
                                    <IonCardHeader>
                                        <IonImg
                                            src="public/gim.png"
                                            className="logo-img-login"
                                        />
                                        <h1 className='ion-text-center'>Recuperar contraseña</h1>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonItem className="login-item">
                                            <IonInput
                                                value={email}
                                                label='Correo'
                                                placeholder='Input your email'
                                                type='email'
                                                labelPlacement='floating'
                                                onIonInput={(e) => {
                                                    setEmail(e.detail.value!);
                                                }}
                                                onKeyDown={handleKeyDown}
                                            />
                                        </IonItem>

                                        <IonButton
                                            expand="block"
                                            color="primary"
                                            onClick={handleLogin}>
                                            Enviar
                                        </IonButton>
                                        <IonButton
                                            expand="block"
                                            color="medium"
                                            routerLink='/login'>
                                            Cancelar
                                        </IonButton>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage >

    )
}

export default ForgotPassword
