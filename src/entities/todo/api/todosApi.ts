import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Todo } from "@entities/todo/model/types";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "todos",
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: "Todo" as const, id })),
        { type: "Todo", id: "LIST" },
      ],
    }),
    getTodosByUserId: builder.query<Todo[], number>({
      query: (userId) => `todos?userId=${userId}`,
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: "Todo" as const, id })),
        { type: "Todo", id: "LIST" },
      ],
    }),
    getTodoById: builder.query<Todo, number>({
      query: (id) => `todos/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Todo", id }],
    }),
  }),
});

export const useGetTodosQuery = todosApi.useGetTodosQuery;
export const useGetTodosByUserIdQuery = todosApi.useGetTodosByUserIdQuery;
export const useGetTodoByIdQuery = todosApi.useGetTodoByIdQuery;
