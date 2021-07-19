const reviewsReducer = (state = [], action) => {
    switch (action.type) {
        // READ
        case 'FETCH_REVIEWS_LOADING':
            return {
                ...state,
                loading: true,
                errorMessage: ""
            };
        case 'FETCH_REVIEWS':
            return {
                ...state,
                reviews: action.payload,
                loading: false,
                errorMessage: ""
            };
        case 'FETCH_REVIEWS_FAILED':
            return {
                ...state,
                loading: false,
                errorMessage: "Unable to load reviews"
            };

        // CREATE
        case 'CREATE_REVIEW_LOADING':
            return {
                ...state,
                loading: true,
                errorMessage: ""
            };

        case 'CREATE_REVIEW':
            return {
                ...state,
                reviews: [ ...state.reviews, action.payload ],
                loading: false,
                errorMessage: ""
            };
        
        case 'CREATE_REVIEW_FAILED':
            return {
                ...state,
                loading: false,
                errorMessage: "Unable to create review"
            };

        // DELETE
        case 'DELETE_REVIEW_LOADING':
            return {
                ...state,
                loading: true,
                errorMessage: "",
            };
      
        case 'DELETE_REVIEW_SUCCESS':
            return {
                ...state,
                loading: false,
                reviews: state.reviews.filter(
                (review) => review.id != action.payload.id
                ),
                errorMessage: "",
            };
    
        case 'DELETE_REVIEW_FAILED':
            return {
                ...state,
                loading: false,
                errorMessage: "Unable to delete review",
            };

        default:
            return state;
    }
}

export default reviewsReducer;