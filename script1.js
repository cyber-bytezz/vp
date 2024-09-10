function validateForm() {
    const correctPassword = "Game Of Threats"; // Replace with the actual password
    const enteredPassword = document.getElementById("login-username").value;

    if (enteredPassword === correctPassword) {
        return true; // Allow form submission
    } else {
        alert("Incorrect password. Please try again.");
        return false; // Prevent form submission
    }
}
