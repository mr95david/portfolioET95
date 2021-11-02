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

/* Deslizador tipo swiper
En esta seccion agregamos un deslizador tomado de la pag Swiper, siguiendo las instrucciones planteadas
con unas pequeñas correcciones propuias */

let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop : true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });

/* Deslizador de testimonio*/

let swiperTestimonial = new Swiper(".testimonial__container", {
    loop : true,
    grabCursor : true,
    spaceBetween: 48,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
  });

/* Scroll sections y links activos*/
// Pasamos leyendo el id de la seccion en la que nos econtramos
const sections = document.querySelectorAll('section[id]');
// Creamos la funcion de activar por el scroll
function scrollActive(){
    // Definimos la variable de pagina actual
    const scrollY = window.pageYOffset;
    //Por las secciones antes consideradas hacemos un ciclo mientras nos encontremos visualizando x seccion de la seccion
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop+sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll',scrollActive);

/* Cambiar color de backgroud y encabezado*/

function scrollHeader(){
    const nav = document.getElementById('header');
    //Cuando el deslizador es mas grande que la visualizacion por 200, agregamos el deslizador-encabezado como clase
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/* Mostrar el deslizador superior*/

function scrollUp1(){
    const scrollUp = document.getElementById('scroll-up');
    //Cuando la visualizacion de la pagina sea en un lugar diferentente a la parte superior de la misma
    //modifica el selector de posicion del deslizador superior
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp1)

// Modo noche

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

//primero seleccionamos el topico(si el usuario selecciono la opcion)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//obtenemos le modo de la interfaace, validando la clase de dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uli-moon' : 'uil-sun';

if (selectedTheme){
    //Si la validacion se completa
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uli-moon' ? 'add' : 'remove'](iconTheme);
};

//Activamos y desactivamos el icono
themeButton.addEventListener('click', () => {
    // Agregamos o removemos el modo oscuro
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // Guardamos la opcion actual
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Cambio de color de la pagina

const colores = [142, 214, 250, 35];
const acColor = document.querySelector(':root');
const changeColor = document.getElementById('theme-color-button');
var cont = 0;
changeColor.addEventListener('click', () => {
    if(cont<colores.length-1){
        cont=cont+1;
    }else{
        cont=0;
    }
    acColor.style.setProperty('--hue-color', colores[cont]);
});
