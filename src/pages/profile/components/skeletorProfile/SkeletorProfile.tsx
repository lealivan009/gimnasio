import { IonGrid, IonRow, IonCol, IonCard, IonList, IonItem, IonSkeletonText } from '@ionic/react'
import AvatarProfile from '../avatarProfile/AvatarProfile'

interface SkeletorProps {
    theme: string
}

const SkeletorProfile: React.FC<SkeletorProps> = ({ theme }) => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol size="12" sizeLg='8' offsetLg='2' className="ion-text-center avatar-container">
                    <AvatarProfile photo={null} />
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size="12" sizeLg='8' offsetLg='2'>
                    <IonCard>
                        <IonList style={{ padding: '0px' }}>
                            <IonItem color={theme === 'light' ? 'light' : 'medium'}>
                                <IonSkeletonText animated={true} style={{ width: "200px", height: '15px' }} />
                            </IonItem>
                            <IonItem color={theme === 'light' ? 'light' : 'medium'} >
                                <IonSkeletonText animated={true} style={{ width: "200px", height: '15px' }} />
                            </IonItem>
                            <IonItem color={theme === 'light' ? 'light' : 'medium'}>
                                <IonSkeletonText animated={true} style={{ width: "200px", height: '15px' }} />
                            </IonItem>
                            <IonItem color={theme === 'light' ? 'light' : 'medium'} >
                                <IonSkeletonText animated={true} style={{ width: "200px", height: '15px' }} />
                            </IonItem>
                            <IonItem color={theme === 'light' ? 'light' : 'medium'} >
                                <IonSkeletonText animated={true} style={{ width: "200px", height: '15px' }} />
                            </IonItem>
                            <IonItem color={theme === 'light' ? 'light' : 'medium'} >
                                <IonSkeletonText animated={true} style={{ width: "200px", height: '15px' }} />
                            </IonItem>
                            <IonItem color={theme === 'light' ? 'light' : 'medium'} >
                                <IonSkeletonText animated={true} style={{ width: "200px", height: '15px' }} />
                            </IonItem>
                            <IonItem color={theme === 'light' ? 'light' : 'medium'}>
                                <IonSkeletonText animated={true} style={{ width: "200px", height: '15px' }} />
                            </IonItem>
                        </IonList>
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default SkeletorProfile
