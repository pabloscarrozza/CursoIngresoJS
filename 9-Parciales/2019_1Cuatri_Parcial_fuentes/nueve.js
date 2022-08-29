/*Realizar el algoritmo que permita ingresar el nombre de un país,
cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.*/
function mostrar()
{
    var nombrePais;
    var cantidadHabitantes;
    var temperarutaIngresada;
    var respuesta;
    var contadorTemperaturasPares;
    var banderaHabitantes;
    var habitantesMinimo;
    var paisMinimoHabitantes;
    var contadorPaises;
    var promedioHabitantes;
    var contadorHabitantes;
    var acumuladorHabitantes;
    var banderaTemperaturaMinima;
    var temperaturaMinima;
    var paisTemperaturaMinima;

    contadorPaises = 0;
    respuesta = true;
    contadorTemperaturasPares = 0;
    banderaHabitantes = true;
    banderaTemperaturaMinima = true;

    while(respuesta == true)
    {
        nombrePais = prompt("Ingrese el país: ");
        cantidadHabitantes = prompt("Ingrese una cantidad de habitantes en " + nombrePais + " entre 1 y 7000");
        cantidadHabitantes = parseInt(cantidadHabitantes);
        while(isNaN(cantidadHabitantes) == true || cantidadHabitantes < 1 || cantidadHabitantes > 7000)
        {
            cantidadHabitantes = prompt("ERROR!!! Ingrese una cantidad de habitantes en " + nombrePais + " entre 1 y 7000");
            cantidadHabitantes = parseInt(cantidadHabitantes);
        }
        temperarutaIngresada = prompt("Ingrese una temperatura entre -50 y 50");
        temperarutaIngresada = parseInt(temperarutaIngresada);
        while(isNaN(temperarutaIngresada) == true || temperarutaIngresada < -50 || temperarutaIngresada > 50)
        {
            temperarutaIngresada = prompt("ERROR!!! Ingrese una temperatura entre -50 y 50");
            temperarutaIngresada = parseInt(temperarutaIngresada);
        }
        if(temperarutaIngresada %2 == 0)
        {
            contadorTemperaturasPares = contadorTemperaturasPares + 1;
        }
        if(banderaHabitantes == true)
        {
            habitantesMinimo = cantidadHabitantes;
            paisMinimoHabitantes = nombrePais;
            banderaHabitantes = false;
        }
        else
        {
            if(cantidadHabitantes < habitantesMinimo)
            {
                habitantesMinimo = cantidadHabitantes;
                paisMinimoHabitantes = nombrePais;
            }
        }
        if(temperarutaIngresada > 40)
        {
            contadorPaises = contadorPaises + 1;
        }
        contadorHabitantes = contadorHabitantes + 1;
        acumuladorHabitantes = acumuladorHabitantes + cantidadHabitantes;
        if(banderaTemperaturaMinima == true)
        {
            temperaturaMinima = temperarutaIngresada;
            paisTemperaturaMinima = nombrePais;
            banderaTemperaturaMinima = false;
        }
        else
        {
            if(temperaturaMinima < temperaturaMinima)
            {
                temperaturaMinima = temperarutaIngresada;
                paisTemperaturaMinima = nombrePais;
            }
        }

        respuesta = confirm("Desea continuar?");
    }

    promedioHabitantes = acumuladorHabitantes / contadorHabitantes;

    document.write("La cantidad de temperaturas pares es: " + contadorTemperaturasPares)
}
