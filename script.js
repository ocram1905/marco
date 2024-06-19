function spin() {
    const symbols = ['🍒', '🍋', '🍊', '🍇', '🍉', '🍓'];
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');

    const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

    reel1.textContent = getRandomSymbol();
    reel2.textContent = getRandomSymbol();
    reel3.textContent = getRandomSymbol();

    checkResult(reel1.textContent, reel2.textContent, reel3.textContent);
}

function checkResult(symbol1, symbol2, symbol3) {
    if (symbol1 === symbol2 && symbol2 === symbol3) {
        alert('Hai vinto!');
    } else {
        alert('Riprova!');
    }
}
