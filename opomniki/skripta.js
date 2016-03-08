window.addEventListener('load', function() {
	//stran nalozena
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
			var naziv = opomnik.querySelector(".naziv_opomnika").innerHTML;
	
			//TODO: 
			if (cas === 0) {
				alert("Opomnik!\n\nZadolžitev " + naziv + " je potekla!");
				opomnik.parentNode.removeChild(opomnik);
			} else {
				cas--;
				casovnik.innerHTML = cas;
			}
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	var dodajOpomnik = function() {
		var naziv = document.querySelector("#naziv_opomnika").value;
		var cas = document.querySelector("#cas_opomnika").value;
		document.querySelector("#naziv_opomnika").value = "";
		document.querySelector("#cas_opomnika").value = "";
		document.getElementById("opomniki").innerHTML += 
		"<div class='opomnik senca rob'><div class='naziv_opomnika'>" + naziv + 
		"</div><div class='cas_opomnika'> Opomnik čez <span>" + cas + "</span> sekund.</div></div>";
	};
	
	
	
	var prijavniGumbClick = function() {
		var text = document.getElementById("uporabnisko_ime").value;
		document.getElementById("uporabnik").innerHTML = text;
		document.querySelector(".pokrivalo").style.display = "none";
	};
	
	document.querySelector("#prijavniGumb").addEventListener('click', prijavniGumbClick);
	document.querySelector("#dodajGumb").addEventListener('click', dodajOpomnik);
});