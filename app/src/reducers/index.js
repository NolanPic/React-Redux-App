const initialState = {
    events: [],
    startDate: '',
    endDate: '',
    flight_number: null,
    error: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
