document.addEventListener("DOMContentLoaded", function () {
    const videoElement = document.getElementById("video1");

    // Enable looping programmatically
    videoElement.loop = true;

    // Listen for the video's 'timeupdate' event to detect when it's close to ending
    videoElement.addEventListener("timeupdate", function () {
        const buffer = 0.5; // Adjust this value if needed
        if (videoElement.currentTime >= videoElement.duration - buffer) {
            videoElement.loop = false; // Disable looping before the video ends
        }
    });

    // Listen for the 'ended' event to trigger the redirect
    videoElement.addEventListener("ended", function () {
        window.location.href = "fifth.html"; // Replace with the actual URL of your next page
    });
});
