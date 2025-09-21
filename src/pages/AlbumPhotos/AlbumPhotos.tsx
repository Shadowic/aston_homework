import type { FC } from "react";
import { useParams } from "react-router-dom";
import { UserTabs } from "@widgets/UserTabs/UserTabs";
import { useGetPhotosByAlbumIdQuery } from "@entities/album/api/albumsApi";
import { useGetAlbumByIdQuery } from "@entities/album/api/albumsApi";
import { LoadingSpinner } from "@shared/ui/LoadingSpinner/LoadingSpinner";
import { ItemList } from "@shared/ui/ItemList";
import styles from "./albumPhotos.module.css";
import type { Photo } from "@entities/album/model/types";

interface PhotoItemProps {
  photo: Photo;
}

const PhotoItem: FC<PhotoItemProps> = ({ photo }) => (
    <div className={styles.photo}>
      <img
          src={photo.thumbnailUrl}
          alt={photo.title}
          className={styles.image}
      />
    </div>
);

export const AlbumPhotos: FC = () => {
  const { id, albumId } = useParams();
  const albumIdNumber = albumId ? Number(albumId) : 0;
  const userId = id ? Number(id) : 0;

  const {
    data: album,
    isLoading: albumLoading,
    error: albumError,
  } = useGetAlbumByIdQuery(albumIdNumber, {
    skip: !albumIdNumber,
  });

  const {
    data: albumPhotos = [],
    isLoading: photosLoading,
    error: photosError,
  } = useGetPhotosByAlbumIdQuery(albumIdNumber, {
    skip: !albumIdNumber,
  });

  const isLoading = albumLoading || photosLoading;
  const error = albumError || photosError;

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  if (!id || !albumId) return <div>User or album not found</div>;

  return (
      <div className={`${styles.albumPhotos} container`}>
        <UserTabs userId={userId} />
        <h2 className={styles.title}>Фотографии альбома: {album?.title || `#${albumId}`}</h2>

        <ItemList
            items={albumPhotos}
            emptyMessage="В альбоме нет фотографий"
            listClassName={styles.photos}
            renderItem={(photo) => <PhotoItem photo={photo} />}
        />
      </div>
  );
};
