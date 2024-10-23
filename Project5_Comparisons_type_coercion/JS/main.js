var x = true;

document.write(typeof x);
document.write("<br>");

document.write("10" + 19);
document.write("<br>");

document.write(8 == 8);
document.write("<br>");

x = 5;
y = 5;
document.write(x ===y);
document.write("<br>");

document.write(5 > 2 && 72 > 3);
document.write("<br>");

document.write( 5 < 2 || 72 < 3);
document.write("<br>");

function not_Function() {
	document.getElementById("Not").innerHTML = !(4 > 6);
}
