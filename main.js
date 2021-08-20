//I want to create an app for an user to pick a random domino!
//let matchingSelector = document.querySelector()

function getRandomNumber (min, max) { // min and max included 
    // SOURCE: https://stackoverflow.com/a/7228322/1034856
    // LICENSE: https://creativecommons.org/licenses/by-sa/4.0/
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let dominoCharacters = "🁣🁤🁥🁦🁧🁨🁩🁪🁫🁬🁭🁮🁯🁰🁱🁲🁳🁴🁵🁶🁷🁸🁹🁺🁻🁼🁽🁾🁿🂀🂁🂂🂃🂄🂅🂆🂇🂈🂉🂊🂋🂌🂍🂎🂏🂐🂑🂒🂓"
let dominoList = Array.from(dominoCharacters)
console.log(dominoList)

let firstIndex = 0
let lastIndex = dominoList.length - 1
// I want a random number between firstIndex and lastIndex
let randomIndex = getRandomNumber(firstIndex, lastIndex)
let randomDominoCharacter = dominoList[randomIndex]
console.log(randomDominoCharacter)

for (let index = 0; index < dominoList.length; index+=1) {
    let currentDominoCharacter = dominoList[index]

let dominoElement = document.createElement("div") // <div></div>
dominoElement.append(currentDominoCharacter)       // <div>🁶</div>
dominoElement.classList.add("domino") // <div class="domino selected">🁶</div>

let mainElement= document.querySelector("main")
mainElement.append(dominoElement)

if ( currentDominoCharacter === randomDominoCharacter){
    dominoElement.classList.add("selected")
}
}