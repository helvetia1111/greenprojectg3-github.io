import {writeCmdRead, writeCmdWrite, writeUi8, readUi8, writeUi16, readUi16, writeUi32, readUi32, setBleService} from './settingService.js'

function dispMailSet() {
	main1.style.display = 'none'
	main2.style.display = 'none'
	main5.style.display = 'none'
	main3.style.display = 'none'
	main4.style.display = 'none'

	mailSet1.style.display = 'block'
  	mailSet2.style.display = 'block'
}

function dispMailSetBack() {
	main1.style.display = 'block'
	main2.style.display = 'block'
	main5.style.display = 'block'
	main3.style.display = 'block'
	main4.style.display = 'block'

	mailSet1.style.display = 'none'
  	mailSet2.style.display = 'none'
}

function disableMailSet(dis) {
	btnSetServer.disabled = dis
	btnSetAddress.disabled = dis
	btnMailSetBack.disabled = dis
}

let btnEmail = document.getElementById("email")
btnEmail.addEventListener("click", function(event) {
	return setBleService()
	.then(_ => {
    	dispMailSet()
	})
	.catch(error => {
		console.log('error: ' + error)
	})
})

let btnSetServer = document.getElementById("setServer")

let btnSetAddress = document.getElementById("setAddress")

let btnMailSetBack = document.getElementById("mailSetBack")
btnMailSetBack.addEventListener("click", function(event) {
	dispMailSetBack()
})
