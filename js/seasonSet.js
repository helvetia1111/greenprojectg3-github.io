import {writeCmdRead, writeCmdWrite, writeUi8, readUi8, writeUi16, readUi16, writeUi32, readUi32, setBleService} from './settingService.js'
import * as Season from './season.js'

function dispSeasonSet() {
	main1.style.display = 'none'
	main2.style.display = 'none'
	main5.style.display = 'none'
	main3.style.display = 'none'
	main4.style.display = 'none'

  	season1.style.display = 'block'
  	season2.style.display = 'block'
  	season3.style.display = 'block'
  	if (gSeasonNum == 0) {
    	season41.style.display = 'block'
  	}
  	else if (gSeasonNum == 1) {
    	season42.style.display = 'block'
  	}
  	else if (gSeasonNum == 2) {
    	season43.style.display = 'block'
  	}
  	else if (gSeasonNum == 3) {
    	season44.style.display = 'block'
  	}
  	if(gType == 0) {
    	season5.style.display = 'block'
    	season6.style.display = 'block'
    	season7.style.display = 'block'
    	season8.style.display = 'block'
    	season9.style.display = 'block'
    	season10.style.display = 'block'
    	season11.style.display = 'block'
    	season12.style.display = 'block'
    	season13.style.display = 'block'
    	season14.style.display = 'block'
  	}
}

function dispSeasonBack() {
	main1.style.display = 'block'
	main2.style.display = 'block'
	main5.style.display = 'block'
	main3.style.display = 'block'
	main4.style.display = 'block'

	season1.style.display = 'none'
  	season2.style.display = 'none'
  	season3.style.display = 'none'
 	season41.style.display = 'none'
 	season42.style.display = 'none'
  	season43.style.display = 'none'
  	season44.style.display = 'none'
  	season5.style.display = 'none'
  	season6.style.display = 'none'
  	season7.style.display = 'none'
  	season8.style.display = 'none'
  	season9.style.display = 'none'
  	season10.style.display = 'none'
  	season11.style.display = 'none'
  	season12.style.display = 'none'
  	season13.style.display = 'none'
  	season14.style.display = 'none'
}

function disableMain(dis) {
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

function disableSeasonSet(dis) {
	Season.disableSeason(dis)
	btnSetWeek1.disabled = dis
	btnSetWeek2.disabled = dis
 	btnSetWeek3.disabled = dis
  	btnSetWeek4.disabled = dis
  	btnSetOpeTime1.disabled = dis
  	btnSetOpeTime2.disabled = dis
  	btnSetOpeTime3.disabled = dis
  	btnSetOpeTime4.disabled = dis
  	btnSeasonSet.disabled = dis
	btnSeasonBack.disabled = dis
}

let gSeasonNum = 0
btnSetSeason1.addEventListener("click", function(event) {
	disableMain(true)
	gSeasonNum = 0
	return setBleService()
  	.then(_ => {
    	return writeCmdRead(26) // start_mo1
  	})
	.then(_ => {
		return readUi8()
	})
	.then(ui8 => {
		console.log(`ui8:${ui8}`)
		Season.setStartMo(ui8)
		return writeCmdRead(27) // start_da1
	})
  	.then(_ => {
		return readUi8()
	})
	.then(ui8 => {
		console.log(`ui8:${ui8}`)
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
		Season.setMixSeason(ui8, gSeasonNum)
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

const btnSeasonSet = document.getElementById("seasonSet")

const btnSeasonBack = document.getElementById("seasonBack")

const btnSetWeek1 = document.getElementById("setWeek1")

const btnSetOpeTime1 = document.getElementById("setOpeTime1")

const btnSetWeek2 = document.getElementById("setWeek2")

const btnSetOpeTime2 = document.getElementById("setOpeTime2")

const btnSetWeek3 = document.getElementById("setWeek3")

const btnSetOpeTime3 = document.getElementById("setOpeTime3")

const btnSetWeek4 = document.getElementById("setWeek4")

const btnSetOpeTime4 = document.getElementById("setOpeTime4")
