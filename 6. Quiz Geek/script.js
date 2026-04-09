let pontos = 0;
let respondidas = [false, false, false];

function responder(num, status) {
    if (respondidas[num - 1]) return;

    const feedback = document.getElementById("feedback" + num);

    if (status === "certo") {
        feedback.textContent = "✅ Acertou!";
        feedback.style.color = "lime";
        pontos++;
    } else {
        feedback.textContent = "❌ Errou!";
        feedback.style.color = "red";
    }

    respondidas[num - 1] = true;

    if (respondidas.every(r => r)) {
        mostrarResultado();
    }
}

function mostrarResultado() {
    const resultado = document.getElementById("resultado");
    resultado.textContent = "Pontuação final: " + pontos + "/3";
}