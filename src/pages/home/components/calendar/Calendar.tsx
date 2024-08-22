import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonDatetime, IonGrid, IonLabel, IonRow, IonTitle } from '@ionic/react';
import { useContext, useRef } from 'react';
import './Calendar.css'
import { ThemeContext } from '../../../../hook/Context';

function Calendar() {

    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null; // Manejo de caso en el que el contexto no esté disponible
    const { theme, toggleTheme } = themeContext;

    const disabledDates = [''];

    const isWeekday = (dateString: string) => {
        const date = new Date(dateString);
        const utcDay = date.getUTCDay();

        const isHoliday = disabledDates.includes(dateString);
        return utcDay !== 0 && utcDay !== 6 && !isHoliday;
    };

    const datetime = useRef<null | HTMLIonDatetimeElement>(null);
    const reset = () => {
        datetime.current?.reset();
    };
    const cancel = () => {
        datetime.current?.cancel();
    };
    const confirm = () => {
        datetime.current?.confirm();
    };

    return (
        <IonGrid>
            <IonRow>
                <IonLabel>
                    <IonTitle>
                        <strong>Asistencia del mes</strong>
                    </IonTitle>
                </IonLabel>
            </IonRow>
            <IonRow>
                <IonCol size="12">
                    <IonCard>
                        <IonDatetime
                            isDateEnabled={isWeekday}
                            firstDayOfWeek={1}
                            min="2024-08-21T00:00:00"
                            max="2024-08-27T23:59:59"
                            presentation="date"
                            size='cover'
                            style={{
                                backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
                                color: theme === 'light' ? '#000000' : '#ffffff'
                            }}
                            highlightedDates={[
                                {
                                    date: '2024-08-02',
                                    textColor: '#006400',
                                    backgroundColor: '#90EE90',
                                },
                                {
                                    date: '2024-08-19',
                                    textColor: '#006400',
                                    backgroundColor: '#90EE90',
                                },
                                {
                                    date: '2024-08-07',
                                    textColor: '#800080',
                                    backgroundColor: '#ffc0cb',
                                },
                                {
                                    date: '2024-08-09',
                                    textColor: '#006400',
                                    backgroundColor: '#90EE90',
                                },
                                {
                                    date: '2024-08-12',
                                    textColor: '#800080',
                                    backgroundColor: '#ffc0cb',
                                },
                                {
                                    date: '2024-08-14',
                                    textColor: '#006400',
                                    backgroundColor: '#90EE90',
                                },
                                {
                                    date: '2024-08-16',
                                    textColor: '#006400',
                                    backgroundColor: '#90EE90',
                                },
                                {
                                    date: '2024-08-05',
                                    textColor: '#800080',
                                    backgroundColor: '#ffc0cb',
                                }
                            ]}
                        >
                            <IonButtons slot="buttons">
                                <IonButton color="primary" onClick={cancel}>
                                    Presente
                                </IonButton>
                                <IonButton color="danger" onClick={cancel}>
                                    Ausente
                                </IonButton>

                            </IonButtons>
                        </IonDatetime>

                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
}

export default Calendar;
