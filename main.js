const formulario = document.querySelector('#form-buscar-filme')
const resultadoFilmes = document.querySelector('.resultado-container')

function buscarFilme(movie) {
  const apiKey = 'f60febf3e7bf76f4314496086bf8c249';

  // Fazendo a solicitação HTTP
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movie)}`)
    .then(res => {
      //Verifica se a conecao foi bem sucedida
      if (!res.ok) {
        throw new Error('Erro ao buscar filmes');
      }
      return res.json();
    })
    .then((dado) => {
      if (!dado.results.length) {
        throw new Error('Filme nao encontrado')
      }
      criarElemento(dado.results)
    })
    .catch(error => {
      console.error(error)
      resultadoFilmes.innerHTML = `<p>${error}</p>`
    });
}

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const movie = document.querySelector('#inputTitulo').value
  buscarFilme(movie)
})

function criarElemento(listaMovies) {
  console.log(listaMovies)
  resultadoFilmes.innerHTML = '';
  listaMovies.forEach(filme => {
    resultadoFilmes.innerHTML += `            
    <div class="filme-container">
        <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="Poster do filme ${filme.title}">
        <div class="filme-info">
            <h1>${filme.title}</h1>
            <p>${filme.overview}</p>
            <div class="filmes-subinfos">
                <p>Data: ${filme.release_date}</p>
                <p>Nota: ${filme.vote_average}</p>
          </div>
        </div>
    </div>`;
    // listaMovies.forEach(filme => {
    //   const containerFilme = document.createElement('div')
    //   containerFilme.classList.add('filme-container')
    
    //   const imgFilme = document.createElement('img')
    //   imgFilme.setAttribute('src', `https://image.tmdb.org/t/p/w500${filme.poster_path}`)
    //   imgFilme.setAttribute('alt', `Poster do filme ${filme.title}`)
    //   containerFilme.appendChild(imgFilme)
    
    //   const infoFilmes = document.createElement('div')
    //   infoFilmes.classList.add('filme-info')
    //   containerFilme.appendChild(infoFilmes)
    
    //   const tituloFilme = document.createElement('h2')
    //   tituloFilme.innerHTML = filme.title
    //   infoFilmes.appendChild(tituloFilme)
    
    //   const descricaoFilme = document.createElement('p')
    //   descricaoFilme.innerHTML = filme.overview
    //   infoFilmes.appendChild(descricaoFilme)
    
    //   const subInfos = document.createElement('div')
    //   subInfos.classList.add('filmes-subinfos')
    //   infoFilmes.appendChild(subInfos)
    
    //   const dataFilme = document.createElement('p')
    //   dataFilme.innerHTML = filme.release_date
    //   subInfos.appendChild(dataFilme)
    
    //   const notaFilme = document.createElement('p')
    //   notaFilme.innerHTML = filme.vote_average
    //   subInfos.appendChild(notaFilme)
    
    //   resultadoFilmes.appendChild(containerFilme)
  })
}
