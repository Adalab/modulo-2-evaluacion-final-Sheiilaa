'use strict';

//Primero hacemos las variables

const searchFilm = document.querySelector('.js_search-films');
const button = document.querySelector('.js_button');
const reset = document.querySelector('.js_reset');
const films = document.querySelector('.js_films');
const favoriteFilms = document.querySelector('.js_favorite-films');
const defaultImage= 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';

//Vamos a crear una variable global para el array de los datos del fetch
let globalData=[];
//Tambien crearemos una variable para los favoritos 
let favorites=[]


//Vamos a realizar el Fetch
  function getFilms(ev){ 
   ev.preventDefault()
    let search =searchFilm.value;
   fetch(`//api.tvmaze.com/search/shows?q=${search}`)
    .then((response) => response.json())
    .then((data) => {
       //Le decimos que el array de global data es igual a los datos que nos da el fetch
      globalData = data;
      
    //Añadimos la funcion que pinta las caratulas
    paintFilms(globalData);
    });
    }

 //Listener del fetch 
 button.addEventListener('click', getFilms);

    //Creamos una función para que se nos pinta las caratulas de las series
    function paintFilms() {
       //Cogemos la variable de films, para poder escribir por encima
       films.innerHTML='';
      //recorro el array de los datos del fech
      for (let item of globalData) {
         //Buscamos que la serie que estamos pintando este o no en los favoritos del usuario.
         const isValidClass = favorites.find( 
            (favoriteId)=> favoriteId.show.id === item.show.id); 
            //Usamos el metodo find por que nos permite buscar elementos dentro de un array, lo que buscamos es el id de las series
             
         //Realizamos un condicional para saber si esta en favoritos
         let isFavorite= '';
         if (isValidClass === undefined){
            isFavorite='';
        
         } else{
            isFavorite='favorito';

         }
         //Por si la serie no tuviera imagen ponemos 
         if(item.show.image === null){
            films.innerHTML+=`<li id="${item.show.id}" class="js-list_item ${isFavorite}"><div class="div_list"><h2 class="tittle_name">${item.show.name}</h2><img class= "image" src=${defaultImage} /></div></li>`;
         } else{
           //Si la serie si tiene imagen se tendria que pintar: 
            films.innerHTML += `<li id="${item.show.id}" class="js-list_item ${isFavorite}"><div class="div_list"><h2 class="tittle_name">${item.show.name}</h2><img class="image" src="${item.show.image.medium}"/></div></li>`;
    }
    listenCover();  
  }

}
//Realizamos una función para desglosar el array de js-list-item (esta clase se la hemos puesto directamente en la funcion de pintar paletas)
function listenCover(){
   const allCovers=document.querySelectorAll('.js-list_item');
   for (let cover of allCovers){
      cover.addEventListener('click', handleClickCover)
   }
}
 

 //FAVORITOS

 function handleClickCover(event) {
  event.preventDefault();
   //Primero verificamos que li esta siendo elegida por el usuario, ademas de obtener su id
   const selectedCover = parseInt(event.currentTarget.id);
  
   //Buscamos la id en la variable global data (el cual es un array)
   const filmInfo = globalData.find((filmItem) => filmItem.show.id === selectedCover);
 
   // Buscar si la caratula esta en favoritos
   const ifThis = favorites.find(
     (favoriteId) => favoriteId.show.id === selectedCover
   );
 //Vamos a coger la clase "div_list" para poder añadirle otra clase y que se pinte el fondo de color
  const div =document.querySelector('.div_list');
  
   if (ifThis === undefined) {
     //si la caratula en la que se ha hecho click no está en el array de favoritos: añadimos a favoritos
     favorites.push(filmInfo);
     //Ademas le decimos que le ponga la clase favorito
     div.classList.remove('favorito');
     div.classList.add('favorito');

   } else {
     //Si está, filtramos para ello usamos e metodo .filter
     favorites = favorites.filter((favoriteId) => favoriteId.show.id !== selectedCover);
      div.classList.remove('favorito');
   }
  
   printFavorite(); // esta es la función para pintar los favoritos

    //guardo favoritos en LS
  setLocalStorage();
  
 }

 //Haremos la función para añadir los favoritos 
 function printFavorite() {

   favoriteFilms.innerHTML = '';
 
    for (const favorite of favorites) {
      if (favorite.show.image === null) {
         favoriteFilms.innerHTML += `<li id="${favorite.show.id}" class="list__favoritos"><div class="div_favoritos"><h1 class="title_favoritos">${favorite.show.name}</h1><img class="img_favoritos" src=${defaultImage}/><i id="${favorite.show.id}"></i></div></li>`;
     } else {
       favoriteFilms.innerHTML += `<li item-id="${favorite.show.id}" class="list_favoritos"><div class="div_favoritos"><h1 class="title_favoritos">${favorite.show.name}</h1><img class="img_favoritos" src="${favorite.show.image.medium}"/><i id="${favorite.show.id}"></i></div></li>`;
      }
    }
    
 }

 //Local Storage
 function setLocalStorage() {
   localStorage.setItem('favorites', JSON.stringify(favorites));
 }
 
 function getLocalStorage() {
   //recupero el array de favoritos almacenado en ls
   favorites = JSON.parse(localStorage.getItem('favorites'));
   //pinto la lista de favoritos con lo almacenado en ls
   printFavorite();
   
 }


 
        



//# sourceMappingURL=main.js.map
