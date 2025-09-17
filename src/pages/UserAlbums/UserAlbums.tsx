import { FC } from "react";
import { useParams, Link } from "react-router-dom";
import { mockAlbums } from "../../shared/mocks/albums";
import styles from "./UserAlbums.module.css";
import { UserTabs } from "../../widgets/UserTabs/UserTabs";

export const UserAlbums: FC = () => {
  const { id } = useParams();
  const userAlbums = mockAlbums.filter((album) => album.userId === Number(id));

  const userAlbumsWithPhotos = userAlbums.map((album) => ({
    ...album,
      photoCount: album.photos ? album.photos.length : 0,
      firstPhoto: album.photos && album.photos.length > 0 ? album.photos[0] : null,
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
          <Link
              key={album.id}
              to={`/users/${id}/albums/${album.id}/photos`}
          >
              <div className={styles.albumCard}>
                 <div className={styles.albumBg}>
                   <img
                     src={album.firstPhoto.thumbnailUrl}
                     alt={album.title}
                   />
                 </div>
                <h3 className={styles.albumTitle}>{album.title}</h3>
                <div className={styles.albumInfo}>
                  <span className={styles.userId}>User: {album.userId}</span>
                  <span className={styles.photoCount}>{album.photoCount} фото</span>
                </div>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
