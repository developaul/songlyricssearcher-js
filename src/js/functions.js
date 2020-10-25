import * as UI from './references.js';

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
}

const startApp = () => {
    UI.form.addEventListener( 'submit', validateForm );
}

export {
    startApp
}