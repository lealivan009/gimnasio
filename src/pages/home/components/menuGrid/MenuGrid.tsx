import { IonGrid, IonRow, IonCol, IonButton, IonIcon } from '@ionic/react'
import { calendarNumber, podium, logoUsd, createOutline, create } from 'ionicons/icons'
import React from 'react'

const MenuGrid = () => {
    return (
        <IonGrid style={{ marginTop: '15px' }}>
            <IonRow style={{ textAlign: 'center' }}>
                <IonCol size='4' >
                    <IonButton shape='round' color='warning' routerLink='/book'>
                        <IonIcon icon={create} slot='icon-only' style={{ padding: '20px' }} color='light' />
                    </IonButton>
                    <p>Planes</p>
                </IonCol>
                <IonCol size='4'>
                    <IonButton shape='round' color='warning' routerLink='/history'>
                        <IonIcon icon={podium} slot='icon-only' style={{ padding: '20px' }} color='light' />
                    </IonButton>
                    <p>Historico</p>
                </IonCol>
                <IonCol size='4'>
                    <IonButton shape='round' color='warning' routerLink='/payments'>
                        <IonIcon icon={logoUsd} slot='icon-only' style={{ padding: '20px' }} color='light' />
                    </IonButton>
                    <p>Pagos</p>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default MenuGrid
