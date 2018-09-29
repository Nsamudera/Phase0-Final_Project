var body = document.body;

//to create game board for character portrait
var canvasP = document.createElement('div')
canvasP.setAttribute('id','canvas')
canvasP.setAttribute('class','portrait')
body.appendChild(canvasP)

    //to put in character Portrait
    var playerPortrait = document.createElement('div')
    playerPortrait.setAttribute('id','playerPortrait')
    playerPortrait.setAttribute('class','normal')
    canvasP.appendChild(playerPortrait)

    var compPortrait = document.createElement('div')
    compPortrait.setAttribute('id','compPortrait')
    compPortrait.setAttribute('class','normal')
    canvasP.appendChild(compPortrait)

    //to put in text box
    var textbox = document.createElement('div')
    textbox.setAttribute('id','text')
    canvasP.appendChild(textbox)

//to create game board for HP BAR
var canvasHP = document.createElement('div')
canvasHP.setAttribute('id','canvas')
canvasHP.setAttribute('class','HP')
body.appendChild(canvasHP)

    //to put in HP Bars
    var playerHP = document.createElement('div')
    playerHP.setAttribute('id','playerHP')
    canvasHP.appendChild(playerHP)

    var playerHPBar = document.createElement('div')
    playerHPBar.setAttribute('id','playerHPBar')
    playerHP.appendChild(playerHPBar)

    var compHP = document.createElement('div')
    compHP.setAttribute('id','compHP')
    canvasHP.appendChild(compHP)

    var compHPBar = document.createElement('div')
    compHPBar.setAttribute('id','compHPBar')
    compHP.appendChild(compHPBar)

//to create game board for Buttons
var canvasBTN = document.createElement('div')
canvasBTN.setAttribute('id','canvas')
canvasBTN.setAttribute('class','btn')
body.appendChild(canvasBTN)

    //Button for player
    var atkbtn = document.createElement('button')
    atkbtn.setAttribute('class','atk')
    atkbtn.innerHTML = 'Attack'
    canvasBTN.appendChild(atkbtn)

    var rushbtn = document.createElement('button')
    rushbtn.setAttribute('class','rush')
    rushbtn.innerHTML = 'Rush'
    canvasBTN.appendChild(rushbtn)

    var spcbtn = document.createElement('button')
    spcbtn.setAttribute('class','spc')
    spcbtn.innerHTML = 'Special'
    canvasBTN.appendChild(spcbtn)

    var restartbtn = document.createElement('button')
    restartbtn.setAttribute('class','restart')
    restartbtn.innerHTML = 'Restart'