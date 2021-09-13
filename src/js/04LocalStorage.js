 
 //Local Storage
 function setLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  
  function savedFilms() {
    const local = JSON.parse(localStorage.getItem('favorites'));
    if(local !== null){
      favorites=local
    }
    //recupero el array de favoritos almacenado en ls
   
    //pinto la lista de favoritos con lo almacenado en ls
    printFavorite(); 
 
  }
  savedFilms();