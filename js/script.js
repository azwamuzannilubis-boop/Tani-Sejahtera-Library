// ================= REGISTER =================
function register() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!firstName || !lastName || !phone || !email || !password) {
        alert("Harap isi semua data!");
        return;
    }

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("isLogin", "true");

    alert("Pendaftaran berhasil!");
    window.location.href = "index.html";
}

// ================= LOGIN =================
function login() {
    const firstName = document.getElementById("firstNameLogin").value;
    const lastName = document.getElementById("lastNameLogin").value;
    const password = document.getElementById("passwordLogin").value;

    if (
        firstName === localStorage.getItem("firstName") &&
        lastName === localStorage.getItem("lastName") &&
        password === localStorage.getItem("password")
    ) {
        localStorage.setItem("isLogin", "true");
        window.location.href = "index.html";
    } else {
        alert("Data login salah!");
    }
}

// ================= CEK LOGIN =================
function checkLogin() {
    if (localStorage.getItem("isLogin") !== "true") {
        window.location.href = "login.html";
    }
}

// ================= LOGOUT =================
function logout() {
    localStorage.removeItem("isLogin");
    window.location.href = "login.html";
}

// ================= CONTACT =================
function kirimPesan() {
    const email = document.getElementById("emailContact").value;
    const phone = document.getElementById("phoneContact").value;
    const pesan = document.getElementById("pesan").value;

    if (!email || !phone || !pesan) {
        alert("Harap isi semua field!");
        return;
    }

    alert("Pesan berhasil dikirim!");
}
