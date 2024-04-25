const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

// Sélectionnez les éléments
var passwordInput = document.getElementById("password");
var rPasswordInput = document.getElementById("r_password");
var passErrorDiv = document.getElementById("pass_error");
var inscriptionButton = document.getElementById("inscription_bouton");

// Fonction pour vérifier si les mots de passe correspondent
function verifierMotsDePasse() {
    var password = passwordInput.value;
    var rPassword = rPasswordInput.value;

    if (password === rPassword && password !== "" && rPassword !== "") {
        // Les mots de passe correspondent
        passErrorDiv.textContent = "";
        inscriptionButton.disabled = false;
    } else {
        // Les mots de passe ne correspondent pas
        passErrorDiv.textContent = "Les mots de passe ne correspondent pas.";
        passErrorDiv.style.color = "red";
        inscriptionButton.disabled = true;
    }
}

// Ajoutez des écouteurs d'événements pour vérifier les mots de passe lors de la saisie
passwordInput.addEventListener("input", verifierMotsDePasse);
rPasswordInput.addEventListener("input", verifierMotsDePasse);
