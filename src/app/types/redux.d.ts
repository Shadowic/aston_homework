import {
  BaseQueryApi,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";

declare module "@reduxjs/toolkit/query" {
  export interface FetchBaseQueryArgs {
    baseUrl: string;
    prepareHeaders?: (headers: Headers, api: BaseQueryApi) => Headers;
  }

  export type QueryDefinition<
    TArgs,
    TBaseQuery extends BaseQueryFn,
    TTagTypes extends string,
    TResult,
    TReducerPath extends string = string,
  > = any;
}
