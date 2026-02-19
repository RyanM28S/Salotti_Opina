const main = document.getElementById("conteudo");

function renderLogin() {
    main.innerHTML = `
        <form id="formLogin">
            <input type="text" id="Nome" placeholder="Nome">
            <input type="text" id="Senha" placeholder="Senha">
            <button type="submit">Enviar</button>
            <p id="p"></p>
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

            fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify ({
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
            
            .then(response => {
                if(!response.ok) {
                    throw new Error("Conflito de informações");
                }
            return response.json()})
            .then(data => {
                p.textContent = "usuario cadastrado com sucesso"
                console.log(data);
            })
            .catch(error => {
                p.textContent = error.message;
                console.log(error);
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
