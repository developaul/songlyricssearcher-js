import * as UI from '../references.js';

export class API {
    constructor( artist, song ) {
        this.artist = artist;
        this.song = song;
    }

    consultAPI() {
        const url = `https://api.lyrics.ovh/v1/${ this.artist }/${ this.song }`;

        fetch( url )
            .then( response => response.json() )
            .then( ( { lyrics } ) => {
                if( !lyrics ) {
                    UI.message.textContent = 'La canción no éxiste, prueba con otra búsqueda';
                    UI.message.classList.add( 'error' );

                    setTimeout( () => {
                        UI.message.textContent = '';
                        UI.message.classList.remove( 'error' );
                    }, 3000 );
                    return;
                }

                UI.result.textContent = lyrics;
                UI.headingResult.textContent = `Letra de la canción ${ this.song } de ${ this.artist }`;
            });
    }
}