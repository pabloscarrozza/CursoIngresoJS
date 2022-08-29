/*  Pablo Scarrozza Div K
En una veterinaria se están realizando censos para evaluar los animales ingresados por día. 
Por este motivo, se le realizará una consulta al menos 4 clientes.
Se requieren los siguientes datos:
Tamaño de la mascota (Chica, Mediana o Grande).
Sexo de la mascota (Hembra o Macho).
Tipo de mascota (Gato, Perro, Otro).
Edad de la mascota. Validar.
Está vacunado? SI/NO (Se puede utilizar boolean si se desea).
INFORMAR

A) Cuál es el tipo, el sexo y la edad de la mascota más vieja entre los tamaños medianos o grandes.
B) Cuál es el promedio de edad de las GATAS.
C) Cuál es el tipo de mascota menos vacunado.
*/
function mostrar()
{
    var contador;
    var respuesta;
    var tamanio;
    var sexo;
    var tipo;
    var edad;
    var vacunado;
    var tipoViejo;
    var sexoViejo;
    var edadViejo;
    var flagViejo;
    var contadorEdadGatas;
    var acumuladorEdadGatas;
    var promedioEdadGatas;
    var contadorGatoVacunado;
    var contadorPerroVacunado;
    var contadorOtroVacunado;

    contador = 0;
    respuesta = true;
    flagViejo = true;
    contadorEdadGatas = 0;
    acumuladorEdadGatas = 0;
    contadorGatoVacunado = 0;
    contadorPerroVacunado = 0;
    contadorOtroVacunado = 0;

    while(contador < 4 || respuesta == true)
    {
        tamanio = prompt("Ingrese el tamaño de la mascota (Chica, Mediana ó Grande): ");
        while(tamanio != "Chica" && tamanio != "Mediana" && tamanio != "Grande")
        {
            tamanio = prompt("ERROR! Ingrese el tamaño de la mascota (Chica, Mediana ó Grande): ");
        }

        sexo = prompt("Ingrese el sexo de la mascota (Hembra o Macho): ");
        while(sexo != "Hembra" && sexo != "Macho")
        {
            sexo = prompt("ERROR! Ingrese el sexo de la mascota (Hembra o Macho): ");
        }
        
        tipo = prompt("Ingrese el tipo de la mascota (Gato, Perro u Otro): ");
        while(tipo != "Gato" && tipo != "Perro" && tipo != "Otro")
        {
            tipo = prompt("ERROR! Ingrese el tipo de la mascota (Gato, Perro u Otro): ");
        }
        
        edad = prompt("Ingrese la edad de la mascota: ");
        edad = parseInt(edad);
        while(isNaN(edad) == true && edad < 1)
        {
            edad = prompt("ERROR! Ingrese la edad de la mascota: ");
            edad = parseInt(edad);
        }

        vacunado = prompt("Ingrese si esta vacunado (si ó no): ");
        while(vacunado != "si" && vacunado != "no")
        {
            vacunado = prompt("ERROR! Ingrese si esta vacunado (si ó no): ");
        }
        
        if(tamanio == "Mediana" || tamanio == "Grande")
        {
            if(flagViejo == true)
            {
                edadViejo = edad;
                tipoViejo = tipo;
                sexoViejo = sexo;
                flagViejo = false;
            }
            else
            {
                if(edad > edadViejo)
                {
                    edadViejo = edad;
                    tipoViejo = tipo;
                    sexoViejo = sexo;
                }
            }
        }

        if(tipo == "Gato" && sexo == "Hembra")
        {
            contadorEdadGatas++;
            acumuladorEdadGatas = acumuladorEdadGatas + edad;
        }

        if(vacunado == "si")
        {
            switch(tipo)
            {
                case "Gato":
                    contadorGatoVacunado++;
                break;
                case "Perro":
                    contadorPerroVacunado++;
                break;
                case "Otro":
                    contadorOtroVacunado++;
                break;
            }
        }

        contador++;
        respuesta = confirm("Desea continuar?");
    }
    
    mensaje = "Entre los mediano o grandes, el más viejo es " + tipoViejo + ", es " + sexoViejo + " con " + edadViejo + " años de edad";
    
    if(contadorEdadGatas == 0)
    {
        mensaje = mensaje + "<br> No se encontraron Gatas Hembras para calcular el promedio";    
    }
    else
    {
        promedioEdadGatas = acumuladorEdadGatas / contadorEdadGatas;
        mensaje = mensaje + "<br> El promedio de la edad de las Gatas Hembras es de " + promedioEdadGatas;
    }

    if(contadorGatoVacunado < contadorPerroVacunado && contadorGatoVacunado < contadorOtroVacunado)
    {
        mensaje = mensaje + "<br> El tipo de mascota menos vacunado es Gato";
    }
    else
    {
        if(contadorPerroVacunado < contadorOtroVacunado)
        {
            mensaje = mensaje + "<br> El tipo de mascota menos vacunado es Perro";
        }
        else
        {
            mensaje = mensaje + "<br> El tipo de mascota menos vacunado es Otro";
        }
    }

    document.write(mensaje);

}