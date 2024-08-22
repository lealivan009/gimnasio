import { IonGrid, IonRow, IonCol, IonText, IonIcon } from '@ionic/react'
import { logoFacebook, logoInstagram, logoTwitter, callOutline, mailOutline } from 'ionicons/icons'
import React from 'react'

const FooterHome = () => {
    return (
        <IonGrid>
            <IonRow className="ion-text-center">
                <IonCol size="6" sizeMd="4">
                    <IonText>
                        <h4>Follow Us</h4>
                    </IonText>
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="auto">
                            <IonIcon icon={logoFacebook} size="large" />
                        </IonCol>
                        <IonCol size="auto">
                            <IonIcon icon={logoInstagram} size="large" />
                        </IonCol>
                        <IonCol size="auto">
                            <IonIcon icon={logoTwitter} size="large" />
                        </IonCol>
                    </IonRow>
                </IonCol>

                {/* Contacto */}
                <IonCol size="6" sizeMd="4">
                    <IonText>
                        <h4>Contact Us</h4>
                    </IonText>
                    <p><IonIcon icon={callOutline} /> +1 234 567 890</p>
                    <p><IonIcon icon={mailOutline} /> info@gym.com</p>
                </IonCol>
            </IonRow>

            {/* Derechos Reservados */}
            <IonRow className="ion-text-center">
                <IonCol>
                    <p>&copy; 2024 Gym App. All Rights Reserved.</p>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default FooterHome
