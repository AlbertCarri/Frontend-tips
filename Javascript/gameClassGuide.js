
        class GameObject {
            constructor(elementId, color, x, y) {
                this.element = document.createElement("div");
                this.element.className = elementId;
                this.element.style.backgroundColor = color;
                this.element.style.width = "40px";
                this.element.style.height = "40px";
                this.element.style.position = "absolute";
                this.x = x;
                this.y = y;
                this.updatePosition();
            }

            appendTo(parent) {
                parent.appendChild(this.element);
            }

            updatePosition() {
                this.element.style.left = `${this.x}px`;
                this.element.style.top = `${this.y}px`;
            }
        }

        class Game {
            constructor(areaId) {
                this.gameArea = document.getElementById(areaId);
                this.player = new GameObject("player", "blue", 0, 0);
                this.target = new GameObject("target", "red", this.randomPosition(), this.randomPosition());
                this.player.appendTo(this.gameArea);
                this.target.appendTo(this.gameArea);
                this.setupControls();
            }

            randomPosition() {
                return Math.floor(Math.random() * (this.gameArea.offsetWidth - 40));
            }

            setupControls() {
                document.addEventListener("keydown", (event) => {
                    switch (event.key) {
                        case "ArrowUp":
                            this.player.y = Math.max(this.player.y - 10, 0);
                            break;
                        case "ArrowDown":
                            this.player.y = Math.min(this.player.y + 10, this.gameArea.offsetHeight - 40);
                            break;
                        case "ArrowLeft":
                            this.player.x = Math.max(this.player.x - 10, 0);
                            break;
                        case "ArrowRight":
                            this.player.x = Math.min(this.player.x + 10, this.gameArea.offsetWidth - 40);
                            break;
                    }
                    this.player.updatePosition();
                    this.checkCollision();
                });
            }

            checkCollision() {
                const playerRect = this.player.element.getBoundingClientRect();
                const targetRect = this.target.element.getBoundingClientRect();
                if (
                    playerRect.left < targetRect.right &&
                    playerRect.right > targetRect.left &&
                    playerRect.top < targetRect.bottom &&
                    playerRect.bottom > targetRect.top
                ) {
                    alert("¡Atrápalo! 🎉");
                    this.target.x = this.randomPosition();
                    this.target.y = this.randomPosition();
                    this.target.updatePosition();
                }
            }
        }

        // Inicializa el juego
        new Game("game-area")

