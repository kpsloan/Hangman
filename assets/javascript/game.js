
var game = {

    // this can come from an array and be randomly selected at startup
    category: '',
    word: '',
    categories: {
        'Killers': [
            "michael myers",
            "jason voorhees",
            "freddy krueger",
            "leatherface",
            "norman bates",
            "pinhead",
            "count dracula",
            "pennywise"
        ],
        'Film Titles': [
            "alien",
            "halloween",
            "psycho",
            "nightmare on elm street",
            "texas chainsaw massacre",
            "hellraiser",
            "the thing",
            "jaws"
        ],
        'Monsters': [
            "xenomorph",
            "vampire",
            "zombie",
            "werewolf",
            "godzilla",
            "frankenstein",
            "gremlins",
            "cenobites"
        ]
    },
    guesses: [],
    lives: 6,
    hasWon: false,

    getCategoryWord: function () {
        var keys = Object.keys(this.categories)
        var category = keys[Math.floor(keys.length * Math.random())];

        var words = this.categories[category];

        this.category = category;
        this.word = words[Math.floor(words.length * Math.random())];

    },

    drawBlanks: function () {
        var e = document.querySelector('#blanks');
        var output = [];
        var isSolved = true;
        for (var i = 0; i < this.word.length; i++) {
            if (this.guesses.indexOf(this.word.charAt(i)) > -1) {
                //found a match
                output.push(this.word.charAt(i).toUpperCase());
            } else if (this.word.charAt(i) == ' ') {
                output.push(' ');
            } else {
                output.push('_');
                isSolved = false;
            }
        }

        e.innerHTML = output.join(' ');

        if (isSolved) {
            this.hasWon = true;
        }
        var lives = document.getElementById("lives");
        lives.innerHTML = "You have " + this.lives + " chances";

        var topic = document.getElementById('topic');
        topic.innerHTML = this.category;
    },

    checkGuess: function (guess) {
        if (this.word.indexOf(guess) > -1) {
            // got one right
            this.guesses.push(guess);
            return true;
        } else {
            //increment wrong counter
            this.lives--;
            return false;
        }
    },

    play: function (guess) {
        // check empty guess box, this isn't dark souls

        //check for valid letter i guess
        var lives = document.getElementById("lives");
        this.checkGuess(guess)
        lives.innerHTML = "You have " + this.lives + " chances";

        this.drawBlanks();

        if (this.lives < 1) {
            lives.innerHTML = "You Died";
            var res = confirm('Play again?');
            if (res) {
                this.newGame();
            }
        }

        if (this.hasWon) {
            lives.innerHTML = "Lucky";
            var res = confirm('Play again?');
            if (res) {
                this.newGame();
            }
        }
    },

    newGame: function () {
        this.lives = 6;
        this.hasWon = false;
        this.guesses = [];
        this.getCategoryWord();
        this.drawBlanks();
    }
}

window.onkeypress = function () {
    input = String.fromCharCode(event.keyCode).toLowerCase();
    game.play(input);
}

//startup
game.getCategoryWord();
game.drawBlanks();



