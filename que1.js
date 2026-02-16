let button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log("button clicked");
});

let inp = document.querySelector('input');
inp.addEventListener('keyup', (e) => {
    console.log(e.key);
})