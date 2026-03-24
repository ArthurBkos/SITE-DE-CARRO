/* PEGAR IMAGENS */

const imagens = document.querySelectorAll(".carousel-img")

let index = 0



/* CONTADOR */

const fotoAtual = document.getElementById("fotoAtual")
const totalFotos = document.getElementById("totalFotos")

totalFotos.textContent = imagens.length



/* BOTÃO NEXT */

document.querySelector(".next").addEventListener("click", () => {

imagens[index].classList.remove("active")

index++

if(index >= imagens.length){
index = 0
}

imagens[index].classList.add("active")

fotoAtual.textContent = index + 1

})



/* BOTÃO PREV */

document.querySelector(".prev").addEventListener("click", () => {

imagens[index].classList.remove("active")

index--

if(index < 0){
index = imagens.length - 1
}

imagens[index].classList.add("active")

fotoAtual.textContent = index + 1

})



/* MENU CATEGORIAS */

const botao = document.querySelector(".dropbtn")
const menu = document.querySelector(".dropdown-content")

botao.addEventListener("click", () => {

menu.style.display =
menu.style.display === "block"
? "none"
: "block"

})