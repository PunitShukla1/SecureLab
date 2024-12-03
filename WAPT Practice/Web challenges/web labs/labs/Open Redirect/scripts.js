// Form and redirect section elements
const form = document.getElementById("redirect-form");
const redirectUrlInput = document.getElementById("redirect-url");

// Handle form submission for redirect
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form refresh

    // Get the URL entered by the user
    let redirectUrl = redirectUrlInput.value.trim();

    // Add "http://" if the URL doesn't have a protocol
    if (!redirectUrl.startsWith("http://") && !redirectUrl.startsWith("https://")) {
        redirectUrl = "http://" + redirectUrl; // Default to "http" if no protocol
    }

    // Redirect to the provided URL
    if (redirectUrl) {
        window.location.href = redirectUrl; // Redirect to the entered URL
    } else {
        alert("Please enter a valid URL.");
    }
});
