(function () {
    let myHeading = document.querySelector("h1");
    let myImage = document.querySelector("img");
    let myButton = document.querySelector("button");

    myImage.onclick = function () {
        let mySrc = myImage.getAttribute("src");
        if (mySrc === "images/firefox-icon.png") {
            myImage.setAttribute("src", "images/firefox2.png")
        } else {
            myImage.setAttribute("src", "images/firefox-icon.png")
        }
    };
    
    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        let storedName = localStorage.getItem("name");
        myHeading.textContent = "Mozilla is cool, " + storedName;
    }

    function setUserName() {
        let myName = prompt("Please enter your name.");
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla is cool, " + myName;
    }

    myButton.onclick = function () {
        setUserName();
    }
})();