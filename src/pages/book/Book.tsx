import { IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Calendar from './components/calendar/Calendar';

const Book = () => {
    // Datos de ejemplo para la tabla
    const scheduleData = [
        { time: '09:00 - 10:00', monday: 5, tuesday: 4, wednesday: 6, thursday: 3, friday: 5 },
        { time: '10:00 - 11:00', monday: 7, tuesday: 5, wednesday: 8, thursday: 6, friday: 7 },
        { time: '11:00 - 12:00', monday: 6, tuesday: 4, wednesday: 7, thursday: 5, friday: 8 },
        { time: '12:00 - 13:00', monday: 8, tuesday: 6, wednesday: 5, thursday: 4, friday: 7 },
        { time: '15:00 - 16:00', monday: 9, tuesday: 7, wednesday: 8, thursday: 6, friday: 9 },
        { time: '16:00 - 17:00', monday: 10, tuesday: 8, wednesday: 9, thursday: 7, friday: 10 },
        { time: '17:00 - 18:00', monday: 11, tuesday: 9, wednesday: 10, thursday: 8, friday: 11 },
        { time: '18:00 - 19:00', monday: 12, tuesday: 10, wednesday: 11, thursday: 9, friday: 12 },
        { time: '19:00 - 20:00', monday: 13, tuesday: 11, wednesday: 12, thursday: 10, friday: 13 },
        { time: '20:00 - 21:00', monday: 14, tuesday: 12, wednesday: 13, thursday: 11, friday: 14 },
    ];

    return (
        <IonPage>
            <Header />
            <Footer />
            <IonHeader>
                <IonToolbar>
                    <IonTitle className='ion-text-center'>
                        Book
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <IonGrid>
                    <IonRow >
                        <IonCol sizeLg="6" size="12">
                            <Calendar />
                        </IonCol>
                        <IonCol sizeLg="6" size="12">
                            <IonCard>
                                <IonCardHeader>
                                    Turnos para la semana
                                </IonCardHeader>
                                <IonCardContent>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Time</th>
                                                <th>Monday</th>
                                                <th>Tuesday</th>
                                                <th>Wednesday</th>
                                                <th>Thursday</th>
                                                <th>Friday</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {scheduleData.map((slot, index) => (
                                                <tr key={index}>
                                                    <td>{slot.time}</td>
                                                    <td>{slot.monday}</td>
                                                    <td>{slot.tuesday}</td>
                                                    <td>{slot.wednesday}</td>
                                                    <td>{slot.thursday}</td>
                                                    <td>{slot.friday}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Book;
