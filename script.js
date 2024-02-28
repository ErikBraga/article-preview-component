const btn = document.querySelector('.btn');
const share = document.querySelector('.share-container');

btn.addEventListener('click', () => {
    share.classList.toggle('hidden');
});