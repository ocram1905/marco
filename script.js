document.getElementById('spinButton').addEventListener('click', spin);

function spin() {
    const symbols = [
        'symbols/foto1.png',
        'symbols/foto2.png',
        'symbols/foto3.png',
        'symbols/foto4.png',
        'symbols/foto5.png',
        'symbols/foto6.png'
    ];

    const reels = document.querySelectorAll('.reel');
    
    reels.forEach(reel => {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        reel.innerHTML = `<img src="${symbol}" alt="Candy">`;
        reel.style.animation = 'none';
        reel.offsetHeight; /* trigger reflow */
        reel.style.animation = null;
    });

    // Optional: add a delay before checking the result
    setTimeout(() => {
        checkResult();
    }, 1000);
}

function checkResult() {
    const symbols = [];
    const reels = document.querySelectorAll('.reel img');
    reels.forEach(reel => {
        symbols.push(reel.src);
    });

    // Check if all symbols are the same
    const firstSymbol = symbols[0];
    const isWin = symbols.every(symbol => symbol === firstSymbol);

    if (isWin) {
        alert('Hai vinto!');
    } else {
        alert('Riprova!');
    }
}
