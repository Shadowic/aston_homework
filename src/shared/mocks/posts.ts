interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const mockPosts: Post[] = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    body: "Ut consectetur dictum tempus. Nam egestas, tortor nec finibus porta, ipsum augue porttitor ligula",
    userId: 1,
  },
  {
    id: 2,
    title: "Nulla maximus arcu eget libero faucibus",
    body: "Fusce facilisis et arcu et congue. Cras elementum pulvinar aliquet. In luctus quis turpis et placerat. Proin sed est vitae sapien vestibulum aliquam sed eget massa. Suspendisse scelerisque molestie mollis.",
    userId: 1,
  },
  {
    id: 3,
    title: "Sed id orci justo.",
    body: "Proin vitae arcu ut risus malesuada varius at vel massa. Nam quis mollis nulla, at molestie tortor. Etiam et vestibulum risus. Nullam nec dignissim nulla, vitae finibus purus.",
    userId: 2,
  },
  {
    id: 4,
    title: "Cras nec porttitor eros. Vestibulum massa nisl.",
    body: "Maecenas molestie tortor ut magna convallis dictum. Nunc lacinia dui blandit pellentesque gravida. Nunc ut ex cursus, vestibulum eros a, consectetur neque.",
    userId: 2,
  },
  {
    id: 5,
    title: "Maecenas dapibus ultrices augue, in dapibus",
    body: "Duis at metus tincidunt, pellentesque mi nec, aliquam turpis. Morbi mauris est, mattis sit amet porttitor ac, feugiat in lorem. Duis nec rutrum tortor. In lobortis fringilla diam, lobortis maximus velit.",
    userId: 2,
  },
  {
    id: 6,
    title: "Integer eleifend, sem vel auctor pharetra.",
    body: "Nullam vel risus viverra ligula laoreet pellentesque id eget metus. Nam nibh nulla, ultricies eget pulvinar vel, dignissim a ex. Donec eget purus eget tellus luctus euismod sit amet vitae nulla.",
    userId: 2,
  },
  {
    id: 7,
    title: "Aliquam bibendum, ex sit amet porta",
    body: "Quisque sollicitudin varius dolor, eu porttitor sem rhoncus sit amet. Aenean sagittis imperdiet sapien, eget facilisis metus sodales at. Nulla facilisi. Ut aliquam est nec ante molestie dignissim et et erat. Pellentesque imperdiet rhoncus viverra. Maecenas ut leo a magna egestas sodales.",
    userId: 2,
  },
];
