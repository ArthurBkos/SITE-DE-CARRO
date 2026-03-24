// intro.js - entrada do site (clique para entrar / tecla Enter ou Space)
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.intro-container') || document.body;
  const title = container.querySelector('.logo') || container.querySelector('h1') || document.querySelector('.intro-title');

  if (title) title.classList.add('drop-in');

  function enterSite() {
    if (container.classList.contains('transitioning')) return;
    container.classList.add('transitioning');
    if (title) title.classList.add('fade-up');

    // transição curta antes de ir pra galeria
    setTimeout(() => {
      window.location.href = 'carros.html';
    }, 600);
  }

  // clique uma vez e entra
  container.addEventListener('click', enterSite, { once: true });
  // tecla Enter ou Space também entra
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.code === 'Space') enterSite();
  });
});
