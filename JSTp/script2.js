function myFunction() {
    return "Write something clever here...";
}
var saisie = prompt("Saisissez votre texte :", "Texte par défaut");
var value = parseInt(saisie);
function IsBissextile(value){
	if ((value%4==0) && ((value%100!=0) || (value%400==0))) return true;
	else return false;
}
console.log(IsBissextile(value));
if(IsBissextile(value)==true){
alert(value+" est une année bissextile.");
}else{
	alert(value+" n’est pas une année bissextile.");
}