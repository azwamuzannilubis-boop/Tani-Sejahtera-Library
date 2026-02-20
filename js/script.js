// ================= REGISTER =================
function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Pendaftaran berhasil!");
}

// ================= LOGIN =================
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (
        email === localStorage.getItem("email") &&
        password === localStorage.getItem("password")
    ) {
        window.location.href = "home.html";
    } else {
        alert("Email atau Password salah!");
    }
}

// ================= CONTACT =================
function kirimPesan() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("emailContact").value;
    const pesan = document.getElementById("pesan").value;

    if (nama === "" || email === "" || pesan === "") {
        alert("Harap isi semua field!");
        return;
    }

    localStorage.setItem("nama", nama);
    localStorage.setItem("emailContact", email);
    localStorage.setItem("pesan", pesan);

    alert("Pesan berhasil dikirim!");
}
