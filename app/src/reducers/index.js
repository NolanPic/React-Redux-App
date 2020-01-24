import {
    FETCH_EVENTS_START,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_ERROR } from '../actions';
 
const initialState = {
    events: [],
    isLoading: false,
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
        default:
            return state;
    }
};
