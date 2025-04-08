import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface LoginByUserName {
  username: string;
  password: string;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginByUserName, LoginByUserName>({
      query: (authData) => ({
        url: 'login',
        method: 'POST',
        body: authData,
      }),
    }),
  }),
});

export const { useLoginMutation } = api;
