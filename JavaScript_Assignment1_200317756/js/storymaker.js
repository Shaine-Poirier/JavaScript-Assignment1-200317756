// Assignment 1 | COMP1073 Client-Side JavaScript

// Author: Shaine Poirier
// Date: 2023-09-30

/* Variables
-------------------------------------------------- */
// Constants for main button and studentId query selectors
var noun1 = document.querySelector("#noun1");
var verb = document.querySelector("#verb");
var adjective = document.querySelector("#adjective");
var noun2 = document.querySelector("#noun2");
var setting = document.querySelector("#setting");
var studentId = document.getElementById("studentId");

// Constants for p tag to display query selectors
var chooseNoun = document.querySelector("#chooseNoun1");
var chooseVerb = document.querySelector("#chooseVerb");
var chooseAdjective = document.querySelector("#chooseAdjective");
var chooseNoun2 = document.querySelector("#chooseNoun2");
var chooseSetting = document.querySelector("#chooseSetting");

// Constants for final buttons and p tags
var playback = document.querySelector("#playback");
var random = document.querySelector("#random");
var story = document.querySelector("#story");

// Variables for pre-defined arrays
var noun1Array = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var verbArray = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjectiveArray = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var noun2Array = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var settingArray = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
var noun1Index = 0;
var verbIndex = 0;
var adjectiveIndex = 0;
var noun2Index = 0;
var settingIndex = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    chooseNoun.textContent = noun1Array[noun1Index];
    // if-else to change count setting
    if(noun1Index >= noun1Array.length){
        noun1Index = 0;
    }
    else{
        noun1Index++;
    }
}

function verb_on_click() {
    // variable to get array element and displaying it
    chooseVerb.textContent = verbArray[verbIndex];
    // if-else to change count setting
    if(verbIndex >= verbArray.length){
        verbIndex = 0;
    }
    else{
        verbIndex++;
    }
}

function adjective_on_click() {
    // variable to get array element and displaying it
    chooseAdjective.textContent = adjectiveArray[adjectiveIndex];
    // if-else to change count setting
    if(adjectiveIndex >= adjectiveArray.length){
        adjectiveIndex = 0;
    }
    else{
        adjectiveIndex++;
    }
}

function noun2_on_click() {
    //variable to get array element and displaying it
    chooseNoun2.textContent = noun2Array[noun2Index];
    // if-else to change count setting
    if(noun2Index >= noun2Array.length){
        noun2Index = 0;
    }
    else{
        noun2Index++;
    }
}

function setting_on_click() {
    //variable to get array element and displaying it
    chooseSetting.textContent = settingArray[settingIndex];
    // if-else to change count setting
    if(settingIndex >= settingArray.length){
        settingIndex = 0;
    }
    else{
        settingIndex++;
    }
}

// concatenate the user story and display
function playback_on_click() {
    //variable to hold the story user generated story
    var newStory = chooseNoun.textContent + " " +
        chooseVerb.textContent + " " +
        chooseAdjective.textContent + " " +
        chooseNoun2.textContent + " " +
        chooseSetting.textContent;
    //if the user input a name then use the name instead of noun1
    if(studentId.value){
        newStory = newStory.replace(chooseNoun.textContent, studentId.value);
        story.textContent = newStory;
    }
    else{
        story.textContent = newStory;
    }
}
// function that returns a random element from an array
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
// grabbing random element from arrays, concatenate and display
function random_on_click() {
    var noun1Random = randomValueFromArray(noun1Array);
    var verbRandom = randomValueFromArray(verbArray);
    var adjectiveRandom = randomValueFromArray(adjectiveArray);
    var noun2Random = randomValueFromArray(noun2Array);
    var settingRandom = randomValueFromArray(settingArray);
    //Display the randomly generated story
    story.textContent = noun1Random + " " +
                        verbRandom + " " +
                        adjectiveRandom + " " +
                        noun2Random + " " +
                        settingRandom;
}

/* Event Listeners
-------------------------------------------------- */
// Event Listeners for the buttons that create the elements of the user story
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);

// Event Listeners for the buttons that display the user story and random story
playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);