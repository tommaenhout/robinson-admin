import {object, ref, string} from 'yup';

export const signupSchema = object({

    confirmPassword : string()
        .oneOf([ref("password")],"Passwords must match")
        .required("Confirm your password"),
    password : string()
        .min(6, "Password must be at least 6 characters")
        .required("Enter a password"),
    email:string()
        .email("Enter a valid email")
        .required("Enter an email"),
    lastName:string()
        .required("Enter a last name"),
    firstName:string()
        .required("Enter a first name")
})