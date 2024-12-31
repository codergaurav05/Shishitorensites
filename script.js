body {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100vh;
    background-color: #2a2a2a;
    margin: 0;
}

.title-container {
    position: absolute;
    top: 20px;
    text-align: center;
}

.neon-text {
    font-size: 48px;
    color: #ff0000;
    text-shadow: 
        0 0 5px #ff0000,
        0 0 10px #ff0000,
        0 0 15px #ff0000,
        0 0 20px #ff0000,
        0 0 25px #ff0000,
        0 0 30px #ff0000,
        0 0 35px #ff0000;
}

.button-container {
    display: grid;
    grid-template-columns: repeat(3, 150px);
    grid-gap: 20px;
    margin-bottom: 40px;
}

.game-button {
    background-color: #444;
    color: #fff;
    border: none;
    padding: 20px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 4px #999;
    text-align: center;
}

.game-button:hover {
    background-color: #666;
}

.game-button:active {
    background-color: #666;
    box-shadow: 0 2px #666;
    transform: translateY(2px);
}

/* Specific positions for buttons */
.button-container > :nth-child(4) {
    grid-column: 1;
    grid-row: 2;
}

.button-container > :nth-child(5) {
    grid-column: 2;
    grid-row: 2;
}

.button-container > :nth-child(6) {
    grid-column: 3;
    grid-row: 2;
}

.button-container > :nth-child(7) {
    grid-column: 2;
    grid-row: 3;
}
