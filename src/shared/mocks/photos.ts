export interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  albumId: number;
}

export const mockPhotos: Photo[] = [
  {
    id: 1,
    title: "title",
    url: "https://...",
    thumbnailUrl: "https://...",
    albumId: 1,
  },
  {
    id: 2,
    title: "title",
    url: "https://...",
    thumbnailUrl: "https://...",
    albumId: 1,
  },
  {
    id: 3,
    title: "title",
    url: "https://...",
    thumbnailUrl: "https://...",
    albumId: 2,
  },
];
