// creazione array con img

const imgArr  = [`img/01.webp`, `img/02.webp`,`img/03.webp`,`img/04.webp`,`img/05.webp`,];

console.log(imgArr);

const output = document.getElementById("output");

for (let i = 0; i < imgArr.length; i++) {
    output.innerHTML += `<img src="${imgArr[i]}" alt=">`
};


// dichiaro btn right
const buttonRight = document.querySelector("btn btn-light");




// add event list al click con active che cambia classe