// Pablo Scarrozza
function mostrar()
{
	var destinoIngresado;
	var mensaje;
	
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Cataratas":
		case "Mar del plata":
			mensaje = "Hace calor en este destino.";
		break;
			
		default:
			mensaje = "Hace frio en este destino.";
		break;
	}

	alert(mensaje);
}