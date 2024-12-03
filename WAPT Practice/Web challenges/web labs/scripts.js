// Function to open the selected lab when clicked
function openLab(labName) {
    // Redirect to the respective lab's folder inside the labs directory
    window.location.href = `labs/${labName}/index.html`;
}
