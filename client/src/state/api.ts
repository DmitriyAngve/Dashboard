import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse } from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      // void, void - if we need arg for now but we will add those types later
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
  }),
});

export const { useGetKpisQuery } = api; //  getKpis: build.query - the same name!
