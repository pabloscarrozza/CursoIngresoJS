// Pablo Scarrozza
function mostrar()
{
	var hora;
	var mensaje;
	
	hora = document.getElementById("txtIdHora").value;
	
	switch(hora)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			mensaje = "Es de mañana.";
		break;
		default:
			mensaje = "No es de mañana";
		break;
	}
	alert(mensaje);

}