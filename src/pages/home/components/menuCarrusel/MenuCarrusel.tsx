import { IonGrid, IonRow, IonLabel, IonTitle, IonCol, IonSkeletonText } from "@ionic/react";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import { Autoplay } from 'swiper/modules';

interface imagesProp {
    nameSection: string,
    images: string[]
}

const MenuCarrusel: React.FC<imagesProp> = ({ images, nameSection }) => {

    //simulacion de espera de imagenes
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 2000)
    }, [])

    return (
        <IonGrid>
            <IonRow>
                <IonLabel>
                    <IonTitle>
                        <strong>{nameSection}</strong>
                    </IonTitle>
                </IonLabel>
            </IonRow>
            <IonRow>
                <IonCol>
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        breakpoints={{
                            // Para pantallas pequeñas (teléfonos), mostrar 1.2 tarjetas
                            0: {
                                slidesPerView: 1.2,
                            },
                            // Para pantallas grandes (sizeLg), mostrar 2 tarjetas
                            992: { // Puedes ajustar este valor a lo que consideres sizeLg (1024px por ejemplo)
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {loaded ?
                            (images.map((image, index) => (
                                <SwiperSlide key={index} >
                                    <div style={{ padding: "10px" }}>
                                        <img src={image} alt={`Gym Image ${index + 1}`} style={{ width: '100%', height: '200px', borderRadius: '10px' }} />
                                    </div>
                                </SwiperSlide>
                            ))
                            ) : (
                                <div>
                                    <IonSkeletonText animated={true} style={{ width: "100%", height: "200px" }} />
                                </div>
                            )
                        }
                    </Swiper>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};
export default MenuCarrusel;