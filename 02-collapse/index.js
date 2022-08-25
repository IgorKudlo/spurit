const button = document.querySelector('.collapsible__button');
const buttonActionVisible = button.querySelector('.collapsible__action--visible');
const buttonActionHidden = button.querySelector('.collapsible__action--hidden');
const content = document.querySelector('.collapsible__content');

buttonActionVisible.style.display = 'none';
content.style.transform = 'translate3D(0, -100%, 0)';
content.style.opacity = '0';

let collapsibleOpen = false;

button.addEventListener('click', () => {
    collapsibleOpen = !collapsibleOpen;

    if (collapsibleOpen) {
        buttonActionHidden.style.display = 'none';
        buttonActionVisible.style.display = 'block';
        content.animate(toggleContent, { duration: 200, fill: 'forwards' }).commitStyles();
    } else {
        buttonActionVisible.style.display = 'none';
        buttonActionHidden.style.display = 'block';
        content.animate(toggleContent, { duration: 200, direction: 'reverse', fill: 'forwards' }).commitStyles();
    }
});

const toggleContent = [
    { transform: 'translate3D(0, -100%, 0)', opacity: '0' },
    { transform: 'translate3D(0, 0, 0)', opacity: '1' }
];