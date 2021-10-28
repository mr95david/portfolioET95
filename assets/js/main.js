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

/* Remover el menu para dispositivos mobiles */
const navLink = document.querySelectorAll('.nav__link'); /* Seleccionamos por todos los selectores, de esta manera buscamos la instruccion en css*/

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // Cuando le damos click a cada navlink, removemos el menu de iconos
    navMenu.classList.remove('show-menu');
};

// Creamos la accion, en metodo por cada, para que funcione en cada uno de ellos
navLink.forEach(n => n.addEventListener('click', linkAction));

/* Habilidades en acordion */
//Primero llamamos a los componentes por su clase y el selector que lo identifica
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader=document.querySelectorAll('.skills__header');
//Creamos una funcion que realizara la expansion de la seccion seleccionada.
function toggleSkills(){
    //Creamos una variable que tomara un valor determinado por el paso de nodos
    let itemClass = this.parentNode.className;
    //Por medio de un for seleccionamos y denotamos los valores de habilidaddes cerradas
    for(i = 0;i < skillsContent.length; i++){
        skillsContent[i].className='skills__content skills__close';
    };
    //Por medio de un condicional cambiamos los valores cerrados a abiertos, esto cambiaria las caracteristicas de cada selector
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className='skills__content skills__open';
    };
}
//activacion de la funcion creada anteriormente al darle click a la fleca determinada
skillsHeader.forEach((el) => {el.addEventListener('click', toggleSkills)});

/* Tableros calificativos */
//Verificamos las secciones objetivo por medio de sus selectores
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]');
//Pasamos por cada tab del objeto tabs anteriormente inicialziado
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        //Inicializamos el valor de target
        const target = document.querySelector(tab.dataset.target);
        //Por cada contenido, buscamos los valores de qualification active y los removemos
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        })
        //Agregamos el valor nuevo para que sea seleccionada la informacion
        target.classList.add('qualification__active');

        tabs.forEach(tab, () => {
            tab.classList.remove('qualification__active');
        })
        tab.classList.add('qualification__active');
    });
});

/* MODALIDAD DE ACTIVACION DE CADA SERVICIO */

//Inicializamos cada una de las constantes para identificar la modalidad que se
//leccionaremos
const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalCloses = document.querySelectorAll('.services__modal-close');
//Consideramos la funcion modal, para que cuando demos click en determinado boton
//Accedamos exactamente a la variable vista creada anteriormente y nos permita agregar un selector
//definido en css
let modal = function(modalClick){
    //El selector active modal vuelve visible la ingformacion
    modalViews[modalClick].classList.add('active-modal');
};

//Por cada modal btn que inicializamos anteriormente, creando un evento apra cuando demos click en los botontes service__button
modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        //Me va a generar la informacion correspondiente a esa seccion del html
        modal(i);
    });
});

//Ahora debemos crear una funcion para cerrar las ventanas que abrimos anteriormente
modalCloses.forEach((modalClose) => {
    //Por cada vez que oprimamos el boton de salir
    modalClose.addEventListener('click', () => {
        //Removeremos la caracteristica de visibilidad antes puesta
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});