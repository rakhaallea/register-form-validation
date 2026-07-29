/* ==========================================================================
   VALIDATION LOGIC (PURE FUNCTIONS)
   ========================================================================== */

/**
 * 1. Validasi Username
 * Syarat: Minimal 3 karakter, hanya boleh huruf, angka, dan underscore.
 * @param {string} username 
 * @returns {object} { isValid: boolean, message: string }
 */
function validateUsername(username) {
    const trimmed = username.trim();

    if(trimmed === "") {
        return { isValid: false, message: "Username tidak boleh kosong." };
    }

    if (trimmed.length < 3) {
        return { isValid: false, message: "Username harus memiliki minimal 3 karakter." };
    }

    // RegEx: Hanya huruf (a-z, A-Z), angka (0-9), dan underscore (_)
    const usernamePattern = /^[a-zA-Z0-9_]+$/;
    if (!usernamePattern.test(trimmed)) {
        return { isValid: false, message: "Username hanya boleh mengandung huruf, angka, dan underscore." };
    }

    return { isValid: true, message: "" };
}

/**
 * 2. Validasi Email menggunakan RegEx
 * Syarat: Format email standar (nama@domain.com)
 * @param {string} email 
 * @returns {object} { isValid: boolean, message: string }
 */
function validateEmail(email) {
    const trimmed = email.trim();

    if(trimmed === "") {
        return { isValid: false, message: "Email tidak boleh kosong." };
    }

    // RegEx: Format email standar
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(trimmed)) {
        return { isValid: false, message: "Format email tidak valid (contoh: nama@domain.com)." };
    }

    return { isValid: true, message: "" };
}

/**
 * 3. Indikator & Validasi Kekuatan Password (Password Strength)
 * Mengukur tingkat keamanan kata sandi berdasarkan kriteria kompleksitas.
 * @param {string} password 
 * @returns {object} { score: number, label: string, colorClass: string, isValid: boolean, message: string }
 */

function checkPasswordStrength(password) {
    if(password === "") {
        return { score: 0, label: "", colorClass: "", isValid: false, message: "Password tidak boleh kosong." };
    }

    if (password.length < 8) {
        return { 
            score: 1, 
            label: "Lemah", 
            colorClass: "weak", 
            isValid: false, message: 
            "Password harus memiliki minimal 8 karakter." 
        };
    }

    let score = 0;

    // Kriteria perhitungan poin kekuatan
    if(password.length >= 8) score++; 
    if(/[[a-z]/.test(password) && /[A-Z]/.test(password)) score++; // Gabungan Huruf Kecil & Besar
    if((/[0-9]/.test(password))) score++; // Memiliki Angka
    if(/[^A-Za-z0-9]/.test(password)) score++; // Memiliki Simbol/Karakter Khusus

    // Menentukan Level berdasarkan Score
    if(score <= 2) {
        return { score, label: "Lemah", colorClass: "weak", isValid: false, message: "" };
    } else if(score === 3) {
        return { score, label: "Sedang", colorClass: "medium", isValid: true, message: "" };
    } else {
        return { score, label: "Kuat", colorClass: "strong", isValid: true, message: "" };
    }
}

/**
 * 4. Validasi Kesamaan Password (Password Match)
 * Memastikan Confirm Password sama dengan Password utama.
 * @param {string} password 
 * @param {string} confirmPassword 
 * @returns {object} { isValid: boolean, message: string }
 */

function validatePasswordMatch(password, confirmPassword) {
    if(confirmPassword === "") {
        return { isValid: false, message: "Konfirmasi password tidak boleh kosong." };
    }

    if(password !== confirmPassword) {
        return { isValid: false, message: "Konfirmasi password tidak cocok dengan password utama." };
    }

    return { isValid: true, message: "" };
}

