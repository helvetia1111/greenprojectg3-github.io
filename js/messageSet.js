import {writeCmdRead, writeCmdWrite, writeUi8, readUi8, writeUi16, readUi16, writeUi32, readUi32, setBleService} from './settingService.js'
import {writeMailCmdRead, writeMailCmdWrite, readStr, writeStr, setBleMailService} from './mailSettingService.js'
import * as Message from './message.js'

function dispMessage() {
	main1.style.display = 'none'
	main2.style.display = 'none'
	main5.style.display = 'none'
	main3.style.display = 'none'
	main4.style.display = 'none'

	message1.style.display = 'block'
  	message2.style.display = 'block'
  	message3.style.display = 'block'
  	message4.style.display = 'block'
  	message5.style.display = 'block'
  	message6.style.display = 'block'
  	message7.style.display = 'block'
  	message8.style.display = 'block'
  	message9.style.display = 'block'
  	message10.style.display = 'block'
  	message11.style.display = 'block'
  	message12.style.display = 'block'
  	message13.style.display = 'block'
  	message14.style.display = 'block'
 	message15.style.display = 'block'
 	message16.style.display = 'block'
  	message17.style.display = 'block'
  	message18.style.display = 'block'
  	message19.style.display = 'block'
  	message20.style.display = 'block'
  	message21.style.display = 'block'
  	message22.style.display = 'block'
  	message23.style.display = 'block'
  	message24.style.display = 'block'
  	message25.style.display = 'block'
  	message26.style.display = 'block'
  	message27.style.display = 'block'
  	message28.style.display = 'block'
  	message29.style.display = 'block'
  	message30.style.display = 'block'
  	message31.style.display = 'block'
	message32.style.display = 'block'
	message33.style.display = 'block'
}

function dispMessageBack() {
	main1.style.display = 'block'
	main2.style.display = 'block'
	main5.style.display = 'block'
	main3.style.display = 'block'
	main4.style.display = 'block'

	message1.style.display = 'none'
  	message2.style.display = 'none'
  	message3.style.display = 'none'
  	message4.style.display = 'none'
  	message5.style.display = 'none'
  	message6.style.display = 'none'
 	message7.style.display = 'none'
  	message8.style.display = 'none'
  	message9.style.display = 'none'
  	message10.style.display = 'none'
  	message11.style.display = 'none'
  	message12.style.display = 'none'
  	message13.style.display = 'none'
  	message14.style.display = 'none'
  	message15.style.display = 'none'
  	message16.style.display = 'none'
  	message17.style.display = 'none'
  	message18.style.display = 'none'
  	message19.style.display = 'none'
  	message20.style.display = 'none'
  	message21.style.display = 'none'
  	message22.style.display = 'none'
  	message23.style.display = 'none'
  	message24.style.display = 'none'
  	message25.style.display = 'none'
  	message26.style.display = 'none'
  	message27.style.display = 'none'
  	message28.style.display = 'none'
  	message29.style.display = 'none'
  	message30.style.display = 'none'
  	message31.style.display = 'none'
	message32.style.display = 'none'
	message33.style.display = 'none'
}

function disableMessage(dis) {
	Message.disableMess(dis)
	btnMessageSet.disabled = dis
	btnMessageBack.disabled = dis
}

btnMessage.addEventListener("click", function(event) {
	disableMain(true)
  	return setBleService()
	.then(_ => {
    	return setBleMailService()
	})
  	.then(_ => {
   		return writeCmdRead(20) // message
 	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		Message.setMessChecked(ui16)
		return writeMailCmdRead(20) // msg[0]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Message.setMessOff(str)
		return writeMailCmdRead(21) // msg[1]
	})
    .then(_ => {
		return readStr()
	})
	.then(str => {
		Message.setMessOn(str)
		return writeMailCmdRead(22) // msg[2]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Message.setMessEmpty(str)
		return writeMailCmdRead(23) // msg[3]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Message.setMessInErr(str)
		return writeMailCmdRead(24) // msg[4]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Message.setMessSpr1(str)
		return writeMailCmdRead(25) // msg[5]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Message.setMessSpr2(str)
		return writeMailCmdRead(26) // msg[6]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Message.setMessSpr3(str)
		return writeMailCmdRead(27) // msg[7]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Message.setMessSpr4(str)
		return writeMailCmdRead(28) // msg[8]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Message.setMessSpr5(str)
		return writeMailCmdRead(29) // msg[9]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Message.setMessSpr6(str)
		return writeMailCmdRead(30) // msg[10]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Message.setMessSpr7(str)
		return writeMailCmdRead(31) // msg[11]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Message.setMessSpr8(str)
		return writeMailCmdRead(32) // msg[12]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Message.setMessBeforeErr(str)
		return writeMailCmdRead(33) // msg[13]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Message.setMessAd(str)
		return writeMailCmdRead(34) // msg[14]
	})
	.then(_ => {
		return readStr()
	})
	.then(str => {
		Message.setMessSprErr(str)
		disableMain(false)
   		dispMessage()
	})
	.catch(error => {
		console.log('error: ' + error)
    	disableMain(false)
	})
})

let btnMessageSet = document.getElementById("messageSet")
btnMessageSet.addEventListener("click", function(event) {
	disableMessage(true)
	let mess = Message.getMessChecked()
	return writeUi16(mess)
	.then(_ => {
		return writeCmdWrite(20) // message
	})
	.then(_ => {
		let off = Message.getMessOff()
		return writeStr(off)
	})
	.then(_ => {
		return writeMailCmdWrite(20) // msg[0]
	})
	.then(_ => {
		let on = Message.getMessOn()
		return writeStr(on)
	})
	.then(_ => {
		return writeMailCmdWrite(21) // msg[1]
	})
	.then(_ => {
		let empty = Message.getMessEmpty()
		return writeStr(empty)
	})
	.then(_ => {
		return writeMailCmdWrite(22) // msg[2]
	})
	.then(_ => {
		let inErr = Message.getMessInErr()
		return writeStr(inErr)
	})
	.then(_ => {
		return writeMailCmdWrite(23) // msg[3]
	})
	.then(_ => {
		let spr1 = Message.getMessSpr1()
		return writeStr(spr1)
	})
	.then(_ => {
		return writeMailCmdWrite(24) // msg[4]
	})
	.then(_ => {
		let spr2 = Message.getMessSpr2()
		return writeStr(spr2)
	})
	.then(_ => {
		return writeMailCmdWrite(25) // msg[5]
	})
	.then(_ => {
		let spr3 = Message.getMessSpr3()
		return writeStr(spr3)
	})
	.then(_ => {
		return writeMailCmdWrite(26) // msg[6]
	})
	.then(_ => {
		let spr4 = Message.getMessSpr4()
		return writeStr(spr4)
	})
	.then(_ => {
		return writeMailCmdWrite(27) // msg[7]
	})
	.then(_ => {
		let spr5 = Message.getMessSpr5()
		return writeStr(spr5)
	})
	.then(_ => {
		return writeMailCmdWrite(28) // msg[8]
	})
	.then(_ => {
		let spr6 = Message.getMessSpr6()
		return writeStr(spr6)
	})
	.then(_ => {
		return writeMailCmdWrite(29) // msg[9]
	})
	.then(_ => {
		let spr7 = Message.getMessSpr7()
		return writeStr(spr7)
	})
	.then(_ => {
		return writeMailCmdWrite(30) // msg[10]
	})
	.then(_ => {
		let spr8 = Message.getMessSpr8()
		return writeStr(spr8)
	})
	.then(_ => {
		return writeMailCmdWrite(31) // msg[11]
	})
	.then(_ => {
		let beforeErr = Message.getMessBeforeErr()
		return writeStr(beforeErr)
	})
	.then(_ => {
		return writeMailCmdWrite(32) // msg[12]
	})
	.then(_ => {
		let ad = Message.getMessAd()
		return writeStr(ad)
	})
	.then(_ => {
		return writeMailCmdWrite(33) // msg[13]
	})
	.then(_ => {
		let sprErr = Message.getMessSprErr()
		return writeStr(sprErr)
	})
	.then(_ => {
		return writeMailCmdWrite(34) // msg[14]
	})
	.then(_ => {
		return writeCmdManual(27) // write message
	})
	.then(_ => {
		disableMessage(false)
		dispMessageBack()
	})
	.catch(error => {
		console.log('error: ' + error)
		disableMessage(false)
	})
})

let btnMessageBack = document.getElementById("messageBack")
btnMessageBack.addEventListener("click", function(event) {
  dispMessageBack()
})
