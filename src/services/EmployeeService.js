import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const employeeApi= createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getEmployeeById: builder.query({
        query: (id) => `employee/${id}`,
        providesTags:['employee']
    }),
    getAllEmployees: builder.query({
        query: () => `employee`,
        providesTags:['employee']
    }),
    createEmployee: builder.mutation({
        query: (data) => ({
          url:`employee`,
          method:'POST',
          body:data
        }),
        invalidatesTags:['employee']
  }),
  deleteEmployeeById: builder.mutation({
    query: (id) => ({
      url:`employee/${id}`,
      method:'DELETE',
    }),
    invalidatesTags:['employee']
}),
  updateEmployeeById: builder.mutation({
    query: ({id,data}) => ({
      url:`employee/${id}`,
      method:'PUT',
      body: data,
    }),
  invalidatesTags:['employee']
}),
})
})

export const { useGetEmployeeByIdQuery, useGetAllEmployeesQuery ,useCreateEmployeeMutation,useDeleteEmployeeByIdMutation,useUpdateEmployeeByIdMutation} = employeeApi;
