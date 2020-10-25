import * as UI from './references.js';
import { API } from './classes/api.class.js';

// Valida el formulario
const validateForm = () => {

    const artist    = UI.artistInput.value,
          song      = UI.songInput.value;
    
    if( artist === '' || song === '' ) {
        UI.message.textContent = 'Error... Todos los campos son obligatorios';
        UI.message.classList.add( 'error' );

        setTimeout( () => {
            UI.message.textContent = '';
            UI.message.classList.remove( 'error' );
        }, 3000 );
        return;
    }
    
    UI.form.reset();

    // Consultamos la API
    const search = new API( artist, song );
    search.consultAPI();
}

const cleanHTML = () => {
    while( UI.result.firstChild ) {
        UI.result.removeChild( UI.result.firstChild );
    }
}

const showSpinner = () => {
    cleanHTML();

    const spinner = document.createElement( 'div' );
    spinner.classList.add( 'sk-fading-circle' );

    spinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>`;
    
    UI.result.appendChild( spinner );
}

const startApp = () => {
    UI.form.addEventListener( 'submit', validateForm );
}

export {
    startApp,
    showSpinner,
    cleanHTML
}