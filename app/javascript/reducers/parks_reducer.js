const parksReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PARKS':
            return {
                ...state,
                parks: action.payload,
            };
        default:
            return state;
    }
};

export default parksReducer;