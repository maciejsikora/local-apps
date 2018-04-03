const bindForm = (movies) => {
  const buttonDOM = document.querySelector('#bug-add');
  const movieTypeDOM = getElementFromForm('movie-type');
  const movieNameDOM = getElementFromForm('movie-name');
  const movieDescDOM = getElementFromForm('movie-description');

  buttonDOM.addEventListener('click', () => {  
    const movieType = movieTypeDOM.value;
    const movieName = movieNameDOM.value;
    const movieDesc = movieDescDOM.value;

    const movie = {
      name: movieName,
      desc: movieDesc,
      type: movieType
    };
    
    movies.addMovieToList(movie);
    movies.render();
  });
}

const getElementFromForm = (name) => {
  return document.querySelector('footer [name="' + name + '"]');
}

export default bindForm;