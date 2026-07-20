// ================= MÉMOIRE DU CIEL =================

let ciel = JSON.parse(localStorage.getItem("naos-ciel"));

if (!ciel) {
    ciel = {
        fond: [],
        poemes: [],
        lus: []
    };
}

// ================= ÉTOILES DE FOND =================

for (let i = 0; i < 90; i++) {

    let star = document.createElement("div");
    star.classList.add("etoile", "normal");

    if (!ciel.fond[i]) {

        ciel.fond[i] = {

            top: Math.random() * 100,
            left: Math.random() * 100,
            duree: 2 + Math.random() * 4,
            delai: Math.random() * 5

        };

    }

    star.style.top = ciel.fond[i].top + "vh";
    star.style.left = ciel.fond[i].left + "vw";

    star.style.animationDuration = ciel.fond[i].duree + "s";
    star.style.animationDelay = ciel.fond[i].delai + "s";

    document.body.appendChild(star);
}

// ================= ÉTOILES DES POÈMES =================

const nombreEtoiles = poemes.length;

for (let i = 0; i < nombreEtoiles; i++) {

    let star = document.createElement("div");
    star.classList.add("etoile", "poeme");

    if (!ciel.poemes[i]) {

        let positionValide = false;
        let top;
        let left;

        while (!positionValide) {

            top = 10 + Math.random() * 80;
            left = 10 + Math.random() * 80;

            // Évite la lune
            if (left > 70 && top < 30) {
                continue;
            }

            positionValide = true;

            // Vérifie la distance avec les étoiles déjà placées
            for (const autre of ciel.poemes) {

                if (!autre) continue;

                const dx = left - autre.left;
                const dy = top - autre.top;

                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 15) {
                    positionValide = false;
                    break;
                }
            }
        }

        ciel.poemes[i] = {
            top: top,
            left: left
        };
    }

    star.style.top = ciel.poemes[i].top + "vh";
    star.style.left = ciel.poemes[i].left + "vw";

    if (ciel.lus[i]) {
        star.classList.add("lu");
    }

    star.addEventListener("click", function () {

        document.getElementById("titre-poeme").textContent = poemes[i].titre;
        document.getElementById("texte-poeme").textContent = poemes[i].texte;
        document.getElementById("date-poeme").textContent = poemes[i].date;

const popup = document.getElementById("popup");

document.getElementById("titre-poeme").textContent = poemes[i].titre;
document.getElementById("texte-poeme").textContent = poemes[i].texte;
document.getElementById("date-poeme").textContent = poemes[i].date;

popup.style.display = "block";

requestAnimationFrame(() => {
    popup.scrollTop = 0;
});


        const voile = document.getElementById("voile");
        voile.style.opacity = "1";
        voile.style.pointerEvents = "auto";
        voile.onclick = fermer;

        star.classList.add("lu");

        ciel.lus[i] = true;

        localStorage.setItem(
            "naos-ciel",
            JSON.stringify(ciel)
        );

    });

    document.body.appendChild(star);
}

// ================= SAUVEGARDE =================

localStorage.setItem(
    "naos-ciel",
    JSON.stringify(ciel)
);

// ================= FERMETURE =================

function fermer() {

    const voile = document.getElementById("voile");

    document.getElementById("popup").style.display = "none";

    voile.style.opacity = "0";
    voile.style.pointerEvents = "none";
    voile.onclick = null;

}