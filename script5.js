const correctPassword = "Intrusion detection system"; // Replace with your actual password

        function goToPage(page) {
            window.location.href = page;
        }

        function checkInput() {
            const userInput = document.getElementById('user-input').value;
            if (userInput === correctPassword) {
                window.location.href = 'fifthvideo.html'; // Replace with your next page URL
            } else {
                alert('Incorrect password!');
            }
        }


        