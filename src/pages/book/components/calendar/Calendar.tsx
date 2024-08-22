import { IonButton, IonButtons, IonCol, IonDatetime, IonGrid, IonRow } from '@ionic/react';
import { useRef } from 'react';

function Calendar() {
    const disabledDates = ['2024-08-16', '2024-08-21', '2024-08-22'];

    const isWeekday = (dateString: string) => {
        const date = new Date(dateString);
        const utcDay = date.getUTCDay();

        // Verifica si la fecha está en la lista de días deshabilitados
        const isHoliday = disabledDates.includes(dateString);

        /**
         * La fecha estará habilitada si no es domingo o sábado
         * y si no está en la lista de días deshabilitados.
         */
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
                <IonCol size="12" style={{ display: "flex", justifyContent: 'center' }}>
                    <IonDatetime
                        isDateEnabled={isWeekday}
                        firstDayOfWeek={1}
                        min="2024-08-15T00:00:00"
                        max="2024-08-23T23:59:59"
                        hourCycle="h24"
                        hourValues="9,10,11,12,13,15,16,17,18,19,20,21"
                        minuteValues="0,30">
                        <IonButtons slot="buttons">
                            <IonButton color="danger" onClick={reset}>
                                Reset
                            </IonButton>
                            <IonButton color="primary" onClick={cancel}>
                                Never mind
                            </IonButton>
                            <IonButton color="primary" onClick={confirm}>
                                All Set
                            </IonButton>
                        </IonButtons>
                    </IonDatetime>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
}

export default Calendar;
