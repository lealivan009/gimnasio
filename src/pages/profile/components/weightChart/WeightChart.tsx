import React, { useContext } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ThemeContext } from '../../../../hook/Context';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface weightsProps {
    title: string
    labels: string[],
    datas: number[]
}

const WeightChart: React.FC<weightsProps> = ({ title, labels, datas }) => {

    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null; // Manejo de caso en el que el contexto no esté disponible
    const { theme, toggleTheme } = themeContext;

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Peso',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                data: datas,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <IonCard color={theme} style={{ width: '100%', margin: '0px' }}>
            <IonCardHeader>
                <IonCardTitle color={theme === 'light' ? 'dark' : 'light'}>{title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <Line data={data} options={options} />
            </IonCardContent>
        </IonCard>

    );
};

export default WeightChart;
