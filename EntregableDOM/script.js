// script.js

// Función para crear y agregar elementos al DOM
function createAndAppend(tagName, parent, text) {
    const element = document.createElement(tagName);
    if (text) {
        element.textContent = text;
    }
    parent.appendChild(element);
    return element;
}

// Crear encabezado y menú de navegación
const body = document.body;

const header = createAndAppend('header', body);
createAndAppend('h1', header, 'Cafex');

const nav = createAndAppend('nav', header);
const ul = createAndAppend('ul', nav);

const menuLink = createAndAppend('li', ul);
createAndAppend('a', menuLink, 'Menú');
menuLink.querySelector('a').setAttribute('href', '#menu'); // Anclar al ID "menu"

const promocionesLink = createAndAppend('li', ul);
createAndAppend('a', promocionesLink, 'Promociones');
promocionesLink.querySelector('a').setAttribute('href', '#promociones'); // Anclar al ID "promociones"



// Crear contenido principal
const main = createAndAppend('main', body);

const menuSection = createAndAppend('section', main);
menuSection.classList.add('menu');

const menuHeader = createAndAppend('h2', menuSection, 'Nuestro Menú');
menuHeader.classList.add('menu-header');

// Crear elementos del menú (ejemplo)
const menuItem1 = createAndAppend('section', menuSection);
menuItem1.classList.add('item');
createAndAppend('h3', menuItem1, 'Café Espresso');
createAndAppend('p', menuItem1, 'El clásico espresso italiano, fuerte y aromático.');
createAndAppend('span', menuItem1, '$8.000');
createAndAppend('img', menuItem1).setAttribute('src', 'espresso.png'); // Reemplaza 'espresso.jpg' con la ruta de tu imagen

const menuItem2 = createAndAppend('section', menuSection);
menuItem2.classList.add('item');
createAndAppend('h3', menuItem2, 'Café Latte');
createAndAppend('p', menuItem2, 'Café suave con leche caliente y espuma.');
createAndAppend('span', menuItem2, '$12.000');
createAndAppend('img', menuItem2).setAttribute('src', 'latte.png'); // Reemplaza 'latte.jpg' con la ruta de tu imagen

// ... (agrega más elementos al menú si es necesario)

// Crear sección de promociones (ejemplo)
const promotionsSection = createAndAppend('section', main);
promotionsSection.classList.add('promotions'); // Agregamos la clase 'promotions'
promotionsSection.setAttribute('id', 'promociones'); // Agregamos el atributo id
createAndAppend('h2', promotionsSection, 'Promociones');

const promotionItem1 = createAndAppend('section', promotionsSection);
promotionItem1.classList.add('promotion');
createAndAppend('h3', promotionItem1, 'Promoción del Día');
createAndAppend('p', promotionItem1, '¡Hoy, compra un café grande y obtén una galleta gratis!');

// Crear pie de página
const footer = createAndAppend('footer', body);
createAndAppend('p', footer, '© 2023 Cafex - Todos los derechos reservados');
