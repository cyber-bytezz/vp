function validateForm() {
    const correctPassword = "computer security incidence response"; // Replace with the correct password
    const userInput = document.getElementById("login-username").value;

    if (userInput === correctPassword) {
        return true; // Allow form submission and navigation to the next page
    } else {
        alert("Incorrect password. Please try again.");
        return false; // Prevent form submission
    }
}

function flipCard(card) {
    card.classList.toggle('flipped');
}
