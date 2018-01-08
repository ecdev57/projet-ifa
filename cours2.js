//recupere mon id dans url
var id = window.location.search.substring(4);
//recupere mon  tableau
var maListe = Liste;
// recupere l'index  selectioner avec cheekIndex de mon tableaux
var index = maListe.findIndex(cheekIndex);
// recuper le bon utilisateur
var googUser = maListe[index];

function capitalize_Words(str){
	// charAt recupere le premier caractere de la chaine  splice recupere le reste de la chaine
 return str.charAt(0).toUpperCase() + str.slice(1);
}
function cheekIndex(elem){
	//verifier si id passer en parametre corespond a celuis de ma liste si oui return true
	if (parseInt(id) === elem.ID) {
		return true;
	} else {
		return false;
	}
}
//affiche le titre
document.getElementById("names").innerHTML = googUser.Nom.toUpperCase() + "\u0020" + capitalize_Words(googUser.Prenom);
    var contentDesc = document.getElementById("contentFiche");
    for (key in googUser) {
		if (key !== 'Nom' && key !== 'Prenom') {
			//crée un li 
			var contentLi = document.createElement('li');
			//innerHTML récupère ou définit tout le balisage et le contenu au sein d'un élément donné.
			contentLi.innerHTML = key +":"+googUser[key];
			//inserer un element html dans un contenu li dans ul
			contentDesc.appendChild(contentLi);
		}
	} 
    