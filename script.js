// LOGIN
const form = document.getElementById("loginForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
      localStorage.setItem("logged", "true");
      window.location.href = "accueil.html";
    } else {
      alert("Email invalide");
    }
  });
}

// PROTECTION
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