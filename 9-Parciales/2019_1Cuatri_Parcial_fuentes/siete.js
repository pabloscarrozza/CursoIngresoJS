//  Pablo Scarrozza
/*Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo.
(validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
a-bis) El promedio de los masculinos.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.*/
function mostrar()
{
    var altura;
    var genero;
    var cantJugadores;
    var alturasTotales;
    var promedioTotales;
    var alturaAcumMasculinos;
    var contadorMasculinos;
    var promedioMasculinos;
    var flag;
    var alturaMinima;
    var alturaMaxima;
    var mujeresAltas;
    var mensajeA;
    var mensajeB;
    var mensajeC;
    var mensajeABis;


    cantJugadores = 0;
    alturasTotales = 0;
    alturaAcumMasculinos = 0;
    flag = true;
    mujeresAltas = 0;

    while(cantJugadores < 5)
	{
        genero = prompt("ingrese f ó m: ");

        while(genero != 'f' && genero != 'm')
        {
            genero = prompt("Error! Ingrese f ó m: ");
        }

        altura = prompt("Ingrese la altura: ");
        altura = parseInt(altura);

        while(isNaN(altura) == true || altura < 1 || altura > 250)
        {
            altura = prompt("Error! Ingrese la altura: ");
            altura = parseInt(altura);
        }

        /*while(isNaN(altura) == true)
        {
            altura = prompt("Error! Ingrese la altura: ");
            altura = parseInt(altura);
        }
        while(altura > 250 || altura < 0)
        {
            altura = prompt("Numero incorrecto. Ingrese la altura: ");
        }*/
            if(flag == true)
            {
                alturaMaxima = altura;
                alturaMinima = altura;
                flag = false;
            }
            else
            {
                if(altura < alturaMinima)
                {
                    alturaMinima = altura;
                }
                else
                {
                    if(altura > alturaMaxima)
                    {
                        alturaMaxima = altura;
                    }
                }
            }
            if(altura > 190 && genero == "f")
            {
                mujeresAltas = mujeresAltas +1;
            }
            if(genero == "m")
            {
                contadorMasculinos = contadorMasculinos + 1;
                alturaAcumMasculinos = alturaAcumMasculinos + altura;
            }

        alturasTotales = alturasTotales + altura;
        cantJugadores = cantJugadores + 1;
	}
    //Promedio total
    promedioTotales = alturasTotales / cantJugadores;
    //Promedio Masculinos
    if(contadorMasculinos > 0)
    {
        promedioMasculinos = alturaAcumMasculinos / contadorMasculinos;
        mensajeABis = "El promedio de altura de los jugadores masculinos es de: " + promedioMasculinos;
    }
    else
    {
        mensajeABis = // barra opuesta n = un enter en el alert
    }

    mensajeA = "El promedio de las alturas totales es: " + promedioTotales;
    mensajeB = ", la altura más baja es: " + alturaMinima;
    mensajeC = " y cantidad de mujeres que superan la altura por 190cm: " + mujeresAltas;
    alert(mensajeA + mensajeB + mensajeC);

}
