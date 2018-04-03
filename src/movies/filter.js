const bindFilterSelect = (movies) => {
  const typeSelectDOM = document.querySelector('#movie-type-search');
  typeSelectDOM.addEventListener('change', (e) => {
    movies.setMoviesFilter(e.currentTarget.value);
    movies.render();
  });
} 
export default bindFilterSelect;