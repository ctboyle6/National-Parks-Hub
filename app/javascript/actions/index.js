import parks from '../parks'

export function setParks() {
    return fetch('/api/v1/parks.json')
        .then(res => res.json())
        .then((data) => {
            return {
                type: 'SET_PARKS',
                payload: data 
            }
        })
}