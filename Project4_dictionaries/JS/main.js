function my_Dictionary() {
	var Character = {
		Name: "KA",
		Job: "Viper",
		Lvl: "100",
		Bis: "Yes",
	};
	delete Character.Lvl;
	document.getElementById("Dictionary").innerHTML = Character.Lvl;
}