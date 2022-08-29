//	Pablo Scarrozza
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;

	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta=true;

	do{
		numeroIngresado = prompt("Escriba un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("Error! no es un numero.");
			numeroIngresado = parseInt(numeroIngresado);
		}
		if(numeroIngresado < 0)
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		else
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}

		respuesta = confirm("Desea continuar?");

	}while(respuesta == true);

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}