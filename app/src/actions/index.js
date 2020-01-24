import { fetchEvents as fetchData } from '../api';

export const FETCH_EVENTS_START = 'FETCH_EVENTS_START';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_ERROR = 'FETCH_EVENTS_ERROR';

export const fetchEvents = (startDate, endDate, flight_number) => dispatch => {
    dispatch({ type: FETCH_EVENTS_START });

    fetchData(startDate, endDate, flight_number)
        .then(res => {
            dispatch({ type: FETCH_EVENTS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_EVENTS_ERROR, payload: err.message });
        });
};