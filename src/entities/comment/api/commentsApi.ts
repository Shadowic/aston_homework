import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Comment"],
  endpoints: (builder) => ({
    getCommentsByPostId: builder.query<Comment[], number>({
      query: (postId) => `comments?postId=${postId}`,
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: "Comment" as const, id })),
        { type: "Comment", id: "LIST" },
      ],
    }),
  }),
});

export const { useGetCommentsByPostIdQuery } = commentsApi;
