// Basic interaction for the call-to-action button
(function () {
    const yearLabel = document.getElementById("year");
    if (yearLabel) {
        yearLabel.textContent = new Date().getFullYear().toString();
    }

    const ctaButton = document.getElementById("cta-button");
    if (!ctaButton) {
        return;
    }

    ctaButton.addEventListener("click", function () {
        // Simple feedback placeholder for later replacement with real behavior
        alert("Thanks for your interest in Excalibur Studios!");
    });
})();
