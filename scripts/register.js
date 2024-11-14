document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    alert(`User Registered:\nUsername: ${username}\nEmail: ${email}`);
    window.location.href = "login.html";
});
