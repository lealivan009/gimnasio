import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonTitle, IonText } from '@ionic/react';
import './CardInformation.css';

interface CardProps {
    titulo: string;
    informacion: string;
    colorCard: string;
    colorText: string
}

const CardInformation: React.FC<CardProps> = ({ titulo, informacion, colorCard, colorText }) => {
    return (
        <IonCard color={colorCard} className='cardInformacion'>
            <IonCardContent >
                <IonText color={colorText}>
                    <div className='titulo'>
                        <h3>{titulo}</h3>
                    </div>
                </IonText>
                <IonText color={colorText}>
                    <div className='ion-text-center'>
                        <h2><strong>{informacion}</strong></h2>
                    </div>
                </IonText>
            </IonCardContent>
        </IonCard>
    );
}

export default CardInformation;
