import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonList, IonRow, IonCol, IonLabel } from '@ionic/react'
import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { notifications } from 'ionicons/icons'

const Notifications = () => {
    return (
        <IonPage>
            <Header title='Notificaciones' icon={notifications} />
            <Footer />
            <IonContent>
                <IonCard>
                    <IonList>
                        <IonRow>
                            <IonCol>
                                <IonLabel>
                                    <p>dsada</p>
                                </IonLabel>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonLabel>
                                    <p>dsada</p>
                                </IonLabel>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonLabel>
                                    <p>dsada</p>
                                </IonLabel>
                            </IonCol>
                        </IonRow>
                    </IonList>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default Notifications
