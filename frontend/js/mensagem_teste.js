const form = document.getElementById("formMen");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const mensagem = document.getElementById("mensagem").value;
    const p = document.getElementById("resposta")

    if (mensagem === "") {
        p.textContent = "Não tem nada"
    } else {
        fetch("http://localhost:3000/mensagem", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                mensagem: mensagem
            })

        })
            .then(res => res.json())
            .then(data => {
                p.textContent = "mensagem enviada"
            })
            .catch(error => {
                p.textContent = "algum erro"
            })
    }
})