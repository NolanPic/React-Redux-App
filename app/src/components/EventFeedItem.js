import React from 'react';

const EventFeedItem = props => {

    const { id, title, details, flight_number, event_date_utc, links } = props.event;

    return (
        <div className="event-feed-item">
            <h2>{title}</h2>
            <p>{new Date(event_date_utc).toLocaleDateString()}</p>
            {flight_number && (<p><strong>Flight #:</strong> {flight_number}</p>)}
            <p>{details}</p>
            {links && links.article && (
                <a href={links.article} target="_blank">Article &rarr;</a>
            )}
        </div>
    );
};

export default EventFeedItem;
