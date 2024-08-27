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

const Routes: React.FC = () => {
    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Route exact path='/home' component={Home} />
                <Route exact path='/rutine' component={Rutine} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/settings' component={Settings} />

                <Route exact path='/book' component={Book} />
                <Route exact path='/history' component={History} />
                <Route exact path='/payments' component={Payments} />
                <Route exact path='/notifications' component={Notifications} />

                <Route exact path='/login' component={Login} />

                <Redirect exact path="/" to="/home" />
            </IonRouterOutlet>
        </IonReactRouter>
    )
}

export default Routes;
