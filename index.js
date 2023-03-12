alert("Hello, Let's fill out a form!")

var toggleForm = document.getElementById("btn")
toggleForm.addEventListener("click", function() {
	alert("Register successful as " + document.getElementById("name").value + "!")
	refreshPage()
})