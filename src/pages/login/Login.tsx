import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { IonCard, IonImg, IonCardHeader, IonCardContent, IonInput, IonItem, IonButton, IonPage, IonContent, IonToast, IonGrid, IonCol, IonRow } from "@ionic/react";
import './Login.css';
import { LocalStorageKeys, saveInLocalStorage } from '../../utilities';
import { getToken } from '../../services/User.service';

const Login: React.FC = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastColor, setToastColor] = useState<'success' | 'danger'>('success');

    const alert = (message: string, color: 'danger' | 'success', isVisible: boolean) => {
        setToastMessage(message);
        setToastColor(color);
        setShowToast(isVisible);
    }

    const handleLogin = async () => {
        if (!email || !password) {
            alert('Email and password are required', 'danger', true);
            return;
        }
        // Login en API
        try {
            const tokenData = await getToken(email, password); // Guardamos el resultado directamente
            if (tokenData) {
                // Guardar en el localStorage
                saveInLocalStorage(LocalStorageKeys.TOKEN, tokenData.token);
                saveInLocalStorage('id', tokenData.id);
                alert('Login successful', 'success', true);
                window.location.href = '/home'; // Forzar recarga completa
            } else {
                alert('Login failure', 'danger', true);
            }
        } catch (error: any) {
            // Verifica si el error tiene `errorMessage`
            if (error && error.errorMessage) {
                alert(error.errorMessage, 'danger', true);  // Muestra el mensaje del backend
            } else {
                alert('An unexpected error occurred', 'danger', true);  // Error genérico
            }
        }

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

                <div className="center-grid">
                    <IonGrid >
                        <IonRow >
                            <IonCol size="12" sizeLg='4' offsetLg='4'>
                                <IonCard >
                                    <IonCardHeader>
                                        <IonImg
                                            src="public/gim.png"
                                            className="logo-img-login"
                                        />
                                        <h1 className='ion-text-center'>Iniciar sesion</h1>
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
                                        <IonItem className="login-item">
                                            <IonInput
                                                value={password}
                                                label='Contraseña'
                                                placeholder='Input your password'
                                                type='password'
                                                labelPlacement='floating'
                                                onIonInput={(e) => {
                                                    setPassword(e.detail.value!);
                                                }}
                                                onKeyDown={handleKeyDown}
                                            />
                                        </IonItem>
                                        <IonButton
                                            expand="block"
                                            color="primary"
                                            onClick={handleLogin}>
                                            Login
                                        </IonButton>
                                        <p className="forgot-password" onClick={() => history.push("/forgotpassword")}>
                                            <a>Olvidaste la contraseña? has clic aquí</a>
                                        </p>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
