// Simulated "database" for user profiles
const users = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
    { id: 3, name: 'Charlie', role: 'User' }
];

// Form and profile section elements
const form = document.getElementById("profile-form");
const profileSection = document.getElementById("profile-info");

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form refresh

    // Get user ID from input
    const userId = parseInt(document.getElementById("user-id").value);

    // Find user by ID (vulnerable to IDOR)
    const user = users.find(u => u.id === userId);

    // Display user profile if found
    if (user) {
        profileSection.innerHTML = `
            <strong>Name:</strong> ${user.name} <br>
            <strong>Role:</strong> ${user.role}
        `;
    } else {
        profileSection.innerHTML = `<p>User not found. Try a different ID.</p>`;
    }
});
