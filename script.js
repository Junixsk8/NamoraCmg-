let pagina = 0;

const paginas = document.querySelectorAll(".pagina");
const contador = document.getElementById("paginaAtual");

function proximaPagina() {
    if (pagina >= paginas.length - 1) {
        return;
    }

    paginas[pagina].classList.remove("ativa");
    pagina++;
    paginas[pagina].classList.add("ativa");
    contador.textContent = pagina + 1;

    criarCoracoes();
}

function aceitar() {
    document.getElementById("resposta").innerHTML =
        "AAAAAA! 💙🥹💍 Você acabou de deixar meu coração muito feliz! Que essa seja a primeira página de uma linda história nossa! ✨";

    criarCoracoes();

    for (let i = 0; i < 30; i++) {
        setTimeout(criarCoracoes, i * 100);
    }
}

function pensar() {
    document.getElementById("resposta").textContent =
        "Tudo bem, meu bem! 💙 Quero que você responda quando se sentir confortável. O importante é que sua resposta seja sincera. 🥹";
}

function criarCoracoes() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");

    const simbolos = ["💙", "🩵", "✨", "💎", "💫", "🤍"];
    coracao.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];

    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.fontSize = (15 + Math.random() * 25) + "px";
    coracao.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 7000);
}

setInterval(() => {
    criarCoracoes();
}, 900);