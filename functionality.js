var numberOfCards = flashcards.length

var termEl = document.getElementById("term")
var definitionEl = document.getElementById("definition")
var showEl = document.getElementById("show")
var nextEl = document.getElementById("next")

renderCard ()

document.getElementById ("show").onclick = function () {
	definitionEl.style.display = "block"
	showEl.style.display = "none"
	nextEl.style.display = "block"
}
document.getElementById ("next").onclick = function () {
	definitionEl.style.display = "none"
	showEl.style.display = "block"
	nextEl.style.display = "none"

	renderCard ()
}
function renderCard () {
	var card = flashcards[Math.floor(Math.random()*numberOfCards)]

	termEl.innerHTML = card.term
	definitionEl.innerHTML = card.definition
}
