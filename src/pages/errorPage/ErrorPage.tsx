import { IonCol, IonContent, IonGrid, IonPage, IonRow, IonText } from '@ionic/react'
import React from 'react'

interface errorProp {
    error: string
}

const ErrorPage: React.FC<errorProp> = ({ error }) => {
    return (
        <IonPage>
            <IonContent color='primary'>
                <IonGrid>
                    <IonRow>
                        <IonCol size='8' offset='2' >
                            <IonText>
                                <h1> Ocurrio un error!</h1>
                                <p>{error}</p>
                            </IonText>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default ErrorPage
