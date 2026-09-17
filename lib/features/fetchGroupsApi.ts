import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchGroupsApi = createApi({
  reducerPath: "fetchGroupsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/proxy",
  }),
  endpoints: (build) => ({
    getGroupsData: build.query({ query: (name) => `/${name}` }),
  }),
});

export const { useGetGroupsDataQuery } = fetchGroupsApi;
