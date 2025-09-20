export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export const mockTodos: Todo[] = [
  {
    id: 1,
    title: "Laoreet pellentesque",
    completed: true,
    userId: 1,
  },
  {
    id: 2,
    title: "Nullam vel risus viverra",
    completed: false,
    userId: 1,
  },
  {
    id: 3,
    title: "Nam nibh nulla, ultricies",
    completed: false,
    userId: 1,
  },
  {
    id: 4,
    title: "Duis at metus tincidunt",
    completed: true,
    userId: 1,
  },
  {
    id: 5,
    title: "Morbi mauris est",
    completed: false,
    userId: 2,
  },
  {
    id: 6,
    title: "Mattis sit amet porttitor ac",
    completed: true,
    userId: 2,
  },
  {
    id: 7,
    title: "Feugiat in lorem",
    completed: false,
    userId: 2,
  },
  {
    id: 8,
    title: "Duis nec rutrum tortor",
    completed: true,
    userId: 2,
  },
  {
    id: 9,
    title: "In lobortis fringilla diam",
    completed: false,
    userId: 3,
  },
  {
    id: 10,
    title: "Lobortis maximus velit",
    completed: true,
    userId: 3,
  },
  {
    id: 11,
    title: "Donec eget purus",
    completed: false,
    userId: 3,
  },
  {
    id: 12,
    title: "Eget tellus luctus euismod",
    completed: false,
    userId: 3,
  },
  {
    id: 13,
    title: "Sit amet vitae nulla",
    completed: true,
    userId: 3,
  },
  {
    id: 14,
    title: "Nunc ut ex cursus",
    completed: false,
    userId: 3,
  },
  {
    id: 15,
    title: "Nullam nec dignissim",
    completed: true,
    userId: 3,
  },
];
