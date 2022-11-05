let canvas = document.querySelector('.canvas');

for (let i = 0; i < 231; i++) {
    canvas.innerHTML += '<div class="tile art1"></div>';
}

let tiles = document.querySelectorAll('.tile');

let artIndex = 0;
let maxArtIndex = 2;

let animDuration = [
    [2500, 200, true],
    [8000, 200, false],
    [6000, 300, false]
]

let primaryColor = [
    '#419ef0',
    '#FFA5AB',
    '#218380'
];

let secondaryColor = [
    '#6a449c',
    '#A53860',
    '#84732B'
];

tileSet(0);

animLoop();

function animLoop() {

    addClass(artIndex);
    selectAnim(artIndex);

    setTimeout(() => {
        animLoop();
    }, (animDuration[artIndex][0] + 10 * animDuration[artIndex][1]) * (animDuration[artIndex][2] ? 2 : 1) + 1000);

    if (artIndex === maxArtIndex) {
        artIndex = 0;
    } else {
        artIndex++;
    }
}

function selectAnim(index) {
    
    tileSet(index);

    tiles.forEach(tile => {
        tile.style.transitionProperty = 'all';
        setTimeout(() => {
            tile.style.transitionProperty = 'none';
        }, 500);
    })

    setTimeout(() => {
        if (index === 0) {
            anime({
                targets: '.tile',
                rotate:  ['0deg', '180deg'],
                backgroundColor: secondaryColor[0],
                easing: 'easeInOutSine',
                direction: 'alternate',
                duration: animDuration[0][0],
                delay: anime.stagger(animDuration[0][1], {grid: [21, 11], from: 'center'})
            });
        }
    
        else if (index === 1) {
            anime({
                targets: '.tile',
                scale:  ['1', '5', '1', '1', '5', '1', '1', '5', '1'],
                backgroundColor: [primaryColor[1], secondaryColor[1], primaryColor[1], primaryColor[1], secondaryColor[1], primaryColor[1], primaryColor[1], secondaryColor[1], primaryColor[1]],
                easing: 'easeInOutSine',
                duration: animDuration[1][0],
                delay: anime.stagger(animDuration[1][1], {grid: [21, 11], from: 'center'})
            });
        }
    
        else if (index === 2) {
            anime({
                targets: '.tile',
                scale: ['1', '0.5', '1', '1', '0.5', '1', '1', '0.5', '1'],
                backgroundColor: [primaryColor[2], secondaryColor[2], primaryColor[2], primaryColor[2], secondaryColor[2], primaryColor[2], primaryColor[2], secondaryColor[2], primaryColor[2]],
                easing: 'easeInOutSine',
                duration: animDuration[2][0],
                delay: anime.stagger(animDuration[2][1], {grid: [21, 11], from: 'center'})
            });
        }
    }, 500);
}

function addClass(index) {
    
    tiles.forEach(tile => {
        for (let i = 1; i <= maxArtIndex + 1; i++) {
            tile.classList.remove('art'+i);
        }
        tile.classList.add('art'+(index+1));
    });
}

function tileSet(index) {

    tiles.forEach(tile => {
        tile.style.backgroundColor = primaryColor[index];
        tile.style.transform = 'rotate(0deg)';
    });
}