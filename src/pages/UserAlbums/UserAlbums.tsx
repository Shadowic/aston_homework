import type { FC } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetAlbumsByUserIdQuery } from "@entities/album/api/albumsApi";
import { useGetPhotosByAlbumIdQuery } from "@entities/album/api/albumsApi";
import { UserTabs } from "@widgets/UserTabs/UserTabs";
import { LoadingSpinner } from "@shared/ui/LoadingSpinner/LoadingSpinner";
import { ItemList } from "@shared/ui/ItemList";
import styles from "./UserAlbums.module.css";
import type { Album } from "@entities/album/model/types";

interface AlbumCardProps {
  album: Album;
  userId: number;
}

const AlbumCard: FC<AlbumCardProps> = ({ album, userId }) => {
  const { data: photos = [] } = useGetPhotosByAlbumIdQuery(album.id, {
    skip: !album.id,
  });

  const firstPhoto = photos.length > 0 ? photos[0] : null;
  const photoCount = photos.length;

  return (
    <Link
      to={`/users/${userId}/albums/${album.id}/photos`}
      className={styles.albumLink}
    >
      <div className={styles.albumCard}>
        <div className={styles.albumBg}>
          {firstPhoto ? (
            <img src={firstPhoto.thumbnailUrl} alt={album.title} />
          ) : (
            <div className={styles.albumPlaceholder}>📷</div>
          )}
        </div>
        <h3 className={styles.albumTitle}>{album.title}</h3>
        <div className={styles.albumInfo}>
          <span className={styles.userId}>User: {album.userId}</span>
          <span className={styles.photoCount}>{photoCount} фото</span>
        </div>
      </div>
    </Link>
  );
};

export const UserAlbums: FC = () => {
  const { id } = useParams();
  const userId = id ? Number(id) : 0;

  const {
    data: albums = [],
    isLoading,
    error,
  } = useGetAlbumsByUserIdQuery(userId, {
    skip: !userId,
  });

  if (isLoading) {
    return (
      <div className={styles.userAlbums}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.userAlbums}>
        <h2 className={styles.title}>Альбомы пользователя #{id}</h2>
        <div>Ошибка при загрузке альбомов: {JSON.stringify(error)}</div>
      </div>
    );
  }

  if (albums.length === 0) {
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
      <UserTabs userId={userId} />
      <h2 className={styles.title}>Альбомы пользователя #{id}</h2>
      <ItemList
          items={albums}
          loading={false}
          emptyMessage="У пользователя нет альбомов"
          listClassName={styles.albumsGrid}
          renderItem={(album) => (
              <AlbumCard key={album.id} album={album} userId={userId} />
          )}
      />
    </div>
  );
};
