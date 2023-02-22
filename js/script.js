function moveImages() {
  // Отримуємо всі картинки з папки "gallery"
  const images = document.querySelectorAll('.gallery img');

  // Встановлюємо початкові координати для картинок
  let pos = window.innerWidth;

  // Рухаємо кожну картинку з права на ліво
  images.forEach(image => {
    image.style.position = 'absolute';
    image.style.right = `${pos}px`;
    pos += image.width + 20; // Додаємо зазор між картинками
    let id = setInterval(frame, 10); // Рухаємо картинки кожні 10 мілісекунд

    function frame() {
      if (pos < -image.width) {
        clearInterval(id);
        image.style.display = 'none'; // Прибираємо картинку, коли вона вийде за межі екрану
      } else {
        pos -= 1; // Рухаємо картинку на 1 піксель вліво
        image.style.right = `${pos}px`;
      }
    }
  });
}

moveImages();
