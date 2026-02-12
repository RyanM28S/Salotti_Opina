const main = document.getElementById("conteudo");

function renderLogin() {
    main.innerHTML = `
        <form id="formLogin">
            <input type="text" id="Nome" placeholder="Nome">
            <input type="text" id="Senha" placeholder="Senha">
            <button tyrar</button>
            <p id="p"></p>pe="submit">Ent
        </form>
        <button id="cadastro">Não tem cadastro?</button>
    `;

    const formLogin = document.getElementById("formLogin");
    const trocarCadastro = document.getElementById("cadastro");

    formLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("Nome").value;
        const senha = document.getElementById("Senha").value;
        const p = document.getElementById("p");

        if (nome === "" && senha === "") {
            p.textContent = "Não tem nada";
        } else if (nome === "") {
            p.textContent = "Não tem o nome";
        } else if (senha === "") {
            p.textContent = "Não tem a senha";
        } else {
            p.textContent = "Tem tudo";
        }
    });

    trocarCadastro.addEventListener("click", function (event) {
        event.preventDefault();
        renderCadastro();
    });
}

function renderCadastro() {
    main.innerHTML = `
        <form id="formCadastro">
            <input type="text" id="Nome" placeholder="Nome">
            <input type="text" id="Senha" placeholder="Senha">
            <input type="text" id="Email" placeholder="Email">
            <button type="submit">Enviar</button>
            <p id="p"></p>
        </form>
        <button id="login">Já tem cadastro?</button>
    `;

    const formCadastro = document.getElementById("formCadastro");
    const trocarLogin = document.getElementById("login");

    formCadastro.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("Nome").value;
        const senha = document.getElementById("Senha").value;
        const email = document.getElementById("Email").value;
        const p = document.getElementById("p");

        if (nome === "" && senha === "" && email === "") {
            p.textContent = "Não tem nada";
        } else if (nome === "") {
            p.textContent = "Não tem nome";
        } else if (senha === "") {
            p.textContent = "Não tem senha";
        } else if (email === "") {
            p.textContent = "Não tem email";
        } else {
            p.textContent = "Tem tudo";
        }
    });

    trocarLogin.addEventListener("click", function (event) {
        event.preventDefault();
        renderLogin();
    });
}

// Inicia mostrando o login
renderLogin();
