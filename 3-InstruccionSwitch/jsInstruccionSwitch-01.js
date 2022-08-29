// Pablo Scarrozza
function mostrar()
{
	var mesDelAño;
	var mensaje;
	
	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Enero":
			mensaje = "Que comiences bien el año";
		break;
		case "Marzo":
			mensaje = "A clases!!!";
		break;
		case "Julio":
			mensaje = "Se vienen las vacaciones!!!";
		break;
		case "Diciembre":
			mensaje = "Felices fiestas!!!";
		break;
		default:
			mensaje = "No hay un mensaje cargado para este mes";
		break;
	}



/*	
	if(mesDelAño == "Enero")
	{
		mensaje = "Que comiences bien el año";
	}
	else
	{
		if(mesDelAño == "Marzo")
		{
			mensaje = "A clases!!!";
		}
		else
		{
			if(mesDelAño == "Julio")
			{
				mensaje = "Se vienen las vacaciones!!!";
			}
			else
			{
				if(mesDelAño == "Diciembre")
				{
					mensaje = "Felices fiestas!!!";
				}
				else
				{
					mensaje = "No hay un mensaje cargado para este mes";
				}
			}
		}
	}
	*/
	alert(mensaje);
}

/*function mostrar()
{
	var mesDelAño;
	
	mesDelAño = document.getElementById("txtIdMes").value;
	
	if(mesDelAño == "Enero")
	{
		alert("Que comiences bien el año");
	}
	else
	{
		if(mesDelAño == "Marzo")
		{
			alert("A clases!!!");
		}
		else
		{
			if(mesDelAño == "Julio")
			{
				alert("Se vienen las vacaciones!!!");
			}
			else
			{
				if(mesDelAño == "Diciembre")
				{
					alert("Felices fiestas!!!");
				}
			}
		}
	}
}*/