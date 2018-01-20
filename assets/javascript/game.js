    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = [];
    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    document.onkeyup = function(event) {

      var letterGuessed = event.key.toLowerCase();

      if(alphabet.indexOf(letterGuessed) >= 0 && guessesSoFar.indexOf(letterGuessed) === -1) {
        guessesSoFar.push(letterGuessed);
        guessesLeft--;
        // console.log(randomLetter);
      }

      if(letterGuessed === randomLetter) {
        wins++;
        guessesLeft = 9;
        guessesSoFar = [];
        alert("You were right! I was thinking of " + randomLetter + "!")
        randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        // console.log(randomLetter);
      }

      if(guessesLeft === 0) {
        alert("You lose! I was thinking of " + randomLetter + ".");
        losses++;
        guessesLeft = 9;
        guessesSoFar = [];
        randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        // console.log(randomLetter);
      }

      document.getElementById("wins").innerHTML = wins;
      document.getElementById("losses").innerHTML = losses;
      document.getElementById("guessesLeft").innerHTML = guessesLeft;
      document.getElementById("guessesSoFar").innerHTML = guessesSoFar;

    };