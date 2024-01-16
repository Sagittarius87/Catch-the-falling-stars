let game = {
    running: false,
    ctx: null,
    width: null,
    height: null,
    star: null,
    score: null,
    complexity: null,
    sprites: {
        background: null,
        star1: null,
    },
    sounds: {
        clickStar: null, 
    },
    init() {
        this.ctx = document.getElementById('canvas').getContext('2d')
        console.log(this.ctx)
        console.log('init')
    },
    setEvants() {
        console.log('set evants')
    },
    run() {
        console.log('run')
    },
    update() {
        console.log('update')
    },
    preload() {
        console.log('preload')
    },
    render() {
        console.log('render')
    },
    start() {
        this.init()
        console.log('start')
    }
}

game.start()