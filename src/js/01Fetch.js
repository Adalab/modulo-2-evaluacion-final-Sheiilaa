
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