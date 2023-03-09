const form = document.querySelector("form");
chrome.storage.sync.get(['userid','firstName','lastName','email'], function(result) {
    document.getElementById("f_name").value = result.firstName;
    document.getElementById("l_name").value = result.lastName;
    document.getElementById("email").value = result.email;
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = JSON.stringify({
        firstName: document.getElementById("f_name").value,
        lastName: document.getElementById("l_name").value,
        email: document.getElementById("email").value,
        testInvitation: document.getElementById("test_invitation").value,
    });
    // console.log(data);
    fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
    })
        .then((response) => response.json())
        .then((data_result) => {
            var payload = {
                firstName: document.getElementById("f_name").value,
                lastName: document.getElementById("l_name").value,
                email: document.getElementById("email").value,
            }
            payload['userid'] = data_result.userid;
            chrome.storage.sync.set(payload, function() {
                window.close();
            });
    });
});