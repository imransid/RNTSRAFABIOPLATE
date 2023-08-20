import { ProductData, Product } from '@/types/Products.types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/'
  }),
  endpoints: builder => ({
    getAllProducts: builder.query<ProductData, void>({
      query: () => 'products'
    }),
    getAllUsers: builder.query<ProductData, void>({
      query: () => 'users'
    }),
    getSingleProduct: builder.query<ProductData, string>({
      query: product => `products/search?q=${product}`
    }),
    createProduct: builder.mutation<{}, Partial<Product>>({
      query: product => ({
        url: 'products/add',
        method: 'POST',
        body: product
      })
    }),
    updateProduct: builder.mutation<{}, Partial<Product>>({
      query: ({ id, ...rest }) => ({
        url: `products/add${id}`,
        method: 'PUT',
        body: rest
      })
    }),
    deleteProduct: builder.mutation<{}, string>({
      query: id => ({
        url: `products/add${id}`,
        method: 'DELETE'
      })
    })
  })
});

// this is our custom hook useGetAllProductsQuery
export const { useGetAllProductsQuery, useGetSingleProductQuery, useGetAllUsersQuery } =
  productsApi;
// Export the API slice reducer
export const productsApiReducer = productsApi.reducer;
