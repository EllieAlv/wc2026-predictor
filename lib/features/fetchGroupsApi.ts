import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchGroupsApi = createApi({
  reducerPath: "fetchGroupsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_GATEWAY_URL,
  }),
  endpoints: (build) => ({
    getGroupsData: build.query({ query: (name) => `/${name}` }),
  }),
});

export const { useGetGroupsDataQuery } = fetchGroupsApi;
