// Toggle dynamic header style
const dynamicButton = document.getElementById("dynamic-button");
const dynamicHeader = document.getElementById("dynamic-header");

dynamicButton.addEventListener("click", () => {
    if (dynamicHeader.classList.contains("default-style")) {
        dynamicHeader.textContent = "I just changed styles!";
        dynamicHeader.classList.replace("default-style", "changed-style");
    } else {
        dynamicHeader.textContent = "I am a dynamic header!";
        dynamicHeader.classList.replace("changed-style", "default-style");
    }
});

// Live text preview
const liveInput = document.getElementById("live-input");
const livePreview = document.getElementById("live-preview");

liveInput.addEventListener("input", () => {
    livePreview.textContent = liveInput.value;
});
