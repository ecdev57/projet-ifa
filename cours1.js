function capitalize_Words(str){
	// charAt recupere le premier caractere de la chaine  splice recupere le reste de la chaine
 return str.charAt(0).toUpperCase() + str.slice(1);
}
function clickDrive(item){
	var titre= document.getElementById("name").innerHTML = item.Nom.toUpperCase() + "\u0020" + capitalize_Words(item.Prenom);
	var contentDesc = document.getElementById("contentDesc"); 
	contentDesc.innerHTML = null;
	for (key in item) {
		if (key !== 'Nom' && key !== 'Prenom') {
			//console.log(key);
			//console.log( key +":"+item[key]);
			var contentLi = document.createElement('li');
			//innerHTML récupère ou définit tout le balisage et le contenu au sein d'un élément donné.
			contentLi.innerHTML = key +":"+item[key];
			//inserer un element html dans un contenu li dans ul
			contentDesc.appendChild(contentLi);
		}
	}
}
function urlTable(item){
   	document.location.href = 'fiche.html?id=' + item.ID;
}


// step 1 : récupérer la liste:
var maListe = [];
maListe = Liste;

console.log(maListe);
// step 2 : trouver le bon container
var monUl = document.getElementById("listeContainer");
//console.log(monUl);
console.log(maListe.length);
// step3 : parcourir les données et effectuer le traitement sur chaque getElementById
// option 1 (boucle), ForEach
maListe.forEach(function(item) {
	var monLi = document.createElement('li');
	//console.log(monLi);
	monLi.setAttribute('userid', item.Id);
	monLi.innerHTML = "<span>"+ item.Nom.toUpperCase() + "\u0020" + capitalize_Words(item.Prenom) + "</span>";
	monLi.addEventListener("click", function(event){
			//clickDrive(item);
			urlTable(item);
	})	
	monUl.appendChild(monLi);
});