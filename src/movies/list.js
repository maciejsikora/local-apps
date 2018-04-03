
const getMovies = () => {
  const movies = [];
  let filterType = 'all';

  const moviesDOM = document.querySelector('#movies-list-content');

  const addMovieToList = (movie) => {
    movies.push(movie);
  }

  const setMoviesFilter = (type = 'all') => {
    filterType = type;
  }

  const filterMovies = () => {
    if (filterType === 'all') {
      return movies;
    }
    return movies.filter((movie) => { 
      return movie.type === filterType
    });
  }

  const createHTML = () => {
    return filterMovies(filterType).reduce((html, movie) => {
      return `${html}
      <div class="panel-block movie-element" data-name="${movie.name}" data-desc="${movie.desc}" >
        ${movie.name}, ${movie.type}
      </div> 
      `
    }, '');
  }

  const render = () => {
    moviesDOM.innerHTML = createHTML();
  }

  const bindList = () => {
    const movieTitleDOM = document.querySelector('#movie-title');
    const movieDescDOM = document.querySelector('#movie-desc');
    const movieDetailsDOM = document.querySelector('#movie-details');
    moviesDOM.addEventListener('click', (e) => {
      if (e.target.classList.contains('movie-element')) {
        if (e.target.classList.contains('active')) {
          e.target.classList.remove('active');
          movieDetailsDOM.style.display = 'none';
        } else { 
          const previous = document.querySelector('.active');
          if (previous) {
            previous.classList.remove('active');
          }
          movieTitleDOM.innerText = e.target.dataset.name;
          movieDescDOM.innerText = e.target.dataset.desc;
          e.target.classList.add('active');
          movieDetailsDOM.style.display = 'block';
        }

      }
    })
  }

  return {
    addMovieToList: addMovieToList,
    filterMovies: filterMovies,
    createHTML: createHTML,
    render: render,
    bindList: bindList,
    setMoviesFilter: setMoviesFilter
  }
}

export default getMovies;