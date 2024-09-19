let listaNombresGastos=[];
let listaValosGastos=[];
let posicionModificada = null;

function clickBoton(){
    
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    if (Number(valorGasto) >150) {

         alert("El gasto supera a 150 dolares");
         limpiar();

    }else{

        if (posicionModificada === null) {
            // Agregar un nuevo gasto
            listaNombresGastos.push(nombreGasto);
            listaValosGastos.push(valorGasto);
        } else {
            // Modificar el gasto existente
            listaNombresGastos[posicionModificada] = nombreGasto;
            listaValosGastos[posicionModificada] = valorGasto;
            posicionModificada = null; // Resetear la posición después de modificar
            document.getElementById('botonFormulario').textContent = "Agregar Gasto"; // Cambiar el texto del botón
        }
    
        actualizarListaGastos();
    }
 
}

function actualizarListaGastos(){

    const listaElementos =document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista= '';
    let totalGastos= 0;

    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto=Number(listaValosGastos[posicion]);
        htmlLista+=`<li>${elemento}- USD ${valorGasto.toFixed(2)}
                        <button onclick="eliminar(${posicion});">Eliminar</button>
                        <button onclick="modificar(${posicion});">Modificar</button>
                    </li>`;

        totalGastos +=Number(valorGasto);
         
    
    });

    listaElementos.innerHTML=htmlLista;
    totalElementos.innerHTML=totalGastos.toFixed(2);

    limpiar();
     
}

function limpiar (){

    document.getElementById('nombreGasto').value='';
    document.getElementById('valorGasto').value='';

}

function eliminar(posicion){

    listaNombresGastos.splice(posicion,1);
    listaValosGastos.splice(posicion,1);
    actualizarListaGastos();
}

function modificar(posicion){
  
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValosGastos[posicion];

    //BOTON CAMBIA PARA MODIFICAR 
    document.getElementById('botonFormulario').textContent = "Guardar modificacion";
    posicionModificada = posicion;

}