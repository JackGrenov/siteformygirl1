const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

const btn = document.querySelector('#btn');

btn.addEventListener('mouseenter', () => {
    btn.style.position = 'absolute'; // Добавлено для установки позиции
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 90)}%`;
})

btn.addEventListener('click', () => {
    alert('Пидора ответ');
});
