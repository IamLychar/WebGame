//Este bloque va a ser el codigo para la validacion del login en la pagina web
//Lo que hace este bloque es validar los campos del formulario y sacar alertas
//Estas alertas las sacamos por pantalla arriba al medio mediante js 
//Usamos alert(texto) para que salten las alertas. 




const usuario = document.getElementById("usuario");
const contrasena = document.getElementById("contraseña");
const formulario = document.getElementById("formulario");

function alertasError(){

    if(usuario.value==""){
        alert("No se ha proprocinado ningún nombre de usuario.");
    }

    if(usuario.value!==""){


        if(usuario.value.length<=3){
            alert("El campo de usuario debe contener almenos 4 caracteres");
        }
        if(usuario.value.length>=15){
            alert("La longitud máxima permitida para el campo de usuario es de 15 caracteres");
        }
    }


    if(contrasena.value==""){ 
        alert("Es necesario proporcionar una contraseña para proceder");
    }
    if(contrasena.value!==""){

        if(contrasena.value.length<8){
            alert("El campo contraseña debe contener almenos 8 digitos");
        }else if(contrasena.value.length>20){
            alert("La longitud máxima permitida para el campo de contraseña es de 20 caracteres");
        }
    }
}

