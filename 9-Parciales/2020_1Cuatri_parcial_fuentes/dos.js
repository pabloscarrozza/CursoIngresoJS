//Scarone Jonatan
/*Una concesionaria necesita realizar un sistema de ventas online, donde se calculará 
las preferencias de 10 clientes. Los datos necesarios son:
-Nombre del cliente: (no puede contener números)
-Edad: (validar que sea mayor a 18 años)
-Tipo de vehículo: (Auto - Camioneta - PickUp)
-Preferencia: (Nafta – Diesel)
-Precio por vehículo.
-Cantidad de vehículos.
Calcular y mostrar en un document.write: A- A la compra más grande realizada, 
se le otorgará un 10% de descuento, mostrando el nombre del cliente y su edad.
B- La mínima cantidad de vehículos vendidos.
C- Cuántas Camionetas a Nafta se compraron.
D- El cliente más viejo que compró una PickUp Diesel.
E- El porcentaje de clientes que compraron Auto, Camioneta y PickUp.*/
function mostrar()
{
    var nombre;
    var edad;
    var tipoVehiculo;
    var preferencia;
    var precio;
    var cantidad;
    var i;
    var banderaCompraMasGrande;
    var compraMasGrande;
    var edadCompraMasGrande;
    var nombreCompraMasGrande;
    var porcentaje;
    var banderaMinima;
    var cantidadMinima;
    var contadorAuto;
    var contadorCamioneta;
    var contadorPickup;
    var contadorNafta;
    var contadorDiesel;
    var contador;
    var banderaMasViejo;
    var nombreMasViejo;
    var masViejo;
    var porcentajeAuto;
    var porcentajePickup;
    var porcentajeCamioneta;
    
    banderaMasViejo = 0;
    contador = 0;
    contadorDiesel = 0;
    contadorNafta = 0;
    contadorAuto = 0;
    contadorCamioneta = 0;
    contadorPickup = 0;
    banderaMinima = 0;
    banderaCompraMasGrande = 0;
  
    for(i=0;i<10;i++)
    {
      nombre = prompt("Ingrese el nombre");
      edad = prompt("Ingrese la edad mayor a 18");
      edad = parseInt(edad);
      while(isNaN(edad) == true || edad < 18)
      {
        edad = prompt("Ingrese la edad mayor a 18");
        edad = parseInt(edad);
      }
      tipoVehiculo = prompt("Ingrese el tipo: auto, camioneta o pickup");
      while(tipoVehiculo != "auto" && tipoVehiculo != "camioneta" && tipoVehiculo != "pickup")
      {
        tipoVehiculo = prompt("Ingrese el tipo: auto, camioneta o pickup");
      }
      preferencia = prompt("Ingrese la preferencia: nafta o diesel");
      while(preferencia != "nafta" && preferencia != "diesel")
      {
        preferencia = prompt("Ingrese la preferencia: nafta o diesel");
      } 
      precio = prompt("Ingrese el precio mayor que 0");
      precio = parseInt(precio);
      while(isNaN(precio)==true || precio < 0)
      {
        precio = prompt("Ingrese el precio mayor que 0");
        precio = parseInt(precio);
      }
      cantidad = prompt("Ingrese una cantidad mayor a 0");
      cantidad = parseInt(cantidad);
      while(isNaN(cantidad)==true || cantidad <0)
      {
        cantidad = prompt("Ingrese una cantidad mayor a 0");
        cantidad = parseInt(cantidad);
      }
  
      if(banderaCompraMasGrande == 0)
      {
        compraMasGrande = precio;
        nombreCompraMasGrande = nombre;
        edadCompraMasGrande = edad;
        banderaCompraMasGrande = 1;
      }
      else
      {
        if(precio > compraMasGrande)
        {
          compraMasGrande = precio;
          nombreCompraMasGrande = nombre;
          edadCompraMasGrande = edad;
          porcentaje = 0.90;
        }
      }
      if(banderaMinima == 0)
      {
        cantidadMinima = cantidad;
        banderaMinima = 1;
      }
      else
      {
        if(cantidad < cantidadMinima)
        {
          cantidadMinima = cantidad;
        }
      }
      switch(tipoVehiculo)
      {
        case "auto":
          contadorAuto++
        break;
        case "camioneta":
          contadorCamioneta++; 
          if(preferencia == "nafta")
          {
            contadorNafta++;
          } 
        break;
        case "pickup":
          contadorPickup++;
          if(preferencia == "diesel")
          {
            contadorDiesel++;
          }
          if(banderaMasViejo == 0)
          {
            masViejo = edad;
            nombreMasViejo = nombre;
            banderaMasViejo = 1;
          }
          else
          {
            if(edad > masViejo)
            {
              masViejo = edad;
              nombreMasViejo = nombre;
            }
          }
        break;    
      }
      contador++
  
    }
    porcentajeAuto = contadorAuto * 100 / contador;
    porcentajeCamioneta = contadorCamioneta * 100 / contador;
    porcentajePickup = contadorPickup * 100 / contador;
    document.write("la compra mas grande realizada es " + (compraMasGrande * porcentaje) + " el clientes es " + nombreCompraMasGrande + " y su edad es " + edadCompraMasGrande);
      document.write("<br>");
      document.write("la minima cantidad de vehiculos vendidos es " + cantidadMinima);
      document.write("<br>");
      document.write(" se compraron " + contadorNafta + " camionestas a nafta");
      document.write("<br>");
    document.write(" el cliente mas viejo que compro una pickup es " + nombreMasViejo);
      document.write("<br>");
    document.write(" el porcentaje de autos es " + porcentajeAuto + " el de camionetas es " + porcentajeCamioneta +  " y el de pickup es " + porcentajePickup);
  }
  
    //El nombre no está validado
    //El precio no puede ser 0
    //La cantidad no puede ser 0
    //Linea 153 falta ;
    //Muchos document.write cuando dijeron que se ponia uno solo.