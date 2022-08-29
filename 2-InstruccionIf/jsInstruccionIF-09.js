// Pablo Scarrozza
function mostrar()
{
	var numeroRandom;
	var numeroMinimo;
	var numeroMaximo;

	numeroMinimo = 1;
	numeroMaximo = 10;

	numeroRandom = Math.round(Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo);

	alert(numeroRandom);	

}