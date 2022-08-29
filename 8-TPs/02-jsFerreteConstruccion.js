/*  Pablo Scarrozza
2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var alambre;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    alambre = ((largo + ancho) * 2) * 3;

    alert("Cantidad de alambre a comprar: " + alambre);
}
function Circulo () 
{
    var radio;
    var alambre;

    radio = document.getElementById("txtIdRadio").value;

    radio = parseInt(radio);

    alambre = (Math.PI * (2 * radio)) * 3;

    alert("Cantidad de alambre a comprar: " + alambre);
}
function Materiales () 
{
	var largo;
    var ancho;
    var materialCemento;
    var materialCal;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);
    
    materialCemento = 2 * (largo * ancho);
    materialCal = 3 * (largo * ancho);

    alert("Se necesitan " + materialCemento + " bolsas de cemento y " + materialCal + " bolsas de cal");
}