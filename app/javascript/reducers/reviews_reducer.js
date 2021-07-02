const reviewsReducer = (state = [], action) => {
    switch (action.type) {
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
        default:
            return state;
    }
}

export default reviewsReducer;