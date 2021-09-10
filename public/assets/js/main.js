'use strict';

//Primero hacemos las variables

const searchFilm = document.querySelector('.js_search-films');
const button = document.querySelector('.js_button');
const reset = document.querySelector('.js_reset');
const films = document.querySelector('.js_films');
const favoriteFilms = document.querySelector('.js_favorite-films');

//Vamos a crear una variable global para el array de los datos del fetch
let globalData=[];


//Vamos a realizar el Fetch

// function getFilms(){
  
//      let search =searchFilm.value;
//      fetch(`https://api.tvmaze.com/search/shows?q=girls`)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data); });
//  };


 function getFilms(){  
   let search =searchFilm.value;
   fetch(`//api.tvmaze.com/search/shows?q=${search}`)
    .then((response) => response.json())
 .then((data) => {
    // globalData.splice(0, globalData.length);
    for (let item of data) {
       globalData.push(item);  
    } });
   }

//Listener del fetch 

 button.addEventListener('click', getFilms);

//# sourceMappingURL=main.js.map
