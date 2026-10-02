function getCharacters(done) {
    fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            done(data);
        });
}

getCharacters(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(`
            <article>
                <div class="img-container">
                    <img src="${personaje.image}" alt="${personaje.name}">
                </div>
                <h2>${personaje.name}</h2>
                <p>Estado: ${personaje.status}</p>
            </article>
        `);

        const main = document.querySelector("main");
        main.appendChild(article);
    });
});