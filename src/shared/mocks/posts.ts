interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  comments: Comment[];
}

export interface Comment {
  id: number;
  author: string;
  text: string;
  date: string;
}

export const mockPosts: Post[] = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    body: "Ut consectetur dictum tempus. Nam egestas, tortor nec finibus porta, ipsum augue porttitor ligula",
    userId: 1,
    comments: [
      {
        id: 1,
        author: "Lorem ipsum",
        text: "Ut consectetur dictum tempus. Nam egestas",
        date: "2 finibus porta",
      },
      {
        id: 2,
        author: "Nam egestas",
        text: "Tortor nec finibus porta, ipsum augue porttitor ligula",
        date: "5 augue porttitor",
      },
    ],
  },
  {
    id: 2,
    title: "Nulla maximus arcu eget libero faucibus",
    body: "Fusce facilisis et arcu et congue. Cras elementum pulvinar aliquet. In luctus quis turpis et placerat. Proin sed est vitae sapien vestibulum aliquam sed eget massa. Suspendisse scelerisque molestie mollis.",
    userId: 1,
    comments: [
      {
        id: 3,
        author: "Nulla maximus",
        text: "Fusce facilisis et arcu et congue",
        date: "pulvinar",
      },
      {
        id: 4,
        author: "Libero faucibus",
        text: "Cras elementum pulvinar aliquet. In luctus quis turpis",
        date: "3 luctus quis",
      },
    ],
  },
  {
    id: 3,
    title: "Sed id orci justo.",
    body: "Proin vitae arcu ut risus malesuada varius at vel massa. Nam quis mollis nulla, at molestie tortor. Etiam et vestibulum risus. Nullam nec dignissim nulla, vitae finibus purus.",
    userId: 2,
    comments: [
      {
        id: 5,
        author: "Sed id",
        text: "Proin vitae arcu ut risus malesuada",
        date: "quis mollis",
      },
      {
        id: 6,
        author: "Orci justo",
        text: "Etiam et vestibulum risus. Nullam nec dignissim",
        date: "2 molestie tortor",
      },
    ],
  },
  {
    id: 4,
    title: "Cras nec porttitor eros. Vestibulum massa nisl.",
    body: "Maecenas molestie tortor ut magna convallis dictum. Nunc lacinia dui blandit pellentesque gravida. Nunc ut ex cursus, vestibulum eros a, consectetur neque.",
    userId: 2,
    comments: [
      {
        id: 7,
        author: "Cras nec porttitor",
        text: "Maecenas molestie tortor ut magna convallis dictum",
        date: "lacinia dui",
      },
      {
        id: 8,
        author: "Vestibulum massa",
        text: "Nunc lacinia dui blandit pellentesque gravida. Nunc ut ex",
        date: "2 ex cursus",
      },
    ],
  },
  {
    id: 5,
    title: "Maecenas dapibus ultrices augue, in dapibus",
    body: "Duis at metus tincidunt, pellentesque mi nec, aliquam turpis. Morbi mauris est, mattis sit amet porttitor ac, feugiat in lorem. Duis nec rutrum tortor. In lobortis fringilla diam, lobortis maximus velit.",
    userId: 3,
    comments: [
      {
        id: 9,
        author: "Maecenas dapibus",
        text: "Morbi mauris est, mattis sit amet porttitor ac, feugiat",
        date: "3 ultrices augue",
      },
    ],
  },
  {
    id: 6,
    title: "Integer eleifend, sem vel auctor pharetra.",
    body: "Nullam vel risus viverra ligula laoreet pellentesque id eget metus. Nam nibh nulla, ultricies eget pulvinar vel, dignissim a ex. Donec eget purus eget tellus luctus euismod sit amet vitae nulla.",
    userId: 3,
    comments: [
      {
        id: 10,
        author: "Integer eleifend",
        text: "Nullam vel risus viverra ligula laoreet pellentesque id",
        date: "4 laoreet pellentesque",
      },
    ],
  },
  {
    id: 7,
    title: "Aliquam bibendum, ex sit amet porta",
    body: "Quisque sollicitudin varius dolor, eu porttitor sem rhoncus sit amet. Aenean sagittis imperdiet sapien, eget facilisis metus sodales at. Nulla facilisi. Ut aliquam est nec ante molestie dignissim et et erat. Pellentesque imperdiet rhoncus viverra. Maecenas ut leo a magna egestas sodales.",
    userId: 3,
    comments: [],
  },
];
