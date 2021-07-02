import Axios from 'axios';

export const fetchParks = () => async (dispatch) => {
    try {
        dispatch({
            type: 'FETCH_PARKS_LOADING',
        });

        const res = await Axios.get('/api/v1/parks.json');

        dispatch({
            type: 'FETCH_PARKS',
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_PARKS_FAILED',
        });
    }
}

export const fetchPark = (park_code) => async (dispatch) => {
    try {
        dispatch({
            type: 'FETCH_PARK_LOADING',
        });

        const res = await Axios.get(`/api/v1/parks/${park_code}`)

        dispatch({
            type: 'FETCH_PARK',
            payload: res.data,
        });

    } catch (error) {
        dispatch({
            type: 'FETCH_PARK_FAILED',
        });
    }
}

export const fetchReviews = (park_code) => async (dispatch) => {
    try {
        dispatch({
            type: 'FETCH_REVIEWS_LOADING',
        });

        const res = await Axios.get(`/api/v1/parks/${park_code}/reviews`);

        dispatch({
            type: 'FETCH_REVIEWS',
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_REVIEWS_FAILED',
        });
    }
}