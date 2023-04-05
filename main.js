const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const results = document.getElementById('results');

function searchCharactersByName(name) {
  return fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then(response => response.json())
    .then(data => data.results);
}

function displayResults(characters) {
  results.innerHTML = '';
  characters.forEach(character => {
    const div = document.createElement('div');
    div.innerHTML = `
      <img src="${character.image}">
      <p>Name: ${character.name}</p>
      <p>Status: ${character.status}</p>
      <p>Species: ${character.species}</p>
      <p>Gender: ${character.gender}</p>
    `;
    results.appendChild(div);
  });
}

searchButton.addEventListener('click', async () => {
  const name = searchInput.value;
  const characters = await searchCharactersByName(name);
  displayResults(characters);
});
