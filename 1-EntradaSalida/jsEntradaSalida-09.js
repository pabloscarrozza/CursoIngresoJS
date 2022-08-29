/* Pablo Scarrozza
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".

idem al 9 pero se pide el porcentaje por prompt... 
y se hace todo lo necesario para que funcione*/

function mostrarAumento()
{
	var sueldo;
	var resultado;
	var porcentaje;

	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo);
	porcentaje = parseInt(porcentaje);

	porcentaje = prompt("Escriba el porcentaje: ","Porcentaje");

	resultado = sueldo + (sueldo * porcentaje / 100);

	document.getElementById("txtIdResultado").value = resultado;

}

/*
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var porcentaje;

	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo);

	resultado = sueldo + (sueldo * 0.1);

	document.getElementById("txtIdResultado").value = resultado;

}
*/