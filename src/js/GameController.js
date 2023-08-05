export default class GameController { // Класс отвечающий за контроль игрового процесса
  constructor(gameEvents) {
    this.gameEvents = gameEvents;
  }

  init() { // инициализация игры
    this.gameEvents.drawBoard();
    this.gameEvents.generateCharacter();
    this.characterClick();
  }

  onCellClick(index) { // Событие вызывается при клике на ячейку поля
    const cellEl = this.gameEvents.cells[index];
    const cellElCharacter = cellEl.querySelector('.character');
    const clickerWin = document.querySelector('.clicker_counter-win');
    const clickerLose = document.querySelector('.clicker_counter-lose');

    if (cellElCharacter) {
      cellElCharacter.remove();
      clickerWin.textContent = Number(clickerWin.textContent) + 1;
    } else {
      clickerLose.textContent = Number(clickerLose.textContent) + 1;
    }

    this.gameStatus();
  }

  characterClick() { // Вызываем массив cellClickListeners и добавляем обработчик события на ячейку
    this.gameEvents.addCellClickListener(this.onCellClick.bind(this));
  }

  gameStatus() { // Статус игры
    const clickerWin = document.querySelector('.clicker_counter-win');
    const clickerLose = document.querySelector('.clicker_counter-lose');
    if (clickerWin.textContent === '5') {
      clickerWin.textContent = '0';
      clickerLose.textContent = '0';
      alert('Вы победили!');
    } else if (clickerLose.textContent === '5') {
      clickerWin.textContent = '0';
      clickerLose.textContent = '0';
      alert('Вы проиграли!');
    }
  }
}
