
const cards = document.querySelectorAll(".director-card");

cards.forEach(card => {
    const btn = card.querySelector(".plus-btn");

    btn.addEventListener("click", () => {
        card.classList.toggle("active");

        if (card.classList.contains("active")) {
            btn.textContent = "×";
        } else {
            btn.textContent = "+";
        }
    });
});

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        successMessage.textContent =
            "Siz bilan tez orada aloqaga chiqamiz!";
        successMessage.style.color = "#79C8C7";
        successMessage.style.marginTop = "20px";
        successMessage.style.fontSize = "18px";

        form.reset();
    });
}


const burger = document.querySelector(".burger");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    burger.style.display = "none";
    closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    closeBtn.style.display = "none";
    burger.style.display = "block";
});