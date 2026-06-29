document.addEventListener('DOMContentLoaded', () => {
  const musica = document.getElementById('musica-boda');
  const btnMusica = document.getElementById('btn-musica');
  const iconPlay = document.getElementById('icon-play');
  const iconPause = document.getElementById('icon-pause');

  btnMusica.addEventListener('click', () => {
    if (musica.paused) {
      // Si está pausada, reproducir
      musica.play()
        .then(() => {
          iconPlay.style.display = 'none';
          iconPause.style.display = 'block';
          btnMusica.classList.add('playing');
        })
        .catch(error => {
          console.error("La reproducción fue bloqueada por el navegador:", error);
        });
    } else {
      // Si está reproduciendo, pausar
      musica.pause();
      iconPlay.style.display = 'block';
      iconPause.style.display = 'none';
      btnMusica.classList.remove('playing');
    }
  });
});