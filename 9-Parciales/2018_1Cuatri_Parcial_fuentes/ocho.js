/*
Nos ingresan una cantidad indeterminada de viajes, validando los datos ingresados:
- nombre del chofer
- empresa (Plusmar, Flecha Bus, Chevalier)
- destino (Jujuy, Córdoba, Chubut)
- cantidad de horas de viaje
Informar:
a) la empresa más elegida
b) el nombre del chofer que menos horas viajó
c) total de horas de viajes
*/
function mostrar()
{
    var mensaje;
    var respuesta;
    var nombre;
    var empresa;
    var destino;
    var cantidadHorasViajes;
    var contadorPlusmar;
    var contadorFlechaBus;
    var contadorChevalier;
    var banderaMenosHoras;
    var cantidadMenosHoras;
    var nombreMenosHoras;
    var acumuladorHorasViajes;

    respuesta = true;
    contadorPlusmar = 0;
    contadorFlechaBus = 0;
    contadorPlusmar = 0;
    banderaMenosHoras = true;
    acumuladorHorasViajes = 0;

    while(respuesta == true)
    {
        nombre = prompt("Ingrese el nombre del chofer: ");
        while(isNaN(nombre) == false)
        {
            nombre = prompt("ERROR! Ingrese el nombre del chofer: ");
        }

        empresa = prompt("Ingrese la empresa (Plusmar, Flecha Bus ó Chevalier)");
        while(empresa != "Plusmar" && empresa != "Flecha Bus" && empresa != "Chevalier")
        {
            empresa = prompt("ERROR! Ingrese la empresa (Plusmar, Flecha Bus ó Chevalier)");
        }

        destino = prompt("Ingrese el destino (Jujuy, Córdoba ó Chubut)");
        while(destino != "Jujuy" && destino != "Córdoba" && destino != "Chubut")
        {
            destino = prompt("ERROR! Ingrese el destino (Jujuy, Córdoba ó Chubut)");
        }

        cantidadHorasViajes = prompt("Ingrese la cantidad de horas de viajes");
        cantidadHorasViajes = parseInt(cantidadHorasViajes);
        while(isNaN(cantidadHorasViajes) == true && cantidadHorasViajes < 1)
        {
            cantidadHorasViajes = prompt("ERROR! Ingrese la cantidad de horas de viajes");
            cantidadHorasViajes = parseInt(cantidadHorasViajes);
        }

        //a) la empresa más elegida
        switch(empresa)
        {
            case "Plusmar":
                contadorPlusmar++;
            break;
            case "Flecha Bus":
                contadorFlechaBus++;
            break;
            case "Chevalier":
                contadorChevalier++;
            break;
        }

        //b) el nombre del chofer que menos horas viajó
        if(banderaMenosHoras == true)
        {
            cantidadMenosHoras = cantidadHorasViajes;
            nombreMenosHoras = nombre;
            banderaMenosHoras = false;
        }
        else
        {
            if(cantidadHorasViajes < cantidadMenosHoras)
            {
                cantidadMenosHoras = cantidadHorasViajes;
                nombreMenosHoras = nombre;
            }
        }

        acumuladorHorasViajes = acumuladorHorasViajes + cantidadHorasViajes;
        respuesta = confirm("Desea continuar?");
    }

    if(contadorPlusmar == contadorFlechaBus && contadorPlusmar == contadorChevalier)
    {
        mensaje = "Las empresas más elegidas son Plusmar, Flecha Bus y Chevalier";
    }
    else
    {
        if(contadorPlusmar == contadorFlechaBus)
        {
            mensaje = "Las empresas más elegidas son Plusmar y Flecha Bus";
        }
        else
        {
            if(contadorPlusmar == contadorChevalier)
            {
                mensaje = "Las empresas más elegidas son Plusmar y Chevalier";
            }
            else
            {
                if(contadorFlechaBus == contadorChevalier)
                {
                    mensaje = "Las empresas más elegidas son Flecha Bus y Chevalier";
                }
            }
        }
    }

    if(contadorPlusmar > contadorFlechaBus && contadorPlusmar > contadorChevalier)
    {
        mensaje = "La empresa más elegida es Plusmar";
    }
    else
    {
        if(contadorFlechaBus > contadorChevalier)
        {
            mensaje = "La empresa más elegida es Flecha Bus";
        }
        else
        {
            mensaje = "La empresa más elegida es Chevalier";
        }
    }

    mensaje = mensaje + "<br> El nombre del chofer que menos horas viajó es: " + nombreMenosHoras;
    mensaje = mensaje + "<br> El total de horas de viajes es: " + acumuladorHorasViajes;

    document.write(mensaje);

}
