//  Pablo Scarrozza Div K
/*Se debe ingresar alumnos hasta que el usuario quiera:
Cada alumno cuenta con nota del primer y segundo cuatrimestre (0 a 10)
número de comisión (1000 a 2000)
nombre, apellido, materia (programacion, matematica, ingles).

1) Notas promedio primer y segundo cuatrimestre
2) Nombre, apellido y comisión del alumno con menor nota primer cuatrimestre
3) Materia con mayor número de promocionados (se promociona con 6)
*/
function mostrar()
{
    var notaPrimerCuatri;
    var notaSegundoCuatri;
    var comision;
    var nombre;
    var apellido;
    var materia;
    var respuesta;
    var promedioPrimerCuatrimestre;
    var promedioSegundoCuatrimestre;
    var sumaPrimerCuatri;
    var sumaSegundoCuatri;
    var banderaMenorNotaPrimerCuatri;
    var notaMenorPrimerCuatri;
    var nombreMenorPrimerCuatri;
    var apellidoMenorPrimerCuatri;
    var comisionMenorPrimerCuatri;
    var contadorProgramacion;
    var contadorMatematica;
    var contadorIngles;
    var notaPromocion;

    respuesta = true;
    sumaPrimerCuatri = 0;
    sumaSegundoCuatri = 0;
    banderaMenorNotaPrimerCuatri = true;
    notaMenorPrimerCuatri = 0;
    contadorProgramacion = 0;
    contadorMatematica = 0;
    contadorIngles = 0;

    while(respuesta == true)
    {
        notaPrimerCuatri = prompt("Ingrese la nota del primer cuatrimestre: ");
        notaPrimerCuatri = parseInt(notaPrimerCuatri);
        while(isNaN(notaPrimerCuatri) == true || notaPrimerCuatri < 0 || notaPrimerCuatri > 10)
        {
            notaPrimerCuatri = prompt("ERROR! Ingrese la nota del primer cuatrimestre: ");
            notaPrimerCuatri = parseInt(notaPrimerCuatri);

        }

        notaSegundoCuatri = prompt("Ingrese la nota del segundo cuatrimestre: ");
        notaSegundoCuatri = parseInt(notaSegundoCuatri);
        while(isNaN(notaSegundoCuatri) == true || notaSegundoCuatri < 0 || notaSegundoCuatri > 10)
        {
            notaSegundoCuatri = prompt("ERROR! Ingrese la nota del segundo cuatrimestre: ");
            notaSegundoCuatri = parseInt(notaSegundoCuatri);
        }

        comision = prompt("Ingrese su comision (1000 a 2000)");
        while(isNaN(comision) == true || comision < 1000 || comision > 2000)
        {
            comision = prompt("ERROR! Ingrese su comision (1000 a 2000)");
        }

        nombre = prompt("Ingrese su nombre: ");
        while(isNaN(nombre) == false)
        {
            nombre = prompt("Ingrese su nombre: ");
        }

        apellido = prompt("Ingrese su apellido: ");
        while(isNaN(apellido) == false)
        {
            apellido = prompt("Ingrese su apellido: ");
        }
    
        materia = prompt("Ingrese la materia (programacion, matematica, ingles)");
        while(materia != "programacion" && materia != "matematica" && materia != "ingles")
        {
            materia = prompt("ERROR! Ingrese la materia (programacion, matematica, ingles)");
        }
//1) Notas promedio primer y segundo cuatrimestre
        sumaPrimerCuatri = sumaPrimerCuatri + notaPrimerCuatri;
        sumaSegundoCuatri = sumaSegundoCuatri + notaSegundoCuatri;
//2) Nombre, apellido y comisión del alumno con menor nota primer cuatrimestre
        if(banderaMenorNotaPrimerCuatri == true)
        {
            notaMenorPrimerCuatri = notaPrimerCuatri;
            nombreMenorPrimerCuatri = nombre;
            apellidoMenorPrimerCuatri = apellido;
            comisionMenorPrimerCuatri = comision;
            banderaMenorNotaPrimerCuatri = false;
        }
        else
        {
            if(notaPrimerCuatri < notaMenorPrimerCuatri)
            {
                notaMenorPrimerCuatri = notaPrimerCuatri;
                nombreMenorPrimerCuatri = nombre;
                apellidoMenorPrimerCuatri = apellido;
                comisionMenorPrimerCuatri = comision;
            }
        }
//3) Materia con mayor número de promocionados (se promociona con 6)
        notaPromocion = notaPrimerCuatri + notaSegundoCuatri / 2;

        if(notaPromocion > 5)
        {
            switch(materia)
            {
                case "programacion":
                    contadorProgramacion++;
                break;
                case "matematica":
                    contadorMatematica++;
                break;
                case "ingles":
                    contadorIngles++;
                break;
            }
        }
        
        contadorPromedio = contadorPromedio + 1;
        respuesta = confirm("Desea continuar?");
    }
    
    promedioPrimerCuatrimestre =  sumaPrimerCuatri / contadorPromedio;
    promedioSegundoCuatrimestre = sumaSegundoCuatri / contadorPromedio;

    mensaje = "El promedio de las notas del primer cuatrimestre es: " + promedioPrimerCuatrimestre;
    mensaje = mensaje + "<br> El promedio de las notas del segundo cuatrimestre es: " + promedioSegundoCuatrimestre;
    mensaje = mensaje + "<br> La menor nota del primer cuatrimestre es: " + notaMenorPrimerCuatri + ", su nombre es " + nombreMenorPrimerCuatri + ", su apellido es " + apellidoMenorPrimerCuatri + " y su comision es " + comisionMenorPrimerCuatri;
    
    if(contadorProgramacion > contadorMatematica && contadorProgramacion > contadorIngles)
    {
        mensaje = mensaje + "<br> La materia con mayor número de promocionados es Programacion, con " + contadorProgramacion + " promocionados";
    }
    else
    {
        if(contadorMatematica > contadorIngles)
        {
            mensaje = mensaje + "<br> La materia con mayor número de promocionados es Matematicas, con " + contadorMatematica + " promocionados";
        }
        else
        {
            mensaje = mensaje + "<br> La materia con mayor número de promocionados es Ingles, con " + contadorIngles + " promocionados";
        }
    }
    
    document.write(mensaje);
}
