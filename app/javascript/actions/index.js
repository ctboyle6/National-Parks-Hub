import Axios from 'axios';
import { getWeather } from './getWeather';

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

        const weather = await getWeather(res.data)

        dispatch({
            type: 'FETCH_PARK',
            payload: res.data,
            weather: weather
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

export const createReview = (park_id, title, description, rating) => async (dispatch) => {
    try {
        dispatch({
            type: 'CREATE_REVIEW_LOADING',
        });

        const response = await Axios.post(`/api/v1/parks/${park_code}/reviews`, {
            park_id: park_id,
            title,
            description,
        });

        const data = JSON.parse(response.config.data);

        dispatch({
            type: 'CREATE_REVIEW',
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'CREATE_REVIEW_FAILED',
        });
    }
};