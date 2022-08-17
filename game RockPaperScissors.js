let UserChoise = prompt ("Choose rock, scissors or paper");
let choiseComp = Math.random ();
    if (choiseComp < 0.34) {
        choiseComp = "rock";
    } else if (choiseComp <= 0.68) {
        choiseComp = "scissors";
    } else {
        choiseComp = "paper";
    }
    document.write("<p>Your choise is " + UserChoise + "</p>");
    document.write("<p>Computer's choise is  " + choiseComp + "</p><br>");

 let compare = function (variant1, variant2) {
    if (variant1 === variant2) {
        return ("Friendship won!");
    } else if (variant1 === "rock") {
        if (variant2 === "paper") {
            return ("You're lost!");
        } else {
            return ("You're winner!");
        }
    } else if (variant1 === "paper") {
        if (variant2 === "scissors") {
            return ("You're lost!");
        } else if (variant2 === "rock") {
            return ("You're winner");
            } else {
                return ("Friendship won!");
            }
        } else if (variant1 === "scissors") {
           if (variant2 === "rock") {
            return ("You're lost");
           } else if (variant2 === "paper") {
            return ("You're winner");
           } else {
            return ("Friendsip won");
           }
        }
    }

 document.write (compare (UserChoise, choiseComp));
