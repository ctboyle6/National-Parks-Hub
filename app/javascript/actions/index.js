import Axios from 'axios';

export const fetchParks = () => async (dispatch) => {
    try {
        const res = await Axios.get('/api/v1/parks.json');

        dispatch({
            type: 'FETCH_PARKS',
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_PARKS_FAILED',
        })
    }

    // return fetch('/api/v1/parks.json')
    //     .then(res => res.json())
    //     .then((data) => {
    //         return {
    //             type: 'SET_PARKS',
    //             payload: data 
    //         }
    //     })
}