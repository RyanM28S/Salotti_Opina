//aqui voce esta falado por javascript o que cada coisa por exemplo btnadicionar e o elemento que tiver esse id no cado um botao
const inputnome = document.getElementById("nome");
const inputturma = document.getElementById("turma");
const inputra = document.getElementById("ra");
const btnadicionar = document.getElementById("btnadicionar");
const listaalunos = document.getElementById("listaalunos");
const inputforte = document.getElementById("forte");
const inputfraco = document.getElementById("fraco");

const alunos = [];

// isso e uma funçao que vai ouvi o botao sendo que voce ja falou qual era e vai ativa a funcao que const naquilo de novo porem um diferente tipo ele ta falando aluno e o que ele digita no inpu que voce declarou antes 
btnadicionar.addEventListener("click", function () {
  const nome = inputnome.value;
  const turma = inputturma.value;
  const ra = inputra.value;
  const forte = inputforte.value;
  const fraco = inputfraco.value;

  //se aluno que voce ja falou o que era for igual a nada return que e para o codigo e um alert
  if (nome === "" || turma === "" || ra === ""||forte === "" ||fraco === "") {
    alert("prencha todos os campos");
    return;
  }
//aluno e um objeto com nome o que ele digita no input e dai endiante
  const aluno = {
    nome: nome,
    turma: turma,
    ra: ra,
    forte: forte,
    fraco: fraco,
  };
  //pega as informacoes do aluno no caso um objeto e coloca na lista de cima
  alunos.push(aluno);

  rederizaralunos();
//isso e para que quando voce ja tiver salvado vai limpa os valores do input
  inputnome.value = "";
  inputturma.value = "";
  inputra.value = "";
  inputforte.value ="";
  inputfraco.value = "";

});
//a funcao remover com paramentro index que uma simples variavel que vai recebe o valor do i a baixo que vai fala a posicao do aluno 
function remover(index) {
  //apague um 1 intem na posicao index por index e 1 apague 1 iten da posicao um da lista alunos
  alunos.splice(index, 1);
  //depois ele vai execultar a funcão rederinzar
  rederizaralunos();
}
//funcao rederizar ele pegar  o conteudo com id e limpa no caso igual a nada
function rederizaralunos() {
  listaalunos.innerHTML = "";
// aqui e um loop o for que consiste em tres passos inicio;condição;aumento.
// variavel i rcebe 0 repita o loop enquanto i for menor que a quantidade de intens da lista alunos;i aumenta 1
  for (let i = 0; i < alunos.length; i++) {
    listaalunos.innerHTML += `
        <div class="card-aluno">
          <div>
            <p class="p0"><strong>${alunos[i].nome}</strong></p>
            <div class="flex">
            <p class="p1"><strong>Turma:</strong>${alunos[i].turma} - </p>
            <p class="p2"><strong> Ra:</strong>${alunos[i].ra}</p>
            </div>
            <div class="flex">
            <p class="p3"><strong>Pontos fortes:</strong></p>
            <p class="p1">${alunos[i].forte}</p>
            </div>
            <div class="flex">
            <p class="p4"><strong>Pontos fracos:</strong></p>
            <p class="p1">${alunos[i].fraco}</p>
            </div>
          </div>
          <div>
            <button onclick= 'remover(${i})' class="remover"><img src="img/icons8-trash (5).svg" alt="lixo"></button>
          </div>
        </div>
        :`;
  }
  //ele vai troca o que tiver id lista alunos por esse codigo que eu digitei
  //so que p nome : $ para mistura striger com variabel na lista alunos pegar o inten na posicao di indiice especificamente o nome 
}
//pegar index recebe o valor da pociçao no caso i  entao fica apague 1 inten na posicao i da lista alunos
function remover(index){
  alunos.splice(index,1)
  //vai execultar rederizar no caso limpa e desenha so que sem aquele inten
  rederizaralunos()
}

