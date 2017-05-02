# flash-cards
Loads a json file with a term and definition and randomly displays a term for you to define.

## Screenshot
![Sample screenshot](https://github.com/stevenharradine/flash-cards/blob/master/screen.png)

## usage
Run the server while passing in your the path of your flashcards file.
```
node server sample
```

## flashcards file format
Your file should follow the following format
```
module.exports.descriptionlist = [{
	"term":"Absolute zero",
	"definition": "The lowest tempature possible where all motion stops, 0K or -273.15°C",
	"category": "Physics"
},{
	"term":"Absolute Value",
	"definition": "Makes negitive values positive and leaves positive numbers unchanged.  Written as |x| and defined as √(x²)",
	"category": "Mathematics"
}]
```
