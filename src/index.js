import RickAndMortyService from './service';


// aca deberas crear una instancia del servicio RickAndMortyService
// const service = new RickAndMortyService();

// esta funcion debe encargarse de obtener el elemento contenedor
// y agregar los personajes obtenidos por el API, deberas llamar tu funcion getAllCharacters
// iterar el arreglo de personajes  y llamar a la funcion createCharacterCard para agregar cada personaje
// a el contenedor puedes usar la propiedad innerHTML para esto

// valor (1 punto)

function createCharacterList() {
    // llamar primero createCharacterCard(character);
    // llamar segundo addCharacterListeners(character);
}

// esta funcion debe devolver la estructura html en string de tu personaje ejemplo

// `<div class="character">
//      <span>${gender}</span>
//      <span>${name}</span>
// </div>`;

// deberas usar los elementos correctos de HTML para poder visualizar el personaje

// valor (1 punto) HTML

function createCharacterCard(character) {}

// esta funcion debera obtener todos los personajes y debera agregarles un evento de click
// cuando se seleccion un personoje debe decir  hola soy 'nombre personaje', recuerta que puedes obtejer
// el elemento target de un evento y  asi obtener sus propiedades

function addCharacterListeners(character) {}


// por ultimo se llama la funcion y se renderiza la vista
createCharacterList();
