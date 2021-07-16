// DOM manipulate
// var gradient = document.getElementById("gradient");
// var col1 = document.getElementById("col1");
// var col2 = document.getElementById("col2");
// var h3 = document.querySelector("h3");



// function gradientStyle() {
//     gradient.style.background = "linear-gradient(to right, " + col1.value +
//         ", " +
//         col2.value +
//         ")";

//     h3.textContent = gradient.style.background;
// };


// col1.addEventListener("input", function() {
//     gradientStyle();
// });

// col2.addEventListener("input", function() {

//     gradientStyle();
// });

// TERNARY OPERATOR

// function checkUsername(Abdulmumin){
//     return Abdulmumin;
// }

// var whatIsYourName = checkUsername(true) ? "welcome" : "i dont know you"

// switch statement
function checkUsername(name) {
    var whatIsYourName;
    switch (name) {
        case "Abdulmumini":
            whatIsYourName = "Hi Abdulmumini" + "how are you"
            break;

        case "Usman":
            whatIsYourName = "Hi Usman" + "how are you"
            break;

        case "Imran":
            whatIsYourName = "Hi Imran" + "how are you"
            break;

        case "Umar":
            whatIsYourName = "Hi Umar" + "how are you"
            break;

        case "Shehu":
            whatIsYourName = "Hi Shehu" + "how are you"
            break;
        default:
            whatIsYourName = "sorry please enter a valid name"



    }
    return whatIsYourName;
}

// ECMA 5 AND ECMA 6

// CLOSURE

const firstFunction = () => {
    const greeting = "hello";
    const secondFunction = () => {
        alert(greeting);
    }
    return secondFunction;
};

const thirdStep = firstFunction();
thirdStep();