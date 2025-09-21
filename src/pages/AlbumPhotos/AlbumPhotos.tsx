import { FC } from "react";
import { useParams } from "react-router-dom";
import { UserTabs } from "../../widgets/UserTabs/UserTabs";
import { useGetPhotosByAlbumIdQuery } from "../../entities/album/api/albumsApi";
import { useGetAlbumByIdQuery } from "../../entities/album/api/albumsApi";
import { LoadingSpinner } from "../../shared/ui/LoadingSpinner/LoadingSpinner";
import styles from "./albumPhotos.module.css";

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
    if (error) return <div>Error: {(error as any).toString()}</div>;
    if (!id || !albumId) return <div>User or album not found</div>;

    return (
        <div className={`${styles.userPhotos} container`}>
            <UserTabs userId={userId} />
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
