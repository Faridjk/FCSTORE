window.addEventListener('DOMContentLoaded', () => {
    const firstCards = document.querySelectorAll('.firstcards1');
    firstCards.forEach(item => {
        item.addEventListener('touchstart', (event) => {
            event.preventDefault();
            const kartlar = document.querySelectorAll('.kartlar1');
            kartlar.forEach(item => {
                item.style.position = 'relative';
                item.style.overflow = 'hidden';
                item.style.zIndex = '2';
            });
            const overlay = document.querySelectorAll('.overlay2');
            overlay.forEach(item => {
                item.style.height = '100%';
                item.style.width = '100%';
                item.style.top = '0';
                item.style.left = '0';
                item.style.position = 'absolute';
                item.style.display = 'flex';
                item.style.alignItems = 'center';
                item.style.justifyContent = 'center';
                item.style.transition = '.4s';
                item.style.opacity = '0';
                item.style.color = 'white';
                item.style.backgroundColor = ' rgba(35, 35, 37, 0.8)';
            });
        })
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const second = document.querySelectorAll('.secondcard');
    second.forEach(items => {
        items.addEventListener('touchmove', (event) => {
            event.preventDefault();
            const image = document.querySelectorAll('.image');
            image.forEach(box => {
                box.classList.add('image img');
                box.classList.add('image');
                box.classList.add('image:hover img');
            });
        })
    });
})