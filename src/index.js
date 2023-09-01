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
    const characterList = document.querySelector('.character-list'); // Asegúrate de tener un elemento con la clase 'container' en tu HTML
    service.getAllCharacters()
        .then(characters => {
            characters.forEach(character => {
                const characterCard = createCharacterCard(character);
                characterList.innerHTML += characterCard;
                addCharacterListeners(character);
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
            <img src="${character.image}" alt="${character.name}">
            <span>Name: ${character.name}</span>
            <span>Status: ${character.status}</span>
            <span>Species: ${character.species}</span>
            <span>First Seen: ${character.firstSeen}</span>
            <span>Location: ${character.location}</span>
        </div>
    `;
}

// esta función deberá obtener todos los personajes y deberá agregarles un evento de click
// cuando se seleccione un personaje debe decir hola soy 'nombre personaje', recuerda que puedes obtener
// el elemento target de un evento y así obtener sus propiedades

function addCharacterListeners(character) {}


// por último se llama la función y se renderiza la vista
createCharacterList();
