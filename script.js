document.getElementById("darkBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formStatus").innerText = "Thank you! Your message has been sent to Priyanshi.";
});
