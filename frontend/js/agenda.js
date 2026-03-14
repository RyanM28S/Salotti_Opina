const apa = document.getElementById("aparece");
const cada = document.getElementById("cadastroal");

apa.addEventListener('click', function() {
  cada.classList.remove("desaparece");
  cada.innerHTML = `
        <div class="al">
          <h2>Cadastrar Novo Aluno</h2>
        </div>
        <div class="c1">
          <div>
            <label for="nome">NOME</label><br>
            <input type="text" id="nome" class="nome" placeholder="Nome do Aluno">
          </div>
          <div>
            <label for="turma">TURMA</label><br>
            <input type="text" id="turma" class="turma" placeholder="Ex:3DM">
          </div>
          <div>
            <label for="ra">RA</label><br>
            <input type="text" id="ra" class="ra" placeholder="Ex:00011....">
          </div>
        </div>
        <div class="c1">
          <div>
            <label for="forte">🌟 PONTOS FORTES</label><br>
            <input type="text" id="forte" class="forte" placeholder="Descreva os pontos forte do Aluno ">
          </div>
          <div>
            <label for="fraco">⚠️ PONTOS FRACO</label><br>
            <input type="text" id="fraco"  class="fraco" placeholder="Descreva os pontos fraco do Aluno ">
          </div>
        </div>
        <button>Cadastrar Aluno</button>
  `
});