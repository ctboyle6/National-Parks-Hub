import Axios from 'axios';
import { getWeather } from './getWeather';

// Parks
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

// Park
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

// Reviews
export const fetchReviews = (park_code) => async (dispatch) => {
    try {
        dispatch({
            type: 'FETCH_REVIEWS_LOADING',
        });

        const res = await Axios.get(`/api/v1/parks/${park_code}/reviews`);

        dispatch({
            type: 'FETCH_REVIEWS',
            payload: res.data.data,
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_REVIEWS_FAILED',
        });
    }
}

export const createReview = (park_code, park_id, title, description, rating) => async (dispatch) => {
    try {
        dispatch({
            type: 'CREATE_REVIEW_LOADING',
        });

        const response = await Axios.post(`/api/v1/parks/${park_code}/reviews`, {
            park_id: park_id,
            title,
            description,
            rating,
        });

        // const data = JSON.parse(response.data.data);

        dispatch({
            type: 'CREATE_REVIEW',
            payload: response.data.data,
        });
    } catch (error) {
        dispatch({
            type: 'CREATE_REVIEW_FAILED',
        });
    }
};

// User
export const fetchUser = () => async (dispatch) => {
    try {
      dispatch({
        type: FETCH_USER_LOADING,
      });
  
      const user = await root.getAttribute("data-user");
      const userJson = await JSON.parse(user);
  
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: userJson,
      });
    } catch (error) {
      dispatch({
        type: FETCH_USER_FAILED,
      });
    }
  };