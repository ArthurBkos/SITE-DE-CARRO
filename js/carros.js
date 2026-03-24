const btn = document.getElementById("btnCategorias");
const menu = document.getElementById("menuCategorias");

btn.addEventListener("click", () => {
menu.style.display =
menu.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", e=>{
if(!btn.contains(e.target) && !menu.contains(e.target)){
menu.style.display="none";
}
});
