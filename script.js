var toggleButton = document.getElementById("toggle-skill");
var skillElements = document.getElementById("skills");
toggleButton.addEventListener("click", function () {
    if (skillElements.style.display === "none") {
        skillElements.style.display = "block";
    }
    else {
        skillElements.style.display = "none";
    }
});
