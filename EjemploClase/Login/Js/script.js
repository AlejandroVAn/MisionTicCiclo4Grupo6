//Ejecutando funciones
// document.getElementById permite, como su nombre indica, seleccionar un elemento del 
//documento por medio del valor del atributo id que se le haya asignado.

//addEventListener Registra un evento a un objeto en específico. 
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
//El resizeevento se activa cuando se cambia el tamaño de la vista del documento (ventana).
window.addEventListener("resize", anchoPage);

//Declarando variables
//Devuelve el primer elemento del documento (utilizando un recorrido 
//primero en profundidad pre ordenado de los nodos del documento)
//que coincida con el grupo especificado de selectores.
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

//FUNCIONES

function anchoPage() {

    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
    }
}

anchoPage();


function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register() {
    if(window.innerWidth > 850) {
        formulario_register.style.display="block";
        contenedor_login_register.style.left="410px";
        formulario_login.style.display="none";
        caja_trasera_register.style.opacity="0";
        caja_trasera_login.style.opacity="1";
    } else {
        formulario_register.style.display="block";
        contenedor_login_register.style.left="0px";
        formulario_login.style.display="none";
        caja_trasera_register.style.display="none";
        caja_trasera_login.style.display="block";
        caja_trasera_login.style.opacity="1";
    }
}