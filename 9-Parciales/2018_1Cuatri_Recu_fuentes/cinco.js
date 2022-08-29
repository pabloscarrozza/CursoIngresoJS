/*
Se requiere el ingreso de datos para un video juego de pokemon en línea hasta 
que el usuario quiera:
-Necesitaremos: nombre del jugador/a
-Género (validar M/F/X)
-Edad (validar entre 3 a 99 años)
-Pokemon inicial (validar Charmander, Squirtle o Bolbasaur)
Y deberemos mostrar el promedio de edad de los jugadores ingresados.
El nombre y el pokemon elegido del jugador más grande de edad y del jugador 
más joven.
*/
function mostrar()
{
    var respuesta;
    var nombre;
    var genero;
    var edad;
    var tipo;
    var promedioEdad;
    var acumuladorEdad;
    var contador;
    var nombreMasJoven;
    var nombreMasGrande;
    var edadMasJoven;
    var edadMasGrande;
    var tipoMasJoven;
    var tipoMasGrande;
    var flagMasJoven;
    var flagMasGrande;

    respuesta = true;
    acumuladorEdad = 0;
    contador = 0;
    flagMasJoven = true;
    flagMasGrande = true;

    while(respuesta == true)
    {
        nombre = prompt("Ingrese el nombre:");
        while(isNaN(nombre) == false)
        {
            nombre = prompt("ERROR! Ingrese el nombre:");
        }

        genero = prompt("Ingrese el genero (M/F/X)");
        while(genero != "M" && genero != "F" && genero != "X")
        {
            genero = prompt("ERROR! Ingrese el genero (M/F/X)");
        }

        edad = prompt("Ingrese la edad (entre 3 a 99 años)");
        while(isNaN(edad) == true && edad < 3 && edad > 99)
        {
            edad = prompt("ERROR! Ingrese la edad (entre 3 a 99 años)");
        }
        
        tipo = prompt("Ingrese el tipo (Charmander, Squirtle o Bolbasaur");
        while(tipo != "Charmander" && tipo != "Squirtle" && tipo != "Bolbasaur")
        {
            tipo = prompt("ERROR! Ingrese el tipo (Charmander, Squirtle o Bolbasaur");
        }

        if(flagMasGrande == true)
        {
            edadMasGrande = edad;
            tipoMasGrande = tipo;
            nombreMasGrande = nombre;
            flagMasGrande = false;
        }
        else
        {
            if(edad > edadMasGrande)
            {
                edadMasGrande = edad;
                tipoMasGrande = tipo;
                nombreMasGrande = nombre;
            }
        }

        if(flagMasJoven == true)
        {
            edadMasJoven = edad;
            tipoMasJoven = tipo;
            nombreMasJoven = nombre;
            flagMasJoven = false;
        }
        else
        {
            if(edad < edadMasJoven)
            {
                edadMasJoven = edad;
                tipoMasJoven = tipo;
                nombreMasJoven = nombre;
            }
        }


        acumuladorEdad = acumuladorEdad + edad;
        contador++;
        respuesta = confirm("Desea continuar?");
    }

    promedioEdad = acumuladorEdad / contador;

    mensaje = "El promedio de edad de los jugadores ingresados es de: " + promedioEdad + " años";
    mensaje = mensaje + "<br> El nombre de la personas más grande es " + nombreMasGrande + " y su pokemon elegido es " + tipoMasGrande;
    mensaje = mensaje + "<br> El nombre de la personas más joven es " + nombreMasJoven + " y su pokemon elegido es " + tipoMasJoven;

    document.write(mensaje);

}

//  10:39