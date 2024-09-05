import { IonPage } from '@ionic/react'
import './SplashScreen.css'

const SplashScreen = () => {
    return (
        <IonPage>
            <div className='loading-screen'>
                <img className='loading-animation' src='gim.svg' alt="logo" />
            </div>
        </IonPage>
    )
}

export default SplashScreen
