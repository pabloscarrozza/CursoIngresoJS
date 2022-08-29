//	Pablo Scarrozza
function mostrar()
{
	var repeticiones;
	var mensaje;

	mensaje = "Hola UTN FRA";
	repeticiones = prompt("Ingrese la cantidad de repeticiones: ");
	repeticiones = parseInt(repeticiones);
	
	for(repeticiones = 0; repeticiones > 0; repeticiones++)
	{
		mensaje = mensaje * repeticiones;
	}
	
	alert(mensaje);
	
}