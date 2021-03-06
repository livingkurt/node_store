import axios from "axios";

export const submitReview = (review) => {
    const data = { review }
    return axios.post('/api/review/create', data) 
}

export const updateReview = (review) => {
    const data = { review }
    return axios.put('/api/review/update', data) 
}

export const checkIfReviewExists = (line_item_id) => {
    return axios.get(`/api/review/check_exists/${line_item_id}`) 
}

export const getUsersReviews = (user_id, last_review_id, direction) => {
    return axios.get(`/api/review/user/${user_id}/${last_review_id}/${direction}`) 
}

export const getAllReviews = (last_review_id, direction, approval) => {
    return axios.get('/api/reviews/' + last_review_id + "/" + direction + "/" + approval) 
}
