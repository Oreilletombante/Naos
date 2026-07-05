// ================= ETOILES DE FOND =================

for (let i = 0; i < 90; i++) {

    let star = document.createElement("div");
    star.classList.add("etoile", "normal");

    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";

    star.style.animationDuration = (2 + Math.random() * 4) + "s";
    star.style.animationDelay = Math.random() * 5 + "s";

    document.body.appendChild(star);
}


// ================= ETOILES AVEC POÈMES =================

const nombreEtoiles = poemes.length;

for (let i = 0; i < nombreEtoiles; i++) {

    let star = document.createElement("div");
    star.classList.add("etoile", "poeme");

    // Position aléatoire
    star.style.top = (10 + Math.random() * 80) + "vh";
    star.style.left = (10 + Math.random() * 80) + "vw";

    // Évite que les étoiles soient trop proches de la lune
    while (
        parseFloat(star.style.left) > 70 &&
        parseFloat(star.style.top) < 30
    ) {
        star.style.top = (10 + Math.random() * 80) + "vh";
        star.style.left = (10 + Math.random() * 80) + "vw";
    }

    star.addEventListener("click", function () {

        document.getElementById("titre-poeme").textContent = poemes[i].titre;
        document.getElementById("texte-poeme").textContent = poemes[i].texte;

        document.getElementById("popup").style.display = "block";
        document.getElementById("voile").style.opacity = "1";

        star.classList.add("lu");

    });

    document.body.appendChild(star);

}


// ================= FERMETURE =================

function fermer() {

    document.getElementById("popup").style.display = "none";
    document.getElementById("voile").style.opacity = "0";

}