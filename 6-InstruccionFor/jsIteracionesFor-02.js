//	Pablo Scarrozza
function mostrar()
{
	var numeroIngresado;
	var mensaje;

	mensaje = "";

	for(numeroIngresado = 10; numeroIngresado > 0; numeroIngresado--)
	{
		mensaje = mensaje + numeroIngresado + " ";
	}
	
	document.write(mensaje);
	
}