const urlWhatsapp = 'https://api.whatsapp.com/send/?phone=17869330019&text&type=phone_number&app_absent=0';
const urlFacebook = 'https://www.facebook.com/globaltiz';
const urlInstagram = 'https://www.instagram.com/globaltiz/';


const paginas = `
<ul class="nav justify-content-end">
    <li class="nav-item" >
        <a class="nav-link inicio" href="index.html">Inicio</a> 
    </li>
    <li class="nav-item" >
        <a class="nav-link txt-que-hacemos" href="#que-hacemos">¿Que hacemos?</a> 
    </li>
    <li class="nav-item nav-item-dropdown">
        <a class="nav-link txt-servicios" href="#desarrollo-web-movil">Servicios</a>
        <ul class="submenu">
            <li><a href="#titulo-iot-services">IOT services</a></li>
            <li><a href="#titulo-analitica-datos">Analítica de Datos</a></li>
            <li><a href="#titulo-cloud-computing">Cloud Computing</a></li>
            <li><a href="#desarrollo-web-movil">Desarrollo Web y Móvil</a></li>
        </ul>
    </li>
    <li class="nav-item">
        <a class="nav-link txt-clientes" href="#clientes">Clientes</a>
    </li>
    <li class="nav-item">
        <a class="nav-link txt-contactanos" href="#contactanos">Contáctanos</a>
    </li>
</ul>
`;

const redes = `
    <a href="${urlWhatsapp}" target="_blank"><i class="bi bi-whatsapp"></i></a>
    <a href="${urlFacebook}" target="_blank"><i class="bi bi-facebook"></i></a>
    <a href="${urlInstagram}" target="_blank"><i class="bi bi-instagram"></i></a>
`;

window.addEventListener("scroll", function () {

    document.querySelector('nav').style.background = window.pageYOffset >= 50 ? '#0577BE' : 'transparent';
})

/**
 * cargar el menu
 */
const offcanvasbody = document.querySelector('.offcanvas-body');
const menu = document.getElementById('menu');
offcanvasbody.innerHTML = paginas + '<div class="reds">' + redes + '</div>';
menu.innerHTML = paginas;


/**
 * cargar redes
 */
const redesVista = document.querySelector('.redes');
redesVista.innerHTML = redes;






// // Código para el carrusel
// document.addEventListener('DOMContentLoaded', () => {
//     const otrosLenguajes = document.querySelector('#otros-lenguajes .otros-carrusel-contenido');

//     let autoScrollInterval;
//     let isScrolling;

//     function startAutoScroll(container) {
//         autoScrollInterval = setInterval(() => {
//             container.scrollLeft += 1; // Ajusta la velocidad del desplazamiento
//             if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
//                 container.scrollLeft = 0;
//             }
//         }, 20); // Ajusta la frecuencia del desplazamiento
//     }

//     function stopAutoScroll() {
//         clearInterval(autoScrollInterval);
//     }

//     function enableScroll(container) {
//         container.addEventListener('wheel', (event) => {
//             if (event.deltaY !== 0) {
//                 event.preventDefault();
//                 container.scrollLeft += event.deltaY; // Cambiamos la orientación de vertical a horizontal
//                 stopAutoScroll();

//                 window.clearTimeout(isScrolling);
//                 isScrolling = setTimeout(() => {
//                     startAutoScroll(container);
//                 }, 2000); // Tiempo de inactividad antes de reiniciar el auto-scroll
//             }
//         });
//     }

//     startAutoScroll(otrosLenguajes);
//     enableScroll(otrosLenguajes);

//     // Detener desplazamiento automático al pasar el ratón
//     otrosLenguajes.addEventListener('mouseenter', stopAutoScroll);
//     otrosLenguajes.addEventListener('mouseleave', () => startAutoScroll(otrosLenguajes));
// });