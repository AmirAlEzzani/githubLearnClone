const inputBtn = document.getElementById("confirmImport");
const genQuestion = document.getElementById("genQuestion");
const question = document.getElementById("question");
const answer1 = document.getElementById("option1");
const answer2 = document.getElementById("option2");
const answer3 = document.getElementById("option3");
const answer4 = document.getElementById("option4");
answer1.style.backgroundColor="white";
answer1.style.fontWeight="bold";
answer1.style.color="black";
answer2.style.backgroundColor="white";
answer2.style.fontWeight="bold";
answer2.style.color="black";
answer3.style.backgroundColor="white";
answer3.style.fontWeight="bold";
answer3.style.color="black";
answer4.style.backgroundColor="white";
answer4.style.fontWeight="bold";
answer4.style.color="black";
let termsArray = [];
let wordList = [];
let defList = [];
inputBtn.addEventListener("click", function() {
    const input = document.getElementById("import").value;
    
    
    termsArray = input.split("\n");
    console.log(termsArray);
    for (let i = 0; i < termsArray.length; i++) {
        let splitTerms = termsArray[i].split(",");
        let word = splitTerms[0];
        let def = splitTerms[1];

        wordList.push(word);
        defList.push(def);
        const words = document.getElementById("words");
        const defs = document.getElementById("defs");
        words.addEventListener("click", function() {
            console.log(wordList);
        }); 
        defs.addEventListener("click", function() {
            console.log(defList);
        });  
    };
});
genQuestion.addEventListener("click", function() {
    answer1.style.backgroundColor="white";

    answer2.style.backgroundColor="white";
    answer3.style.backgroundColor="white";
    answer4.style.backgroundColor="white";
    
    answer1.classList.remove("correct");
    
    answer2.classList.remove("correct");
    
    answer3.classList.remove("correct");
    
    answer4.classList.remove("correct");

    let correct = Math.floor(Math.random() * termsArray.length);
    
    
    console.log("correct " + correct);
    let incorrect1 = Math.floor(Math.random() * termsArray.length);
    let incorrect2 = Math.floor(Math.random() * termsArray.length);
    let incorrect3 = Math.floor(Math.random() * termsArray.length);
    let incorrect4 = Math.floor(Math.random() * termsArray.length);
    while (correct == incorrect1) {
        incorrect1 = Math.floor(Math.random() * termsArray.length);
    }
    while (correct == incorrect2) {
        incorrect2 = Math.floor(Math.random() * termsArray.length);
    }
    while (correct == incorrect3) {
        incorrect3 = Math.floor(Math.random() * termsArray.length);
    }
    while (correct == incorrect4) {
        incorrect4 = Math.floor(Math.random() * termsArray.length);
    }
    
    answer1.innerText = wordList[incorrect1];
    answer2.innerText = wordList[incorrect2];
    answer3.innerText = wordList[incorrect3];
    answer4.innerText = wordList[incorrect4];

    question.innerText = defList[correct];
    let randomizer = Math.floor(Math.random() * 3);
    if (randomizer == 0) {
        answer1.innerText = wordList[correct];
        answer1.classList.add("correct");
    }
    else if (randomizer == 1) {
        answer2.innerText = wordList[correct];
        answer2.classList.add("correct");
    }
    else if (randomizer == 2) {
        answer3.innerText = wordList[correct];
        answer3.classList.add("correct");
    }
    else if (randomizer == 3) {
        answer4.innerText = wordList[correct];
        answer4.classList.add("correct");
    }

    function showDefinitions() {
        answer1.innerText = wordList[incorrect1] + ": " + defList[incorrect1];
        answer2.innerText = wordList[incorrect2] + ": " + defList[incorrect2];
        answer3.innerText = wordList[incorrect3] + ": " + defList[incorrect3];
        answer4.innerText = wordList[incorrect4] + ": " + defList[incorrect4];
        let correctAnswer = document.querySelector(".correct");
        correctAnswer.innerText = wordList[correct] + ": " + defList[correct];
    }

    answer1.addEventListener("click", function() {
        if (this.classList.contains("correct")) {
            console.log("correct");
            this.style.backgroundColor="rgba(0,255,0,0.5)";
        }
        else {
            console.log("incorrect");
            this.style.backgroundColor="rgba(255,0,0,0.5)";
            let showAnswer = document.querySelector("correct");
            showAnswer.style.backgroundColor="rgba(0,255,0,0.3)";
            
            
        }
        showDefinitions();
        
    });  
    answer2.addEventListener("click", function() {
        if (this.classList.contains("correct")) {
            console.log("correct");
            this.style.backgroundColor="rgba(0,255,0,0.5)";
        }
        else {
            console.log("incorrect");
            this.style.backgroundColor="rgba(255,0,0,0.5)";
            let showAnswer = document.querySelector("correct");
            showAnswer.style.backgroundColor="rgba(0,255,0,0.3)";
        }
        showDefinitions();
    });  
    answer3.addEventListener("click", function() {
        if (this.classList.contains("correct")) {
            console.log("correct");
            this.style.backgroundColor="rgba(0,255,0,0.5)";
        }
        else {
            console.log("incorrect");
            this.style.backgroundColor="rgba(255,0,0,0.5)";
            let showAnswer = document.querySelector("correct");
            showAnswer.style.backgroundColor="rgba(0,255,0,0.3)";
        }
        showDefinitions();
    });  
    answer4.addEventListener("click", function() {
        if (this.classList.contains("correct")) {
            console.log("correct");
            this.style.backgroundColor="rgba(0,255,0,0.5)";
        }
        else {
            console.log("incorrect");
            this.style.backgroundColor="rgba(255,0,0,0.5)";
            let showAnswer = document.querySelector("correct");
            showAnswer.style.backgroundColor="rgba(0,255,0,0.3)";
        }
        showDefinitions();
    });  
});  


  

