document.addEventListener("DOMContentLoaded", function () {

    // Automatically set the current year in all footer elements.
    document.querySelectorAll(".current-year").forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

    // Highlight the current navigation page.
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".navbar .nav-link").forEach(function (link) {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

    // Contact form validation and demo submission.
    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    if (form && message) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!form.checkValidity()) {
                event.stopPropagation();
                form.classList.add("was-validated");
                return;
            }

            message.classList.remove("d-none");
            form.reset();
            form.classList.remove("was-validated");
        });
    }

    // Back-to-top button.
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", function () {
            backToTop.style.display = window.scrollY > 400 ? "inline-flex" : "none";
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

});
