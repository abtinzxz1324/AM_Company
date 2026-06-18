// APPLY NOW FORM VALIDATION + ANIMATION

console.log("JS is working!");

const form = document.getElementById("applyForm");
const inputs = document.querySelectorAll("#applyForm input, #applyForm select, #applyForm textarea");
const formMessage = document.getElementById("formMessage");

// Shake animation for errors
function shake(element) {
    element.classList.add("shake");
    setTimeout(() => element.classList.remove("shake"), 300);
}

// Glow animation for success
function glow(element) {
    element.classList.add("glow");
    setTimeout(() => element.classList.remove("glow"), 500);
}

// Email validation
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            valid = false;
            input.style.border = "2px solid red";
            shake(input);
        } else {
            input.style.border = "2px solid #d4af37";
            glow(input);
        }
    });

    // Email check
    const email = document.getElementById("email");
    if (!isValidEmail(email.value.trim())) {
        valid = false;
        email.style.border = "2px solid red";
        shake(email);
    }

    // Final message
    if (!valid) {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fix the highlighted fields.";
        shake(formMessage);
        return;
    }

    // Success animation + SEND FORM
    formMessage.style.color = "#d4af37";
    formMessage.textContent = "All fields are valid! ✔";
    formMessage.classList.add("success-pop");

    setTimeout(() => {
        formMessage.classList.remove("success-pop");
        form.submit(); // ← THIS SENDS THE FORM
    }, 1500);
});