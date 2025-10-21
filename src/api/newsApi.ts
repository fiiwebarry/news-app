import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { NewsResponse } from '../types/news';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsapi.org/v2/',
  }),
  endpoints: (builder) => ({
    getTopHeadlines: builder.query<NewsResponse, void>({
      query: () => `top-headlines?country=us&apiKey=${API_KEY}`,
    }),
  }),
});

export const { useGetTopHeadlinesQuery } = newsApi;
