// Dinamik Slayt Gösterisi ve Kalpler için JS
document.addEventListener("DOMContentLoaded", () => {
    // Kalplerin hareketini başlatma
    const hearts = document.querySelectorAll(".heart");
    hearts.forEach((heart) => {
        heart.style.animationDuration = `${Math.random() * 5 + 3}s`;
        heart.style.left = `${Math.random() * 100}%`;
    });
});

function showNote(note) {
    alert(note); // Notu bir uyarı mesajı olarak gösterir
}
