/* Funcion para mostrar el menu desplegable de la barra de navegacion*/
const navMenu = document.getElementById("nav-menu"),
        navToggle = document.getElementById("nav-toggle"),
        navClose = document.getElementById("nav-close");

/* Mostramos el menu */
/* validamos si la constante existe*/
if (navToggle){ /*Condicional*/
    navToggle.addEventListener('click',()=>{ /*Sucede un evento si ocurre un click */
        navMenu.classList.add('show-menu') /*Agrega una nueva clase, de mostrar menu*/
    }); /*Cierra el evento*/ 
    /* Lo que literalmente le sucede es que agrega una clase en la etiqueta seleccionada, 
    clase que en css devuelve el valor del bottom a 0 en vez de -100%*/
};

/* Ocultamos el menu bajo el seguimiento de los mismos asos invertidos de la funcion anterior */
if (navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu') /*En este caso se esta removiendo la clase que agregamos en la funcion anterior para que el bottom vuelva a ser = -100 */
    });
};