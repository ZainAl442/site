document.getElementById("menuBtn").addEventListener("click", function() {
    // Select all elements with the class 'hideable'
    var elements = document.querySelectorAll(".hideable");

    // Loop through the elements and hide them
    elements.forEach(function(element) {
        element.classList.toggle("hidden");
    });
});