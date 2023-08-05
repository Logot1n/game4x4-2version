export default class GameEvents {
  constructor() {
    this.boardSize = 4;
    this.container = null;
    this.boardEl = null;
    this.cells = [];
    this.cellClickListeners = [];
  }

  drawBoard() {
    this.container = document.querySelector('.game-container');
    this.container.innerHTML = `
            <div class='counter'>
                <div class='counter-win'>
                    <span class='clicker_counter-label'>Всего попаданий:</span>
                    <span class='clicker_counter-win'>0</span>
                </div>
                <div class='counter-lose'>
                    <span class='clicker_counter-label'>Число промахов:</span>
                    <span class='clicker_counter-lose'>0</span>
                </div>
            </div>
            <div class ='board-container'>
                <div data-id='board' class='board'></div>
            </div>
        `;
    this.boardEl = this.container.querySelector('[data-id=board]');
    for (let i = 0; i < 16; i++) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell');
      cellEl.addEventListener('click', (event) => this.onCellClick(event));
      this.boardEl.appendChild(cellEl);
    }

    this.cells = Array.from(this.boardEl.children);
  }

  generateCharacter() {
    setInterval(() => {
      const randomCellIndex = Math.floor(Math.random() * this.cells.length);
      const randomCell = this.cells[randomCellIndex];
      const lastCharacter = document.querySelector('.character-goblin');

      if (lastCharacter) {
        lastCharacter.remove();
      }

      const character = document.createElement('div');
      character.classList.add('character', 'character-goblin');
      randomCell.appendChild(character);
    }, 1000);
  }

  addCellClickListener(callback) { // Добавление в массив cellClickListeners callback-функции
    this.cellClickListeners.push(callback);
  }

  onCellClick(event) { // Используется для обработки клика на кликнотую ячейку и вызова всех callback-функций из массива cellClickListeners
    const index = this.cells.indexOf(event.currentTarget);
    this.cellClickListeners.forEach((o) => o.call(null, index));
  }
}
