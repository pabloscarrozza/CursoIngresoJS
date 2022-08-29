//	Pablo Scarrozza
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	banderaDelPrimero = true;
	respuesta = 'si';

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un número: ");
		numeroIngresado	= parseInt(numeroIngresado);
		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("Error! No es un número válido.");
			numeroIngresado = parseInt(numeroIngresado);
		}
        
		if(banderaDelPrimero == true)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}
		else
		{
			if(numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
			else
			{
				if(numeroIngresado > numeroMaximo)
				{
					numeroMaximo = numeroIngresado;
				}
			}
		}

		respuesta = prompt("Desea continuar? ingrese 'si'");
	}

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}