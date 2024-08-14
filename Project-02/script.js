let boxes = document.querySelectorAll(".box");
let rest_btn = document.querySelector("#rest_Btn");
let new_btn = document.querySelector("#new_btn");
let winner_el = document.querySelector(".winner_El");
// tic tac toie khela jattta he to alterative trun atty he mtlb phle x fir y
let turn_pl = true; //player Z, player H
//1d arry [1,2,3,4,5] and 2d arry [[1,2,3],[4,5,6]]

let win_patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]; //2d arry set ye hamre wining patterns ha
// console.log(win_patterns);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box was click");
    if (turn_pl) {
      //playerZ
      box.innerHTML = "Z";
      turn_pl = false;
      box.classList.add("box_1");
    } else {
      //playerH
      box.innerHTML = "H";
      turn_pl = true;
      box.classList.add("box_2");
    }
    box.disabled = true;
    chick_winner();
  });
});

const chick_winner = () => {
  for (let pattern_ of win_patterns) {
    // console.log(pattern_);
    let pos0Val_ = boxes[pattern_[0]].innerHTML;
    let pos1Val_ = boxes[pattern_[1]].innerHTML;
    let pos2Val_ = boxes[pattern_[2]].innerHTML;
    if (pos0Val_ != "" && pos1Val_ != "" && pos2Val_ != "") {
      if (pos0Val_ === pos1Val_ && pos1Val_ === pos2Val_) {
        // console.log("Zaheer Abbas you are winner", pos0Val_);
        show_winner(pos0Val_);
      }
    }
  }
};

const show_winner = (winner) => {
  let NameOf_win = "Abbas";
  if ((winner = "Z" && winner != "H")) {
    winner = `Zaheer ${NameOf_win}`;
    winner_el.classList.add("box_1");
  } else {
    winner = `Hassnain ${NameOf_win}`;
    winner_el.classList.add("box_2");
    winner_el.classList.remove("box_1");
  }
  // winner_el.innerHTML = winner_el.innerHTML + ` winner is ${winner}`;
  winner_el.innerHTML = `Congratulation winner is ${winner}`;
  winner_el.classList.remove("hide_El");
  disable_boxes();
};

const disable_boxes = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};

const enable_boxes = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

const reset_game = () => {
  turn_pl = true;
  enable_boxes();
  remove_Cl();
  winner_el.classList.add("hide_El");
};

const new_game = () => {
  reset_game();
};

rest_btn.addEventListener("click", reset_game);
new_btn.addEventListener("click", new_game);
let remove_Cl = () => {
  for (const box of boxes) {
    box.classList.remove("box_1");
    box.classList.remove("box_2");
  }
};
