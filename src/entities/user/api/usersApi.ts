import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "@entities/user/model/types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => "users",
      providesTags: (result) =>
          result
              ? [
                ...result.map(({ id }) => ({ type: "User" as const, id })),
                { type: "User", id: "LIST" },
              ]
              : [{ type: "User", id: "LIST" }],
    }),
    getUserById: build.query<User, number>({
      query: (id) => `users/${id}`,
      providesTags: (result, _, id) =>
          result ? [{ type: "User", id }] : [],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;
