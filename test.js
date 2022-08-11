const natural = require('natural');

// keep track of various counts
let counts = { 'spam': 0, 'ham': 0 };
let numCorrect = { 'spam': 0, 'ham': 0 };
let numPredicted = { 'spam': 0, 'ham': 0 };

// load in classifier
natural.BayesClassifier.load('classifier.json', null, function (err, classifier) {
    // load in test set
    let testSet = require('./data/test_set.json');

    for (let i = 0; i < testSet.length; i++) {
        let prediction = classifier.classify(testSet[i].text);
        let actual = testSet[i].label_text;

        counts[actual]++;
        numPredicted[prediction]++;

        if (prediction == actual) {
            numCorrect[prediction]++;
        }
    }

    console.log(numCorrect);
    for (label of Object.keys(counts)) {
        console.log(`== ${label} ==`);
        console.log(`Proportion of ${label} predictions that were correct (precision): ${(numCorrect[label] / numPredicted[label]) * 100}%`);
        console.log(`Proportion of ${label} found (recall): ${(numCorrect[label] / counts[label]) * 100}%`);
        console.log();
    }
});

