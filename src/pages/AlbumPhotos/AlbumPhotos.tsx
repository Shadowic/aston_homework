import { FC } from "react";
import { useParams } from "react-router-dom";

export const AlbumPhotos: FC = () => {
  const { id } = useParams();
  return <div>Album Photos: {id}</div>;
};
