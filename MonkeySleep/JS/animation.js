function animateBounce(item, startX, startY, targetX, peakY, endY) {
  let progress = 0;
  const duration = 1000;
  const startTime = Date.now();

  function update() {
    const elapsed = Date.now() - startTime;
    progress = elapsed / duration;

    if (progress > 1) progress = 1;

    const x = startX + (targetX - startX) * progress;
    const y =
      progress < 0.5
        ? startY - (startY - peakY) * (progress * 2) // 上昇
        : peakY + (endY - peakY) * ((progress - 0.5) * 2); // 下降

    item.style.left = `${x}px`;
    item.style.top = `${y}px`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}