import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Album, Photo } from "@entities/album/model/types";

export const albumsApi = createApi({
  reducerPath: "albumsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Album", "Photo"],
  endpoints: (build) => ({
    getAlbums: build.query<Album[], void>({
      query: () => "albums",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Album" as const, id })),
              { type: "Album", id: "LIST" },
            ]
          : [{ type: "Album", id: "LIST" }],
    }),
    getAlbumsByUserId: build.query<Album[], number>({
      query: (userId) => `albums?userId=${userId}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Album" as const, id })),
              { type: "Album", id: "LIST" },
            ]
          : [{ type: "Album", id: "LIST" }],
    }),
    getAlbumById: build.query<Album, number>({
      query: (id) => `albums/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Album", id }],
    }),
    getPhotosByAlbumId: build.query<Photo[], number>({
      query: (albumId) => `albums/${albumId}/photos`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Photo" as const, id })),
              { type: "Photo", id: "LIST" },
            ]
          : [{ type: "Photo", id: "LIST" }],
    }),
    createAlbum: build.mutation<Album, Partial<Album>>({
      query: (newAlbum) => ({
        url: "albums",
        method: "POST",
        body: newAlbum,
      }),
      invalidatesTags: [{ type: "Album", id: "LIST" }],
    }),
    deleteAlbum: build.mutation<void, number>({
      query: (id) => ({
        url: `albums/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Album", id },
        { type: "Album", id: "LIST" },
      ],
    }),
  }),
});

export const useGetAlbumsQuery = albumsApi.useGetAlbumsQuery;
export const useGetAlbumsByUserIdQuery = albumsApi.useGetAlbumsByUserIdQuery;
export const useGetAlbumByIdQuery = albumsApi.useGetAlbumByIdQuery;
export const useGetPhotosByAlbumIdQuery = albumsApi.useGetPhotosByAlbumIdQuery;
export const useCreateAlbumMutation = albumsApi.useCreateAlbumMutation;
export const useDeleteAlbumMutation = albumsApi.useDeleteAlbumMutation;
