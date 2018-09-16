alert("Potato");

function dropdown() {
	for (var i = 0; i < document.getElementsByClassName("dropdown-content").length; i++) {
		var x = document.getElementsByClassName("dropdown-content")[i];
		if (x.style.display === "none") { 
			x.style.display = "block";
		}
		else {
			x.style.display = "none";
		}
	}
}
