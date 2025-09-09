export interface Album {
  id: number;
  title: string;
  userId: number;
}

export const mockAlbums: Album[] = [
  {
    id: 1,
    title: "Путешествия по Европе",
    userId: 1,
  },
  {
    id: 2,
    title: "Отдых на море",
    userId: 1,
  },
  {
    id: 3,
    title: "Горные походы",
    userId: 1,
  },
  {
    id: 4,
    title: "Городские пейзажи",
    userId: 2,
  },
  {
    id: 5,
    title: "Природа и животные",
    userId: 2,
  },
  {
    id: 6,
    title: "Семейные моменты",
    userId: 3,
  },
  {
    id: 7,
    title: "Рабочие проекты",
    userId: 3,
  },
  {
    id: 8,
    title: "Хобби и увлечения",
    userId: 3,
  },
  {
    id: 9,
    title: "Кулинарные эксперименты",
    userId: 3,
  },
  {
    id: 10,
    title: "Спортивные достижения",
    userId: 3,
  },
];
