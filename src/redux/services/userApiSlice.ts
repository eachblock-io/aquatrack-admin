import { apiSlice } from "./apiSlice";

const userApiConfig = apiSlice.enhanceEndpoints({ addTagTypes: ["User"] });

const userApi = userApiConfig.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => `/dashboard`,
      providesTags: ["User"],
      keepUnusedDataFor: 5,
    }),
    getUser: builder.query({
      query: ({ userid }) => ({
        url: `/user-details/${userid}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["User"],
    }),
    deactivateCustomer: builder.mutation({
      query: ({ formdata, userid }) => ({
        url: `/activate-deactive-account/${userid}`,
        method: `POST`,
        body: formdata,
      }),
      invalidatesTags: ["User"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetCurrentUserQuery,
  useGetUserQuery,
  useDeactivateCustomerMutation,
} = userApi;
