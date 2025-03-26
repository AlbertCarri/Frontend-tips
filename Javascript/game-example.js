class Game {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = 800;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);

        this.player = new Player(100, 100);
        this.ghosts = [new Ghost(200, 200), new Ghost(300, 300)];
        this.levelManager = new LevelManager();
        this.collisionManager = new CollisionManager(this.player, this.ghosts);
        this.isRunning = true; // Control del ciclo del juego
    }

    update() {
        // Actualiza la lógica del juego
        this.player.move(); // Mueve al jugador
        this.ghosts.forEach(ghost => ghost.moveRandomly()); // Mueve a los fantasmas
        this.collisionManager.detectCollision(); // Detecta colisiones
    }

    render() {
        // Limpia el canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Dibuja al jugador
        this.context.fillStyle = "blue";
        this.context.fillRect(this.player.x, this.player.y, 40, 40);

        // Dibuja a los fantasmas
        this.context.fillStyle = "red";
        this.ghosts.forEach(ghost => {
            this.context.fillRect(ghost.x, ghost.y, 40, 40);
        });
    }

    gameLoop() {
        if (this.isRunning) {
            this.update(); // Lógica del juego
            this.render(); // Renderización gráfica

            // Ejecuta el siguiente frame
            requestAnimationFrame(() => this.gameLoop());
        }
    }

    start() {
        console.log("¡Juego iniciado!");
        this.gameLoop();
    }
}

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 3;
    }
    
    move(direction) {
        if (direction === "up") this.y -= this.speed;
        if (direction === "down") this.y += this.speed;
        if (direction === "left") this.x -= this.speed;
        if (direction === "right") this.x += this.speed;
    }
}

class Ghost {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 2;
    }
    
    moveRandomly() {
        // Lógica para movimiento aleatorio
    }
    
    chasePlayer(playerX, playerY) {
        // Lógica para perseguir al jugador
    }
}
class CollisionManager {
    constructor(player, ghosts) {
        this.player = player;
        this.ghosts = ghosts;
    }
    
    detectCollision() {
        this.ghosts.forEach(ghost => {
            if (Math.abs(this.player.x - ghost.x) < 10 &&
                Math.abs(this.player.y - ghost.y) < 10) {
                console.log("Colisión detectada");
            }
        });
    }
}

class LevelManager {
    constructor() {
        this.levels = [
            { layout: "Nivel 1", pointsToWin: 100 },
            { layout: "Nivel 2", pointsToWin: 200 },
        ];
        this.currentLevel = 0;
    }
    
    nextLevel() {
        this.currentLevel += 1;
        console.log(`Cambiando al nivel: ${this.levels[this.currentLevel].layout}`);
    }
}

const game = new Game();
game.start();

