export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const mockUsers: User[] = [
  {
    id: 1,
    name: "Etiam et vestibulum",
    username: "Etiam",
    email: "Etiam@vestibulum.et",
  },
  {
    id: 2,
    name: "Nullam nec dignissim",
    username: "Nullam",
    email: "Nullam@dignissim.nec",
  },
  {
    id: 3,
    name: "Maecenas molestie tortor",
    username: "Maecenas",
    email: "Maecenas@molestie.tortor",
  },
];
