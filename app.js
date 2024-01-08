const max = prompt("Enter your maximum number");

const random = Math.floor( Math.random() * max + 1);

let guess= prompt("Guess the random number");

while (true) {
    if(guess == "q"){
        console.log("You quit");
        break;
    }

    if(guess == random){
        console.log("You guess it right. Congratt !!, Random no is:", random);
        break;
    }else if(guess < random){
        guess=prompt("Hint: Guess no is too small, Pls try again");
    } else{
        guess=prompt("Hint: Guess no is too large, Pls try again");
    }
}