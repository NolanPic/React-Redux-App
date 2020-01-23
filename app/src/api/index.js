import axios from 'axios';

export const fetchEvents = (start, end, flight_number) => {
    return axios.get(`https://api.spacexdata.com/v3/history?foo=bar${start ? '&start=' + start : ''}${end ? '&end=' + end : ''}${flight_number ? '&flight_number=' + flight_number : ''}`);
};
