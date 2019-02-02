# Eat Da Burger!
Eat-Da-Burger is a restaurant app With Node.js/Express/MySQL/Handlebars/Bootstrap

## Description

This application demonstrates a simple full stack application with a front end implemented with HTML/CSS and elements from the Bootstrap framework and the backend implemented with Node.js, Express and the MySQL database. HTML templating is done with the help of Handlebars.

The user may enter any burger name to add it to the menu. This also adds the new burger entry into the MySQL database. The initial burger entry is added as *Devourable* on the menu and placed on the left side of the screen. The user may then eat any burger by clicking on it, which moves it into the adjacent column and updates its status accordingly in the database.

## Demo

The demo of the burger eating application can be found [here]().

## Installation

To run the application locally, first clone this repository with the following command.

	git clone https://github.com/KennethS13/Burger
	
Next, install the application dependencies.

	cd Burger
	npm install
	
Finally, run the node server locally.

	node server
	
Now, open the local application on port 3000 at the URL: `http://localhost:3000/`.