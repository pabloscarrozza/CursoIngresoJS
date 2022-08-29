// Pablo Scarrozza
function mostrar() {
	var nota;
	var numeroMinimo;
	var numeroMaximo;
	var mensaje;

	numeroMinimo = 1;
	numeroMaximo = 10;

	nota = Math.round(Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo);

	if (nota > 8)
	{
		mensaje = "EXCELENTE: " + nota;
	}
	else
	{
		if (nota > 3)
		{
			mensaje = "APROBÓ: " + nota;
		}
		else
		{
			mensaje = "Vamos, la próxima se puede: " + nota;
		}
	}

	alert(mensaje);
}