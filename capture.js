
var videoElement = document.createElement("video");
videoElement.setAttribute("id", "video");
videoElement.style.position = "absolute";
videoElement.style.top = '10px';
videoElement.style.right = 0;
videoElement.style.height = '200px';
videoElement.style.width = '400px';
var canvasElement = document.createElement("canvas");
canvasElement.setAttribute("id", "canvas-element");
var axiosScript = document.createElement("script");
axiosScript.src = "axios.js"

window.addEventListener("load", function () {
    const element = document.getElementsByTagName("body")[0];
    element.appendChild(videoElement)
    element.appendChild(canvasElement)
    element.appendChild(axiosScript)
    const videoObject = document.getElementById("video");
    const canvas = document.getElementById("canvas-element");
    canvas.style.display = "none";
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
                captureImage();
                interval_timer = setInterval(myFunction, interval);
                // console.log(interval,interval_timer)
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

    function sendImageToServer(userid, imageData) {

        axios
            .post("http://localhost:3000/upload-image", {
                userid: userid,
                image: imageData,
            })
            .then((response) => {
                interval = response.data.interval;
            })
            .catch((error) => {
                console.log(error);
            });
    }  
});
