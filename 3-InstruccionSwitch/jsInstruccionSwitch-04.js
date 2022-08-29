// Pablo Scarrozza
function mostrar()
{
	var mesDelAño;
	var mensaje;
	
	mesDelAño = document.getElementById("txtIdMes").value;
	
	switch(mesDelAño)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Este mes tiene 30 días";
		break;
		case "Febrero":
			mensaje = "Este mes tiene 28 días";
		break;
		default:
			mensaje = "Este mes tiene 31 días";
		break;
	}
	alert(mensaje);

}