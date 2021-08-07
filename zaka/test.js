var num1=10;
var num2=15;
if(num1>num2){
    console.log("le plus grand est num1",num1);
}else{
    console.log("le plus grand est num2",num2);
}
//Ex2
/*
var a=3;
var b=-7;
var c=1;
if(a>0){
    console.log("a est positif");
}else{
    console.log("a est négatif");
}
/*if(b>0){
    console
*/


let age = 16;
 if(age >   18)
 {
     console.log("majeur")
 }else {
    console.log("mineur")
 }

 // condition ternaires 
 age >  18 ? console.log("majeur"): console.log("mineur");
 //ex3
 let a=5;
 let b=-2;
 let c=6;
max=a;
if(b>max){
    console.log("b est plus grand");

}else if(c>max){
    console.log("c est le plus grand");
}
 /*if(a>b){
     console.log("a est plus grand");
 }else if(b>a){
     console.log("b est plus grand");
 }else if(c>a){}*/
 
//Ex4
let e=0;
let f=1;
let g=2;
if(e%2==0){
    console.log("e est pair")
}else{
    console.log("e est impair");
} 
if(f%2==0){
    console.log("f est pair")
}else{
    console.log("f est impair");
} 
if(g%2==0){
    console.log("g est pair")
}else{
    console.log("g est impair");
} 
//Ex5
let x=2;
let y=-5;
if(x>0 && y>0 || x<0 && y<0){
    console.log("le produit est positif");
}
else{
    console.log("le produit est négatif");
} 
//switch
let couleur = prompt("entrer la couleur préferée");
switch(couleur){
    case "rouge":
        console.log("Arrêt");
break;
case "Vert":
    console.log("passer");
    break;
    case "Jaune":
        console.log("Ralentir");
        break;
        default:
            console.log("Attention");
}

let grade = prompt("entrer le grade");
switch(grade){
    case "A":console.log("Bon");
    break;
    case "B":console.log("Moyen");
    break;
    case "C":console.log("Passable");
    break;
    case "D":console.log("Insuffisant");
    default:
    console.log("Vous n'avez aucun grade");
}
//evolution des variables
let choix=2;
if(choix){
    console.log("var existe");
}else{
    console.log("n'exizste pas");
}
//Fonctions
function Bonjour(Prenom){
    console.log("Bonjour "+ Prenom);
}
Bonjour("Alae");
function Bye(numerodeTel){
    console.log("Bye et à Bientôt " + numerodeTel);
}
Bye("0623909851");
function SurfaceCarre(cote){
    let surface = cote*cote;
console.log("la surface d'un carrée est " + surface);
}
SurfaceCarre(2);
function SurfaceRectangle(Long,Larg){
    let surface = Long*Larg;
   //1ere Metho console.log("la surface du rectangle est " + surface);
    //2eme Meth
    return surface;
}
let S2=SurfaceRectangle(10,10);
console.log(S2);
//Parametres par défaut
function direBonjour(nom="Fred"){
    console.log("Bonjour  " + nom);}
    direBonjour("Alice");//prints Alice
    direBonjour();//prints Fred
//TP Fonctions
function AfficherMessage(){
    console.log("Bienvenue dans le milieu du développement");

}
AfficherMessage();
//ex2

function AfficherRectangle(largeur,longueur){
   
 
   console.log("le perimetre est " + (longueur+largeur)*2);
}
AfficherRectangle(10,10);
//ex3
function NomComplet(Name,Prenom="Alae"){
  
      let resultat = Name + " " + Prenom;
      return resultat; 
}
let resultat =NomComplet("Aichane");
console.log(resultat);

























