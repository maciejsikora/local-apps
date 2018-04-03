import getMovies from './movies/list';
import bindForm from './movies/form';
import bindFilterSelect from './movies/filter';
console.log('I am movies.js!');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");
  const movies = getMovies();
  bindForm(movies);
  bindFilterSelect(movies);
  movies.render();
  movies.bindList();
});