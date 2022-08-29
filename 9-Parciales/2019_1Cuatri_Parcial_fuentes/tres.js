/*  Pablo Scarrozza Div K
Una librería desea corroborar quién es el mejor vendedor para poder premiarlo y destacarlo 
como empleado del mes. Para ello se deben ingresar los siguientes datos dependiendo de las 
cantidades de venta que hubo en el día.

-Carnet de vendedor: (AA200 -A3240 -A80)
-Genero vendido: (Terror, Infantil, Autoayuda, Mezclado)
-El total vendido
-Estrellas puestas por el cliente (se ingresa un campo numérico que va del 1 al 5)

Una vez finalizado la carga total del día calcular:

1)Cual fue el género menos vendido.
2)Cuál fue el vendedor que tiene el mayor promedio de estrellas.
3)Si el vendedor superó una cantidad total de $3000 le corresponde una comisión del %15, 
sino del %5. Mostrar la venta mas cara.
*/
function mostrar()
{
    var mensaje;
    var respuesta;
    var carnet;
    var genero;
    var totalVendido;
    var estrellas;
    var flagGeneroMenosVendido;
    var cantGeneroMenosVendido;
    var generoMenosVendido;
    var contadorVentasUno;
    var contadorVentasDos;
    var contadorVentasTres;
    var acumuladorEstrellasUno;
    var acumuladorEstrellasDos;
    var acumuladorEstrellasTres;
    var promedioMayorEstrellasUno;
    var promedioMayorEstrellasDos;
    var promedioMayorEstrellasTres;
    var flagVentaMasCara;
    var ventaMasCara;
    var acumuladorVentaUno;
    var acumuladorVentaDos;
    var acumuladorVentaTres;
    var totalComisionUno;
    var totalComisionDos;
    var totalComisionTres;

    respuesta = true;
    flagGeneroMenosVendido = true;
    contadorVentasUno = 0;
    contadorVentasDos = 0;
    contadorVentasTres = 0;
    acumuladorEstrellasUno = 0;
    acumuladorEstrellasDos = 0;
    acumuladorEstrellasTres = 0;
    flagVentaMasCara = true;
    acumuladorVentaUno = 0;
    acumuladorVentaDos = 0;
    acumuladorVentaTres = 0;

    while(respuesta == true)
    {
        carnet = prompt("Ingrese el carnet del vendedor (AA200, A3240 ó A80): ");
        while(carnet != "AA200" && carnet != "A3240" && carnet != "A80")
        {
            carnet = prompt("ERROR! Ingrese el carnet del vendedor (AA200, A3240 ó A80): ");
        }

        genero = prompt("Ingrese el genero vendido (Terror, Infantil, Autoayuda ó Mezclado): ");
        while(genero != "Terror" && genero != "Infantil" && genero != "Autoayuda" && genero != "Mezclado")
        {
            genero = prompt("ERROR! Ingrese el genero vendido (Terror, Infantil, Autoayuda ó Mezclado): ");
        }
        
        totalVendido = prompt("Ingrese el total vendido: ");
        totalVendido = parseInt(totalVendido);
        while(isNaN(totalVendido) == true && totalVendido < 1)
        {
            totalVendido = prompt("ERROR! Ingrese el total vendido: ");
            totalVendido = parseInt(totalVendido);
        }
        
        estrellas = prompt("Ingrese la cantidad de estrellas (1 a 5): ");
        estrellas = parseInt(estrellas);
        while(isNaN(estrellas) == true && estrellas < 1 && estrellas > 5)
        {
            estrellas = prompt("ERROR! Ingrese la cantidad de estrellas (1 a 5): ");
            estrellas = parseInt(estrellas);
        }

        if(flagGeneroMenosVendido == true)
        {
            cantGeneroMenosVendido = totalVendido;
            generoMenosVendido = genero;
            flagGeneroMenosVendido = false;
        }
        else
        {
            if(totalVendido < cantGeneroMenosVendido)
            {
                cantGeneroMenosVendido = totalVendido;
                generoMenosVendido = genero;
            }
        }

        switch(carnet)
        {
            case "AA200":
                contadorVentasUno++;
                acumuladorEstrellasUno = acumuladorEstrellasUno + estrellas;
                acumuladorVentaUno = acumuladorVentaUno + totalVendido;
            break;
            case "A3240":
                contadorVentasDos++;
                acumuladorEstrellasDos = acumuladorEstrellasDos + estrellas;
                acumuladorVentaDos = acumuladorVentaDos + totalVendido;
            break;
            case "A80":
                contadorVentasTres++;
                acumuladorEstrellasTres = acumuladorEstrellasTres + estrellas;
                acumuladorVentaTres = acumuladorVentaTres + totalVendido;
            break;
        }

        if(flagVentaMasCara == true)
        {
            ventaMasCara = totalVendido;
            flagVentaMasCara = false;
        }
        else
        {
            if(totalVendido > ventaMasCara)
            {
                ventaMasCara = totalVendido;
            }
        }

        respuesta = confirm("Desea continuar?");
    }

    mensaje = "El género menos vendido fue: " + generoMenosVendido;
    
    promedioMayorEstrellasUno = acumuladorEstrellasUno / contadorVentasUno;
    promedioMayorEstrellasDos = acumuladorEstrellasDos / contadorVentasDos;
    promedioMayorEstrellasTres = acumuladorEstrellasTres / contadorVentasTres;

    if(promedioMayorEstrellasUno == 0)
    {
        mensaje = mensaje + "<br> No se encontraron datos ingresados para calcular el promedio de AA200";
    }
    else
    {
        if(promedioMayorEstrellasDos == 0)
        {
            mensaje = mensaje + "<br> No se encontraron datos ingresados para calcular el promedio de A3240";
        }
        else
        {
            if(promedioMayorEstrellasTres == 0)
            {
                mensaje = mensaje + "<br> No se encontraron datos ingresados para calcular el promedio de A80";
            }
            else
            {
                if(promedioMayorEstrellasUno > promedioMayorEstrellasDos && promedioMayorEstrellasUno > promedioMayorEstrellasTres)
                {
                    mensaje = mensaje + "<br> El vendedor que tiene el mayor promedio de estrellas es el AA200";
                }
                else
                {
                    if(promedioMayorEstrellasDos > promedioMayorEstrellasTres)
                    {
                        mensaje = mensaje + "<br> El vendedor que tiene el mayor promedio de estrellas es el A3240";
                    }
                    else
                    {
                        mensaje = mensaje + "<br> El vendedor que tiene el mayor promedio de estrellas es el A80";
                    }
                }
            }
        }
    }

    if(acumuladorVentaUno > 3000)
    {
        totalComisionUno = acumuladorVentaUno * 1.15;
    }
    else
    {
        totalComisionUno = acumuladorVentaUno * 1.05;
    }

    if(acumuladorVentaDos > 3000)
    {
        totalComisionDos = acumuladorVentaDos * 1.15;
    }
    else
    {
        totalComisionDos = acumuladorVentaDos * 1.05;
    }

    if(acumuladorVentaTres > 3000)
    {
        totalComisionTres = acumuladorVentaTres * 1.15;
    }
    else
    {
        totalComisionTres = acumuladorVentaTres * 1.05;
    }

    mensaje = mensaje + "<br> La venta más cara es de " + ventaMasCara;

    document.write(mensaje);

}
