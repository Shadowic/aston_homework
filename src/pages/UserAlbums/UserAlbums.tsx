import { FC } from "react";
import { useParams } from "react-router-dom";
import { mockAlbums } from "../../shared/mocks/albums";
import { mockPhotos } from "../../shared/mocks/photos";
import styles from "./UserAlbums.module.css";
import { UserTabs } from "../../widgets/UserTabs/UserTabs";

export const UserAlbums: FC = () => {
  const { id } = useParams();
  const userAlbums = mockAlbums.filter((album) => album.userId === Number(id));
  const userAlbumsWithPhotos = userAlbums.map((album) => ({
    ...album,
    photoCount: mockPhotos.filter((photo) => photo.albumId === album.id).length,
  }));

  if (userAlbumsWithPhotos.length === 0) {
    return (
      <div className={styles.userAlbums}>
        <h2 className={styles.title}>Альбомы пользователя #{id}</h2>
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>📁</div>
          <div className={styles.emptyText}>У пользователя нет альбомов</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.userAlbums} container`}>
      <UserTabs userId={Number(id)} />
      <h2 className={styles.title}>Альбомы пользователя #{id}</h2>
      <div className={styles.albumsGrid}>
        {userAlbumsWithPhotos.map((album) => (
          <div key={album.id} className={styles.albumCard}>
            <div className={styles.albumPlaceholder}></div>
            <h3 className={styles.albumTitle}>{album.title}</h3>
            <div className={styles.albumInfo}>
              <span className={styles.userId}>User: {album.userId}</span>
              <span className={styles.photoCount}>{album.photoCount} фото</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
