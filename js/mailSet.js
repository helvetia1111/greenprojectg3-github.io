import {writeCmdRead, writeCmdWrite, writeUi8, readUi8, writeUi16, readUi16, writeUi32, readUi32, setBleService} from './settingService.js'
import {writeMailCmdRead, writeMailCmdWrite, readStr, writeStr, setBleMailService} from './mailSettingService.js'
import * as Server from './server.js'
import * as Mail from './mail.js'

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

  	address1.style.display = 'block'
	address2.style.display = 'block'
	address3.style.display = 'block'
	address4.style.display = 'block'
	address5.style.display = 'block'
	address6.style.display = 'block'
	address7.style.display = 'block'
	address8.style.display = 'block'
	address9.style.display = 'block'
	address10.style.display = 'block'
	address11.style.display = 'block'
	address12.style.display = 'block'
	address13.style.display = 'block'
	address14.style.display = 'block'
	address15.style.display = 'block'
	address16.style.display = 'block'
	address17.style.display = 'block'
	address18.style.display = 'block'
	address19.style.display = 'block'
	address20.style.display = 'block'
	address21.style.display = 'block'
	address22.style.display = 'block'
	address23.style.display = 'block'
}

function dispAddressBack() {
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

function disableAddress(dis) {
	Mail.disableMail(dis)
	btnAddressSet.disabled = dis
	btnAddressPassword.disabled = dis
	btnAddressBack.disabled = dis
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
btnSetAddress.addEventListener("click", function(event) {
	disableMailSet(true)
	return writeMailCmdRead(5) //email_from
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Mail.setEmailFrom(str)
		return writeCmdRead(126) //mix
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		Mail.setChecked(ui16)
		return writeMailCmdRead(6) //email_to[0]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Mail.setEmailTo1(str)
		return writeMailCmdRead(7) //email_to[1]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Mail.setEmailTo2(str)
		return writeMailCmdRead(8) //email_to[2]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Mail.setEmailTo3(str)
		return writeMailCmdRead(9) //email_to[3]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Mail.setEmailTo4(str)
		return writeMailCmdRead(10) //email_to[4]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Mail.setEmailTo5(str)
		return writeMailCmdRead(11) //email_to[5]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Mail.setEmailTo6(str)
		return writeMailCmdRead(12) //email_to[6]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Mail.setEmailTo7(str)
		return writeMailCmdRead(13) //email_to[7]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Mail.setEmailTo8(str)
		return writeMailCmdRead(14) //place
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Mail.setPlace(str)
		return writeCmdRead(1) //interval
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		console.log('interval: ' + ui16)
		Mail.setInterval(ui16)

		Mail.mailReadOnly()
		disableMailSet(false)
		dispAddress()
	})
	.catch(error => {
		console.log('error: ' + error)
		disableMailSet(false)
	})
})

let btnAddressSet = document.getElementById("addressSet")
btnAddressSet.addEventListener("click", function(event) {
	disableAddress(true)
	let email_from = Mail.getEmailFrom()
	return writeStr(email_from)
	.then(_ => {
		return writeMailCmdWrite(5) // email_from
	})
	.then(_ => {
		let ch_to = Mail.getChecked()
		return writeUi16(ch_to)
	})
	.then(_ => {
		return writeCmdWrite(227) // ch_to
	})
	.then(_ => {
		let email_to0 = Mail.getEmailTo1()
		return writeStr(email_to0)
	})
	.then(_ => {
		return writeMailCmdWrite(6) // email_to[0]
	})
	.then(_ => {
		let email_to1 = Mail.getEmailTo2()
		return writeStr(email_to1)
	})
	.then(_ => {
		return writeMailCmdWrite(7) // email_to[1]
	})
	.then(_ => {
		let email_to2 = Mail.getEmailTo3()
		return writeStr(email_to2)
	})
	.then(_ => {
		return writeMailCmdWrite(8) // email_to[2]
	})
	/*
	.then(_ => {
		let email_to3 = Mail.getEmailTo4()
		return writeStr(email_to3)
	})
	.then(_ => {
		return writeMailCmdWrite(9) // email_to[3]
	})
	.then(_ => {
		let email_to4 = Mail.getEmailTo5()
		return writeStr(email_to4)
	})
	.then(_ => {
		return writeMailCmdWrite(10) // email_to[4]
	})
	.then(_ => {
		let email_to5 = Mail.getEmailTo6()
		return writeStr(email_to5)
	})
	.then(_ => {
		return writeMailCmdWrite(11) // email_to[5]
	})
	.then(_ => {
		let email_to6 = Mail.getEmailTo7()
		return writeStr(email_to6)
	})
	.then(_ => {
		return writeMailCmdWrite(12) // email_to[6]
	})
	.then(_ => {
		let email_to7 = Mail.getEmailTo8()
		return writeStr(email_to7)
	})
	.then(_ => {
		return writeMailCmdWrite(13) // email_to[7]
	})
	.then(_ => {
		let place = Mail.getPlace()
		return writeStr(place)
	})
	.then(_ => {
		return writeMailCmdWrite(14) // place
	})
	.then(_ => {
		let interval = Mail.getInterval()
		return writeUi16(interval)
	})
	.then(_ => {
		return writeCmdWrite(1) // interval
	})
	*/
	.then(_ => {
		return writeCmdManual(18) // write mail
	})
	.then(_ => {
		disableAddress(false)
		dispAddressBack()
	})
	.catch(error => {
		console.log('error: ' + error)
		disableServer(false)
	})
})

let btnAddressPassword = document.getElementById("addressPassword")
btnAddressPassword.addEventListener("click", function(event) {
  	Mail.mailGate()
})

let btnAddressBack = document.getElementById("addressBack")
btnAddressBack.addEventListener("click", function(event) {
  	dispAddressBack()
})

let btnMailSetBack = document.getElementById("mailSetBack")
btnMailSetBack.addEventListener("click", function(event) {
	dispMailSetBack()
})
