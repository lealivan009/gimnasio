import React, { useContext } from 'react';
import {
    IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton,
    IonGrid, IonRow, IonCol, IonList, IonAccordion, IonAccordionGroup,
    IonTitle
} from '@ionic/react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { ThemeContext } from '../../hook/Context';
import { accessibility } from 'ionicons/icons';

const Rutine = () => {

    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme, toggleTheme } = themeContext;

    // Ejemplo de datos de ejercicios
    const exercises = {
        chest: [
            {
                name: "Bench Press",
                description: "Acuéstate en el banco con los pies firmes en el suelo. Baja la barra lentamente hasta que toque ligeramente tu pecho y luego empuja hacia arriba con fuerza, manteniendo los codos hacia adentro.",
                lastMaxWeight: "100 kg",
                setsAndReps: "3x10"
            },
            {
                name: "Incline Bench Press",
                description: "Inclina el banco a unos 30-45 grados. Baja la barra lentamente hacia la parte superior del pecho y empuja hacia arriba, asegurando que la espalda se mantenga apoyada.",
                lastMaxWeight: "80 kg",
                setsAndReps: "4x8"
            },
            {
                name: "Chest Flyes",
                description: "Mantén los brazos ligeramente flexionados mientras abres los brazos hacia los lados en un movimiento controlado. Concéntrate en apretar el pecho al volver al centro.",
                lastMaxWeight: "20 kg",
                setsAndReps: "3x12"
            }
        ],
        biceps: [
            {
                name: "Barbell Curl",
                description: "Mantén los codos pegados al cuerpo mientras levantas la barra hacia los hombros. Evita balancear el cuerpo y enfócate en una contracción total de los bíceps.",
                lastMaxWeight: "50 kg",
                setsAndReps: "4x10"
            },
            {
                name: "Hammer Curl",
                description: "Levanta las mancuernas con un agarre neutro (palmas hacia adentro) para involucrar los músculos del antebrazo y bíceps. Mantén el control del peso durante todo el movimiento.",
                lastMaxWeight: "30 kg",
                setsAndReps: "3x12"
            },
            {
                name: "Concentration Curl",
                description: "Apoya el codo en el muslo y eleva la mancuerna con un movimiento controlado. Asegúrate de apretar el bíceps en la parte superior del ejercicio.",
                lastMaxWeight: "25 kg",
                setsAndReps: "3x15"
            }
        ],
        back: [
            {
                name: "Dominadas",
                description: "Cuélgate de la barra con las palmas hacia adelante. Lleva el pecho hacia la barra usando la fuerza de la espalda, evitando balancearte.",
                lastMaxWeight: "10 repeticiones",
                setsAndReps: "3x10"
            },
            {
                name: "Remo con Barra",
                description: "Con una ligera inclinación hacia adelante, lleva la barra hacia el abdomen, manteniendo la espalda recta y evitando balanceos. Siente la contracción en la espalda baja y media.",
                lastMaxWeight: "60 kg",
                setsAndReps: "4x8"
            },
            {
                name: "Jalón al Pecho",
                description: "Usa un agarre amplio y tira de la barra hacia el pecho, manteniendo los codos hacia abajo y enfócate en apretar los músculos de la espalda alta.",
                lastMaxWeight: "70 kg",
                setsAndReps: "3x12"
            }
        ],
        triceps: [
            {
                name: "Press Francés",
                description: "Mantén los codos fijos mientras bajas la barra o mancuerna detrás de la cabeza y estira los brazos hacia arriba de manera controlada, enfocándote en los tríceps.",
                lastMaxWeight: "40 kg",
                setsAndReps: "3x10"
            },
            {
                name: "Extensión de Tríceps con Cuerda",
                description: "Extiende los brazos hacia abajo separando las cuerdas en la parte inferior del movimiento. Mantén los codos quietos para maximizar el trabajo en los tríceps.",
                lastMaxWeight: "35 kg",
                setsAndReps: "4x10"
            },
            {
                name: "Fondos en Paralelas",
                description: "Mantén el torso ligeramente inclinado hacia adelante y los codos hacia adentro mientras bajas hasta que los brazos formen un ángulo de 90 grados. Luego, empuja hacia arriba con fuerza.",
                lastMaxWeight: "12 repeticiones",
                setsAndReps: "3x15"
            }
        ]
    };

    return (
        <IonPage>
            <Header title="Rutina" icon={accessibility} />

            <IonContent color={theme === 'light' ? 'light' : 'medium'}>
                <IonGrid>

                    {/* Chest Exercises */}
                    <IonRow>
                        <IonCol size="12">
                            <IonTitle className='ion-text-center'>Rutina de hoy</IonTitle>
                            <IonCard color={theme === 'light' ? 'light' : 'dark'}>
                                <IonCardHeader>
                                    <IonCardTitle>Chest Exercises</IonCardTitle>
                                </IonCardHeader>
                                <IonAccordionGroup >
                                    <IonList style={{ padding: '0px' }} >
                                        {exercises.chest.map((exercise, index) => (
                                            <IonAccordion key={index}>
                                                <IonItem slot="header" color={theme === 'light' ? 'light' : 'dark'}>
                                                    <IonLabel>{exercise.name}</IonLabel>
                                                </IonItem>
                                                <div slot="content"
                                                    style={{
                                                        padding: '10px',
                                                        backgroundColor: theme === 'light' ? '#ffffff' : '#1e1e1e',
                                                        color: theme === 'light' ? '#000000' : '#ffffff'
                                                    }}
                                                >
                                                    <p>{exercise.description}</p>
                                                    <p><strong>Repeticiones:</strong> {exercise.setsAndReps}</p>
                                                    <p><strong>Último peso máximo:</strong> {exercise.lastMaxWeight}</p>
                                                    <IonRow className="ion-justify-content-center">
                                                        <IonButton fill="outline" color={theme === 'light' ? 'primary' : 'light'}>Mark Max Weight</IonButton>
                                                    </IonRow>
                                                </div>
                                            </IonAccordion>
                                        ))}
                                    </IonList>

                                </IonAccordionGroup>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                    {/* Biceps Exercises */}
                    <IonRow>
                        <IonCol size="12">
                            <IonCard color={theme === 'light' ? 'light' : 'dark'}>
                                <IonCardHeader>
                                    <IonCardTitle>Biceps Exercises</IonCardTitle>
                                </IonCardHeader>
                                <IonAccordionGroup>
                                    {exercises.biceps.map((exercise, index) => (
                                        <IonAccordion key={index}>
                                            <IonItem slot="header" color={theme === 'light' ? 'light' : 'dark'}>
                                                <IonLabel>{exercise.name}</IonLabel>
                                            </IonItem>
                                            <div slot="content"
                                                style={{
                                                    padding: '10px',
                                                    backgroundColor: theme === 'light' ? '#ffffff' : '#1e1e1e',
                                                    color: theme === 'light' ? '#000000' : '#ffffff'
                                                }}
                                            >
                                                <p>{exercise.description}</p>
                                                <p><strong>Repeticiones:</strong> {exercise.setsAndReps}</p>
                                                <p><strong>Último peso máximo:</strong> {exercise.lastMaxWeight}</p>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonButton fill="outline" color={theme === 'light' ? 'primary' : 'light'}>Mark Max Weight</IonButton>
                                                </IonRow>
                                            </div>
                                        </IonAccordion>
                                    ))}
                                </IonAccordionGroup>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                    {/* Back Exercises */}
                    <IonRow>
                        <IonTitle className='ion-text-center'>Proxima rutina</IonTitle>
                        <IonCol size="12">
                            <IonCard color={theme === 'light' ? 'light' : 'dark'}>
                                <IonCardHeader>
                                    <IonCardTitle>Ejercicios de Espalda</IonCardTitle>
                                </IonCardHeader>
                                <IonAccordionGroup>
                                    {exercises.back.map((exercise, index) => (
                                        <IonAccordion key={index}>
                                            <IonItem slot="header" color={theme === 'light' ? 'light' : 'dark'}>
                                                <IonLabel>{exercise.name}</IonLabel>
                                            </IonItem>
                                            <div slot="content"
                                                style={{
                                                    padding: '10px',
                                                    backgroundColor: theme === 'light' ? '#ffffff' : '#1e1e1e',
                                                    color: theme === 'light' ? '#000000' : '#ffffff'
                                                }}
                                            >
                                                <p>{exercise.description}</p>
                                                <p><strong>Repeticiones:</strong> {exercise.setsAndReps}</p>
                                                <p><strong>Último peso máximo:</strong> {exercise.lastMaxWeight}</p>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonButton fill="outline" color={theme === 'light' ? 'primary' : 'light'}>Mark Max Weight</IonButton>
                                                </IonRow>
                                            </div>
                                        </IonAccordion>
                                    ))}
                                </IonAccordionGroup>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                    {/* Triceps Exercises */}
                    <IonRow>
                        <IonCol size="12">
                            <IonCard color={theme === 'light' ? 'light' : 'dark'}>
                                <IonCardHeader>
                                    <IonCardTitle>Triceps Exercises</IonCardTitle>
                                </IonCardHeader>
                                <IonAccordionGroup>
                                    {exercises.triceps.map((exercise, index) => (
                                        <IonAccordion key={index}>
                                            <IonItem slot="header" color={theme === 'light' ? 'light' : 'dark'}>
                                                <IonLabel>{exercise.name}</IonLabel>
                                            </IonItem>
                                            <div slot="content"
                                                style={{
                                                    padding: '10px',
                                                    backgroundColor: theme === 'light' ? '#ffffff' : '#1e1e1e',
                                                    color: theme === 'light' ? '#000000' : '#ffffff'
                                                }}
                                            >
                                                <p>{exercise.description}</p>
                                                <p><strong>Repeticiones:</strong> {exercise.setsAndReps}</p>
                                                <p><strong>Último peso máximo:</strong> {exercise.lastMaxWeight}</p>
                                                <IonRow className="ion-justify-content-center">
                                                    <IonButton fill="outline" color={theme === 'light' ? 'primary' : 'light'}>Mark Max Weight</IonButton>
                                                </IonRow>
                                            </div>
                                        </IonAccordion>
                                    ))}
                                </IonAccordionGroup>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                </IonGrid>
            </IonContent>

            <Footer />
        </IonPage >
    );
};

export default Rutine;
