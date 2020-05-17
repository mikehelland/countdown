const vowels = [['a', 15], ['e', 21], ['i', 13], ['o', 13], ['u', 5]];
const consonants = [
    ['b', 2], ['c', 3], ['d', 6], ['f', 2], ['g', 3], ['h', 2], ['j', 1], ['k', 1], ['l', 5], ['m', 4], ['n', 8],
    ['q', 1], ['r', 9], ['s', 9], ['t', 9], ['v', 1], ['w', 1], ['x', 1], ['y', 1], ['z', 1]
];

const vowelsArray = [];
const consonantsArray = [];

vowels.forEach(vowel => {
    for (let i = 0; i < vowel[1]; i++) {
        vowelsArray.push(vowel[0]);
    };
});

consonants.forEach(vowel => {
    for (let i = 0; i < vowel[1]; i++) {
        consonantsArray.push(vowel[0]);
    };
});

function getRandomConsonant() {
    const rand = Math.floor(Math.random() * 74);
    return consonantsArray[rand];
}

function getRandomVowel() {
    const rand = Math.floor(Math.random() * 67);
    return vowelsArray[rand];
}

var buttons = document.getElementById("button-box")


var letters = []
var letterDivs = document.getElementsByClassName("letter")
var addLetter = (l) => {
    letterDivs[letters.length].innerHTML = l
    letters.push(l)

    if (letters.length === letterDivs.length) {
        buttons.style.display = "none"
        startCountdown()
    }
}
var addVowel = () => {
    addLetter(getRandomVowel())
}
var addConsonant = () => {
    addLetter(getRandomConsonant())
}

var clockHand = document.getElementById("clock-hand")
var clock = document.getElementById("clock")
clockHand.style.height = clock.clientHeight + "px"
clockHand.style.left = clock.offsetLeft + "px"

document.getElementById("consonant-button").onclick = addConsonant
document.getElementById("vowel-button").onclick = addVowel

function startCountdown () {
    clockHand.style.height = clock.clientHeight + "px"
    clockHand.style.left = clock.offsetLeft + "px"
    clockHand.style.display = "block"
    clockHand.style.transform = "rotate(0deg)"
    var deg = 0
    var handle = setInterval(function () {
        deg += 3
        clockHand.style.transform = "rotate(" + deg + "deg)"
        //clock.style.transform = "rotate(" + deg + "deg)"
        if (deg === 180) {
            clearInterval(handle)
        }
    }, 500)
}

var numbersGame = document.getElementById("numbers-game")
var lettersGame = document.getElementById("letters-game")
function startNumbers() {
    var targetNumberDiv = document.getElementById("target-number")
    lettersGame.style.display = "none"
    numbersGame.style.display = "block"
    targetNumberDiv.innerHTML = "click"

    var numberDivs = document.getElementsByClassName("number")
    for (var i = 0; i < numberDivs.length; i++) {
        numberDivs[i].innerHTML = i < 2 ?
            Math.ceil(Math.random() * 4) * 25 :
            Math.ceil(Math.random() * 10)
    }

    targetNumberDiv.onclick = e => {
        targetNumberDiv.innerHTML = 100 + Math.ceil(Math.random() * 800)
        startCountdown()
    }
}