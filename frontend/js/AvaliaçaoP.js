const botoes = document.querySelectorAll(".filtros button")

botoes.forEach(botao=>{
botao.addEventListener("click",()=>{

botoes.forEach(b=>b.classList.remove("ativo"))

botao.classList.add("ativo")

})
})

const modal = document.getElementById("modal")
const avaliarBtns = document.querySelectorAll(".avaliar")
const fechar = document.getElementById("fechar")

avaliarBtns.forEach(botao => {
botao.addEventListener("click", () => {
modal.style.display = "flex"
})
})

fechar.addEventListener("click", () => {
modal.style.display = "none"
})

const estrelas = document.querySelectorAll(".estrelas span")

estrelas.forEach((estrela, index) => {

estrela.addEventListener("click", () => {

estrelas.forEach((e,i)=>{
if(i <= index){
e.style.opacity = "1"
}else{
e.style.opacity = "0.3"
}
})

})

})
