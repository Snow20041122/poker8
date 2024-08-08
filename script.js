const deckContainer = document.getElementById('deck');
const startBtn = document.getElementById('startBtn');
const gameBoard = document.getElementById('gameBoard');
const shuffleBtn = document.getElementById('shuffleBtn');

// 生成撲克牌數據
const suits = ['♠', '♥', '♣', '♦'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

let deck = [];

function createDeck() {
    deck = [];
    suits.forEach(suit => {
        values.forEach(value => {
            deck.push({ suit, value });
        });
    });
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function startGame() {
    gameBoard.classList.remove('hidden');
    createDeck();
    shuffleDeck();
    generateCards();
}

function generateCards() {
    deckContainer.innerHTML = '';
    deck.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card face-up';
        cardElement.textContent = `${card.value}${card.suit}`;
        deckContainer.appendChild(cardElement);
    });
}

// 结束游戏并显示祝福消息
function endGame() {
    alert('父親節快樂！');
}

// 示例触发游戏结束的函数
// 实际使用中，你需要在游戏逻辑中适当触发这个函数
function exampleEndGameTrigger() {
    // 这里你可以根据实际游戏逻辑触发结束游戏
    endGame();
}

startBtn.addEventListener('click', startGame);
shuffleBtn.addEventListener('click', generateCards);

// 示例触发结束游戏
// exampleEndGameTrigger(); // 取消注释以测试
