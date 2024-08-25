import express from "express";
import fetch from 'node-fetch';
const app = express();
const port = 3000;

/*
I had to change my file from .js to .mjs because it keep giving me error
*/

// Replace 'YOUR_OAUTH_TOKEN' with your actual OAuth token
const oauthToken = 'PCPJI42WI4DAMJBTKC2T';

// information about your user account
fetch(`https://www.eventbriteapi.com/v3/users/me/?token=${oauthToken}`)
.then((response) => response.json())
.then((users) => {console.log(users)})

//retrieve by catogory
fetch(`https://www.eventbriteapi.com/v3/categories/?token=${oauthToken}`)
.then((response) => response.json())
.then((events) => {console.log(events)})

// retrieve organization
fetch(`https://www.eventbriteapi.com/v3/users/me/organizations/?token=${oauthToken}`)
.then((response) => response.json())
.then((events) => {console.log(events)})


//Retrieve Attendee Report
fetch(`https://www.eventbriteapi.com/v3/reports/attendees/?token=${oauthToken}`)
.then((response) => response.json())
.then((events) => {console.log(events)})

// retrieve venues
fetch(`https://www.eventbriteapi.com/v3/venues/?token=${oauthToken}`)
.then((response) => response.json())
.then((events) => {console.log(events)})



app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});

