import { getWeather } from "../actions/getWeather";

const parkReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PARK_LOADING':
            return {
                ...state,
                loading: true,
                errorMessage: ""
            };
        case 'FETCH_PARK':
            return {
                ...state,
                park: action.payload,
                loading: false,
                errorMessage: "",
                weather: getWeather(action.payload)
            };
        case 'FETCH_PARK_FAILED':
            return {
                ...state,
                loading: false,
                errorMessage: "Unable to load park"
            };
        default:
            return state;
    }
}

export default parkReducer;