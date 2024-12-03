// Handle the form submission and simulate the update action
document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    
    // Simulate email update
    document.getElementById('status').textContent = `Your email has been updated to: ${email}`;
});

// Simulate an attacker trying to perform the action without the user's consent
document.getElementById('attack-button').addEventListener('click', function() {
    // Simulate CSRF attack - changing email automatically without user's interaction
    let email = 'attacker@malicious.com'; // Simulated malicious email
    document.getElementById('status').textContent = `Email updated to: ${email} (This was done automatically by the attacker)`;
});

