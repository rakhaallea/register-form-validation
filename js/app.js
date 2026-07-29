/* ==========================================================================
   REGISTER FORM APP (EVENT HANDLING & DOM MANIPULATION)
   ========================================================================== */

// --------------------------------------------------------------------------
// STEP 1: Targeting DOM Elements
// --------------------------------------------------------------------------
const registerForm = document.getElementById("registerForm");

// Input Fields
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// UI Indicators Elements
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");
const submitBtn = document.getElementById("submitBtn");

// --------------------------------------------------------------------------
// STEP 2: Helper Functions untuk Update Tampilan UI Error/Success
// --------------------------------------------------------------------------

/**
 * Menampilkan pesan kesalahan dan merubah border input menjadi merah
 * @param {HTMLElement} inputElement 
 * @param {string} message 
 */

function showError(inputElement, message) {
    const formGroup = inputElement.parentElement;
    const errorElement = formGroup.querySelector(".error-message");

    formGroup.classList.remove("success");
    formGroup.classList.add("error");
    errorElement.textContent = message;
}

/**
 * Menghapus pesan kesalahan dan merubah border input menjadi hijau
 * @param {HTMLElement} inputElement 
 */

function showSuccess(inputElement) {
    const formGroup = inputElement.parentElement;
    const errorElement = formGroup.querySelector(".error-message");

    formGroup.classList.remove("error");
    formGroup.classList.add("success");
    errorElement.textContent = "";
}

// --------------------------------------------------------------------------
// STEP 3: Realtime Validation Handlers
// --------------------------------------------------------------------------

// 1. Validation Handler: 
function handleUsernameValidation() {
    const result = validateUsername(usernameInput.value);
    if(!result.isValid) {
        showError(usernameInput, result.message);
        return false;
    }
    showSuccess(usernameInput);
    return true;
}

// 2. Validation Handler: Email
function handleEmailValidation() {
    const result = validateEmail(emailInput.value);
    if(!result.isValid) {
        showError(emailInput, result.message);
        return false;
    }
    showSuccess(emailInput);
    return true;
}

// 3. Validation Handler: Password Strength & Basic Length
function handlePasswordValidation(){
    const passwordValue = passwordInput.value;
    const strength = checkPasswordStrength(passwordValue);

    // Update Visual Strength Bar & Text
    strengthBar.className = `strength-bar ${strength.colorClass}`;
    strengthText.className  = `strength-text ${strength.colorClass}`;
    strengthText.textContent = strength.label ? `Kekuatan Password: ${strength.label}` : "";

    // Update Status Error / Success pada Form Group
    if(!strength.isValid) {
        showError(passwordInput, strength.message);
        return false;
    }

    showSuccess(passwordInput);

    // Re-validate confirm password jika confirm password sudah diisi
    if(confirmPasswordInput.value !== "") {
        handleConfirmPasswordValidation();
    }

    return true;
}

// 4. Validation Handler: Confirm Password
function handleConfirmPasswordValidation() {
    const result = validatePasswordMatch(passwordInput.value, confirmPasswordInput.value);
    if(!result.isValid) {
        showError(confirmPasswordInput, result.message);
        return false;
    }
    showSuccess(confirmPasswordInput);
    return true;
}

// Realtime Input Listeners (Terpemicu setiap kali user mengetik)
usernameInput.addEventListener("input", handleUsernameValidation);
emailInput.addEventListener("input", handleEmailValidation);
passwordInput.addEventListener("input", handlePasswordValidation);
confirmPasswordInput.addEventListener("input", handleConfirmPasswordValidation);

// Form Submit Handler
registerForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Jalankan seluruh validasi sekali lagi saat tombol submit diklik
    const isUsernameValid = handleUsernameValidation();
    const isEmailValid = handleEmailValidation();
    const isPasswordValid = handlePasswordValidation();
    const isConfirmPasswordValid = handleConfirmPasswordValidation();

    // Jika semua field lolos validasi
    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        alert("🎉 Registrasi Berhasil! Data Anda valid dan siap dikirim ke backend.");
        
        // Reset Form & UI State
        registerForm.reset();
        document.querySelectorAll(".form-group").forEach((group) => {
        group.classList.remove("success", "error");
        });
        strengthBar.className = "strength-bar";
        strengthText.textContent = "";
    } else {
        console.warn("⚠️ Registrasi gagal: Periksa kembali kolom input yang error.");
    }
})