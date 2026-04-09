let xp = 0;

function atualizarXP() {
    document.getElementById("xp").textContent = xp;
}

function ganharXP() {
    xp += 10;
    atualizarXP();
}

function perderXP() {
    xp -= 5;

    if (xp < 0) {
        xp = 0;
    }

    atualizarXP();
}