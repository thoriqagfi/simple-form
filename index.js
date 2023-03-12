var toggleFormSignup = document.getElementById("btnSignup")
toggleFormSignup.addEventListener("click", function() {
	alert("REGISTER successful as " + document.getElementById("name").value + "!")
	refreshPage()
})

var toggleFormLogin = document.getElementById("btnLogin")
toggleFormLogin.addEventListener("click", function() {
	alert("LOGIN successful as " + document.getElementById("name").value + "!")
	refreshPage()
})

function refreshPage() {
	window.location.reload()
}

function loginPage() {
	window.location.href = "login.html"
}

function signUpPage() {
	window.location.href = "index.html"
}