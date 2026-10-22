import {writeCmdRead, writeCmdWrite, writeUi8, readUi8, writeUi16, readUi16, writeUi32, readUi32, setBleService} from './settingService.js'
import {writeMailCmdRead, writeMailCmdWrite, readStr, writeStr, setBleMailService} from './mailSettingService.js'
import * as Server from './server.js'

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

function dispServer() {
	mailSet1.style.display = 'none'
  	mailSet2.style.display = 'none'

  	server1.style.display = 'block'
	server2.style.display = 'block'
	server3.style.display = 'block'
	server4.style.display = 'block'
	server5.style.display = 'block'
	server6.style.display = 'block'
}

function dispServerBack() {
  	mailSet1.style.display = 'block'
  	mailSet2.style.display = 'block'

  	server1.style.display = 'none'
	server2.style.display = 'none'
	server3.style.display = 'none'
	server4.style.display = 'none'
	server5.style.display = 'none'
	server6.style.display = 'none'
}

function disableServer(dis) {
	Server.disableServer(dis)
	btnServerSet.disabled = dis
	btnServerPassword.disabled = dis
	btnServerBack.disabled = dis
}

function dispAddress() {
	mailSet1.style.display = 'none'
  	mailSet2.style.display = 'none'

  	addrss1.style.display = 'block'
	addrss2.style.display = 'block'
	addrss3.style.display = 'block'
	addrss4.style.display = 'block'
	addrss5.style.display = 'block'
	addrss6.style.display = 'block'
	addrss7.style.display = 'block'
	addrss8.style.display = 'block'
	addrss9.style.display = 'block'
	addrss10.style.display = 'block'
	addrss11.style.display = 'block'
	addrss12.style.display = 'block'
	addrss13.style.display = 'block'
	addrss14.style.display = 'block'
	addrss15.style.display = 'block'
	addrss16.style.display = 'block'
	addrss17.style.display = 'block'
	addrss18.style.display = 'block'
	addrss19.style.display = 'block'
	addrss20.style.display = 'block'
	addrss21.style.display = 'block'
	addrss22.style.display = 'block'
	addrss23.style.display = 'block'
}

function dispServerBack() {
  	mailSet1.style.display = 'block'
  	mailSet2.style.display = 'block'

  	address1.style.display = 'none'
	address2.style.display = 'none'
	address3.style.display = 'none'
	address4.style.display = 'none'
	address5.style.display = 'none'
	address6.style.display = 'none'
	address7.style.display = 'none'
	address8.style.display = 'none'
	address9.style.display = 'none'
	address10.style.display = 'none'
	address11.style.display = 'none'
	address12.style.display = 'none'
	address13.style.display = 'none'
	address14.style.display = 'none'
	address15.style.display = 'none'
	address16.style.display = 'none'
	address17.style.display = 'none'
	address18.style.display = 'none'
	address19.style.display = 'none'
	address20.style.display = 'none'
	address21.style.display = 'none'
	address22.style.display = 'none'
	address23.style.display = 'none'
}

function disableServer(dis) {
	Server.disableServer(dis)
	btnServerSet.disabled = dis
	btnServerPassword.disabled = dis
	btnServerBack.disabled = dis
}

let btnEmail = document.getElementById("email")
btnEmail.addEventListener("click", function(event) {
	return setBleService()
	.then(_ => {
    	return setBleMailService()
	})
	.then(_ => {
    	dispMailSet()
	})
	.catch(error => {
		console.log('error: ' + error)
	})
})

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function test() {
	await sleep(5000)
	return
}

let btnSetServer = document.getElementById("setServer")
btnSetServer.addEventListener("click", function(event) {
	disableMailSet(true)
	return writeMailCmdRead(1) //smtp_server
	.then(_ => {
		return readStr()
		//return test()
	})
	/*
	.then(_ => {
		return readStr()
	})
	*/
	.then(str => {
		Server.setSmtpServer(str)
		return writeMailCmdRead(3) //auth_id
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Server.setSmtpId(str)
		return writeMailCmdRead(4) //auth_pw
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Server.setSmtpPw(str)

		Server.serverReadOnly()
		disableMailSet(false)
		dispServer()
	})
	.catch(error => {
		console.log('error: ' + error)
		disableMailSet(false)
	})
})

let btnServerSet = document.getElementById("serverSet")
btnServerSet.addEventListener("click", function(event) {
	disableServer(true)
	let smtp_server = Server.getSmtpServer()
	console.log(`smtp ${smtp_server}`)
	return writeStr(smtp_server)
	.then(_ => {
		return writeMailCmdWrite(1) // smtp_server
	})
	.then(_ => {
		let auth_id = Server.getSmtpId()
		console.log(`id ${auth_id}`)
		return writeStr(auth_id)
	})
	.then(_ => {
		return writeMailCmdWrite(3) // auth_id
	})
	.then(_ => {
		let auth_pw = Server.getSmtpPw()
		console.log(`pw ${auth_pw}`)
		return writeStr(auth_pw)
	})
	.then(_ => {
		return writeMailCmdWrite(4) // auth_pw
	})
	.then(_ => {
		return writeCmdManual(17) // write server
	})
	.then(_ => {
		disableServer(false)
		dispServerBack()
	})
	.catch(error => {
		console.log('error: ' + error)
		disableServer(false)
	})
})

let btnServerPassword = document.getElementById("serverPassword")
btnServerPassword.addEventListener("click", function(event) {
  Server.serverGate()
})

let btnServerBack = document.getElementById("serverBack")
btnServerBack.addEventListener("click", function(event) {
  dispServerBack()
})

let btnSetAddress = document.getElementById("setAddress")

let btnMailSetBack = document.getElementById("mailSetBack")
btnMailSetBack.addEventListener("click", function(event) {
	dispMailSetBack()
})
