//	Pablo Scarrozza
/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	
	while(numeroIngresado > 9 || numeroIngresado < 0)
	{
		numeroIngresado = prompt("Numero incorrecto.");
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;
}
