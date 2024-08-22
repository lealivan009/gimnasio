import { IonGrid, IonRow, IonLabel, IonTitle, IonCol } from "@ionic/react";
import { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import { Autoplay } from 'swiper/modules';

interface imagesProp {
    nameSection: string,
    images: string[]
}

const MenuCarrusel: React.FC<imagesProp> = ({ images, nameSection }) => {
    const [loaded, setLoaded] = useState(true);
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
                <IonCol sizeSm='12'>
                    <Swiper
                        //modules={[Autoplay]}
                        //autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        slidesPerView={1.2}
                    >
                        {loaded && images.map((image, index) => (
                            <SwiperSlide key={index} >
                                <div style={{ padding: "10px" }}>
                                    <img src={image} alt={`Gym Image ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                                </div>
                            </SwiperSlide>
                        ))}
                        {!loaded &&
                            <SwiperSlide>
                                <div style={{ textAlign: 'center', padding: '50px' }}>
                                    <p>Loading...</p>
                                </div>
                            </SwiperSlide>
                        }
                    </Swiper>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};
export default MenuCarrusel;