// Cart Feature
let cartCount = 0;
function addToCart() {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
}

// Greeting & Date
function displayGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) greeting = "Good Morning";
    else if (hour < 18) greeting = "Good Afternoon";
    else greeting = "Good Evening";

    const greetingEl = document.getElementById("greeting");
    const dateEl = document.getElementById("date");

    if (greetingEl && dateEl) {
        greetingEl.textContent = greeting;
        dateEl.textContent = new Date().toDateString();
    }
}
displayGreeting();

// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// Form Validation
const form = document.getElementById("contact-form");
if (form) {
    form.addEventListener("submit", function (e) {
        const email = document.getElementById("email").value;
        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            e.preventDefault();
        }
    });
}
