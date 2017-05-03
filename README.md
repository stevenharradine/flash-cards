# flash-cards
Loads a json file with a term and definition and randomly displays a term for you to define.

## Requirements
 * A webserver

## Screenshot
![Sample screenshot](https://github.com/stevenharradine/flash-cards/blob/master/screen.png)

## usage
 1. Copy files to your docroot
 2. Copy current flashcard set to `flashcards.js`

## flashcards file format
Your file should follow the following format
```
var flashcards = [{
	"term":"Absolute zero",
	"definition": "The lowest tempature possible where all motion stops, 0K or -273.15&deg;C",
	"category": "Physics"
},{
	"term":"Absolute Value",
	"definition": "Makes negitive values positive and leaves positive numbers unchanged.  Written as |x| and defined as &radic;(x&sup2;)",
	"category": "Mathematics"
}]
```
