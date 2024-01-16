let game = {
    running: true,
    newGame: false,
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
        console.log('--init')

        this.setEvants()
    },
    setEvants() {
        this.gameUI.buttonNewGame.addEventListener('click', () => {
            this.gameUI.buttonNewGame.style.display = 'none'
            this.canvas.style.display = 'block'
            this.newGame = true
            
            console.log('--newGame ' + this.newGame)
            console.log('--button click')
        })
        
        console.log('--set evants')
    },
    run() {
        if (this.running) {
            window.requestAnimationFrame(() => {
                this.update()
                this.render()
                this.run()
            })
        }

        //console.log('--run')
    },
    update() {
        //console.log('--update')
    },
    preload() {
        this.sprites.background = new Image()
        this.sprites.background.src = 'sprites/background.png'
        this.sprites.background.addEventListener('load', () => {
            this.run()
            console.log('--background load')
        })

        this.sprites.star1 = new Image()
        this.sprites.star1.src = 'sprites/star1.png'
        this.sprites.star1.addEventListener('load', () => {
            this.run()
            console.log('--star1 load')
        })

        
        console.log('--preload')
    },
    render() {
        this.ctx.clearRect(0, 0, 1280, 720)
        this.ctx.drawImage(this.sprites.background, 0, 0)
        this.ctx.drawImage(this.sprites.star1, 1280 / 2, 50)

        //console.log('--render')
    },
    start() {
        this.init()
        this.preload()
        
        console.log('--start')
    }
}

game.start()