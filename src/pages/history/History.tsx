import React, { useState } from 'react';
import { IonItem, IonLabel, IonSelect, IonSelectOption, IonButton, IonIcon, IonPopover, IonDatetime, IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonAccordion, IonAccordionGroup, IonRadio, IonRadioGroup, IonCard } from '@ionic/react';
import { calendarOutline } from 'ionicons/icons';
import './History.css'
import ChartComponent from '../../components/chartComponent/ChartComponent';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const ExerciseFilter: React.FC<{ onFilterChange: (type: string, startDate: string, endDate: string) => void }> = ({ onFilterChange }) => {
    const [exerciseType, setExerciseType] = useState<string>('All');
    const [startDate, setStartDate] = useState<string>(new Date().toISOString());
    const [endDate, setEndDate] = useState<string>(new Date().toISOString());

    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);

    return (
        <IonPage>
            <Header />
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Historico
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonAccordionGroup>
                        {/* Acordeón para seleccionar el músculo */}
                        <IonAccordion value="muscle">
                            <IonItem slot="header" color="light">
                                <IonLabel className="ion-text-center">Músculo</IonLabel>
                            </IonItem>
                            <div className="ion-padding ion-text-center" slot="content">
                                <IonRadioGroup
                                    value={exerciseType}
                                    onIonChange={e => { setExerciseType(e.detail.value); onFilterChange(e.detail.value, startDate, endDate); }}
                                >
                                    <IonItem>
                                        <IonLabel>Biceps</IonLabel>
                                        <IonRadio slot="start" value="Biceps" />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>Triceps</IonLabel>
                                        <IonRadio slot="start" value="Triceps" />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>Hombros</IonLabel>
                                        <IonRadio slot="start" value="Hombros" />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>Espalda</IonLabel>
                                        <IonRadio slot="start" value="Espalda" />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>Pecho</IonLabel>
                                        <IonRadio slot="start" value="Pecho" />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>Piernas</IonLabel>
                                        <IonRadio slot="start" value="Piernas" />
                                    </IonItem>
                                </IonRadioGroup>
                            </div>
                        </IonAccordion>

                        {/* Acordeón para seleccionar el ejercicio basado en el músculo */}
                        <IonAccordion value="exercises">
                            <IonItem slot="header" color="light">
                                <IonLabel className="ion-text-center">Ejercicio</IonLabel>
                            </IonItem>
                            <div className="ion-padding ion-text-center" slot="content">
                                <IonRadioGroup
                                >
                                    {exerciseType === 'Biceps' && (
                                        <>
                                            <IonItem>
                                                <IonLabel>Curl de Bíceps</IonLabel>
                                                <IonRadio slot="start" value="CurlBiceps" />
                                            </IonItem>
                                            <IonItem>
                                                <IonLabel>Flexiones de Bíceps</IonLabel>
                                                <IonRadio slot="start" value="FlexionesBiceps" />
                                            </IonItem>
                                            <IonItem>
                                                <IonLabel>Elevaciones de Bíceps</IonLabel>
                                                <IonRadio slot="start" value="ElevacionesBiceps" />
                                            </IonItem>
                                        </>
                                    )}
                                    {exerciseType === 'Triceps' && (
                                        <>
                                            <IonItem>
                                                <IonLabel>Fondos en Paralelas</IonLabel>
                                                <IonRadio slot="start" value="FondosParalelas" />
                                            </IonItem>
                                            <IonItem>
                                                <IonLabel>Extensiones de Tríceps</IonLabel>
                                                <IonRadio slot="start" value="ExtensionesTriceps" />
                                            </IonItem>
                                            <IonItem>
                                                <IonLabel>Press de Tríceps</IonLabel>
                                                <IonRadio slot="start" value="PressTriceps" />
                                            </IonItem>
                                        </>
                                    )}
                                    {/* Agrega más ejercicios para otros músculos si es necesario */}
                                </IonRadioGroup>
                            </div>
                        </IonAccordion>

                        {/* Acordeón para seleccionar la fecha "Desde" */}
                        <IonAccordion value="fromDate">
                            <IonItem slot="header" color="light">
                                <IonLabel className="ion-text-center">Desde</IonLabel>
                            </IonItem>
                            <div className="ion-padding ion-text-center" slot="content">
                                <IonItem className="ion-justify-content-center">
                                    <IonDatetime
                                    />
                                </IonItem>
                            </div>
                        </IonAccordion>

                        {/* Acordeón para seleccionar la fecha "Hasta" */}
                        <IonAccordion value="toDate">
                            <IonItem slot="header" color="light">
                                <IonLabel className="ion-text-center">Hasta</IonLabel>
                            </IonItem>
                            <div className="ion-padding ion-text-center" slot="content">
                                <IonItem className="ion-justify-content-center">
                                    <IonDatetime
                                    />
                                </IonItem>
                            </div>
                        </IonAccordion>
                    </IonAccordionGroup>


                    <IonButton expand="block" color="primary">
                        Filtrar
                    </IonButton>
                </IonCard>


                <ChartComponent />
                <ChartComponent />
                <ChartComponent />
                <ChartComponent />


            </IonContent >
            <Footer />
        </IonPage >


    );
};

export default ExerciseFilter;
