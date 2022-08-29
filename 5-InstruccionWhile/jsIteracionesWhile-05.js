//	Pablo Scarrozza
/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var genero;

	genero = prompt("ingrese f ó m .");
	
	while(!(genero == 'f' || genero == 'm'))
	{
		genero = prompt("Sexo incorrecto.");
	}

	document.getElementById("txtIdSexo").value = genero;
}
