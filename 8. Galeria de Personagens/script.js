function mostrarDetalhes(personagem) {
    const detalhes = document.getElementById("detalhes");

    if (personagem === "arthur") {
        detalhes.innerHTML = `
            <h2>Arthur Morgan</h2>
            <p>Fora da lei do Velho Oeste, membro da gangue Van der Linde e
            o melhor pistoleiro.</p>
        `;
    }

    if (personagem === "leon") {
        detalhes.innerHTML = `
            <h2>Leon S. Kennedy</h2>
            <p>Agente especial do governo e perito em combater ameaças biológicas.</p>
        `;
    }

    if (personagem === "batman") {
        detalhes.innerHTML = `
            <h2>Batman</h2>
            <p>O Cavaleiro das Trevas, protetor de Gotham.</p>
        `;
    }

    if (personagem === "guts") {
        detalhes.innerHTML = `
            <h2>Guts</h2>
            <p>Guerreiro marcado pelo destino a sofrer como um sacrificio pela
            sua vida toda.</p>
        `;
    }

    if (personagem === "jin") {
        detalhes.innerHTML = `
            <h2>Jin Sakai</h2>
            <p>O Samurai que abandonou sua honra para 
            se torna o Fantasma para salvar Tsushima.</p>
        `;
    }

     if (personagem === "shadow") {
        detalhes.innerHTML = `
            <h2>Shadow</h2>
            <p>O ouriço que perdeu tudo em sua vida apenas sobrando seu desejo de vingança.</p>
        `;
     }
}