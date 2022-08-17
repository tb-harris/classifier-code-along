// references to our HTML elements
const inputBox = document.getElementById("message-input");
const button = document.getElementById("submit-button");
const resultP = document.getElementById("result");

// load in our classifier
const classifier = natural.BayesClassifier.restore(classifierObj);

// function called every time we click submit
button.onclick = function (event) {
    // stop our webpage from refreshing
    event.preventDefault();

    const label = classifier.classify(inputBox.value);

    if (label == "spam") {
        resultP.innerHTML = "SPAM";
        resultP.style.backgroundColor = "rgb(255, 57, 57)";
    }
    else { // not spam
        resultP.innerHTML = "OK";
        resultP.style.backgroundColor = "rgb(57, 255, 57)";
    }
}