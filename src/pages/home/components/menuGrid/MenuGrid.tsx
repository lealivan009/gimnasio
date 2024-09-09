import { IonGrid, IonRow, IonCol, IonButton, IonIcon } from '@ionic/react'
import { podium, logoUsd, create, add } from 'ionicons/icons'

const MenuGrid = () => {
    return (
        <IonGrid style={{ marginTop: '10px' }}>
            <IonRow style={{ textAlign: 'center' }}>
                <IonCol size='3' >
                    <IonButton shape='round' color='warning' routerLink='/book'>
                        <IonIcon icon={create} slot='icon-only' style={{ padding: '20px' }} color='light' />
                    </IonButton>
                    <p>Planes</p>
                </IonCol>
                <IonCol size='3'>
                    <IonButton shape='round' color='warning' routerLink='/history'>
                        <IonIcon icon={podium} slot='icon-only' style={{ padding: '20px' }} color='light' />
                    </IonButton>
                    <p>Historico</p>
                </IonCol>
                <IonCol size='3'>
                    <IonButton shape='round' color='warning' routerLink='/payments'>
                        <IonIcon icon={logoUsd} slot='icon-only' style={{ padding: '20px' }} color='light' />
                    </IonButton>
                    <p>Pagos</p>
                </IonCol>
                <IonCol size='3'>
                    <IonButton shape='round' color='warning' routerLink='/payments'>
                        <IonIcon icon={add} slot='icon-only' style={{ padding: '20px' }} color='light' />
                    </IonButton>
                    <p>Más</p>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default MenuGrid
