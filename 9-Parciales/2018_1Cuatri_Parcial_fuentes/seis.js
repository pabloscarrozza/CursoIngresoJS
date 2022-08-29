/*
De la plataforma twitch se debe ingresar una cantidad indeterminada de 
interacciones diarias de usuarios, validando los siguientes datos:
nombre de usuario
edad(no puede ser menor a 11 años)
cantidad de viewers
tipo(follow o suscriptor)
informar:
a) El nombre del usuario de suscriptor mas viejo.
b) la cantidad total de viewers del dia
c) promedio total de viewers de los usuarios del tipo "follow"
*/
function mostrar()
{
    var mensaje;
    var respuesta;
    var nombre;
    var edad;
    var viewers;
    var tipo;
    var banderaSuscriptorMasViejo;
    var nombreSuscriptorMasViejo;
    var edadSuscriptorMasViejo;
    var cantTotalViewers;
    var cantViewersFollow;
    var contadorIngresos;
    var promedioViewersFollow;

    respuesta = true;
    banderaSuscriptorMasViejo = true;
    cantTotalViewers = 0;
    cantViewersFollow = 0;
    contadorIngresos = 0;

    while(respuesta == true)
    {
        nombre = prompt("Ingrese el nombre: ");
        while(isNaN(nombre) == false)
        {
            nombre = prompt("ERROR! Ingrese el nombre: ");
        }

        edad = prompt("Ingrese la edad");
        edad = parseInt(edad);
        while(isNaN(edad) == true && edad < 11 && edad > 120)
        {
            edad = prompt("ERROR! Ingrese la edad");
            edad = parseInt(edad);
        }

        viewers = prompt("Ingrese la cantidad de viewers");
        viewers = parseInt(viewers);
        while(isNaN(viewers) == true && viewers < 0)
        {
            viewers = prompt("ERROR! Ingrese la cantidad de viewers");
            viewers = parseInt(viewers);
        }

        tipo = prompt("Ingrese el tipo (follow ó suscriptor)");
        while(tipo != "follow" && tipo != "suscriptor")
        {
            tipo = prompt("ERROR! Ingrese el tipo (follow ó suscriptor)");
        }
        //a) El nombre del usuario de suscriptor mas viejo.
        if(tipo == "suscriptor")
        {
            if(banderaSuscriptorMasViejo == true)
            {
                edadSuscriptorMasViejo = edad;
                nombreSuscriptorMasViejo = nombre;
                banderaSuscriptorMasViejo = false;
            }
            else
            {
                if(edad > edadSuscriptorMasViejo)
                {
                    edadSuscriptorMasViejo = edad;
                    nombreSuscriptorMasViejo = nombre;
                }
            }
        }
        else
        {
            //c) promedio total de viewers de los usuarios del tipo "follow"
            cantViewersFollow = cantViewersFollow + viewers;
            contadorIngresos++;
        }
        //b) la cantidad total de viewers del dia
        cantTotalViewers = cantTotalViewers + viewers;

        respuesta = confirm("Desea continuar?");
    }

    promedioViewersFollow = cantTotalViewers / contadorIngresos;

    if(banderaSuscriptorMasViejo == true)
    {
        mensaje = "No se encuentran suscriptores ingresados.";
    }
    else
    {
        mensaje = "El nombre del usuario de suscriptor más viejo es: " + nombreSuscriptorMasViejo + " con " + edadSuscriptorMasViejo + " años de edad."; 
    }

    mensaje = mensaje + "<br> La cantidad total de viewers del día es: " + cantTotalViewers;
    mensaje = mensaje + "<br> El promedio total de viewers de los usuarios del tipo follow es: " + promedioViewersFollow;

    document.write(mensaje);

}
//16:00