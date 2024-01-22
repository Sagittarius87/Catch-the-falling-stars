let mouse = {
    mouseClickX: null,
    mouseClickY: null
}

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

        this.canvas.addEventListener('click', (e) => {
            mouse.mouseClickX = e.offsetX
            mouse.mouseClickY = e.offsetY
            
            console.log('mouse click x: ' + mouse.mouseClickX)
            console.log('mouse click y: ' + mouse.mouseClickY)
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
        if (this.newGame) {
            game.star.move()
            game.star.clickOnStar()  
        }
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
        this.renderStars()
        //console.log('--render')
    },
    renderStars() {
        this.ctx.drawImage(this.sprites.star1, this.star.x, this.star.y)
    },
    start() {
        console.log(this.generateRandomNumber(1, 5))
        this.init()
        this.preload()
        
        console.log('--start')
    },
    generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}

game.star = {
    velocity: 2,
    //dx: 0,
    //dy: 50,
    x: 0,
    y: 50,
    width: 48,
    height: 48,
    //startingPointX: 0,
    //startingPointY: 0,
    start() {
        this.x = game.generateRandomNumber(1, 1280)
        console.log('star start')
        console.log('star x ' + this.x + ', ' + (this.x + this.width))
        console.log('star y ' + this.y + ', ' + (this.y + this.height))
    },
    move() {
        //if (this.x > 0) {
        //    this.y += 1 * this.velocity
        //}
        console.log('star move')
        //console.log('star move ' + this.y)
    },
    clickOnStar(element) {
        let x = this.x + this.width
        let y = this.y + this.height
        if (mouse.mouseClickX != null && mouse.mouseClickY != null) {
            if ((mouse.mouseClickX > this.x && mouse.mouseClickX < x) && (mouse.mouseClickY > this.y && mouse.mouseClickY < y)) {
                console.log('click on star')
            } else {
                console.log('not click on star')
            }
        }
        //console.log(this.x)
        //console.log(this.y)
    },
    collide(element) {
        console.log('collide')
    }
}

game.start()
game.star.start()

