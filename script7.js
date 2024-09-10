function playVideo() {
    // Hide the buzzer icon
    document.getElementById('buzzer-icon').style.display = 'none';

    // Show and play the video
    var video = document.getElementById('video1');
    video.style.display = 'block';
    video.play();

    // Redirect to another page after the video ends
    video.onended = function() {
        window.location.href = "final.html"; // Replace with your next page URL
    };
}
