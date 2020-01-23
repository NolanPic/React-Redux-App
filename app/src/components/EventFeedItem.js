import React from 'react';

const EventFeedItem = props => {

    const { id, title, details, flight_number, event_date_unix, links } = props.event;

    return (
        <div>
            <h2>{title}</h2>
            <p>{event_date_unix}</p>
            <p>{flight_number}</p>
            <p>{details}</p>
            {links && links.article && (
                <a href={links.article} target="_blank">Article &rarr;</a>
            )}
        </div>
    );
};

export default EventFeedItem;
