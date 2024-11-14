document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const validUsername = "admin";
    const validPassword = "12345";

    if (username === validUsername && password === validPassword) {
        // Salvar estado de autenticação no localStorage
        localStorage.setItem("isAuthenticated", "true");
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password");
    }
});
