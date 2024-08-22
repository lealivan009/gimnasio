import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonImg, IonLabel, IonRow, IonCol, IonButton } from '@ionic/react';
import { heartOutline, chatbubbleOutline } from 'ionicons/icons';
import './Post.css'; // Puedes crear este archivo para estilizar las publicaciones

const Post = ({ post }) => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonRow className="post-header">
                    <IonCol size="2">
                        <IonImg src={post.userAvatar} className="post-avatar" />
                    </IonCol>
                    <IonCol size="10">
                        <IonLabel>
                            <strong>{post.username}</strong>
                        </IonLabel>
                    </IonCol>
                </IonRow>
            </IonCardHeader>

            <IonImg src={post.image} alt="Post image" className="post-image" />

            <IonCardContent>
                <IonRow>
                    <IonCol size="auto">
                        <IonButton fill="clear">
                            <IonIcon icon={heartOutline} /> {post.likes}
                        </IonButton>
                    </IonCol>
                    <IonCol size="auto">
                        <IonButton fill="clear">
                            <IonIcon icon={chatbubbleOutline} /> {post.comments} comments
                        </IonButton>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol>
                        <p><strong>{post.username}</strong> {post.description}</p>
                    </IonCol>
                </IonRow>
            </IonCardContent>
        </IonCard>
    );
};

export default Post;