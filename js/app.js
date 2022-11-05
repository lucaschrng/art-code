let previous = document.querySelector('.previous');
let next = document.querySelector('.next');
let tiles = document.querySelectorAll('.tile');

let artIndex = 0;
let maxArtIndex = 1;

let primaryColor = '#419ef0';
let secondaryColor = '#6a449c';

tileReset();

previous.addEventListener('click', () => {

    if (artIndex === 0) {
        artIndex = maxArtIndex;
    } else {
        artIndex--;
    }

    addClass(artIndex);
    selectAnim(artIndex);
})

next.addEventListener('click', () => {

    if (artIndex === maxArtIndex) {
        artIndex = 0;
    } else {
        artIndex++;
    }
    
    addClass(artIndex);
    selectAnim(artIndex);
})

selectAnim(artIndex)

function selectAnim(index) {
    
    tileReset();

    if (index === 0) {
        anime({
            targets: '.tile',
            rotate:  ['0deg', '360deg'],
            backgroundColor: secondaryColor,
            easing: 'easeInOutSine',
            direction: 'alternate',
            loop: true,
            duration: 10000,
            delay: anime.stagger(500, {grid: [21, 11], from: 'center'})
        });
    }

    else if (index === 1) {
        anime({
            targets: '.tile',
            scale:  ['1', '5', '1'],
            backgroundColor: [primaryColor, secondaryColor, primaryColor],
            easing: 'easeInOutSine',
            loop: true,
            duration: 4000,
            delay: anime.stagger(250, {grid: [21, 11], from: 'center'})
        });
    }
}

function addClass(index) {
    
    tiles.forEach(tile => {
        for (let i = 1; i <= maxArtIndex + 1; i++) {
            tile.classList.remove('art'+i);
        }
        tile.classList.add('art'+(index+1));
    });
}

function tileReset() {

    tiles.forEach(tile => {
        tile.style.transform = 'rotate(0deg)';
        tile.style.backgroundColor = primaryColor;
    });
}