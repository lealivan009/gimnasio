import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow, IonText } from '@ionic/react'
import React, { useContext } from 'react'
import Footer from '../../components/footer/Footer'
import { personRemove, personRemoveOutline, trash } from 'ionicons/icons'
import Header from '../../components/header/Header'
import { ThemeContext } from '../../hook/Context'
import './DeleteAccount.css'
import { getInLocalStorage, removeFromLocalStorage } from '../../utilities'
import { deleteUser } from '../../services/User.service'

const DeleteAccount = () => {

    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const userId = getInLocalStorage("id");

    const handleDeleteUser = async () => {
        if (!userId) {
            console.log("User id not found");
            return;
        }
        try {
            await deleteUser(userId);
            console.log("User deleted successfully");
            window.location.href = "/login";
            // Eliminar todos los datos relacionados con la sesión del usuario
            removeFromLocalStorage('token');
            removeFromLocalStorage('id');
        } catch (error) {
            console.log("Failed to delete the user: " + error);
        }
    }

    return (
        <IonPage>
            <Header title="Eliminar cuenta" icon={personRemove} />
            <IonContent color={theme}>
                <div className='center-grid'>
                    <IonGrid fixed={true}>
                        <IonRow>
                            <IonCol size="12" sizeLg='8' offsetLg='2'>
                                <IonGrid >
                                    <IonRow>
                                        <div style={{ margin: "auto" }}>
                                            <IonIcon icon={trash} style={{ fontSize: "60px" }} />
                                        </div>
                                        <IonText className='ion-text-center'>
                                            <h1>Esta seguro que desea eliminar su cuenta, luego debera contactarse con el administrador para poder recuperarla</h1>
                                        </IonText>
                                    </IonRow>
                                    <IonRow >
                                        <IonCol size="12" sizeLg='6' >
                                            <IonButton
                                                expand="block"
                                                color='medium'
                                                routerLink='/profile'>
                                                Cancelar</IonButton>
                                        </IonCol>
                                        <IonCol size="12" sizeLg='6' >
                                            <IonButton
                                                expand='block'
                                                color='danger'
                                                onClick={handleDeleteUser}>
                                                Confirmar</IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCol>
                        </IonRow>

                    </IonGrid>

                </div>
            </IonContent>
            <Footer />
        </IonPage>
    )
}

export default DeleteAccount
