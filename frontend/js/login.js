const main = document.getElementById("conteudo");

function renderLogin() {
    main.innerHTML = `
        <form id="formLogin">
            <input type="text" id="Nome" placeholder="Nome">
            <input type="text" id="Senha" placeholder="Senha">
            <button type="submit" class ="bLogin">Enviar</button>
            <p id="p" class="white"></p>
        </form>
        <button id="cadastro">Não tem cadastro?</button>
    `;

    const formLogin = document.getElementById("formLogin");
    const trocarCadastro = document.getElementById("cadastro");

    formLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("Nome").value.trim();
        const senha = document.getElementById("Senha").value.trim();
        const p = document.getElementById("p");

        if (nome === "" && senha === "") {
            p.textContent = "Não tem nada";
        } else if (nome === "") {
            p.textContent = "Não tem o nome";
        } else if (senha === "") {
            p.textContent = "Não tem a senha";
        } else {

            fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome: nome,
                    senha: senha
                })
            })
                .then(res => res.json())
                .then(data => {
                    p.textContent = data.mensagem;
                })
                .catch(error => {
                    p.textContent = "erro no serviodr";
                })
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
            <p id="p"class="white"></p>
        </form>
        <button id="login" class ="bcadastro">Já tem cadastro?</button>
    `;

    const formCadastro = document.getElementById("formCadastro");
    const trocarLogin = document.getElementById("login");

    formCadastro.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("Nome").value.trim();
        const senha = document.getElementById("Senha").value.trim();
        const email = document.getElementById("Email").value.trim();
        const p = document.getElementById("p");

        const camposVazios = [];

        if (nome === "") camposVazios.push("nome");
        if (senha === "") camposVazios.push("senha");
        if (email === "") camposVazios.push("email");

        if (camposVazios.length === 0) {
            fetch("http://localhost:3000/cadastro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome: nome,
                    senha: senha,
                    email: email
                })
            })

                .then(res => {
                    if (!res.ok) {
                        throw new Error("Conflito de informações");
                    }
                    return res.json()
                })
                .then(data => {
                    p.textContent = "usuario cadastrado com sucesso"
                })
                .catch(error => {
                    p.textContent = error.message;
                });

        } else {
            p.textContent = "Falta: " + camposVazios.join(", ");
        }
    });

    trocarLogin.addEventListener("click", function (event) {
        event.preventDefault();
        renderLogin();
    });
}

renderCadastro();
