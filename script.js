document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.color-changing-text');
    const playButton = document.getElementById('play-button');
    const musicPlayer = document.getElementById('music-player');
    const infoSection = document.getElementById('info-section');
    const texts = ["Let's Party!", "DJ Pani Fvnky!", "Feel The Beat!", "Groove On!"];
    let index = 0;

    setInterval(() => {
        index = (index + 1) % texts.length;
        textElement.textContent = texts[index];
    }, 2000);

    playButton.addEventListener('click', () => {
        if (musicPlayer.paused) {
            musicPlayer.play();
            playButton.textContent = "Pause Music";
        } else {
            musicPlayer.pause();
            playButton.textContent = "Play Music";
        }
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight / 2) {
            infoSection.style.display = 'block';
        }
    });
});