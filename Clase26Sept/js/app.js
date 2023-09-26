import { personas } from "./persona.js";
import { computersChoiceDisplay } from "./dom.js";

const sectionMain = document.createElement('div');
const parradoPrincipal = document.createElement('p');
parradoPrincipal.innerHTML = personas[0].primernombre + ' '+personas[0].apellido;
sectionMain.classList.add("main");
document.body.appendChild(parradoPrincipal);

    const seccion = `
    <section class = "main">
        <p>Dentro de otro Section </p>
    </section>
    `;

sectionMain.innerHTML = seccion;
document.body.appendChild(sectionMain);