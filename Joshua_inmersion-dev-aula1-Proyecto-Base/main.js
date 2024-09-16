let cantidadCaracteres=document.getElementById('cantidad');
let boton = document.getElementById('generar');
let botonBorrar= document.getElementById('borrar');
let contrasena= document.getElementById('contrasena');
let texto ='texto';
const cadenaCaracteres ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()+[]{}|;:',.<>/"; // tiene que ir con doble comillas..,

function generar(){ // se ejecuta cuando se preciona el boton Generar en el html

    let numeroDigitado= parseInt (cantidadCaracteres.value);
    console.log(numeroDigitado);

    if (numeroDigitado < 6) {

        alert('Cantidad de caracteres tiene que ser mayor que seis');
        return; // retunr para que la contraseña no se genere si no cumple con la condicion

    }

    let password = '';

    for (let i = 0; i < numeroDigitado; i++) {
    
        let catacterAleatorio = cadenaCaracteres[Math.floor (Math.random() * cadenaCaracteres.length)]; 

        password +=catacterAleatorio;
        
    }

    contrasena.value=password;

    let contrasenaValida = verificarContrasena(password);  // llama a la fucnion verificarContrasena
    comprobar(contrasenaValida);
}

function verificarContrasena(password){ // funcion que filtra los los caracteres especiales y mayusculas

    const contieneMayuscula = /[A-Z]/.test( password); //verifica mayusculas
    const contieneCaracterEspecial= /[^A-Za-z0-9]/.test( password); // verifica carecteres especiales

    return contieneCaracterEspecial && contieneMayuscula; 
}

function comprobar (contrasenaValida){ // mensajes de alerta 

    if ( contrasenaValida) {
        alert ('contraseña contiene caracteres y mayusculas');
    } else {
        alert ('contraseña no contiene caracteres y mayusculas');
        
    }
}

function borrar (){ // funcion se ejecuta cuado se preciona el boton borrar

    //limpia las variables
    cantidadCaracteres.value = '';
    contrasena.value = '';

}

//console.log(typeof texto);










