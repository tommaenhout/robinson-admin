export const validations = {
    onlyLetters: {
        regex: /^[a-zA-Z\s]+$/,
        message: 'Please enter only letters'
    },
    password : {
        regex : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        message : 'Password must be at least 8 characters long and include at least one letter and one number'
    },
    required : {
        regex : /\S+/,
        message : 'This field is required'
    },
}




