var maListe = [];
maListe = Liste;
var monUl = document.getElementById("listeContainer");
//var submit = document.getElementById("form_id");
var envoyer = document.getElementById("submit");
var submit = document.getElementById("Submit");
var newuser = {};

//affiche mes donnée
maListe.forEach(function(item) {
	var monLi = document.createElement('li');
	monLi.setAttribute('userid', item.Id);
	monLi.innerHTML = "<span>"+ item.Nom.toUpperCase() + "\u0020" + capitalize_Words(item.Prenom) + "</span>";
	monUl.appendChild(monLi);
	monLi.addEventListener("click", function(event){
	event.preventDefault();
	console.log('test');
	var test = Init(item.nom);
	button();
	console.log(item.Nom);
})
});
console.log(monUl);

//ajoute des données
s/*ubmit.addEventListener("submit", function(event){
event.preventDefault();

	for(i = 0; i < submit.elements.length; i++ ){
		if(submit.elements[i].value !== "submit"){
			newuser[submit.elements[i].name] = submit.elements[i].value;
		}
	}
	var li = document.createElement("li");
	li.innerHTML = newuser.Nom;
	monUl.appendChild(li);
})*/
//editer
envoyer.addEventListener("submit", function(event){
	event.preventDefault();
 alert('test2');
})