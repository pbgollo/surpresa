document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    let selectedCount = 0;
    let heartRainTriggered = false;

    items.forEach(item => {
        item.addEventListener('click', () => {
            if (!item.classList.contains('clicked')) {
                item.classList.add('clicked');
                selectedCount++;
            }
            if (selectedCount === items.length && !heartRainTriggered) {
                triggerHeartRain();
                heartRainTriggered = true;
            }
        });
    });

    function triggerHeartRain() {
        const heartRainContainer = document.getElementById('heart-rain');

        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart-rain-drop');
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
            heartRainContainer.appendChild(heart);
        }
    }
});
