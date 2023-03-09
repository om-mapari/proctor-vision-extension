const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = JSON.stringify({
        firstName: document.getElementById("f_name").value,
        lastName: document.getElementById("l_name").value,
        email: document.getElementById("email").value,
        testInvitation: document.getElementById("test_invitation").value,
    });

    fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log("Data was saved on the server");
            // window.location.href='./videoCapture.html'
            window.open("./videoCapture.html", "_blank");
        });
});
