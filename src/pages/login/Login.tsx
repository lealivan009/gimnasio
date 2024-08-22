import React, { useState } from 'react';
import {
    IonCard,
    IonImg,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonItem,
    IonButton,
    IonPage,
    IonContent,
    IonToast
} from "@ionic/react";
import { useHistory } from 'react-router';
//import { login } from '../../services/firebaseService';
import './Login.css';
//import { saveInLocalStorage } from '../../utilities';

const Login: React.FC = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastColor, setToastColor] = useState<'success' | 'danger'>('success');

    const handleLogin = async () => {
        if (!email || !password) {
            setToastMessage('Email and password are required');
            console.log(email + " " + password);
            setToastColor('danger');
            setShowToast(true);
            return;
        }
        try {
            //            await login(email, password);
            setToastMessage('Login successful');
            setToastColor('success');
            setShowToast(true);
            history.push('/home');
            //            saveInLocalStorage('email', email);
        } catch (error) {
            setToastMessage('Login failed');
            setToastColor('danger');
            setShowToast(true);
        }
    };

    return (
        <IonPage>
            <IonContent>
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={2000}
                    color={toastColor}
                />

                <div className="login-content">
                    <IonCard className="login-card">
                        <IonImg
                            src="src/assets/assets/logo_osde.svg"
                            className="logo-img-login"
                        />
                        <IonCardHeader>
                            <IonCardTitle className="ion-text-center">Login</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonItem className="login-item">
                                <IonInput
                                    value={email}
                                    label='Email'
                                    placeholder='Input your email'
                                    type='email'
                                    labelPlacement='floating'
                                    onIonChange={(e) => { setEmail(e.detail.value!); console.log(e.detail.value!); }}
                                />
                            </IonItem>
                            <IonItem className="login-item">
                                <IonInput
                                    value={password}
                                    label='Password'
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
                                <a >Forgot your password? Click here!</a>
                            </p>
                            <div className="button-create-account">
                                <IonButton expand="block" fill="outline" color="primary" routerLink="/register">
                                    Create new account
                                </IonButton>
                            </div>
                        </IonCardContent>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
