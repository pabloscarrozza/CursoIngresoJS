/*
Una casa de deportes nos contratará para que desarrollemos un programa que permita 
administrar la carga de 5 INGRESOS de los datos de las distintas indumentarias que tiene en su stock.
Tenemos que registrar los siguientes datos:
- tipo (pantalon, camiseta, pelotas)
- Cantidad de stock
- marca (Lotto, Fila, Lacoste)
- precio (entre 900 y 25000)
Informar:
a) El porcentaje de stock de todos los productos que ingresaron
b) la marca de la pelota mas cara
c) el tipo del producto que tuvo mas ingresos en el total de cargas.
*/
function mostrar()
{
    var mensaje;
    var contador;
    var tipo;
    var cantidad;
    var marca;
    var precio;
    var porcentajePantalon;
    var porcentajeCamiesta;
    var porcentajePelotas;
    var acumuladorPantalon;
    var acumuladorCamiseta;
    var acumuladorPelotas;
    var sumaTotalCantidad;
    var banderaPelotaMasCara;
    var precioPelotaMasCara;
    var marcaPelotaMasCara;

    banderaPelotaMasCara = true;
    contador = 0;
    acumuladorPantalon = 0;
    acumuladorCamiseta = 0;
    acumuladorPelotas = 0;
    sumaTotalCantidad = 0;

    while(contador < 5)
    {
        tipo = prompt("Ingrese el tipo (pantalón, camiseta ó pelotas)");
        while(tipo != "pantalón" && tipo != "camiseta" && tipo != "pelotas")
        {
            tipo = prompt("ERROR! Ingrese el tipo (pantalón, camiseta ó pelotas)");
        }

        cantidad = prompt("Ingrese la cantidad");
        cantidad = parseInt(cantidad);
        while(isNaN(cantidad) == true && cantidad < 1)
        {
            cantidad = prompt("ERROR! Ingrese la cantidad");
            cantidad = parseInt(cantidad);
        }

        marca = prompt("Ingrese la marca (Lotto, Fila ó Lacoste)");
        while(marca != "Lotto" && marca != "Fila" && marca != "Lacoste")
        {
            marca = prompt("ERROR! Ingrese la marca (Lotto, Fila ó Lacoste)");
        }

        precio = prompt("Ingrese el precio");
        precio = parseInt(precio);
        while(isNaN(precio) == true && precio < 900 && precio > 25000)
        {
            precio = prompt("ERROR! Ingrese el precio");
            precio = parseInt(precio);
        }

        //a) El porcentaje de stock de todos los productos que ingresaron
        switch(tipo)
        {
            case "pantalón":
                acumuladorPantalon = acumuladorPantalon + cantidad;
            break;
            case "camiseta":
                acumuladorCamiseta = acumuladorCamiseta + cantidad;
            break;
            case "pelotas":
                acumuladorPelotas = acumuladorPelotas + cantidad;
            break;
        }

        //b) la marca de la pelota mas cara
        if(banderaPelotaMasCara == true)
        {
            precioPelotaMasCara = precio;
            marcaPelotaMasCara = marca;
            banderaPelotaMasCara = false;
        }
        else
        {
            if(precio > precioPelotaMasCara)
            {
                precioPelotaMasCara = precio;
                marcaPelotaMasCara = marca;
            }
        }

        sumaTotalCantidad = sumaTotalCantidad + cantidad;
        contador++;
    }

    if(acumuladorPantalon == 0)
    {
        mensaje = "No se encontraron Pantalones ingresados.";
    }
    else
    {
        porcentajePantalon = acumuladorPantalon * 100 / sumaTotalCantidad;
        mensaje = "El porcentaje de pantalones ingresados es de: " + porcentajePantalon + "%";
    }

    if(acumuladorCamiseta == 0)
    {
        mensaje = mensaje + "<br> No se encontraron Camisetas ingresados.";
    }
    else
    {
        porcentajeCamiesta = acumuladorCamiseta * 100 / sumaTotalCantidad;
        mensaje = mensaje + "<br> El porcentaje de camisetas ingresados es de: " + porcentajeCamiesta + "%";
    }

    if(acumuladorPelotas == 0)
    {
        mensaje = mensaje + "<br> No se encontraron Pelotas ingresados.";
    }
    else
    {
        porcentajePelotas = acumuladorPelotas * 100 / sumaTotalCantidad;
        mensaje = mensaje + "<br> El porcentaje de pelotas ingresados es de: " + porcentajePelotas + "%";
    }

    mensaje = mensaje + "<br> La marca de la pelota más cara es: " + marcaPelotaMasCara;

    //c) el tipo del producto que tuvo mas ingresos en el total de cargas.
    if(acumuladorPantalon > acumuladorCamiseta && acumuladorPantalon > acumuladorPelotas)
    {
        mensaje = mensaje + "<br> El producto que tuvo más ingresos es Pantalón, con " + acumuladorPantalon + " ingresos";
    }
    else
    {
        if(acumuladorCamiseta > acumuladorPelotas)
        {
            mensaje = mensaje + "<br> El producto que tuvo más ingresos es Camiseta, con " + acumuladorCamiseta + " ingresos";
        }
        else
        {
            mensaje = mensaje + "<br> El producto que tuvo más ingresos es Pelotas, con " + acumuladorPelotas + " ingresos";
        }
    }

    document.write(mensaje);

}
