// LOGIN
const form = document.getElementById("loginForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const errorEmail = document.getElementById("errorEmail");
    const errorPassword = document.getElementById("errorPassword");

    // reset erreurs
    errorEmail.textContent = "";
    errorPassword.textContent = "";

    // regex email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // identifiants autorisés
    const allowedEmail = "lehnazer@gmail.com";
    const allowedPassword = "Lehna93200";

    let valid = true;

    // vérif email
    if (!regex.test(email)) {
      errorEmail.textContent = "Format d'email invalide";
      valid = false;
    } else if (email !== allowedEmail) {
      errorEmail.textContent = "Email non reconnu";
      valid = false;
    }

    // vérif password
    if (password !== allowedPassword) {
      errorPassword.textContent = "Mot de passe incorrect";
      valid = false;
    }

    // si tout est OK
    if (valid) {
      localStorage.setItem("logged", "true");
      window.location.href = "accueil.html";
    }
  });
}

// PROTECTION DES PAGES
if (!window.location.pathname.includes("index.html")) {
  const isLogged = localStorage.getItem("logged");

  if (!isLogged) {
    window.location.href = "index.html";
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("logged");
  window.location.href = "index.html";
}
