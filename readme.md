# Homework assignment for Node Express Handlebars

### Overview

In this assignment, we are tasked with creating a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. We needed to follow the MVC design pattern, use Node and MySQL to query and route data in the app, and Handlebars to generate the  HTML.

### Technology Used

* NPM
* MySQL
* Express
* Express-Handlebars
* Body-Parser
* Node.JS
* Use of custom-created ORM (Object Relational Mapping)
* Use of MVC (Model-View-Controller) architecture pattern

### Flow of the App

* Upon loading the page, the user is brought to a landing page where they can select a burger to eat, return a burger back to the chef, or create their own burger with the name of their choice.

* Clicking the button to eat a burger will remove that burger out of the left column (menu side) and move it over to the right column (devoured side).

** Once the burger is moved to the right column, the user is now given the opportunity to send that burger back to the chef and return it back to the left column.

* At the bottom of the page, there is an option for the user to create their own burger.

** The user must fill in any name and also select which state it is in (devoured or not).



### Heroku Link Demo
* https://frozen-ridge-86303.herokuapp.com/