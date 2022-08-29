//	Pablo Scarrozza
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador; // contar cantidad de vueltas
	var acumulador; // acumular los valores
	var respuesta;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta = true;

	do{ // se ejecuta aunque sea una sola vez
		do{ // NaN not a number
			numeroIngresado = prompt("Error! no es un numero.");
			numeroIngresado = parseInt(numeroIngresado);
		}while(isNaN(numeroIngresado) == true); // sale del nan cuando da false

		acumulador = acumulador + numeroIngresado;
		contador = contador +1; // es la cantidad de notas que tenemos
		respuesta = confirm("Desea continuar?"); // que nuestra condicion sea falsa en algun momento

	}while(respuesta == true); //asi es (respuesta)
	// es el unico bucle que lleva punto y coma al final

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;
}

/*
function mostrar()
{
	var contador; // contar cantidad de vueltas
	var acumulador; // acumular los valores
	var respuesta;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta == 'si')
	{
		numeroIngresado = prompt("Ingrese un numero; ");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado) == true) // sale del nan cuando da false
		{
			numeroIngresado = prompt("Error! no es un numero.");
			numeroIngresado = parseInt(numeroIngresado);
		}

		acumulador = acumulador + numeroIngresado;

		contador = contador +1; // es la cantidad de notas que tenemos
		respuesta = prompt("Desea continuar? ingrese 'si'"); // que nuestra condicion sea falsa en algun momento
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;
}*/