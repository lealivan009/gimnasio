import { IonHeader, IonIcon, IonLabel, IonText, IonTitle, IonToolbar } from '@ionic/react'
import './Header.css';
import { useContext } from 'react';
import { ThemeContext } from '../../hook/Context';

interface HeaderProps {
    title: string;
    icon: any;
}

const Header: React.FC<HeaderProps> = ({ title, icon }) => {

    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null; // Manejo de caso en el que el contexto no esté disponible
    const { theme, toggleTheme } = themeContext;

    return (
        <IonHeader>
            <IonToolbar color={theme === 'light' ? 'light' : 'dark'}>
                <div className='icon' >
                    <IonIcon icon={icon} style={{ marginRight: '10px' }} />
                    {title}
                </div>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;