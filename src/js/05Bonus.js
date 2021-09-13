 //Boton de borrar:
 function resetFav(){
    //Ponemos el array de los favoritos vacío
    favoriteFilms.innerHTML='';
    //limpiados la lista con el localStorage
    localStorage.removeItem('favorites');
    paintFilms()
 
  }
 
  reset.addEventListener('click', resetFav);
 
  //Haremos el icono de borrar --- Sin funcionalidad
//  function resetIcon(){
//     const iconos= document.querySelectorAll('.remove_favoritos');
//     for(icon of iconos){
//         icon.addEventListener('click',resetFav);
//     }
// }