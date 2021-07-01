const parkReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PARK':
            return {
                ...state,
                park: action.payload,
            }
        default:
            return state;
    }
}

export default parkReducer;