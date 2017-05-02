const http = require('http')
const port = 3000

var definitionFile = process.argv[2]
var flashcards = require("./" + definitionFile + ".js")
var numberOfCards = flashcards.descriptionlist.length

const requestHandler = (request, response) => {
	var card = flashcards.descriptionlist[Math.floor(Math.random()*numberOfCards)];
	var htmlBuffer = "<style>.container {position: absolute;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%); height:50%;width:50%}.buttons{position: absolute;bottom: 0;right: 0;}</style>"

	htmlBuffer += "<div class='container'>"
	htmlBuffer += "<h1>" + card.term + "</h1>"
	htmlBuffer += "<p style='display:none' id='definition'>" + card.definition + "</p>"
	htmlBuffer += "<div class='buttons'>"
	htmlBuffer += "<div id='show' onclick='javascript: document.getElementById(\"definition\").style.display = \"block\"; document.getElementById(\"show\").style.display = \"none\"; document.getElementById(\"next\").style.display = \"block\"'>Show definition</div>"
	htmlBuffer += "<div style='display:none' id='next' onclick='javascript: document.getElementById(\"definition\").style.display = \"none\"; document.getElementById(\"show\").style.display = \"block\"; document.getElementById(\"next\").style.display = \"none\"'><a href='/'>Next</a></div>"
	htmlBuffer += "</div>"
	htmlBuffer += "</div>"

	response.end(htmlBuffer)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})