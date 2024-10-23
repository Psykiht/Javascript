function addition() {
	var add = 2+7;
	document.getElementById("Add").innerHTML = "2 + 7 = " + add;
}

function subtraction() {
	var sub = 21-5;
	document.getElementById("Sub").innerHTML = "21 - 5 = " + sub;
}

function multiplication() {
	var mult = 42*4;
	document.getElementById("Mlt").innerHTML = "42 * 4 = " + mult;
}

function division() {
	var divide = 582/46;
	document.getElementById("Div").innerHTML = "582 / 46 = " + divide;
}

function random() {
	document.getElementById("Ran").innnerHTML = Math.random()*10
}

function modulus_operator() {
	var modulus = 45 % 2;
	document.getElementById("Mod").innerHTML =
	"When you divide 45 by 2 you have left: " + modulus;
}

function Increment() {
	var value = document.getElementById("IncrementText").innerHTML;

	value++;

	document.getElementbyId("IncrementText").innerHTML = value;
}

function Decrement() {
	var value = document.getElementById("DecrementText").innerHTML;

	value--;

	document.getElementById("DecrementText").innerHTML = value;
}