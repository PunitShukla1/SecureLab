// Simulating server-side logic
let server = {
    email: null,
    updateEmail: function(newEmail) {
        // Simulate a server-side vulnerability (no CSRF token validation)
        if (newEmail) {
            this.email = newEmail;
        }
    }
};

// Handle the form submission to update the email
document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;

    // Simulate email update (on the server)
    server.updateEmail(email);

    // Display the updated email
    document.getElementById('status').textContent = `Your email has been updated to: ${server.email}`;
});

// Simulating the CSRF attack
document.getElementById('attack-button').addEventListener('click', function() {
    // Simulating CSRF attack - attacker making the request without user's consent
    let maliciousEmail = 'attacker@malicious.com'; // Simulated malicious email

    // The attacker sends the request to update the email without CSRF protection
    server.updateEmail(maliciousEmail);

    // Show the update as if it were done by the attacker
    document.getElementById('status').textContent = `Email updated to: ${server.email} (This was done automatically by the attacker)`;
});
