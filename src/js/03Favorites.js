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
    
    
     if (ifThis === undefined) {
       //si la caratula en la que se ha hecho click no está en el array de favoritos: añadimos a favoritos
       favorites.push(filmInfo);  
     } else {
       //Si está, filtramos para ello usamos e metodo .filter
       favorites = favorites.filter((favoriteId) => favoriteId.show.id !== selectedCover); 
     }
    
     printFavorite(); // esta es la función para pintar los favoritos
    paintFilms();
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
  