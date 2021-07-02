const parksReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PARKS_LOADING':
            return {
                ...state,
                loading: true,
                errorMessage: ""
            };
        case 'FETCH_PARKS':
            return {
                ...state,
                parks: action.payload,
                loading: false,
                errorMessage: ""
            };
        case 'FETCH_PARKS_FAILED':
            return{
                ...state,
                loading: false,
                errorMessage: "Unable to load parks"
            };
        default:
            return state;
    }
};

export default parksReducer;