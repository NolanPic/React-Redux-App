import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../api';
import EventFeedItem from './EventFeedItem';

const EventFeed = props => {

    const { events, error, startDate, endDate, flight_number } = props;

    useEffect(() => {
        fetchEvents(startDate, endDate, flight_number);
    }, []);

    return (
        <section>
            {events.map(event => (
                <EventFeedItem key={event.id} event={event} />
            ))}
            {error && (<p>There was an error loading: {error}</p>)}
        </section>
    );
};

const mapStateToProps = state => {
    return {
        events: state.events,
        error: state.error,
        startDate: state.startDate,
        endDate: state.endDate,
        flight_number: state.flight_number
    };
};

export default connect(mapStateToProps, {})(EventFeed);
