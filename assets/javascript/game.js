//The player will have to guess the answer, just like in Hangman. This time, though, the player will guess with numbers instead of letters. 

//Here's how the app works:

// There will be four crystals displayed as buttons on the page
//write html and css for the layout and add images
  //create variable for:
  //computer generated number, total score of the player, random number for each of the four crystal,wins, losses,
  var number; // computer
  var totalScore = 0; //total score
  var ranNum = [0,0,0,0]; //crystals random number 
  var wins = 0;
  var loss = 0;

   //The player will be shown a random number at the start of the game.
   //generate a random number using math.random and display it on the screen as computer guess
   number = (Math.floor(Math.random() * 101) + 19); 
   console.log(number);

   $(".computerNum").text(number);
   // When the player clicks on a crystal, 
   //create on.click function for each crystal image that generates a number
   for(var i = 0; i < ranNum.length; i++) {
    ranNum[i] = (Math.floor(Math.random() * 12) + 1);
     console.log(ranNum);
   }

   //it will add a specific amount of points to the player's total score. 
   //on each click add the number to the total score of the player and display onscreen
   //there has to be a better way but list on.click function for each gem
   $(".redGem").click(function(){
    var gemScore = ranNum[0];
    console.log(gemScore);
    totalScore += gemScore;
    console.log(totalScore);

    $(".finalScore").text(totalScore);
    win();
    lose();
   });
   //repeat for blue
   $(".blueGem").click(function(){
    var gemScore = ranNum[1];
    console.log(gemScore);
    totalScore += gemScore;
    console.log(totalScore);

    $(".finalScore").text(totalScore);
    win();
    lose();
   });
   //repeat for green
   $(".greenGem").click(function(){
    var gemScore = ranNum[2];
    console.log(gemScore);
    totalScore += gemScore;
    console.log(totalScore);

    $(".finalScore").text(totalScore);
    win();
    lose();
   });

   //repeat for yellow
   $(".yellowGem").click(function(){
    var gemScore = ranNum[1];
    console.log(gemScore);
    totalScore += gemScore;
    console.log(totalScore);

    $(".finalScore").text(totalScore);
    win();
    lose();
   });


   //The player wins if their total score matches the random number from the beginning of the game.
   //create conditions: if total score equals to the computer generated number, alert win
   function win(){
    if(totalScore === number){
    alert("You Win!");
    wins++;
    $(".winCount").text(wins);
    reset();
    }
   }

   //The player loses if their score goes above the random number.
   //create condition for loss if the total scoree is not equal to the computer generated number. Alert loss
   function lose(){
    if(totalScore > number) {
      alert("You Lose!");
      loss++;
      $(".lossCount").text(loss);
      reset();
    }
   }
   //The game restarts whenever the player wins or loses.
   //reset the game after each alert of win/loss

    //--Reset--
     function reset(){
      number = 0; 
      totalScore = 0; 
      ranNum = [0,0,0,0]

      number = (Math.floor(Math.random() * 101) + 19);
      console.log(number);

     $(".computerNum").text(number);
    
     for(var i = 0; i < ranNum.length; i++) {
      ranNum[i] = (Math.floor(Math.random() * 12) + 1);
       console.log(ranNum);
       $(".finalScore").text(totalScore);
     }
     }

    //When the game begins again, the player should see a new random number. 
    //Also, all the crystals will have four new hidden values. 
    //Of course, the user's score (and score counter) will reset to zero.

   //The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
   //store the number of wins or losses to correct variable

  //The random number shown at the start of the game should be between 19 - 120.

  //Each crystal should have a random hidden value between 1 - 12.