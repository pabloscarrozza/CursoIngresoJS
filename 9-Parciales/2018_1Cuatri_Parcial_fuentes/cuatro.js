/*Ejercicio 3
El dueño de una tienda dedicada a la compra/venta de cartas Yu-Gi-Oh! desea 
ingresar en el sistema de ventas realizadas en el dia de la fecha y conocer 
ciertos datos en base a las cartas que se vendieron.

Se ingresa hasta que el usuario decida:
nombre de la carta:
tipo de carta: validar "monstruo" "magica" "trampa" 
rareza: validar "rara" "superRara" "ultraRara" 
precio: validar que no sea 0 o negativo 

se pide informar por document.write:
A) El nombre y rareza de la carta con mayor precio.
B) Cuantas carta de tipo "magica" y de rareza "rara o superRara" fueron
 vendidas.
C) el porcentaje de rara, superRara, ultraRara hay sobre el total
*/
function mostrar()
{
    var respuesta;
    var nombre;
    var tipo;
    var rareza;
    var precio;
    var banderaMayorPrecio;
    var precioMayor;
    var nombreMayorPrecio;
    var rarezaMayorPrecio;
    var contadorTipoMagica;
    var contadorRarezaRara;
    var contadorRarezaSuperRara;
    var contadorRarezaUltraRara;
    var porcentajeRara;
    var porecentajeSuperRara;
    var porcentajeUltraRara;
    var contadorTotal;

    respuesta = true;
    banderaMayorPrecio = true;
    contadorTipoMagica = 0;
    contadorRarezaRara = 0;
    contadorRarezaSuperRara = 0;
    contadorRarezaUltraRara = 0;
    contadorTotal = 0;

    while(respuesta == true)
    {
        nombre = prompt("Ingrese el nombre de la carta: ");
        while(isNaN(nombre) == false)
        {
            nombre = prompt("Ingrese el nombre de la carta: ");
        }

        tipo = prompt("Ingrese el tipo de la carta (monstruo, magica o trampa)");
        while(tipo != "monstruo" && tipo != "magica" && tipo != "trampa")
        {
            tipo = prompt("Ingrese el tipo de la carta (monstruo, magica o trampa)");
        }

        rareza = prompt("Ingrese la rareza de la carta (rara, superRara o ultraRara)");
        while(rareza != "rara" && rareza != "superRara" && rareza != "ultraRara")
        {
            rareza = prompt("Ingrese la rareza de la carta (rara, superRara o ultraRara)");
        }

        precio = prompt("Ingrese el precio de la carta");
        while(isNaN(precio) == true && precio < 1)
        {
            precio = prompt("Ingrese el precio de la carta");
        }
//A) El nombre y rareza de la carta con mayor precio.
        if(banderaMayorPrecio == true)
        {
            precioMayor = precio;
            nombreMayorPrecio = nombre;
            rarezaMayorPrecio = rareza;
            banderaMayorPrecio = false;
        }
        else
        {
            if(precio > precioMayor)
            {
                precioMayor = precio;
                nombreMayorPrecio = nombre;
                rarezaMayorPrecio = rareza;
            }
        }
//B) Cuantas carta de tipo "magica" y de rareza "rara o superRara" fueron vendidas.
        if(tipo == "magica")
        {
            contadorTipoMagica++;
        }
        
        switch(rareza)
        {
            case "rara":
                contadorRarezaRara++;
            break;
            case "superRara":
                contadorRarezaSuperRara++;
            break;
            case "ultraRara":
                contadorRarezaUltraRara++;
            break;
        }

//C) el porcentaje de rara, superRara, ultraRara hay sobre el total
        contadorTotal++;
        respuesta = confirm("Desea continuar?");
    }
    porcentajeRara = contadorRarezaRara * 100 / contadorTotal;
    porecentajeSuperRara = contadorRarezaSuperRara * 100 / contadorTotal;
    porcentajeUltraRara = contadorRarezaUltraRara * 100 / contadorTotal;

    if(contadorRarezaRara == 0)
    {
        mensaje = mensaje + "<br> El porcentaje de cartas raras es de: " + porcentajeRara + "%";
    }
    else
    {
        mensaje = mensaje + "<br> No se encuentran cartas raras";
    }

    if(contadorRarezaSuperRara == 0)
    {
        mensaje = mensaje + "<br> El porcentaje de cartas superRaras es de: " + porecentajeSuperRara + "%";
    }
    else
    {
        mensaje = mensaje + "<br> No se encuentran cartas superRaras";
    }
    
    if(contadorRarezaUltraRara == 0)
    {
        mensaje = mensaje + "<br> El porcentaje de cartas ultraRaras es de: " + porcentajeUltraRara + "%";
    }
    else
    {
        mensaje = mensaje + "<br> No se encuentran cartas ultraRaras";
    }

    mensaje = "El nombre de la carta con mayor precio es: " + nombreMayorPrecio;
    mensaje = mensaje + "<br> La rareza de la carta con mayor precio es: " + rarezaMayorPrecio;
    mensaje = mensaje + "<br> Cartas de tipo magica vendidas: " + contadorTipoMagica;
    mensaje = mensaje + "<br> Cartas de rareza rara vendidas: " + contadorRarezaRara;
    mensaje = mensaje + "<br> Cartas de rareza superRara vendidas: " + contadorRarezaSuperRara;

    document.write(mensaje);

}
//14:50