import type { BaseQueryApi } from "@reduxjs/toolkit/query";

declare module "@reduxjs/toolkit/query" {
  export interface FetchBaseQueryArgs {
    baseUrl: string;
    prepareHeaders?: (headers: Headers, api: BaseQueryApi) => Headers;
  }
}
