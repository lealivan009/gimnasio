import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonItem, IonButton, IonPage, IonContent, IonToast, IonGrid, IonCol, IonRow, IonText } from "@ionic/react";
import './Login.css';
import { getToken } from '../../services/User.service';
import { LocalStorageKeys, saveInLocalStorage } from '../../utilities';

const Login: React.FC = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastColor, setToastColor] = useState<'success' | 'danger'>('success');

    // Función para decodificar el token JWT
    const decodeToken = (token: string) => {
        const payloadBase64 = token.split('.')[1]; // La carga útil está en la segunda parte del token JWT
        const decodedPayload = atob(payloadBase64); // Decodifica la parte Base64
        return JSON.parse(decodedPayload); // Convierte la carga útil en un objeto JSON
    };

    const alert = (message: string, color: 'danger' | 'success', isVisible: boolean) => {
        setToastMessage(message);
        setToastColor(color);
        setShowToast(isVisible);
    }

    const handleLogin = async () => {
        try {

            if (!email || !password) {
                alert('Email and password are required', 'danger', true);
                return;
            }

            //login en apiLeal
            const token = await getToken(email, password);
            saveInLocalStorage(LocalStorageKeys.TOKEN, token);

            // Decodificar el token y extraer el id
            const decodedToken = decodeToken(token);
            const userId = decodedToken.id; // Supongamos que el 'id' está dentro del token decodificado
            saveInLocalStorage('id', userId);

            alert('Login successful', 'success', true);
            history.push('/home');
        } catch (error) {
            alert('Login failed', 'danger', true);
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
                            <IonCol size="12" sizeLg='4' offset='4'>
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
                                                onIonChange={(e) => { setEmail(e.detail.value!); console.log(e.detail.value!); }}
                                            />
                                        </IonItem>
                                        <IonItem className="login-item">
                                            <IonInput
                                                value={password}
                                                label='Contraseña'
                                                placeholder='Input your password'
                                                type='password'
                                                labelPlacement='floating'
                                                onIonChange={(e) => { setPassword(e.detail.value!); }}
                                            />
                                        </IonItem>
                                        <IonButton
                                            expand="block"
                                            color="primary"
                                            onClick={handleLogin}>
                                            Login
                                        </IonButton>
                                        <p className="forgot-password" onClick={() => history.push("/forgotpassword")}>
                                            <a >Olvidaste la contraseña? has clic aquí</a>
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
