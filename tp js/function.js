var submit = null;
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
function cheekIndex(elem){
	//verifier si id passer en parametre corespond a celuis de ma liste si oui return true
	if (parseInt(id) === elem.ID) {
		return true;
	} else {
		return false;
	}
}
function urlTable(item){
   	document.location.href = '?id=' + item.ID;
}
function Init(nom){
  var Box = document.createElement('input');
  Box.type = 'text';
  Box.name = 'image'+nom;
  Box.value = nom;
  submit.appendChild(Box);
}
function Text(nom){
  var Box = document.createElement('textarea');
  Box.name = 'image'+nom;
  Box.value = nom;
  submit.appendChild(Box);
}

/*function Select(nom){
	var sel = document.createElement('select');
	sel.name = 'drop1';
	sel.id = 'Select1';
	var cars = [
	  "volvo",
	  "saab",
	  "mercedes",
	  "audi"
	];
var options_str = "";
cars.forEach( function(car) {
  options_str += '<option value="' + nom + '">' + car + '</option>';
});
sel.innerHTML = options_str;
  submit.appendChild(sel);
}*///Nom,Prenom,site_pref,Pourquoi_S,Mail,Pourquoi_S,Pourquoi_A,before_IFA,Javascript
function button(){
	var Box = document.createElement('input');
  	Box.type = 'submit';
  	Box.name = 'submit';
  	Box.id = 'submit';
  	 Box.value = "envoyer";
  	 submit.appendChild(Box);
}