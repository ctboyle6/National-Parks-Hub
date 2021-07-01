export default function(state, action) {
    // compute and return NEW state
    if (state === undefined) {
        return [];
    }

    // Handle actions
    // if (action.type === 'SET_PARKS') {
    //     return action.payload;
    // } else {
    //     return state;
    // }

    switch (action.type) {
        case 'SET_PARKS':
            return action.payload;
        default:
            return state;
    }
}