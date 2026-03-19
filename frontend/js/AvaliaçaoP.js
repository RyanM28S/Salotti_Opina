const botoes = document.querySelectorAll(".filtros button")
const btnExatas = document.getElementById("btnExatas")
const corpo = document.getElementById("professores")
const btnTodos = document.getElementById("btnTodos")

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        botoes.forEach(b => b.classList.remove("ativo"))

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

        estrelas.forEach((e, i) => {
            if (i <= index) {
                e.style.opacity = "1"
            } else {
                e.style.opacity = "0.3"
            }
        })

    })

})

btnExatas.addEventListener("click",()=> {

    corpo.innerHTML = `
            <div class="card">
                <h3>Prof. Elen</h3>
                <p class="materia">Português</p>

                <span class="nota">⭐ 5.0</span>

                <p class="avaliacoes">145 avaliações</p>

                <button class="avaliar">Avaliar</button>
            </div>

            <div class="card">
                <h3>Prof. Karen</h3>
                <p class="materia">Ed.fisíca</p>

                <span class="nota">⭐ 5.0</span>

                <p class="avaliacoes">205 avaliações</p>

                <button class="avaliar">Avaliar</button>

            </div>

            <div class="card">
                <h3>Prof. Romário</h3>
                <p class="materia">Matemática</p>

                <span class="nota">⭐ 5.0</span>

                <p class="avaliacoes">155 avaliações</p>

                <button class="avaliar">Avaliar</button>

            </div>

            <div class="card">
                <h3>Prof. Carlos</h3>
                <p class="materia">História</p>

                <span class="nota">⭐ 5.0</span>

                <p class="avaliacoes">200 avaliações</p>

                <button class="avaliar">Avaliar</button>

            </div>

            <div class="card">
                <h3>Prof. Luan Quaresma</h3>
                <p class="materia">front-end</p>

                <span class="nota">⭐ 5.0</span>

                <p class="avaliacoes">145 avaliações</p>

                <button class="avaliar">Avaliar</button>

            </div>

            <div class="card">
                <h3>Profa. João lucca</h3>
                <p class="materia">Banco de dados</p>

                <span class="nota">⭐ 5.0</span>

                <p class="avaliacoes">154 avaliações</p>

                <button class="avaliar">Avaliar</button>
            </div>
    `
})
btnExatas.addEventlistener('click',()=> {

    corpo.innerHTML = `

            
    `
    return


})