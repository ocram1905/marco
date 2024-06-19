document.getElementById('spinButton').addEventListener('click', spin);

function spin() {
    const symbols = ['candy1.png', 'candy2.png', 'candy3.png', 'candy4.png', 'candy5.png', 'candy6.png'];
    const reel1 = document.getElementById('reel1').querySelector('img');
    const reel2 = document.getElementById('reel2').querySelector('img');
    const reel3 = document.getElementById('reel3').querySelector('img');

    const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

    const symbol1 = getRandomSymbol();
    const symbol2 = getRandomSymbol();
    const symbol3 = getRandomSymbol();

    reel1.src = `symbols/${symbol1}`;
    reel2.src = `symbols/${symbol2}`;
    reel3.src = `symbols/${symbol3}`;

    checkResult(symbol1, symbol2, symbol3);
}

function checkResult(symbol1, symbol2, symbol3) {
    if (symbol1 === symbol2 && symbol2 === symbol3) {
        alert('Hai vinto!');
    } else {
        alert('Riprova!');
    }
}
