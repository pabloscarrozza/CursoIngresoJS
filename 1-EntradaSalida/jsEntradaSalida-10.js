/* Pablo Scarrozza
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"

idem al 10 pero se pide el porcentaje por prompt... 
y se hace todo lo necesario para que funcione*/

function mostrarAumento()
{
	var importe;
	var resultado;
	var porcentaje;

	importe = document.getElementById("txtIdImporte").value;

	importe = parseInt(importe);
	porcentaje = parseInt(porcentaje);

	porcentaje = prompt("Escriba el porcentaje de descuento: " , "Porcentaje");

	resultado = importe - (importe * porcentaje / 100);

	document.getElementById("txtIdResultado").value = resultado;
}


/*
function mostrarAumento()
{
	var importe;
	var resultado;

	importe = document.getElementById("txtIdImporte").value;

	importe = parseInt(importe);

	resultado = importe - (importe * 0.25);

	document.getElementById("txtIdResultado").value = resultado;
}
*/