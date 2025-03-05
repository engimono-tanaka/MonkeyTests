let score = 0;
const items = ['assets/item1.png', 'assets/item2.png', 'assets/item3.png'];

function initGame() {
  const character = document.getElementById('character');
  const scoreDisplay = document.getElementById('score');

  character.addEventListener('click', () => {
    const itemCount = Math.floor(Math.random() * 2) + 2; // 2〜3個のアイテム
    for (let i = 0; i < itemCount; i++) {
      createBouncingItem();
    }
  });

  function createBouncingItem() {
    const item = document.createElement('img');
    item.src = getRandomItem();
    item.classList.add('item');

    // キャラクターの位置取得
    const charRect = character.getBoundingClientRect();
    const containerRect = document.getElementById('game-container').getBoundingClientRect();

    const startX = charRect.left + charRect.width / 2 - containerRect.left;
    const startY = charRect.top - containerRect.top;

    item.style.left = `${startX}px`;
    item.style.top = `${startY}px`;

    document.getElementById('game-container').appendChild(item);

    // ランダムな方向に飛ばす
    const targetX = startX + (Math.random() * 200 - 100); // -100 ~ +100 の範囲でランダム
    const peakY = startY - (Math.random() * 80 + 80); // 80~130 の高さ
    const endY = containerRect.height - 50;

    animateBounce(item, startX, startY, targetX, peakY, endY);

    // アイテムクリックでスコア加算＆削除
    item.addEventListener('click', () => {
      score++;
      scoreDisplay.textContent = score;
      item.remove();
    });

    // 3秒後に削除
    setTimeout(() => {
      if (document.body.contains(item)) {
        item.remove();
      }
    }, 3000);
  }

  function getRandomItem() {
    return items[Math.floor(Math.random() * items.length)];
  }
}