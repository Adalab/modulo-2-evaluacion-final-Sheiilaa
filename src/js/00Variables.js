'use strict';

//Primero hacemos las variables

const searchFilm = document.querySelector('.js_search-films');
const button = document.querySelector('.js_button');
const reset = document.querySelector('.js_reset');
const films = document.querySelector('.js_films');
const favoriteFilms = document.querySelector('.js_favorite-films');
const defaultImage= 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
const log= document.querySelector('.js_log');

//Vamos a crear una variable global para el array de los datos del fetch
let globalData=[];

//Tambien crearemos una variable para los favoritos 
let favorites=[]
