let genreButton = document.querySelector('.genero-button');
let priceButton = document.querySelector('.price-button');

genreButton.addEventListener("click", () => {
    genreButton.classList.toggle('arrow');
    let genreHeight = genreMenu.clientHeight === 0 ? genreMenu.scrollHeight : 0;
    genreMenu.style.height = `${genreHeight}px`;
});

priceButton.addEventListener("click", () => {
    priceButton.classList.toggle('arrow');
    let priceHeight = priceMenu.clientHeight === 0 ? priceMenu.scrollHeight : 0;
    priceMenu.style.height = `${priceHeight}px`;
});

