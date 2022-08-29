//	Pablo Scarrozza
/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var number;

	number = 11;
	mensaje = "";

	while(number > 1)
	{
		number = number -1;
		mensaje = mensaje + number + " ";
	}
	
	alert(mensaje);
	
}
