import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Group } from "../../components/models/group";

export const fetchGroupsApi = createApi({
  reducerPath: "fetchGroupsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_GATEWAY_URL,
  }),
  endpoints: (build) => ({
    getGroupsData: build.query({ query: (name) => "/groups.json" }),
  }),
});

export const { useGetGroupsDataQuery } = fetchGroupsApi;
