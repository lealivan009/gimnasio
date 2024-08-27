import { IonAvatar, IonFab, IonFabButton, IonIcon, IonSkeletonText } from '@ionic/react'
import { pencil } from 'ionicons/icons'
import React from 'react'
import './AvatarProfile.css'

interface avatarProps {
    photo: string | null
}

const AvatarProfile: React.FC<avatarProps> = ({ photo }) => {
    return (
        (photo ? (
            <IonAvatar className='avatar' >
                <img src={photo} alt="Avatar" />
                <IonFab className='pencil-position'>
                    <IonFabButton size="small" color='light'>
                        <IonIcon icon={pencil}></IonIcon>
                    </IonFabButton>
                </IonFab>
            </IonAvatar>
        ) : (
            <IonAvatar className='avatar'>
                <IonSkeletonText animated={true} style={{ width: "100%", height: "100%" }} />
            </IonAvatar>
        )))
}

export default AvatarProfile
