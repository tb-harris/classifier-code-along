const natural = require('natural');

// create a new Bayes Classifier
const classifier = new natural.BayesClassifier();

// read JSON file and put it in trainingSet as a JS object
// array of objects containing emails labeled as spam or not
const trainingSet = require('./data/training_set.json');

// show our classifier all of the training emails (already labeled as spam or ham)
for (let i = 0; i < trainingSet.length; i++) {
    classifier.addDocument(trainingSet[i].message, trainingSet[i].label_text);
}

// ask the classifier to build a model that can predict whether future messages are spam
classifier.train();

// save our model into classifier.json
classifier.save('classifier.json', function(err, classifier) {

})