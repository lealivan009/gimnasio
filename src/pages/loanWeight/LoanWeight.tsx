import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react'
import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const LoanWeight = () => {
    return (
        <IonPage>
            <Header />
            <Footer />
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Loan weight
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

            </IonContent>
        </IonPage>
    )
}

export default LoanWeight
