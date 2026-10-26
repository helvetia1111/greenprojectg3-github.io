import {writeCmdRead, writeCmdWrite, writeUi8, readUi8, writeUi16, readUi16, writeUi32, readUi32, setBleService} from './settingService.js'
import {writeMailCmdRead, writeMailCmdWrite, readStr, writeStr, setBleMailService} from './mailSettingService.js'

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
}

function dispMailSetBack() {
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
}

function disableMailSet(dis) {
  btnMonitor.disabled = dis
	btnOperation.disabled = dis
	btnSetting.disabled = dis
  btnEmail.disabled = dis
  btnSetSeason1.disabled = dis
  btnSetSeason2.disabled = dis
  btnSetSeason3.disabled = dis
  btnSetSeason4.disabled = dis
  btnMessage.disabled = dis
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
		Season.setStartMo(ui8)
		return writeCmdRead(27) // start_da1
	})
    
  	.then(_ => {
		return readUi8()
	})
	.then(ui8 => {
		Season.setStartDa(ui8)
		return writeCmdRead(28) // stop_mo1
	})
  	.then(_ => {
		return readUi8()
	})
	.then(ui8 => {
		Season.setStopMo(ui8)
		return writeCmdRead(29) // stop_da1
	})
  	.then(_ => {
		return readUi8()
	})
	.then(ui8 => {
		Season.setStopDa(ui8)
		return writeCmdRead(124) // mix_season
	})
  	.then(_ => {
		return readUi8()
	})
	.then(ui8 => {
		Season.setMixSeason(ui8)
		if (gType == 0) {
			return writeCmdRead(30) // start1_1_or_end
		}
		else {
			disableMain(false)
    		dispSeasonSet()
			return Promise.resolve()
		}
	})
  	.then(_ => {
		if (gType == 0) {
			return readUi16()
		}
	})
	.then(ui16 => {
		if (gType == 0) {
			Season.setStartHH1(ui16 / 60 % 24)
			Season.setStartMM1(ui16 % 60)
			return writeCmdRead(31) // start2_1
		}
	})
  	.then(_ => {
		if (gType == 0) {
			return readUi16()
		}
	})
	.then(ui16 => {
		if (gType == 0) {
			Season.setStartHH2(ui16 / 60 % 24)
			Season.setStartMM2(ui16 % 60)
			return writeCmdRead(146) // start3_1
		}
	})
  	.then(_ => {
		if (gType == 0) {
			return readUi16()
		}
	})
	.then(ui16 => {
		if (gType == 0) {
			Season.setStartHH3(ui16 / 60 % 24)
			Season.setStartMM3(ui16 % 60)
			return writeCmdRead(147) // start4_1
		}
	})
  	.then(_ => {
		if (gType == 0) {
			return readUi16()
		}
	})
	.then(ui16 => {
		if (gType == 0) {
			Season.setStartHH4(ui16 / 60 % 24)
			Season.setStartMM4(ui16 % 60)
    		disableMain(false)
    		dispSeasonSet()
		}
	})
	.catch(error => {
		console.log('error: ' + error)
    	disableMain(false)
	})
})
