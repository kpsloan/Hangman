window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    var categories;         // Array of topics
    var chosenCategory;     // Selected catagory
    var word ;              // Selected word
    var guess ;             // Guess
    var guessed = [ ];      // Stored guesses
    var lives;             // Lives
    var counter ;           // Count correct guesses
    var space;              // Number of spaces in word '-'
  
    // Get elements
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    

 // Select Catagory
 var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "Killers";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "Film Titles";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "Monsters";
    }
  }

  // Create geusses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      wins.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "You Died";
    }
    for (var i = 0; i < wins.length; i++) {
      if (counter + space === wins.length) {
        showLives.innerHTML = "Lucky";
      }
    }
  }

 // OnClick Function
 check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          guessed[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }
  

  document.onkeyup = function(event) {

    var userGuess = event.key;
    
  // Play
  play = function () {
    categories = [
        ["michael myers", "jason voorhees", "freddy krueger", "leatherface", "norman bates", "pinhead", "count dracula", "pennywise" ],
        ["alien", "halloween", "psycho", "nightmare on elm street", "texas chainsaw massacre", "hellraiser", "the thing", "jaws"],
        ["xenomorph", "vampire", "zombie", "werewolf", "godzilla", "frankenstein" "gremlins", "cenobites"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guessed = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
  }

  play();





}