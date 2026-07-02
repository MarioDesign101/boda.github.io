document.addEventListener('DOMContentLoaded', () => {
  const musica = document.getElementById('musica-boda');
  const btnMusica = document.getElementById('btn-musica');
  const tooltipMusica = document.getElementById('tooltip-musica');
  const iconPlay = document.getElementById('icon-play');
  const iconPause = document.getElementById('icon-pause');

  btnMusica.addEventListener('click', () => {
    if (musica.paused) {
      musica.play()
        .then(() => {
          iconPlay.style.display = 'none';
          iconPause.style.display = 'block';
          btnMusica.classList.add('playing');
          
          // Ocultar el letrero "reproduceme" con transición suave
          if (tooltipMusica) {
            tooltipMusica.style.opacity = '0';
            tooltipMusica.style.transform = 'translateY(-10px)';
            setTimeout(() => tooltipMusica.remove(), 400); // Lo elimina del HTML
          }
        })
        .catch(error => {
          console.error("La reproducción fue bloqueada:", error);
        });
    } else {
      musica.pause();
      iconPlay.style.display = 'block';
      iconPause.style.display = 'none';
      btnMusica.classList.remove('playing');
    }
  });
});