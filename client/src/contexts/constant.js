export const apiUrl =
        process.env.NODE_ENV !== 'production' 
        ? 'http://localhost:5000/api'
        : 'https://6685244d5b4571d9792c10e9--beautiful-lollipop-d774c6.netlify.app/api'

export const LOCAL_STORAGE_TOKEN_NAME = 'learnit-mern'

export const POST_LOADED_SUCCESS = 'POST_LOADED_SUCCESS'
export const POSTS_LOADED_FAIL = 'POSTS_LOADED_FAIL'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const FIND_POST = 'FIND_POST'



