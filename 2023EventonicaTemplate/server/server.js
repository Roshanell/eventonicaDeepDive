//This is the minimal express server.
const express = require("express");

// allows express to read info client sends back in req.body
const bodyParser = require("body-parser");

//security
const cors = require("cors");

//https://nodejs.org/api/path.html
const path = require("path");
//referencing our .env file
require("dotenv").config();
// const db = require("../server/db/db-connection.js");

// defining variable called app and storing express function into it
const app = express();
const PORT = 8080; //back-end port

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
//stackoverflow.com/questions/55558402/what-is-the-meaning-of-bodyparser-urlencoded-extended-true-and-bodypar
https: app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
	res.json("Hello Techtonica Server for an app with Events");
});

app.get("/api/events", async (req, res) => {
	//real connection with the DB eventonica
	// try{
	//     const { rows: events } = await db.query('SELECT * FROM events');
	//     res.send(events);

	// } catch(error){
	//     console.log(error);
	//     return res.status(400).json({error});

	// }

	//hardcode the events response for testing reasons. This call has one more event that the real DB
	const events = [
		{
			id: 1,
			title: "Women in Tech Techtonica Panel",
			location: "Overland Park Convention Center",
		},
		{
			id: 2,
			title: "Japanese Cultural Education",
			location: "Seattle Convention Center",
		},
		{
			id: 3,
			title: "Haven 90's Party Night Club",
			location: "Hilton Hotel Kansas City",
		},
		{
			id: 4,
			title: "Comedy Night at the Station",
			location: "SF Hilton Hotel",
		},
		{ id: 5, title: "A Decadent Arts Experience", location: "West Ridge Mall" },
		{ id: 6, title: "Techtonica Classroom Course", location: "Techtonica HQ" },
		{ id: 7, title: "Example", location: "Techtonica HQ" },
	];
	res.json(events);
});

app.listen(PORT, () =>
	console.log(`Hola! Back-end Server running on Port http://localhost:${PORT}`)
);
