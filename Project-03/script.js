let choices_ = document.querySelectorAll(".choices");
let msg_ = document.querySelector("#msg");
let userScore_Para = document.querySelector("#user_score");
let compScore_Para = document.querySelector("#comp_score");
let user_Score = 0;
let comp_Score = 0;

choices_.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const user_Choice = choice.getAttribute("id");
    // console.log(user_Choice);
    play_game(user_Choice);
  });
});

let genComputer_choice = () => {
  const options_Array = ["rock", "paper", "scissors"];
  // console.log(options_Array);
  const randIndex = Math.floor(Math.random() * 3);
  // console.log(randIndex);
  return options_Array[randIndex];
};

let play_game = (user_Choice) => {
  //this is user choice
  // console.log("user choice is = ", user_Choice);
  //this is computer choice
  const comp_Choice = genComputer_choice();
  // console.log("comp choices is = ", comp_Choice);
  //these also fighting eachother
  if (user_Choice === comp_Choice) {
    //draw game
    draw_Game();
  } else {
    let usear_win = true;
    if (user_Choice === "rock") {
      //paper,scissors
      usear_win = comp_Choice === "paper" ? false : true;
      // console.log(usear_win);
    } else if (user_Choice === "paper") {
      //rock,scissors
      usear_win = comp_Choice === "scissors" ? false : true;
    } else {
      //rock,paper
      usear_win = comp_Choice === "rock" ? false : true;
    }
    show_winner(usear_win, user_Choice, comp_Choice);
  }
};

let draw_Game = () => {
  // console.log("Game was draw");
  msg_.innerHTML = "Game was draw! Play again";
  msg_.style.backgroundColor = "#081b31";
};

let show_winner = (usear_win, user_Choice, comp_Choice) => {
  if (usear_win) {
    user_Score++;
    userScore_Para.innerHTML = user_Score;
    // console.log("you win");
    msg_.innerHTML = `You win! your ${user_Choice} beats ${comp_Choice}`;
    msg_.style.backgroundColor = "green";
  } else {
    comp_Score++;
    compScore_Para.innerHTML = comp_Score;
    // console.log("you lose");
    msg_.innerHTML = `You lose! ${comp_Choice} beats your ${user_Choice}`;
    msg_.style.backgroundColor = "red";
  }
};
