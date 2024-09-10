function validateForm() {
    const correctPassword = "CRYPTANALYSIS"; // Replace with the actual password
    const enteredPassword = document.getElementById("login-username").value;

    if (enteredPassword === correctPassword) {
        return true; // Allow form submission
    } else {
        alert("Incorrect password. Please try again.");
        return false; // Prevent form submission
    }
}


function toggleQuestionBox(boxId) {
    const box = document.getElementById(boxId);
    if (box.classList.contains('hidden')) {
        box.classList.remove('hidden');
    } else {
        box.classList.add('hidden');
    }
}

function checkAnswer(inputId, messageId) {
    const input = document.getElementById(inputId).value.trim();
    const message = document.getElementById(messageId);
    const correctAnswers = {
        'answer1': 'Interface',
        'answer2': 'Firewall',
        'answer3': 'Password',
        'answer4': 'Malware',
        'answer5': 'Cookie',
        'answer6': 'Encryption',
    };
    
    if (input === correctAnswers[inputId]) {
        message.classList.remove('hidden');
    } else {
        alert('Incorrect answer. Please try again.');
    }
}

