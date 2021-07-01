import parks from '../parks'

export function setParks() {
    // API call here

    return {
        type: 'SET_PARKS',
        payload: parks 
    }
}