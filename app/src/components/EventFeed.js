import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions';
import EventFeedItem from './EventFeedItem';
import Loader from 'react-loader-spinner';

const EventFeed = props => {

    const { events, error, isLoading, startDate, endDate, flight_number } = props;

    useEffect(() => {
        props.fetchEvents(startDate, endDate, flight_number);
    }, [startDate, endDate, flight_number]);

    return (
        <section>
            {events.map(event => (
                <EventFeedItem key={event.id} event={event} />
            ))}
            {isLoading && (
                <Loader
                    type="ThreeDots"
                    color="#000"
                    height={100}
                    width={100}
                />
            )}
            {error && (<p>There was an error loading: {error}</p>)}
        </section>
    );
};

const mapStateToProps = state => {
    return {
        events: state.events,
        error: state.error,
        isLoading: state.isLoading,
        startDate: state.startDate,
        endDate: state.endDate,
        flight_number: state.flight_number
    };
};

export default connect(mapStateToProps, { fetchEvents })(EventFeed);
