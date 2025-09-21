import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post, CreatePostDto, UpdatePostDto } from "../model/types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: "Post" as const, id })),
        { type: "Post", id: "LIST" },
      ],
    }),
    getPostById: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Post", id }],
    }),
    getPostsByUserId: builder.query<Post[], number>({
      query: (userId) => `posts?userId=${userId}`,
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: "Post" as const, id })),
        { type: "Post", id: "LIST" },
      ],
    }),
    createPost: builder.mutation<Post, CreatePostDto>({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
    updatePost: builder.mutation<Post, { id: number; updates: UpdatePostDto }>({
      query: ({ id, updates }) => ({
        url: `posts/${id}`,
        method: "PUT",
        body: updates,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Post", id },
        { type: "Post", id: "LIST" },
      ],
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Post", id },
        { type: "Post", id: "LIST" },
      ],
    }),
  }),
});

export const useGetPostsQuery = postsApi.useGetPostsQuery;
export const useGetPostByIdQuery = postsApi.useGetPostByIdQuery;
export const useGetPostsByUserIdQuery = postsApi.useGetPostsByUserIdQuery;
export const useCreatePostMutation = postsApi.useCreatePostMutation;
export const useUpdatePostMutation = postsApi.useUpdatePostMutation;
export const useDeletePostMutation = postsApi.useDeletePostMutation;
