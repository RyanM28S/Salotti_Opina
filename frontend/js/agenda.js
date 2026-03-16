const apa = document.getElementById("aparece");
const cada = document.getElementById("cadastroal");
const alunos = document.getElementById("alunos");

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
        <button id="cada" >Cadastrar Aluno</button>
  `
  
  const cadaA = document.getElementById("cada");
  cadaA.addEventListener('click', () => {

    const nome = document.getElementById("nome").value.trim();
    const primeiraLetra = nome[0]; 
    const turma = document.getElementById("turma").value.trim();
    const ra = document.getElementById("ra").value.trim();
    const forte = document.getElementById("forte").value.trim();
    const fraco = document.getElementById("fraco").value.trim();
  
    const camposVazios = []
  
    if(nome === "") {
      camposVazios.push("Nome");
    }
    if(turma === "") {
      camposVazios.push("Turma");
    }
    if(ra === "") {
      camposVazios.push("Ra");
    }
    if(forte === "") {
      camposVazios.push("Forte");
    }
    if(fraco === "") {
      camposVazios.push("Fraco");
    }
  
    if(camposVazios.length > 0) {
      alert("Por fsvor complete as seguintes informções: " + camposVazios.join(", "));
    } else {
      alunos.innerHTML = `
          <div>
            <h1 class="inicial">${primeiraLetra}</h1>
          </div>
          <div>
            <p class="nome">${nome}</p>
            <div class="ladov1">
              <p class="sub">Ra:${ra}</p>
              <p class="sub">*</p>
              <p class="sub">Turma ${turma}</p>
            </div>
            <div class="ladov3">
              <p class="forte">${forte}</p>
              <p class="fraco">${fraco}</p>
            </div>
          </div>
      `
    }
  
  })




});
