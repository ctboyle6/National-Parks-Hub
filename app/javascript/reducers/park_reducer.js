const parkReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PARK':
            return {
                ...state,
                park: action.payload,
                loading: false,
                errorMessage: ""
            }
        default:
            return state;
    }
}

export default parkReducer;