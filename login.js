const formLogin = document.getElementById("formLogin");
const main = document.getElementById("conteudo");
const trocarCadastro = document.getElementById("cadastro");


formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("Nome").value;
    const senha = document.getElementById("Senha").value;
    const p = document.getElementById("p");

    if (nome === "" && senha === "") {
        p.textContent = "Não tem nada"
    } else if (nome === "") {
        p.textContent = "Não tem o nome"
    } else if (senha === "") {
        p.textContent = "Não tem a senha"
    } else {
        p.textContent = "Tem tudo"
    }
});

trocarCadastro.addEventListener("click", function (event) {
    event.preventDefault();

    main.innerHTML = `
        <form id="formCadastro">
            <input type="text" id="Nome" placeholder="Nome">
            <input type="text" id="Senha" placeholder="Senha">
            <input type="text" id="Email" placeholder="Email">
            <button type="submit">Enviar</button>
            <p id="p"></p>
        </form>
        <button id="login">Ja tem cadastgro?</button>
    `
    const formCadastro = document.getElementById("formCadastro");
    const trocarLogin = document.getElementById("login");

    formCadastro.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("Nome").value;
        const senha = document.getElementById("Senha").value;
        const email = document.getElementById("Email").value;
        const p = document.getElementById("p");

        if (nome === "" && senha === "" && email === "") {
            p.textContent = "Não tem nada"
        } else if (nome === "" && senha === "") {
            p.textContent = "Não tem o nome nem senha"
        } else if (nome === "") {
            p.textContent = "Não tem nome"
        } else if (senha === "" && email ==="") {
            p.textContent = "Não tem senha e nem email"
        } else if (senha === "") {
            p.textContent = "Não tem senha"
        } else if (email === "" && nome === "") {
            p.textContent = "Não tem email nem nome"
        } else if (email === "") {
            p.textContent = "Não tem email"
        } else {
            p.textContent = "Tem tudo"
        }
    });
});

