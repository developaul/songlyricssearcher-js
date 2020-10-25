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

const startApp = () => {
    UI.form.addEventListener( 'submit', validateForm );
}

export {
    startApp
}