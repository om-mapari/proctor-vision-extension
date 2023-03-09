
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
                console.log(interval,interval_timer)
            }
            var interval_timer = setInterval(myFunction,interval);

            // setInterval(() => {
            //     // console.log(interval);
            //     captureImage();
            //     // all code----
            //     // reset interval
            // }, interval);

        });
    });

    

    // navigator.mediaDevices
    //     .getUserMedia({
    //         video: true,
    //         audio: true,
    //     })
    //     .then((stream) => {
    //         videoObject.srcObject = stream;
    //         videoObject.addEventListener("loadedmetadata", () => {
    //             videoObject.play();

    //             setInterval(() => {
    //                 // console.log(interval);
    //                 captureImage();
    //                 // all code----
    //                 // reset interval
    //             }, interval);

    //         });
    //     });

    function captureImage() {
        context.drawImage(videoObject, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL("image/png");

        const name = "your name"; // replace with the desired name data
        sendImageToServer(name, imageData);
    }

    // Set data in local storage



    function sendImageToServer(name, imageData) {

        axios
            .post("http://localhost:3000/upload-image", {
                name: name,
                image: imageData,
            })
            .then((response) => {
                interval = response.data.interval;
                // multiFace = response.data.multiFace;
                // console.log(interval);
            })
            .catch((error) => {
                console.log(error);
            });
    }
});
