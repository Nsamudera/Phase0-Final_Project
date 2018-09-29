var manual = document.createElement('div')
manual.setAttribute('id','manual')
body.appendChild(manual)

var title = document.createElement('h1')
title.innerHTML = "Welcome to Fire Emblem Fighters!"
manual.appendChild(title)

var HTP = document.createElement('h2')
HTP.innerHTML = "How To Play:"
manual.appendChild(HTP)

var obj = document.createElement('h3')
obj.innerHTML = "Objective:"
manual.appendChild(obj)

var objtxt = document.createElement('h4')
objtxt.innerHTML = "Beat the dreaded Black Knight in a 1vs1 battle"
manual.appendChild(objtxt)

var rules = document.createElement('h3')
rules.innerHTML = "Rules:"
manual.appendChild(rules)

var rulestxt = document.createElement('h4')
rulestxt.innerHTML = "There are 3 types of attack that can be performed:" + "<br>"+"1. <b>Attack</b> will unleash a regular sword strike" + "<br>" + "2. <b>Rush</b> will unleash a swift strike" +"<br>" + "3. <b>Special</b> will unleash a powerful attack" + "<br>"
var atkbtnSample = document.createElement('button')
atkbtnSample.innerHTML = 'Attack'
rulestxt.appendChild(atkbtnSample)
var rushbtnSample = document.createElement('button')
rushbtnSample.innerHTML= "Rush"
rulestxt.appendChild(rushbtnSample)
var spcbtnSample = document.createElement('button')
spcbtnSample.innerHTML= "Special"
rulestxt.appendChild(spcbtnSample)
manual.appendChild(rulestxt)

var wpTriangle = document.createElement('h3')
rules.innerHTML = "The Weapon Triangle:"
manual.appendChild(rules)

var wptxt = document.createElement('h4')
wptxt.innerHTML = "To beat the Black Knight, remember the following:" + "<br>" + "1.<b>Attack</b> is strong against <b>Rush</b>, but weak to <b>Special</b>" + "<br>" + "2.<b>Rush</b> is strong against <b>Special</b>, but weak to <b>Attack</b>"+"<br>"+"3.<b>Special</b> is strong against <b>Attack</b>, but weak to <b>Rush</b>"
manual.appendChild(wptxt)
