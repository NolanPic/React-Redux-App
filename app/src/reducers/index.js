import {
    FETCH_EVENTS_START,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_ERROR,
    START_DATE_UPDATE,
    END_DATE_UPDATE,
    FLIGHT_NUMBER_UPDATE } from '../actions';
 
const initialState = {
    events: [],
    isLoading: false,
    startDate: '',
    endDate: '',
    flight_number: null,
    error: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_EVENTS_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                events: action.payload,
                isLoading: false
            };
        case FETCH_EVENTS_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case START_DATE_UPDATE:
            return {
                ...state,
                startDate: action.payload
            };
        case END_DATE_UPDATE:
            return {
                ...state,
                endDate: action.payload
            };
        case FLIGHT_NUMBER_UPDATE:
            return {
                ...state,
                flight_number: action.payload
            }
        default:
            return state;
    }
};
