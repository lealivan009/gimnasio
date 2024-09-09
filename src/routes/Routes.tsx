import { IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Route, Redirect } from 'react-router'
import Home from '../pages/home/Home'
import Rutine from '../pages/rutine/Rutine'
import Profile from '../pages/profile/Profile'
import Settings from '../pages/settings/Settings'
import Book from '../pages/book/Book'
import Notifications from '../pages/notifications/Notifications'
import Payments from '../pages/payments/Payments'
import History from '../pages/history/History'
import Login from '../pages/login/Login'
import UpdateAccount from '../pages/updateAccount/UpdateAccount'
import DeleteAccount from '../pages/deleteAccount/DeleteAccount'
import ErrorPage from '../pages/errorPage/ErrorPage'
import { getInLocalStorage } from '../utilities'
import ForgotPassword from '../pages/forgotPassword/ForgotPassword'

const Routes: React.FC = () => {

    //get userId from localstorage
    const userId = getInLocalStorage("id");

    return (
        <IonReactRouter>
            <IonRouterOutlet>
                {userId != null ? (
                    <>
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/rutine' component={Rutine} />
                        <Route exact path='/profile' component={Profile} />
                        <Route exact path='/updateAccount' component={UpdateAccount} />
                        <Route exact path='/deleteAccount' component={DeleteAccount} />
                        <Route exact path='/settings' component={Settings} />

                        <Route exact path='/book' component={Book} />
                        <Route exact path='/history' component={History} />
                        <Route exact path='/payments' component={Payments} />
                        <Route exact path='/notifications' component={Notifications} />

                        <Route exact path='/error' component={ErrorPage} />
                        <Route exact path='/login' component={Login} />

                        <Redirect exact path="/" to="/home" />
                    </>
                ) : (
                    <>
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/forgotPassword' component={ForgotPassword} />
                        <Redirect exact path="/" to="/login" />
                    </>
                )}
            </IonRouterOutlet>
        </IonReactRouter >
    )
}

export default Routes;