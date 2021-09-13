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
         films.innerHTML+=`<li id="${item.show.id}" class="js-list_item" ${isFavorite}"><div class="div_list"><h2 class="tittle_name">${item.show.name}</h2><img class= "image" src=${defaultImage} /></div></li>`;
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