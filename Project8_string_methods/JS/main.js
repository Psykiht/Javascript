function full_sentence() {
	var part_1 = "Today ";
	var part_2 = "is a ";
	var part_3 = "Day";
	var whole_sentence = part_1.concat(part_2, part_3);
	document.getElementById("StringMethod").innerHTML = whole_sentence;
}

function slice_Method() {
	var sentence = "Slice and Dice";
	var section = sentence.slice(10, 14);
	document.getElementById("Slice").innerHTML = section;
}

function string_Method() {
	var myNumber = 999;
	document.getElementById("ToString").innerHTML = myNumber.toString();
}

function precision_method() {
	var myNumber = 156.54347623456234;
	document.getElementById("SpecificLength").innerHTML =
	myNumber.toPrecision(4);
}