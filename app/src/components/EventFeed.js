import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents } from '../actions';
import EventFeedItem from './EventFeedItem';
import Loader from 'react-loader-spinner';

const EventFeed = props => {

    const { events, error, isLoading } = useSelector(state => ({
        events: state.events,
        error: state.error,
        isLoading: state.isLoading
    }));

    const { startDate, endDate, flight_number } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEvents(startDate, endDate, flight_number));
    }, [startDate, endDate, flight_number]);

    return (
        <section>
            {events.map(event => (
                <EventFeedItem key={event.id} event={event} />
            ))}
            {isLoading && (
                <Loader
                    type="ThreeDots"
                    color="#4f4f4f"
                    height={100}
                    width={100}
                />
            )}
            {error && (<p>There was an error loading: {error}</p>)}
        </section>
    );
};

export default EventFeed;
