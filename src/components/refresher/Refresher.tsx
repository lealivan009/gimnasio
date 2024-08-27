import { IonRefresher, IonRefresherContent } from "@ionic/react";
import { chevronDownCircleOutline } from "ionicons/icons";

interface refresherProp {
    onRefresh: (event: CustomEvent) => void;
}
const Refresher: React.FC<refresherProp> = ({ onRefresh }) => {
    return (
        <>
            <IonRefresher slot="fixed" onIonRefresh={onRefresh}>
                <IonRefresherContent
                    pullingIcon={chevronDownCircleOutline}
                    pullingText="Pull to refresh"
                    refreshingSpinner="circles"
                    refreshingText="Refreshing..."
                ></IonRefresherContent>
            </IonRefresher>
        </>
    )
}
export default Refresher;