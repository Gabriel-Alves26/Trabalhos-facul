let ladoSombrio = false;

function mudarLado() {
    const pagina = document.getElementById("pagina");
    const titulo = document.getElementById("titulo");
    const botao = document.getElementById("botao");
    const foto = document.getElementById("foto");

    if (!ladoSombrio) {
    
        pagina.style.backgroundColor = "#830000";
        titulo.textContent = "Você foi para o Lado Sombrio ";
        botao.textContent = "Voltar para o Lado da Luz";
        botao.style.backgroundColor = "crimson";
        foto.style.display = "block";
        ladoSombrio = true;
    } else {
        
        pagina.style.backgroundColor = "#e6f7ff";
        titulo.textContent = "Você está no Lado da Luz ✨";
        botao.textContent = "Ativar Modo Jedi";
        botao.style.backgroundColor = "#4da6ff";
        ladoSombrio = false;

         foto.style.display = "none";
    }
}