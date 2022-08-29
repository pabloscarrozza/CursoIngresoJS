/*  Pablo Scarrozza
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento 
es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra 
marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un 
descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con 
el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
//  Ejercicio con Switch e If (marca)
function CalcularPrecio ()
{
    var lamparaUnidad;
    var cantidadLampara;
    var marca;
    var precioLamparas;
    var precioFinal;
    var descuento;
    var ingresosBrutos;
 
    cantidadLampara = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
 
    cantidadLampara = parseInt(cantidadLampara);
 
    lamparaUnidad = 35;
 
    precioLamparas = cantidadLampara * lamparaUnidad;
 
    switch(marca)
    {
        case "ArgentinaLuz":
            if(cantidadLampara == 3)
            {
                descuento = 15;
            }
            else
            {
                if(cantidadLampara == 4)
                {
                    descuento = 25;
                }
                else
                {
                    if(cantidadLampara == 5)
                    {
                        descuento = 40;
                    }
                    else
                    {
                        if(cantidadLampara > 5)
                        {
                            descuento = 50;
                        }
                        else
                        {
                            descuento = 0;
                        }
                    }
                }
            }
        break;
        case "FelipeLamparas":
            if(cantidadLampara == 3)
            {
                descuento = 10;
            }
            else
            {
                if(cantidadLampara == 4)
                {
                    descuento = 25;
                }
                else
                {
                    if(cantidadLampara == 5)
                    {
                        descuento = 30;
                    }
                    else
                    {
                        if(cantidadLampara > 5)
                        {
                            descuento = 50;
                        }
                        else
                        {
                            descuento = 0;
                        }
                    }
                }
            }
        break;
        case "JeLuz":
        case "HazIluminacion":
        case "Osram":
            if(cantidadLampara == 3)
            {
                descuento = 5;
            }
            else
            {
                if(cantidadLampara == 4)
                {
                    descuento = 20;
                }
                else
                {
                    if(cantidadLampara == 5)
                    {
                        descuento = 30;
                    }
                    else
                    {
                        if(cantidadLampara > 5)
                        {
                            descuento = 50;
                        }
                        else
                        {
                            descuento = 0;
                        }
                    }
                }
            }
        break;
    }
 
    precioFinal = precioLamparas + (precioLamparas * -(descuento / 100));
    
    if (precioFinal > 120) // E
    {
        ingresosBrutos = precioFinal * 0.1;
        mensaje = "IIBB Usted pagó: " + ingresosBrutos;
        alert(mensaje);
    }
 
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
 
}

 /*  Ejercicio con Switch e IF (cantidadLampara)
function CalcularPrecio () 
{
    var lamparaUnidad;
    var cantidadLampara;
    var marca;
    var precioLamparas;
    var precioFinal;
    var descuento;
    var ingresosBrutos;

    cantidadLampara = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidadLampara = parseInt(cantidadLampara);

    lamparaUnidad = 35;

    precioLamparas = cantidadLampara * lamparaUnidad;

    switch(cantidadLampara)
    {
        case 1:
        case 2:
            descuento = 0;
        break;
        case 3:
            if(marca == "ArgentinaLuz")
            {
                descuento = 15;
            }
            else
            {
                if (marca == "FelipeLamparas")
                {
                    descuento = 10;
                }
                else
                {
                    descuento = 5;
                }
            }
        break;
        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                    descuento = 25;
            }
            else
            {
                    descuento = 20;
            }
        break;
        case 5:
            if(marca == "ArgentinaLuz")
            { 
                descuento = 40;
            }
            else
            {
                descuento = 30;
            }
        break;
        default:
            descuento = 50;
        break;
    }

    precioFinal = precioLamparas + (precioLamparas * -(descuento / 100));
    
    if (precioFinal > 120) // E
    {
        ingresosBrutos = precioFinal * 0.1;
        mensaje = "IIBB Usted pagó: " + ingresosBrutos;
        alert(mensaje);
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal;

}*/

/*  Ejercicio con Switch (marca)
function CalcularPrecio () 
{
    var lamparaUnidad;
    var cantidadLampara;
    var marca;
    var precioLamparas;
    var precioFinal;
    var descuento;
    var ingresosBrutos;

    cantidadLampara = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidadLampara = parseInt(cantidadLampara);

    lamparaUnidad = 35;

    precioLamparas = cantidadLampara * lamparaUnidad;

    switch(marca)
    {
        case "ArgentinaLuz":
            switch(cantidadLampara)
            {
                case 1:
                case 2:
                    descuento = 0;
                break;
                case 3:
                    descuento = 15;
                break;
                case 4:
                    descuento = 25;
                break;
                case 5:
                    descuento = 40;
                break;
                default:
                    descuento = 50;
                break;
            }
        break;
        case "FelipeLamparas":
            switch(cantidadLampara)
            {
                case 1:
                case 2:
                    descuento = 0;
                break;
                case 3:
                    descuento = 10;
                break;
                case 4:
                    descuento = 25;
                break;
                case 5:
                    descuento = 30;
                break;
                default:
                    descuento = 50;
                break;
            }
        break;
        case "JeLuz":
        case "HazIluminacion":
        case "Osram":
            switch(cantidadLampara)
            {
                case 1:
                case 2:
                    descuento = 0;
                break;
                case 3:
                    descuento = 5;
                break;
                case 4:
                    descuento = 20;
                break;
                case 5:
                    descuento = 30;
                break;
                default:
                    descuento = 50;
                break;
            }
        break;
    }

    precioFinal = precioLamparas + (precioLamparas * -(descuento / 100));
    
    if (precioFinal > 120) // E
    {
        ingresosBrutos = precioFinal * 0.1;
        mensaje = "IIBB Usted pagó: " + ingresosBrutos;
        alert(mensaje);
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal;

}

/*  Ejercicio con Switch (cantidadLampara)
function CalcularPrecio () 
{
    var lamparaUnidad;
    var cantidadLampara;
    var marca;
    var precioLamparas;
    var precioFinal;
    var descuento;
    var ingresosBrutos;

    cantidadLampara = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidadLampara = parseInt(cantidadLampara);

    lamparaUnidad = 35;

    precioLamparas = cantidadLampara * lamparaUnidad;

    switch(cantidadLampara)
    {
        case 1:
        case 2:
            descuento = 0;
        break;
        case 3:
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento = 15;
                break;
                case "FelipeLamparas":
                    descuento = 10;
                break;
                case "JeLuz":
                case "HazIluminacion":
                case "Osram":
                    descuento = 5;
                break;
            }
        break;
        case 4:
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                break;
                case "JeLuz":
                case "HazIluminacion":
                case "Osram":
                    descuento = 20;
                break;
            }
        break;
        case 5:
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento = 40;
                break;
                case "FelipeLamparas":
                case "JeLuz":
                case "HazIluminacion":
                case "Osram":
                    descuento = 30;
                break;
            }
        break;
        default:
            descuento = 50;
        break;
    }

    precioFinal = precioLamparas + (precioLamparas * -(descuento / 100));
    
    if (precioFinal > 120) // E
    {
        ingresosBrutos = precioFinal * 0.1;
        mensaje = "IIBB Usted pagó: " + ingresosBrutos;
        alert(mensaje);
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal;

}
*/

/*  Ejercicio con IF:
function CalcularPrecio () 
{
    var lamparaUnidad;
    var cantidadLampara;
    var marca;
    var precioLamparaFinal;
    var descuento;
    var descuentoPorLampara;
    var descuentoFinal;
    var ingresosBrutos;

    cantidadLampara = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidadLampara = parseInt(cantidadLampara);

    lamparaUnidad = 35;
    porcentaje = 0;

    precioLamparaFinal = cantidadLampara * lamparaUnidad;

    if (cantidadLampara > 5) // A
    {
        porcentaje = 50;
    }
    else
    {
        if (cantidadLampara == 5) // B
        {
            if (marca == "ArgentinaLuz")
            {
                porcentaje = 40;
            }
            else
            {
                porcentaje = 30;
            }
        }
        if (cantidadLampara == 4) // C
        {
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                porcentaje = 25;
            }
            else
            {
                porcentaje = 20;
            }
        }
        if (cantidadLampara == 3) // D
        {
            if (marca == "ArgentinaLuz")
            {
                porcentaje = 15;
            }
            else
            {
                if (marca == "FelipeLamparas")
                {
                    porcentaje = 10;
                }
                else
                {
                    porcentaje = 5;
                }
            }
        }
    }

    descuento = porcentaje / 100;
    descuentoPorLampara = precioLamparaFinal * descuento;
    descuentoFinal = precioLamparaFinal - descuentoPorLampara;
    
    if (descuentoFinal > 120) // E
    {
        ingresosBrutos = descuentoFinal * 0.1;
        descuentoFinal = descuentoFinal + ingresosBrutos;
        alert("IIBB Usted pagó: " + ingresosBrutos);
    }

    document.getElementById("txtIdprecioDescuento").value = descuentoFinal;
}
*/

/*      ejemplo con porcentaje 40 y cantidadLamparas 5
    precioLamparaFinal = cantidadLampara * lamparaUnidad;  // precioLamparaFinal = 5 * 35 = 175
    descuento = porcentaje / 100; // descuento = 40 /100 = 0.4
    descuentoPorLampara = precioLamparaFinal * descuento; // descuentoPorLampara = 175 * 0.4 = 70
    descuentoFinal = precioLamparaFinal - descuentoPorLampara; // descuentoFinal = 175 - 70 = 105

        ejemplo con porcentaje 30 y cantidadLamparas 5
    precioLamparaFinal = cantidadLampara * lamparaUnidad;  // precioLamparaFinal = 5 * 35 = 175
    descuento = porcentaje / 100; // descuento = 30 /100 = 0.3
    descuentoPorLampara = precioLamparaFinal * descuento; // descuentoPorLampara = 175 * 0.3 = 52.5
    descuentoFinal = precioLamparaFinal - descuentoPorLampara; // descuentoFinal = 175 - 52.5 = 122.5

        ejemplo con porcentaje 25 y cantidadLamparas 4
    precioLamparaFinal = cantidadLampara * lamparaUnidad;  // precioLamparaFinal = 4 * 35 = 140
    descuento = porcentaje / 100; // descuento = 25 /100 = 0.25
    descuentoPorLampara = precioLamparaFinal * descuento; // descuentoPorLampara = 140 * 0.25 = 35
    descuentoFinal = precioLamparaFinal - descuentoPorLampara; // descuentoFinal = 140 - 35 = 105
*/
