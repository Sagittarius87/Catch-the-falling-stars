let game = {
    running: false,
    ctx: null,
    width: null,
    height: null,
    star: null,
    score: null,
    complexity: null,
    canvas: null,
    sprites: {
        background: null,
        star1: null,
    },
    sounds: {
        clickStar: null, 
    },
    gameUI: {
        buttonNewGame: null
    },
    init() {
        this.canvas = document.getElementById('canvas') 
        this.ctx = this.canvas.getContext('2d')
        this.gameUI.buttonNewGame = document.getElementById('buttonNewGame')
        console.log(this.gameUI.buttonNewGame)
        console.log('init')

        this.setEvants()
    },
    setEvants() {
        this.gameUI.buttonNewGame.addEventListener('click', () => {
            this.gameUI.buttonNewGame.style.display = 'none'
            this.canvas.style.display = 'block'
            console.log('button click')
        })
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