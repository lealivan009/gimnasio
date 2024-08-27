import React, { useContext, useState } from 'react'

// Importar un sonido para el temporizador (puedes usar cualquier archivo de sonido)
import timerEndSound from '../../../../../public/timer-end.mp3'
import { IonButton } from '@ionic/react';
import { ThemeContext } from '../../../../hook/Context';

interface ButtonWithClockProp {
    time: number
}

const ButtonWithClock: React.FC<ButtonWithClockProp> = ({ time }) => {

    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme, toggleTheme } = themeContext;

    // Estado para el temporizador
    const [timer, setTimer] = useState<number | null>(null);
    const [isTiming, setIsTiming] = useState<boolean>(false);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);


    // Sonido para el temporizador
    const playSound = () => {
        const audio = new Audio(timerEndSound);
        audio.play();
    };

    // Función para iniciar el temporizador
    const startTimer = (time: number) => {
        setIsTiming(true);
        setTimer(time);
        const id = setInterval(() => {
            setTimer(prev => {
                if (prev && prev > 0) {
                    if (prev === 4) {
                        playSound();
                    }
                    return prev - 1;

                } else {
                    clearInterval(id);
                    setIsTiming(false);
                    return 0;
                }
            });
        }, 1000);
        setIntervalId(id);
    };

    // Función para formatear el tiempo
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <IonButton
            fill="outline"
            color={theme === 'light' ? 'secondary' : 'light'}
            onClick={() => startTimer(time)}
            disabled={isTiming}
        >
            {isTiming ? `Timer: ${formatTime(timer ?? 0)}` : 'Start Timer'}
        </IonButton>
    )
}

export default ButtonWithClock
