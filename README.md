This app uses Wikipedia API to fetch data about historical events that happened on this day.
Built with mobile-First approach.

**_Development in progress._**

## Features

* Navigation by date.
* Adding events to bookmarks
* Selecting displayed events by type

# Implementation details

* Data loads from Wikipedia API
* Data from already visited dates are memoized until browser reloads, so no ajax requests are sent when this data has already been loaded
* Bookmarks persists in localStorage

## Technologies and frameworks used

* React
* React Router
* SASS
* Webpack
* Babel
