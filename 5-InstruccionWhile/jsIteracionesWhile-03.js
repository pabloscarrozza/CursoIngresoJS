//	Pablo Scarrozza
/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var mensaje;

	claveIngresada = prompt("ingrese la clave.");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("ingrese nuevamente la clave.");
		mensaje = "Clave correcta.";
	}
	
	alert(mensaje);
	
}
