// Simulated "database" for storing comments
let comments = [];

// Form and comment list elements
const form = document.getElementById("comment-form");
const commentsList = document.getElementById("comments-list");

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form refresh

    // Get user input
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    // Store the comment (unsanitized)
    comments.push({ name: name, text: comment });

    // Render comments
    renderComments();

    // Reset the form after submission
    form.reset();
});

// Render the stored comments
function renderComments() {
    commentsList.innerHTML = ""; // Clear the current comments

    // Loop through stored comments and append them to the list
    comments.forEach(comment => {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";

        // Vulnerable to XSS: using innerHTML to inject user input directly into the page
        commentDiv.innerHTML = `<strong>${comment.name}:</strong> ${comment.text}`;

        // Append the new comment to the comment list
        commentsList.appendChild(commentDiv);
    });
}

// Initial render of comments (if any)
renderComments();
