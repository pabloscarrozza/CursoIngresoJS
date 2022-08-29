// Pablo Scarrozza
/*Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
    var promedio;

	contador=0;
	acumulador=0;

	while(contador < 5) // verdadero para poder ingresar
	{
		numeroIngresado = prompt("Ingrese un numero; ");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("Error! no es un numero.");
			numeroIngresado = parseInt(numeroIngresado);
		}

		acumulador = acumulador + numeroIngresado;
		contador = contador +1;
	}

    promedio = acumulador / contador;

	//a contador = 0
	//b la condicion del mientras, osea mientras suceda tal cosa
	//c que va a hacer al final
	//for(contador = 0; contador < 5; contador ++)

	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/5;
}
