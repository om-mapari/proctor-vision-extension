document.addEventListener("DOMContentLoaded", function () {

    const videoObject = document.getElementById("video");
    const canvas = document.getElementById("canvas-element");
    const context = canvas.getContext("2d");
    let interval = 3000;


    navigator.mediaDevices
    .getUserMedia({
        video: true,
        audio: true,
    })
    .then((stream) => {
        videoObject.srcObject = stream;
        videoObject.addEventListener("loadedmetadata", () => {
            videoObject.play();

            var myFunction = function(){
                clearInterval(interval_timer);
                // interval *= 10;
                captureImage();
                interval_timer = setInterval(myFunction, interval);
                console.log(interval," || ",interval_timer)
            }
            var interval_timer = setInterval(myFunction,interval);


        });
    });


    function captureImage() {
        context.drawImage(videoObject, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL("image/png");

        chrome.storage.sync.get(['userid'], function(result) {
            sendImageToServer(result.userid, imageData);
        });

    }

    // Set data in local storage

    function sendImageToServer(userid, imageData) {

        axios
            .post("http://localhost:3000/upload-image", {
                userid: userid,
                image: imageData,
            })
            .then((response) => {
                interval = response.data.interval;
                // multiFace = response.data.multiFace;
            })
            .catch((error) => {
                console.log(error);
            });
    }
});
