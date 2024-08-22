// Música de fundo
function toggleMusic() {
    var audio = document.getElementById("backgroundMusic");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Trocando as imagens automaticamente
const photos = document.querySelectorAll('.photo');
let currentPhoto = 0;

function showNextPhoto() {
    photos[currentPhoto].classList.remove('show');
    currentPhoto = (currentPhoto + 1) % photos.length;
    photos[currentPhoto].classList.add('show');
}

setInterval(showNextPhoto, 3000);

// Calculando o tempo juntos
function updateTimeTogether() {
    const startDate = new Date('2024-03-03T16:30:00');
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('timeTogether').innerText = `${years} anos, ${months} meses, ${days} dias\n${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

setInterval(updateTimeTogether, 1000);

// Chuva de corações
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 200);
