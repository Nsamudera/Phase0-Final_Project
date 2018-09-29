//Game functions
var playerStartHP = 100
var compStartHP = 100
var playerHealth = playerStartHP
var compHealth = compStartHP
var command = '' //stores the action that the player will take
var compAction = '' // stores the action that the computer will take
var comment = '' // stores the comment that will display each round
var soundEff =''

function fight(command) {
    compMove();
    action(command);
    HPChange();
    changePortrait();
    gameOver();
}
//To determine the move that the opponent will take
function compMove() {
    var number = Math.ceil((Math.random() * 3)) - 1
    var actionList = ['atk', 'rush', 'spc']
    for (var i = 0; i < actionList.length; i++) {
        if (i === number) {
            compAction = actionList[i]
        }
    }
}
//The main function to determine the result
function action(command) {
    console.log('Player Command: ' + command)
    console.log('Opponent Command: ' + compAction)
    if (command === 'atk' && compAction === 'atk') {
        compHealth = compHealth - 10
        playerHealth = playerHealth - 10
        comment = 'You and your opponent attack' + '<br>' + '<b>You both receive 10 damage!</b>'
        soundEff='hit'
    } else if (command === 'atk' && compAction === 'rush') {
        compHealth = compHealth - 10
        comment = 'Your opponent tried to rush you . . .' + '<br>' + 'but you manage to dodge the attack and counter him.' + '<br>' + '<b>You deal 10 damage to the Opponent</b>'
        soundEff='hit'
    } else if (command === 'atk' && compAction === 'spc') {
        playerHealth = playerHealth - 10
        comment = 'You attacked the opponent . . .' + '<br>' + 'but he used his special move and overpowered you.' + '<br>' + '<b>You take 10 damage!</b>'
        soundEff='gothit'
    } else if (command === 'rush' && compAction === 'atk') {
        playerHealth = playerHealth - 10
        comment = 'You tried to rush the opponent . . .' + '<br>' + 'but he dodges and attacked back!' + '<br>' + '<b>You take 10 damage!</b>'
        soundEff='gothit'
    } else if (command === 'rush' && compAction === 'rush') {
        compHealth = compHealth - 10
        playerHealth = playerHealth - 10
        comment = 'You both rushed at each other and <b>received 10 damage.</b>'
        soundEff='hit'
    } else if (command === 'rush' && compAction === 'spc') {
        compHealth = compHealth - 10
        comment = 'Your opponent attempted to unleash a special attack . . .' + '<br>' + 'But you rushed towards him and interupted him.' + '<br>' + '<b>You deal 10 damage!</b>'
        soundEff='hit'
    } else if (command === 'spc' && compAction === 'atk') {
        compHealth = compHealth - 10
        comment = 'You unleashed you special move and overpowered your opponent' + '<br>' + '<b>You deal 10 damage!</b>'
        soundEff='spchit'
    } else if (command === 'spc' && compAction === 'rush') {
        playerHealth = playerHealth - 10
        comment = 'You attempted to unleash a special attack . . .' + '<br>' + 'But your opponent rushed towards you and interupted you.' + '<br>' + '<b>You take 10 damage!</b>'
        soundEff='gothit'
    } else if (command === 'spc' && compAction === 'spc') {
        compHealth = compHealth - 10
        playerHealth = playerHealth - 10
        comment = 'You both unleashed your special attack! . . .' + '<br>' + '<b>You both take 10 damage!</b>'
        soundEff='spchit'
    }
    if (command === 'atk' || command === 'rush') {
        strike()
    } else if (command === 'spc') {
        special()
    }
    if (compAction === 'atk' || compAction === 'rush') {
        strikeComp()
    } else if (compAction === 'spc') {
        specialComp()
    }
    setTimeout(function () {
        normal()
    }, 500)
    document.getElementById('text').innerHTML = comment
    if(soundEff==='hit'){
        hitCompSound()
    } else if(soundEff==='gothit'){
        hitRecSound()
    } else {
        spcHit()
    }
}
//Supplement functions for action function
function strike() {
    document.getElementById('playerPortrait').classList.add('strike')
    document.getElementById('playerPortrait').classList.remove('normal')
    document.getElementById('playerPortrait').classList.remove('dmg')
}
function special() {
    document.getElementById('playerPortrait').classList.add('special')
    document.getElementById('playerPortrait').classList.remove('normal')
    document.getElementById('playerPortrait').classList.remove('dmg')
}
function strikeComp() {
    document.getElementById('compPortrait').classList.add('strike')
    document.getElementById('compPortrait').classList.remove('normal')
    document.getElementById('compPortrait').classList.remove('dmg')
}
function specialComp() {
    document.getElementById('compPortrait').classList.add('special')
    document.getElementById('compPortrait').classList.remove('normal')
    document.getElementById('compPortrait').classList.remove('dmg')
}
function normal() {
    if (playerHealth <= playerStartHP / 2) {
        document.getElementById('playerPortrait').classList.add('dmg')
        document.getElementById('playerPortrait').classList.remove('strike')
        document.getElementById('playerPortrait').classList.remove('special')
    } else {
        document.getElementById('playerPortrait').classList.add('normal')
        document.getElementById('playerPortrait').classList.remove('strike')
        document.getElementById('playerPortrait').classList.remove('special')
    }
    if (compHealth <= compStartHP / 2) {
        document.getElementById('compPortrait').classList.add('dmg')
        document.getElementById('compPortrait').classList.remove('strike')
        document.getElementById('compPortrait').classList.remove('special')
    } else {
        document.getElementById('compPortrait').classList.add('normal')
        document.getElementById('compPortrait').classList.remove('strike')
        document.getElementById('compPortrait').classList.remove('special')
    }
}
//to change the color of HP when at or below half health 
function HPChange() {
    playerHPBar.style.width = playerHealth + "%";
    compHPBar.style.width = compHealth + "%";
    if (compHealth <= compStartHP / 2) {
        document.getElementById('compHPBar').style.background = "red"
    }
    if (playerHealth <= playerStartHP / 2) {
        document.getElementById('playerHPBar').style.background = "red"
    }
}
//to change the portrait when at half health 
function changePortrait() {
    if (compHealth === compStartHP / 2) {
        document.getElementById('compPortrait').classList.add('dmg')
    }
    if (playerHealth === playerStartHP / 2) {
        document.getElementById('playerPortrait').classList.add('dmg')
    }
}
function gameOver() {
    if (playerHealth <= 0 || compHealth <= 0) {
        document.getElementsByClassName('atk')[0].disabled = true
        document.getElementsByClassName('rush')[0].disabled = true
        document.getElementsByClassName('spc')[0].disabled = true
        if (playerHealth <= 0 && compHealth > 0) {
            comment = "DEFEATED" + "<br>"
            document.getElementById('text').style.color = "red"
            document.getElementById('playerPortrait').style.filter="grayscale(100%)"
            defeat.play()
        } else if (compHealth <= 0 && playerHealth > 0) {
            comment = 'VICTORY' + "<br>"
            document.getElementById('text').style.color = "green"
            document.getElementById('compPortrait').style.filter="grayscale(100%)"
            victory.play()
        } else if (compHealth <= 0 && playerHealth <= 0) {
            comment = 'DRAW' + "<br>"
            document.getElementById('text').style.color = "yellow"
            document.getElementById('playerPortrait').style.filter="grayscale(100%)"
            document.getElementById('compPortrait').style.filter="grayscale(100%)"
            defeat.play()
        }
        document.getElementById('text').style.fontWeight = 700
        document.getElementById('text').innerHTML = comment
        textbox.appendChild(restartbtn)
        document.getElementsByClassName('restart')[0].addEventListener('click', function () {
            location.reload()
        })
    }
}
//to assign function to buttons
document.getElementsByClassName('atk')[0].addEventListener('click', function () {
    fight('atk')
})
document.getElementsByClassName('rush')[0].addEventListener('click', function () {
    fight('rush')
})
document.getElementsByClassName('spc')[0].addEventListener('click', function () {
    fight('spc')
})

//Other suplementary functions/ variables
//add music/sound effect
var victory= new Audio('Victory.mp3')
var defeat = new Audio('Defeat.mp3')
function hitCompSound (){
    var atkSound = new Audio('strike.mp3')
    atkSound.play()
    atkSound.currentTime=0
}
function hitRecSound (){
    var gotHit = new Audio('gothit.mp3')
    gotHit.play()
    gotHit.currentTime=0
}
function spcHit (){
    var spcSound = new Audio('skill.mp3')
    spcSound.play()
    spcSound.currentTime=0
}