
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../../firebase/db";

export const adminApi = createApi ({
    reducerPath : "adminApi",
    baseQuery : fetchBaseQuery({ baseUrl : base_url }),
    tagTypes : ["image"],
    endpoints : (builder) => ({
        postProfileImage : builder.mutation({
            query : ({localId, image}) => ({
           
                url : `profileImage/${localId}.json`,
                method : "PUT",
                body : {image}
            }),
            invalidatesTags : ["image"]
        }),
        getProfileImage : builder.query({
            query : (localId) => `profileImage/${localId}.json`,
            providesTags : ["image"]
        }),
        postPrices : builder.mutation({
            query : ({prices}) => ({
                url : `prices.json`,
                method : "PUT",
                body : prices
            })
        }),
        getPrices : builder.query({
            query : () => `prices.json`

        }),
        editPrice : builder.mutation({
            query : ({type, price}) => ({
                url : `prices/${type}.json`,
                method : "PATCH",
                body : price
            })
        }),
        getAdmins : builder.query({
            query : () => `admins.json`
        }),
        postAdmins : builder.mutation({
            query : (admin) => ({
                url : `admins.json`,
                method : "POST",
                body : {admin}
            })
        }),
        getStudents : builder.query({
            query : () => `students.json`
        }),
        postStudents : builder.mutation({
            query : (student) => ({
                url : `students.json`,
                method : "POST",
                body : {student}
            })
        }),
        deleteStudent : builder.mutation({
            query : (id) => ({
                url : `students/${id}.json`,
                method : "DELETE"
            })
        }),
    })
})

export const {
    usePostProfileImageMutation, 
    useGetProfileImageQuery, 
    useEditPriceMutation, 
    useGetPricesQuery, 
    usePostPricesMutation, 
    usePostAdminsMutation, 
    useGetAdminsQuery,
    useGetStudentsQuery,
    usePostStudentsMutation,
    useDeleteStudentMutation
} 
    = adminApi

