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

createAndAppend('li', ul, createAndAppend('a', ul, 'Inicio'));
createAndAppend('li', ul, createAndAppend('a', ul, 'Menú'));
createAndAppend('li', ul, createAndAppend('a', ul, 'Promociones'));
createAndAppend('li', ul, createAndAppend('a', ul, 'Contacto'));

// Crear contenido principal
const main = createAndAppend('main', body);

const menuSection = createAndAppend('section', main);
createAndAppend('h2', menuSection, 'Nuestro Menú');

// Crear elementos del menú (ejemplo)
const menuItem1 = createAndAppend('div', menuSection);
menuItem1.classList.add('item');
createAndAppend('h3', menuItem1, 'Café Espresso');
createAndAppend('p', menuItem1, 'El clásico espresso italiano, fuerte y aromático.');
createAndAppend('span', menuItem1, '$2.99');

// Crear sección de promociones (ejemplo)
const promotionsSection = createAndAppend('section', main);
createAndAppend('h2', promotionsSection, 'Promociones');

const promotionItem1 = createAndAppend('div', promotionsSection);
promotionItem1.classList.add('promotion');
createAndAppend('h3', promotionItem1, 'Promoción del Día');
createAndAppend('p', promotionItem1, '¡Hoy, compra un café grande y obtén una galleta gratis!');

// Crear pie de página
const footer = createAndAppend('footer', body);
createAndAppend('p', footer, '© 2023 Cafex - Todos los derechos reservados');
