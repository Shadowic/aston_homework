import { FC } from "react";
import { useParams } from "react-router-dom";
import { UserTabs } from "../../widgets/UserTabs/UserTabs";
import { mockAlbums } from "../../shared/mocks/albums";
import styles from "./userPhotos.module.css";

export const AlbumPhotos: FC = () => {
  const { id, albumId } = useParams();

  const album = mockAlbums.find(album => album.id === Number(albumId));
  const albumPhotos = album?.photos || [];

  return (
      <div className={`${styles.userPhotos} container`}>
        <UserTabs userId={Number(id)} />
        <h2>Фотографии альбома: {album?.title || `#${albumId}`}</h2>

        <div className={styles.photos}>
          {albumPhotos.map((photo) => (
              <div key={photo.id} className={styles.photo}>
                <img
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                    className={styles.image}
                />
              </div>
          ))}
        </div>
      </div>
  );
};
