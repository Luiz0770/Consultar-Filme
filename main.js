const formulario = document.querySelector('#formulario')
const listaFilme = document.querySelector('#listaFilme')

function buscarFilme() {    
    const apiKey = 'f60febf3e7bf76f4314496086bf8c249';
    const movieName = 'Avengers'; 
    
    // Construindo a URL da solicitação
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}`;
    
    // Fazendo a solicitação HTTP
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar filmes');
        }
        return response.json();
      })
      .then(data => {
        // Processando a resposta
        const results = data.results;
        if (results.length > 0) {
          // Extraindo dados do primeiro filme encontrado
          const firstMovie = results[0];
          console.log('Título do Filme:', firstMovie.title);
          console.log('Descrição:', firstMovie.overview);
          console.log('Data de Lançamento:', firstMovie.release_date);
        } else {
          console.log('Nenhum filme encontrado com esse nome.');
        }
      })
      .catch(error => {
        console.error('Erro:', error);
      });
}

buscarFilme()

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    id = document.querySelector('#inputUsuario')
    resposta = buscarFilme(id)

    console.log(resposta)

    // const titulo = document.querySelector('#inputTitulo')
    // const imagem = document.querySelector('#inputUsuario')

    // const divCard = document.createElement('div')
    // divCard.className.add('div-card')

    // const imagemCard = document;
    // createElement('img')
    // imagemCard.className.add('img-card')
    // divCard.appendChild(imagemCard)

    // const tituloCard = document;
    // createElement('img')
    // tituloCard.className.add('titulo-card')
    // tituloCard.appendChild(imagemCard)

    // const btnEditar = document.createElement('button')
    // btnEditar.textContent = 'Editar';
    // btnEditar.className.add('btnEditar-card')
    // divCard.appendChild(btnEditar)

    // const btnRemover = document.createElement('button')
    // btnRemover.textContent = 'Remover';
    // divCard.appendChild(btnRemover)

})