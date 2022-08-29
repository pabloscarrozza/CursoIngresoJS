/*Realizar el algoritmo que permita 
	el ingreso por prompt de las notas 
	(validar entre 0 y 10) , 
	el sexo (validar el sexo “f” o “m”) de 5 alumnos,
	el nombre e informar por alert:
	a) El promedio de las notas totales.
	b) La nota más baja , el nombre y  el sexo de esa persona.
	c) La cantidad de varones que su nota haya sido mayor o igual a 6.
	d) la nota de la primer mujer ingresada y su nombre.
	e) cantidad de aprobados de cada sexo (mayor de 5)
	f) el sexo que mas desaprobo
	g) el promedio de notas de los aprobados
	h) el promedio de notas de las mujeres 
	
	se pide la altura , 
	la edad y 
	la estacion del año en la que nacio(invierno,verano , otoño, primavera)
	
	i) la nota y nombre de la persona mas alta
	j) de los nacidos en otoño el primer varon
	k) de los adolescentes (entre 10 y 19 años) el nombre del mas bajo en altura
	L) la estacion del año que mas alumnos nacieron
	M) el sexo , nombre, edad y altura del primer aprobado

    ejercicio resuelto
    https://www.onlinegdb.com/EX8nD87_K
*/

function mostrar()
{
    var nota;
    var sexo;
    var nombre;
    var mensaje;
    var respuesta;
    var sumaNotas;
    var contadorNotas;
    var promedioNotasTotales;
    var flagNotaMasBaja;
    var notaMasBaja;
    var nombreNotaMasBaja;
    var sexoNotaMasBaja;
    var cantVaronesNotaMayor;
    var flagPrimeraMujer;
    var notaPrimeraMujer;
    var nombrePrimeraMujer;
    var contadorAprobadosVarones;
    var contadorAprobadosMujeres;
    var contadorVaronesDesaprobados;
    var contadorMujeresDesaprobadas;
    var contadorNotasAprobadas;
    var sumaNotasAprobadas;
    var promedioNotasAprobados;
    var sumaNotasMujeres;
    var contadorNotasMujeres;
    var promedioNotasMujeres;
    var altura;
    var edad;
    var estacionNacimiento;
    var flagPersonaMasAlta;
    var alturaPersonaMasAlta;
    var notaPersonaMasAlta;
    var nombrePersonaMasAlta;
    var flagPrimerVaronOtonio;
    var primerVaronOtonio;
    var adolescenteAlturaMasBaja;
    var nombreAdolescenteAlturaMasBaja;
    var flagAdolescenteAlturaMasBaja;
    var contadorInvierno;
    var contadorVerano;
    var contadorOtonio;
    var contadorPrimavera;
    var estacionMasNacida;
    var estacionMasNacidaContador;
    var flagPrimerAprobado;
    var nombrePrimerAprobado;
    var edadPrimerAprobado;
    var sexoPrimerAprobado;
    var alturaPrimerAprobado;
    var notaPrimerAprobado;


    respuesta = true;
    sumaNotas = 0;
    contadorNotas = 0;
    flagNotaMasBaja = true;
    cantVaronesNotaMayor = 0;
    flagPrimeraMujer = true;
    contadorAprobadosVarones = 0;
    contadorAprobadosMujeres = 0;
    contadorVaronesDesaprobados = 0;
    contadorMujeresDesaprobadas = 0;
    sumaNotasAprobadas = 0;
    contadorNotasAprobadas = 0;
    sumaNotasMujeres = 0;
    contadorNotasMujeres = 0;
    flagPersonaMasAlta = true;
    flagPrimerVaronOtonio = true;
    flagAdolescenteAlturaMasBaja = true;
    contadorInvierno = 0;
    contadorVerano = 0;
    contadorOtonio = 0;
    contadorPrimavera = 0;
    flagPrimerAprobado = true;

    while(respuesta == true)
    {
        nota = prompt("Ingrese la nota (0 a 10): ");
        nota = parseInt(nota);
        while(isNaN(nota) == true || nota < 0 || nota > 10)
        {
            nota = prompt("ERROR! Ingrese la nota (0 a 10): ");
            nota = parseInt(nota);
        }

        nombre = prompt("Ingrese el nombre: ");
        while(isNaN(nombre) == false)
        {
            nombre = prompt("ERROR! Ingrese el nombre:");
        }
        
        sexo = prompt("Ingrese el sexo (f ó m): ");
        while(isNaN(sexo) == false && sexo != "f" && sexo != "m")
        {
            sexo = prompt("ERROR! Ingrese el sexo (f ó m):");
        }

        altura = prompt("Ingrese la altura: ");
        altura = parseInt(altura);
        while(isNaN(altura) == true || altura < 1 || altura > 250)
        {
            altura = prompt("ERROR! Ingrese la altura: ");
            altura = parseInt(altura);
        }

        edad = prompt("Ingrese la edad: ");
        edad = parseInt(edad);
        while(isNaN(edad) == true || edad < 1 || edad > 130)
        {
            edad = prompt("ERRO! Ingrese la edad: ");
            edad = parseInt(edad);
        }

        estacionNacimiento = prompt("Ingrese la estación del año en la que nació (invierno, verano, otoño, primavera): ");
        while(isNaN(estacionNacimiento) == false && estacionNacimiento != "invierno" && estacionNacimiento != "verano" && estacionNacimiento != "otoño" && estacionNacimiento != "primavera")
        {
            estacionNacimiento = prompt("ERROR! Ingrese la estación del año en la que nació (invierno, verano, otoño, primavera): ");
        }

//a) El promedio de las notas totales.
        sumaNotas = sumaNotas + nota;
        contadorNotas = contadorNotas + 1;
//b) La nota más baja , el nombre y  el sexo de esa persona.
        if(flagNotaMasBaja == true)
        {
            notaMasBaja = nota;
            nombreNotaMasBaja = nombre;
            sexoNotaMasBaja = sexo;
            flagNotaMasBaja = false;
        }
        else
        {
            if(nota < notaMasBaja)
            {
                notaMasBaja = nota;
                nombreNotaMasBaja = nombre;
                sexoNotaMasBaja = sexo;
            }
        }
//c) La cantidad de varones que su nota haya sido mayor o igual a 6.
        if(sexo == "m" && nota > 5)
        {
            cantVaronesNotaMayor = cantVaronesNotaMayor + 1;
        }
//d) la nota de la primer mujer ingresada y su nombre.
        if(sexo == "f")
        {
            if(flagPrimeraMujer == true)
            {
                notaPrimeraMujer = nota;
                nombrePrimeraMujer = nombre;
                flagPrimeraMujer = false;
            }
//h) el promedio de notas de las mujeres 
            contadorNotasMujeres = contadorNotasMujeres + 1;
            sumaNotasMujeres = sumaNotasMujeres + nota;
        }
//e) cantidad de aprobados de cada sexo (mayor de 5)
        if(nota > 5)
        {
            if(sexo == "m")
            {
                contadorAprobadosVarones = contadorAprobadosVarones + 1;
            }
            else
            {
                contadorAprobadosMujeres = contadorAprobadosMujeres + 1;
            }
//g) el promedio de notas de los aprobados
            contadorNotasAprobadas = contadorNotasAprobadas + 1;
            sumaNotasAprobadas = sumaNotasAprobadas + nota;
//M) el sexo , nombre, edad y altura del primer aprobado
            if(flagPrimerAprobado == true)
            {
                nombrePrimerAprobado = nombre;
                edadPrimerAprobado = edad;
                sexoPrimerAprobado = sexo;
                alturaPrimerAprobado = altura;
                notaPrimerAprobado = nota;
                flagPrimerAprobado = false;
            }
        }
//f) el sexo que mas desaprobo
        if(nota < 6)
        {
            if(sexo == "m")
            {
                contadorVaronesDesaprobados = contadorVaronesDesaprobados + 1;
            }
            else
            {
                contadorMujeresDesaprobadas = contadorMujeresDesaprobadas + 1;
            }
        }
//i) la nota y nombre de la persona mas alta
        if(flagPersonaMasAlta == true)
        {
            alturaPersonaMasAlta = altura;
            notaPersonaMasAlta = nota;
            nombrePersonaMasAlta = nombre;
            flagPersonaMasAlta = false;
        }
        else
        {
            if(altura > alturaPersonaMasAlta)
            {
                alturaPersonaMasAlta = altura;
                notaPersonaMasAlta = nota;
                nombrePersonaMasAlta = nombre;
            }
        }
//j) de los nacidos en otoño el primer varon
        if(estacionNacimiento == "otoño" && sexo == "m")
        {
            if(flagPrimerVaronOtonio == true)
            {
                primerVaronOtonio = nombre;
                flagPrimerVaronOtonio = false;
            }
        }
//k) de los adolescentes (entre 10 y 19 años) el nombre del mas bajo en altura
        if(edad > 9 && edad < 20)
        {
            if(flagAdolescenteAlturaMasBaja == true)
            {
                adolescenteAlturaMasBaja = altura;
                nombreAdolescenteAlturaMasBaja = nombre;
                flagAdolescenteAlturaMasBaja = false;
            }
            else
            {
                if(altura < adolescenteAlturaMasBaja)
                {
                    adolescenteAlturaMasBaja = altura;
                    nombreAdolescenteAlturaMasBaja = nombre;
                }
            }
        }
//L) la estacion del año que mas alumnos nacieron
        switch(estacionNacimiento)
        {
            case "invierno":
                contadorInvierno = contadorInvierno + 1;
            break;
            case "verano":
                contadorVerano = contadorVerano + 1;
            break;
            case "otoño":
                contadorOtonio = contadorOtonio + 1;
            break;
            default:
                contadorPrimavera = contadorPrimavera + 1;
            break;
        }

        respuesta = confirm("Desea continuar?");
    }

    promedioNotasTotales = sumaNotas / contadorNotas;

    mensaje = "El promedio total de las notas es de: " + promedioNotasTotales;
    mensaje = mensaje + "<br> La nota más baja es: " + notaMasBaja + " y es de " + nombreNotaMasBaja + " y su sexo es: " + sexoNotaMasBaja;
    // Que pasa si hay 2 o más personas con la misma nota más baja?

    if(cantVaronesNotaMayor == 0)
    {
        mensaje = mensaje + "<br> No se encontraron notas de varones mayores o iguales a 6.";
    }
    else
    {
        mensaje = mensaje + "<br> La cantidad de varones que su nota haya sido mayor o igual a 6 es: " + cantVaronesNotaMayor;
    }
    
    if(flagPrimeraMujer == false)
    {
        mensaje = mensaje + "<br> La nota de la primer mujer ingresada es: " + notaPrimeraMujer + " y su nombre es " + nombrePrimeraMujer;
    }
    else
    {
        mensaje = mensaje + "<br> No se encontraron notas de mujeres ingresadas.";
    }
    
    if(contadorAprobadosVarones == 0)
    {
        mensaje = mensaje + "<br> No se encontraron Varones aprobados.";
    }
    else
    {
        mensaje = mensaje + "<br> La cantidad de aprobados que son Varones es: " + contadorAprobadosVarones;
    }

    if(contadorAprobadosMujeres == 0)
    {
        mensaje = mensaje + "<br> No se encontraron Mujeres aprobadas.";
    }
    else
    {
        mensaje = mensaje + "<br> La cantidad de aprobados que son Mujeres es: " + contadorAprobadosMujeres;
    }

    if(contadorVaronesDesaprobados > contadorMujeresDesaprobadas)
    {
        mensaje = mensaje + "<br> El sexo más desaprobado es de Varones, con " + contadorVaronesDesaprobados + " desaprobados";
    }
    else
    {
        if(contadorVaronesDesaprobados < contadorMujeresDesaprobadas)
        {
            mensaje = mensaje + "<br> El sexo más desaprobado es de Mujeres, con " + contadorMujeresDesaprobadas + " desaprobados";
        }
        else
        {
            mensaje = mensaje + "<br> La cantidad de desaprobados es la misma entre Varones y Mujeres, con " + contadorVaronesDesaprobados + " desaprobados";
        }
    }

    if(contadorNotasAprobadas == 0)
    {
        mensaje = mensaje + "<br> No se encuentran notas aprobadas para calcular el promedio.";
    }
    else
    {
        promedioNotasAprobados = sumaNotasAprobadas / contadorNotasAprobadas;
        mensaje = mensaje + "<br> El promedio de notas de los aprobados es de: " + promedioNotasAprobados + " con " + contadorNotasAprobadas + " notas aprobadas ingresadas.";
    }

    if(contadorNotasMujeres == 0)
    {
        mensaje = mensaje + "<br> No se encuentran notas de mujeres para calcular el promedio.";
    }
    else
    {
        promedioNotasMujeres = sumaNotasMujeres / contadorNotasMujeres;
        mensaje = mensaje + "<br> El promedio de las notas de mujeres es de: " + promedioNotasMujeres + " con " + contadorNotasMujeres + " notas de Mujeres ingresadas.";
    }

    mensaje = mensaje + "<br> La persona más alta es " + nombrePersonaMasAlta + " y su nota es " + notaPersonaMasAlta + " con " + alturaPersonaMasAlta + "cm de altura.";
    // Que pasa si tengo 2 o más alturas iguales?

    if(flagPrimerVaronOtonio == false)
    {
        mensaje = mensaje + "<br> El primer Varon ingresado que nació en Otoño es " + primerVaronOtonio;
    }
    else
    {
        mensaje = mensaje + "<br> No se encontraron Varones nacidos en Otoño";
    }

    if(flagAdolescenteAlturaMasBaja == false)
    {
        mensaje = mensaje + "<br> De los adolescentes (entre 10 y 19 años de edad), la persona más baja en altura es: " + nombreAdolescenteAlturaMasBaja + " con " + adolescenteAlturaMasBaja + "cm de altura.";
    }
    else
    {
        mensaje = mensaje + "<br> No se encontraron personas adolescentes (entre 10 y 19 años de edad).";
    }
    // Que pasa si tengo 2 o más alturas iguales?
    
    if(contadorInvierno > contadorVerano && contadorInvierno > contadorOtonio && contadorInvierno > contadorPrimavera)
    {
        estacionMasNacida = "Invierno";
        estacionMasNacidaContador = contadorInvierno;
    }
    else
    {
        if(contadorVerano > contadorOtonio && contadorVerano > contadorPrimavera)
        {
            estacionMasNacida = "Verano";
            estacionMasNacidaContador = contadorVerano;
        }
        else
        {
            if(contadorOtonio > contadorPrimavera)
            {
                estacionMasNacida = "Otoño";
                estacionMasNacidaContador = contadorOtonio;
            }
            else
            {
                estacionMasNacida = "Primavera";
                estacionMasNacidaContador = contadorPrimavera;
            }
        }
    }

    mensaje = mensaje + "<br> La estación del año en la cual más alumnos nacieron es: " + estacionMasNacida + " con " + estacionMasNacidaContador + " personas.";
    // Que pasa si tengo 2 o más contadores de estaciones iguales?
    
    if(flagPrimerAprobado == false)
    {
        mensaje = mensaje + "<br> La persona que primero aprobó es: " + nombrePrimerAprobado + " con una nota de " + notaPrimerAprobado + ", su sexo es " + sexoPrimerAprobado + ", su edad es " + edadPrimerAprobado + " y su altura es " + alturaPrimerAprobado;
    }
    else
    {
        mensaje = mensaje + "<br> No se encuentran personas aprobadas.";
    }

    document.write(mensaje);

}

