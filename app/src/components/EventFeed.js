import React from 'react';
import { connect } from 'react-redux';
import EventFeedItem from './EventFeedItem';

const EventFeed = props => {

    const { events, error } = props;

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
        error: state.error
    };
};

export default connect(mapStateToProps, {})(EventFeed);
