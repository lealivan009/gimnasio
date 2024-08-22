import React, { useContext } from 'react';
import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonGrid, IonRow, IonCol,
    IonCard
} from '@ionic/react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { cashOutline, logoUsd } from 'ionicons/icons';
import { ThemeContext } from '../../hook/Context';

// Datos de pagos
const paymentsData = [
    { month: 'January', amount: 200, date: '2024-01-15' },
    { month: 'February', amount: 250, date: '2024-02-10' },
    { month: 'March', amount: 220, date: '2024-03-05' },
    { month: 'April', amount: 300, date: '2024-04-20' },
    { month: 'May', amount: 270, date: '2024-05-12' },
    { month: 'June', amount: 310, date: '2024-06-25' },
    { month: 'July', amount: 290, date: '2024-07-18' },
    { month: 'August', amount: 320, date: '2024-08-05' }
];

const Payments = () => {

    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null; // Manejo de caso en el que el contexto no esté disponible
    const { theme, toggleTheme } = themeContext;


    // Organizar pagos por mes
    const paymentsByMonth = paymentsData.reduce((acc, payment) => {
        if (!acc[payment.month]) {
            acc[payment.month] = [];
        }
        acc[payment.month].push(payment);
        return acc;
    }, {});

    return (
        <IonPage>
            <Header title="Pagos" icon={logoUsd} />
            <IonContent color={theme}>
                <IonCard>
                    <IonAccordionGroup >
                        {Object.keys(paymentsByMonth).map((month, index) => (
                            <IonAccordion key={index} value={month}>
                                <IonItem slot="header" color={theme === 'light' ? 'light' : 'medium'}>
                                    <IonLabel>{month}</IonLabel>
                                </IonItem>
                                <div className="ion-padding" slot="content"
                                    style={{
                                        padding: '10px',
                                        backgroundColor: theme === 'light' ? '#ffffff' : '#1e1e1e',
                                        color: theme === 'light' ? '#000000' : '#ffffff'
                                    }}>
                                    <IonGrid >
                                        {paymentsByMonth[month].map((payment, i) => (
                                            <IonRow key={i}>
                                                <IonCol>
                                                    <IonLabel><strong>Monto:</strong> ${payment.amount}</IonLabel>
                                                </IonCol>
                                                <IonCol>
                                                    <IonLabel><strong>Fecha:</strong> {payment.date}</IonLabel>
                                                </IonCol>
                                            </IonRow>
                                        ))}
                                    </IonGrid>
                                </div>
                            </IonAccordion>
                        ))}
                    </IonAccordionGroup>
                </IonCard>

            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default Payments;
