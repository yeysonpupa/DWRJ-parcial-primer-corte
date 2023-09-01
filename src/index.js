import RickAndMortyService from './service';

const service = new RickAndMortyService();

service.getAllCharacters()
    .then(characters => {
        console.log(characters);
    })
    .catch(error => {
        console.error('Ha ocurrido un error:', error);
    });


// acá deberás crear una instancia del servicio RickAndMortyService
// const service = new RickAndMortyService();

// esta función debe encargarse de obtener el elemento contenedor
// y agregar los personajes obtenidos por el API, deberás llamar tu función getAllCharacters
// iterar el arreglo de personajes y llamar a la función createCharacterCard para agregar cada personaje
// a el contenedor puedes usar la propiedad innerHTML para esto

// valor (1 punto)

function createCharacterList() {
    const character_list = document.querySelector('.character-list');
    service.getAllCharacters()
        .then(characters => {
            characters.forEach(character => {
                const Card = createCharacterCard(character);
                character_list.innerHTML += Card;
                addCharacterListeners(character, character_list);
            });
        })
        .catch(error => {
            console.error('Ha ocurrido un error:', error);
        });
}

// esta función debe devolver la estructura html en string de tu personaje ejemplo

// `<div class="character">
//      <span>${gender}</span>
//      <span>${name}</span>
// </div>`;

// deberás usar los elementos correctos de HTML para poder visualizar el personaje

// valor (1 punto) HTML

function createCharacterCard(character) {
    return `
        <div class="character">
            <img class="character-image" src="${character.image}" alt="${character.name}">
            <div class="character-data">
                <p class="character-name">${character.name}</p>
                <p class="character-status-species">${character.status} - ${character.species}</p>
                <p class="character-location"> <span>Last known location:<br></span> ${character.location}</p>
                <p class="character-seen"><span>First Seen in:<br></span> ${character.firstSeen}</p>
            </div>
        </div>
    `;
}

// esta función deberá obtener todos los personajes y deberá agregarles un evento de click
// cuando se seleccione un personaje debe decir hola soy 'nombre personaje', recuerda que puedes obtener
// el elemento target de un evento y así obtener sus propiedades

function addCharacterListeners(character, character_list) {
    character_list.addEventListener('click', () => {
        alert(`Hola, soy ${character.name}`);
    });
}

// por último se llama la función y se renderiza la vista
createCharacterList();
