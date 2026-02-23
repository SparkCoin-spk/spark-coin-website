// Lightning animation script
const container = document.querySelector('.lightning-container');

function createLightning() {
  const lightning = document.createElement('div');
  lightning.classList.add('lightning');
  lightning.style.left = Math.random() * 100 + '%';
  lightning.style.animationDuration = (Math.random() * 1 + 0.5) + 's';
  container.appendChild(lightning);

  setTimeout(() => {
    container.removeChild(lightning);
  }, 2000);
}

setInterval(createLightning, 300);
