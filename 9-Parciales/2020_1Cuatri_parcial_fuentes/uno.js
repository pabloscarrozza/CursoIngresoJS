//Scarone Jonatan
/*Una casa de computación que se especializa en venta de insumos importados
 desea calcular ciertas métricas en base a las ventas de sus productos.
  Se ingresa de cada venta: (Ingresa mínimo 5 ventas)
-Nombre del producto.
-Género: (Memorias – Discos – Motherboards)
-Tipo de Venta: (Online – Local)
-Importe: (No pueden ser números negativos ni mayor a los 30000)
Se pide:
A- El más barato de “Discos” con su importe .
B- De la venta más cara, el nombre del producto.
C- El importe promedio del total.
D- La cantidad de ventas que sean de “Memorias” y cuesten menos de $850.*/
function mostrar()
{
    var nombre;
    var genero;
    var tipoDeventa;
    var importe;
    var i;
    var discosMasBarato;
    var importeDiscoMasBarato;
    var banderaDiscoMasBarato;
    var banderaVentaMasCara;
    var ventaMasCara;
    var nombreVentaMasCara;
    var contadorTotal;
    var acumuladorTotal;
    var promedioTotal;
    var contadorVentasMemoria;
    var mensajeA;
    var mensajeB;
    var mensajeC;
    var mensajeD;
    var mensajeFinal;
  
    contadorVentasMemoria = 0;
    contadorTotal = 0;
    acumuladorTotal = 0;
    banderaVentaMasCara = 0;
    banderaDiscoMasBarato = 0;

    for(i=0;i<2;i++)
    {
      nombre=prompt("Ingrese el nombre del producto");
      genero = prompt("Ingrese el genero: memorias, discos, motherboards");
      while(genero != "memorias" && genero != "discos" && genero != "motherboards")
      {
        genero = prompt("Ingrese el genero: memorias, discos, motherboards");
      }
      tipoDeventa = prompt("ingrese online o local");
      while(tipoDeventa != "online" && tipoDeventa != "local")
      {
        tipoDeventa = prompt("ingrese online o local");
      }
      importe=prompt("Ingrese el importe entre 0 y 30000");
      importe=parseInt(importe);
      while(isNaN(importe)==true || importe< 0 || importe > 30000)
      {
        importe=prompt("Ingrese el importe entre 0 y 30000");
        importe=parseInt(importe);
      }
      if(genero == "discos")
      {
  
        if(banderaDiscoMasBarato == 0)
        {
          discosMasBarato = nombre;
          importeDiscoMasBarato = importe;
          banderaDiscoMasBarato = 1;
        }
      else
      {
        if(importe < importeDiscoMasBarato)
        {
          discosMasBarato = nombre;
          importeDiscoMasBarato = importe;
        }
      }
      }
  
      if(banderaVentaMasCara == 0)
      {
        ventaMasCara = importe;
        nombreVentaMasCara = nombre;
        banderaVentaMasCara = 1;
      }
      else
      {
        if(importe > ventaMasCara)
        {
          ventaMasCara = importe;
          nombreVentaMasCara = nombre;
        }
      }
      if(genero == "memoria" || importe < 850)
      {
        contadorVentasMemoria++;
      }
      contadorTotal++;
      acumuladorTotal = acumuladorTotal + importe;
  
    }
    promedioTotal = acumuladorTotal / contadorTotal;
    mensajeA = " El mas baratos de los discos cuesta " + importeDiscoMasBarato + " y su nombre es " + discosMasBarato;  
    mensajeB = " el nombre del producto d ela venta mas cara es " + nombreVentaMasCara;
    mensajeC = " el importe promedio total es " + promedioTotal;
    mensajeD = " la cantidad de memorias que valen menos que $850 son " + contadorVentasMemoria;
    mensajeFinal = mensajeA + mensajeB + mensajeC + mensajeD;
    alert(mensajeFinal);
  }
  
    //Está el contador para hacer 2 vueltas
    //El nombre del producto no está validado
    //El importe no debería ser 0
    //De la línea 72 a la 79 está mal tabulado
    //Linea 96 debería ser && en vez que ||