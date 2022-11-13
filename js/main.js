// creazione array con img

const imgArr  = [`img/01.webp`, `img/02.webp`,`img/03.webp`,`img/04.webp`,`img/05.webp`,];

const slide = document.getElementById("box1");

let active = 0;

for (let i = 0; i < imgArr.length; i++) {
    slide.innerHTML += `<img src="${imgArr[i]}" id="img-${i}" alt="" class="none">`
};

let box = document.querySelector(".box").classList.add("block");
let imgActive = document.getElementById("img-" + active);
imgActive.classList.add("block");
let btnRight = document.querySelector(".btn-right");

btnRight.addEventListener("click" , function(){

    active++
    if (active > ((imgArr.length) - 1)){
        active = 0}
        imgActive.classList.remove("block")
        imgActive = document.getElementById("img-" + active);
        imgActive.classList.add("block")
});

console.log(btnRight)



