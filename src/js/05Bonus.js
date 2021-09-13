 //Boton de borrar:
 
 function resetFav(){
    //Ponemos el array de los favoritos vacío
    favoriteFilms.innerHTML='';
    //limpiados la lista con el localStorage
    localStorage.removeItem('favorites');
    paintFilms()
 
 
  }
 
  reset.addEventListener('click', resetFav);
 
  