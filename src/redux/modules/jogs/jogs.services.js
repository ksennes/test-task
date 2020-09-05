import axios from  'axios';

export function getJogs(token) {
    return axios.get('https://jogtracker.herokuapp.com/api/v1/data/sync', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}