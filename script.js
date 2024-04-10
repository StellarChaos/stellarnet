document.addEventListener('DOMContentLoaded', (event) => {
    const fullVideo = document.getElementById('fullVideo');
    const loopVideo = document.getElementById('loopVideo');
    let fullVideoLoaded = false;
    let loopVideoLoaded = false;

    function isMobileDevice() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    if (isMobileDevice()) {
        // Change the video source for mobile devices
        fullVideo.src = 'mountains.mp4';
    }
    else{
        // Function to check if both videos are loaded
        function checkAndPlayFullVideo() {
            if (fullVideoLoaded && loopVideoLoaded) {
                fullVideo.play();
            }
        }

        // Event listeners for when each video is loaded
        fullVideo.addEventListener('loadeddata', function() {
            fullVideoLoaded = true;
            checkAndPlayFullVideo();
        });

        loopVideo.addEventListener('loadeddata', function() {
            loopVideoLoaded = true;
            checkAndPlayFullVideo();
        });

        // Event listener for when the full video ends
        fullVideo.onended = () => {
            fullVideo.style.display = 'none';
            loopVideo.style.display = 'block';
            loopVideo.play();
            loopVideo.loop = true;
        };
    }


});
