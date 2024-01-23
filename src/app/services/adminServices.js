
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
        })
    })
})

export const {usePostProfileImageMutation, useGetProfileImageQuery} = adminApi

