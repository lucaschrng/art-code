anime({
    targets: '.tile',
    rotate:  ['0deg', '360deg'],
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true,
    duration: 10000,
    delay: anime.stagger(500, {grid: [21, 11], from: 'center'})
});