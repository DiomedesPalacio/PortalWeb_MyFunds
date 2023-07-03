
/*----------------------------- función para desplegar el menu en estado rensive ------------------------*/

let btnMenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');
btnMenu.addEventListener('click', function(){
   'use strict'; 
    menu.classList.toggle('mostrar');
});

/*--------------------------Funciones del conversor-----------------------------------------------*/

function moneda(){
    
    this.nombre
    this.tipodeCambio
    this.mensaje = ["Ingrese un valor, este no puede estar en cero", 
                   "El valor no cumple con las especificaciones."]
                  
    
    
    
    this.convertir = function(monto){
        
        resultado = monto * this.tipodeCambio
        
        var muestraMensaje
        
        if(monto == 0){
            
            muestraMensaje = this.mensaje[0]
            
        }else if(resultado <= 0){
            
            muestraMensaje = this.mensaje[1]
            
        }else{
            
            muestraMensaje = monto + " " + this.nombre + " equivalen a " +  resultado + " Pesos Colombianos"
        }
        
        document.getElementById('resultadodelCambio').innerHTML = muestraMensaje
           
    }
    
}

var yen = new moneda()
    yen.nombre = "Yenes"
    yen.tipodeCambio = 32.67

var dolar = new moneda()
    dolar.nombre = "Dòlares"
    dolar.tipodeCambio = 3572.72

var euro = new moneda()
    euro.nombre = "Euros"
    euro.tipodeCambio = 4034.89


function convertirmoneda(seleccionMoneda){
    
    var montoseleccionado = document.getElementById('valor').value
    var seleccionMoneda = document.getElementById('MonedaCa').value   
    
    if(seleccionMoneda == "y"){
        
        yen.convertir(montoseleccionado)
       
       }else if(seleccionMoneda == "d"){
           
        dolar.convertir(montoseleccionado)
                
        }else if(seleccionMoneda == "e"){
            
        euro.convertir(montoseleccionado)
            
        }else if(seleccionMoneda == "a"){
            
        document.getElementById('resultadodelCambio').innerHTML = "Debe seleccionar una moneda para convertir"
            
        }

}