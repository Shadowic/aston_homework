import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const postsAdapter = createEntityAdapter<Post>({
  selectId: (post) => post.id,
  sortComparer: (a, b) => a.id - b.id,
});

export type PostsState = ReturnType<typeof postsAdapter.getInitialState>;

export const postSlice = createSlice({
  name: "posts",
  initialState: postsAdapter.getInitialState(),
  reducers: {
    postAdded: postsAdapter.addOne,
    postUpdated: postsAdapter.updateOne,
    postDeleted: postsAdapter.removeOne,
    postsReceived: (state, action: PayloadAction<Post[]>) => {
      postsAdapter.setAll(state, action.payload);
    },
  },
});

export const { postAdded, postUpdated, postDeleted, postsReceived } =
  postSlice.actions;

export const postsSelectors = postsAdapter.getSelectors<{ posts: PostsState }>(
  (state) => state.posts,
);

export default postSlice.reducer;
