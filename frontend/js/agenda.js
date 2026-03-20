const apa = document.getElementById("aparece");
const cada = document.getElementById("cadastroal");
const alunos = document.getElementById("alunos");
const materia = document.getElementById("materia");
const add = document.getElementById("add");

const buscar = document.getElementById("buscar");

buscar.addEventListener('click', () => {
  const alunoB = document.getElementById("alunoB").value.trim();
  const p = document.getElementById("p");

  if(alunoB === "") {
    alert("Prencha o campos de busca")
  } else {
    fetch(`http://localhost:3000/buscar?nome=${encodeURIComponent(alunoB)}`)
    .then(res => res.json())
    .then(data => {
      p.textContent = data.mensagem
    })
    .catch(error => {
      p.textContent = error.message
    })
  }

})

apa.addEventListener('click', function () {
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
        <button id="cadaAL" >Cadastrar Aluno</button>
  `

  const cadaA = document.getElementById("cadaAL");
  cadaA.addEventListener('click', () => {

    const nome = document.getElementById("nome").value.trim();
    const primeiraLetra = nome[0];
    const turma = document.getElementById("turma").value.trim();
    const ra = document.getElementById("ra").value.trim();
    const forte = document.getElementById("forte").value.trim();
    const fraco = document.getElementById("fraco").value.trim();
    const p = document.getElementById("p")

    const camposVazios = []

    if (nome === "") {
      camposVazios.push("Nome");
    }
    if (turma === "") {
      camposVazios.push("Turma");
    }
    if (ra === "") {
      camposVazios.push("Ra");
    }
    if (forte === "") {
      camposVazios.push("Forte");
    }
    if (fraco === "") {
      camposVazios.push("Fraco");
    }

    if (camposVazios.length > 0) {
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
              <p class="sub">Turma ${turma}</p>
            </div>
            <div class="ladov3">
              <p class="forte">${forte}</p>
              <p class="fraco">${fraco}</p>
            </div>
          </div>
      `;
      fetch("http://localhost:3000/aluno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome:nome,
          ra:ra,
          turma:turma,
          forte:forte,
          fraco:fraco
        })
      })
      .then(res => res.json())
      .then(data => {
        p.textContent = data.mensagem
      })
      .catch(erro => {
        p.textContent = erro.mensagem
      })
    }


    add.addEventListener('click', () => {
      const nova = document.getElementById("inputmateria").value.trim();

      if (nova === "") {
        alert("Por favor digite sua materia");
      } else {
        materia.innerHTML = `
          <div class="materiav2">
            <div class="materiav3">
              <p class="pp">${nova} </p>
              <input type="number" min="0" max="10" step="1" value="10" id="nota" class="nota">
            </div>
          </div>
      `
      }
    })
  })

});
