document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll('.slider-item');
  let current = 0;
  let intervalId;

  function updateSlider() {
    items.forEach((item, idx) => {
      item.style.display = idx === current ? 'block' : 'none';
    });
  }

  function goToNext() {
    if (current < items.length - 1) {
      current++;
      updateSlider();
    } else {
      clearInterval(intervalId); // Stop auto sliding at the end
    }
  }

  updateSlider();

  // Auto-slide every 4 seconds
  intervalId = setInterval(goToNext, 4000);
});