import { useState, useEffect } from "react";

import EventCard from "./eventcard"; // this is coming from eventcard.js, child component
// may not be called card group anymore-
import Card from "react-bootstrap/Card"; //from the framework bootstrap

function Events() {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8080/api/events")
			.then((response) => response.json())
			.then((events) => {
				setEvents(events);
				console.log("Events fetched...", events);
			});
	}, []);

	return (
		// comes from bootstrap and commented out to call Eventcard only

		// original code
		// card group no longer recognized https://react-bootstrap.netlify.app/components/cards/#rb-docs-content
		<Card className="Events">
			{events.map((event) => (
				//child component
				<EventCard
					key={event.id}
					title={event.title}
					location={event.location}
					time={event.eventtime}
				/>
			))}
		</Card>

		// <div>
		// 	{events.map((event) => (
		// 		<EventCard
		// 			key={event.id}
		// 			title={event.title}
		// 			location={event.location}
		// 			time={event.eventtime}
		// 		/>
		// 	))}
		// </div>

		// <EventCard
		// 	key={event.id}
		// 	title={event.title}
		// 	location={event.location}
		// 	time={event.eventtime}
		// />
	);
}

export default Events;
