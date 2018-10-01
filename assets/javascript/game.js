window.onload = function () {

    var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var lives;
    var counter;
    var space;
    var score = 0;
    var categories;
    var selectedCategory;
    var word;
    var guess;
    var guessed = [];
    var showLives = document.getElementById("lives");
    var showCatagory = document.getElementById("selectedCategory");



    // Select catagory
    var selectCat = function () {
        if (selectedCategory === categories[0]) {
            topic.innerHTML = "Killers";
        } else if (selectedCategory === categories[1]) {
            topic.innerHTML = "Film Titles";
        } else if (selectedCategory === categories[2]) {
            topic.innerHTML = "Monsters";
        }
    }

    // Create guesses list
    result = function () {
        wordHolder = document.getElementById('box');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === " ") {
                guess.innerHTML = " ";
                space = 1;
            } else {
                guess.innerHTML = "_";
                space = 1;
            }

            guessed.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }


    // Show lives
    comments = function () {
        showLives.innerHTML = "You have " + lives + " chances";
        if (lives < 1) {
            showLives.innerHTML = "You Died";
        }
        for (var i = 0; i < guessed.length; i++) {
            if (counter + space === guessed.length) {
                wins++;
                showLives.innerHTML = "Lucky";
            }
        }
    }

    wins = function () {
        document.querySelector("#wins").innerHTML = "Escaped Death " + score;
    }

    // OnKey Function

    window.onkeypress = function () {
        var letter = event.key.toLowerCase();
        if (letter === guess) {

        } else (letter === guessed) {

        }

    }

    checkGuess = function (guess) {
        if (this.word.indexOf(guess) > -1) {
            // got one right
            this.guess.push(guess);
            return true;
        } else {
            //increment wrong counter
            this.guessed++;
            return false;
        }
    }



    //Play  
    play = function () {
        categories = [
            ["michael myers", "jason voorhees", "freddy krueger", "leatherface", "norman bates", "pinhead", "count dracula", "pennywise"],
            ["alien", "halloween", "psycho", "nightmare on elm street", "texas chainsaw massacre", "hellraiser", "the thing", "jaws"],
            ["xenomorph", "vampire", "zombie", "werewolf", "godzilla", "frankenstein", "gremlins", "cenobites"]
        ];

        selectedCategory = categories[Math.floor(Math.random() * categories.length)];
        word = selectedCategory[Math.floor(Math.random() * selectedCategory.length)];
        word = word.replace(/\s/g, "_");
        console.log(word);


        guessed = [];
        lives = 6;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        wins();
    }

    play();

}
    
}





