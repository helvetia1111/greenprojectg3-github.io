import {writeCmdRead, writeCmdWrite, writeUi8, readUi8, writeUi16, readUi16, writeUi32, readUi32, setBleService} from './settingService.js'
import * as Season from './season.js'
import * as Week from './week.js'
import * as SprTime from './sprTime.js'

function dispSeasonSet() {
	main1.style.display = 'none'
	main2.style.display = 'none'
	main5.style.display = 'none'
	main3.style.display = 'none'
	main4.style.display = 'none'

	season1.textContent = `時間設定${gSeasonNum + 1}`
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

function dispWeek() {
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

	week1.textContent = `灌水${gWeekNum + 1}曜日`
	week1.style.display = 'block'
	week2.style.display = 'block'
	week3.style.display = 'block'
	week4.style.display = 'block'
	week5.style.display = 'block'
}

function dispWeekBack() {
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

	week1.style.display = 'none'
	week2.style.display = 'none'
	week3.style.display = 'none'
	week4.style.display = 'none'
	week5.style.display = 'none'
}

function disableWeekSet(dis) {
	Week.disableWeek(dis)
	btnWeekSet.disabled = dis
	btnWeekBack.disabled = dis
}

function dispOpeTime() {
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

	opeTime1.textContent = `灌水${gOpeNum + 1}曜日`
	opeTime1.style.display = 'block'
	opeTime2.style.display = 'block'
	opeTime3.style.display = 'block'
	opeTime4.style.display = 'block'
	opeTime5.style.display = 'block'
	opeTime6.style.display = 'block'
	opeTime7.style.display = 'block'
	opeTime8.style.display = 'block'
	opeTime9.style.display = 'block'
	opeTime10.style.display = 'block'
	opeTime11.style.display = 'block'
}

function dispOpeTimeBack() {
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

	opeTime1.style.display = 'none'
	opeTime2.style.display = 'none'
	opeTime3.style.display = 'none'
	opeTime4.style.display = 'none'
	opeTime5.style.display = 'none'
	opeTime6.style.display = 'none'
	opeTime7.style.display = 'none'
	opeTime8.style.display = 'none'
	opeTime9.style.display = 'none'
	opeTime10.style.display = 'none'
	opeTime11.style.display = 'none'
}

function disableOpeTimeSet(dis) {
	SprTime.disableSprTime(dis)
	btnSprTimeSet.disabled = dis
	btnSprTimeBack.disabled = dis
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

const btnSeasonSet = document.getElementById("seasonSet")
btnSeasonSet.addEventListener("click", function(event) {
	disableSeasonSet(true)
	let start_mo = Season.getStartMo()
	return writeUi8(start_mo)
	.then(_ => {
		if (gSeasonNum == 0) {
			return writeCmdWrite(26) // start_mo1
		}
		else if (gSeasonNum == 1) {
			return writeCmdWrite(50) // start_mo2
		}
		else if (gSeasonNum == 2) {
			return writeCmdWrite(74) // start_mo3
		}
		else {
			return writeCmdWrite(98) // start_mo4
		}
	})
	.then(_ => {
		let start_da = Season.getStartDa()
		return writeUi8(start_da)
	})
	.then(_ => {
		if (gSeasonNum == 0) {
			return writeCmdWrite(27) // start_da1
		}
		else if (gSeasonNum == 1) {
			return writeCmdWrite(51) // start_da2
		}
		else if (gSeasonNum == 2) {
			return writeCmdWrite(75) // start_da3
		}
		else {
			return writeCmdWrite(99) // start_da4
		}
	})
	.then(_ => {
		let stop_mo = Season.getStopMo()
		return writeUi8(stop_mo)
	})
	.then(_ => {
		if (gSeasonNum == 0) {
			return writeCmdWrite(28) // stop_mo1
		}
		else if (gSeasonNum == 1) {
			return writeCmdWrite(52) // stop_mo2
		}
		else if (gSeasonNum == 2) {
			return writeCmdWrite(76) // stop_mo3
		}
		else {
			return writeCmdWrite(100) // stop_mo4
		}
	})
	.then(_ => {
		let stop_da = Season.getStopDa()
		return writeUi8(stop_da)
	})
	.then(_ => {
		if (gSeasonNum == 0) {
			return writeCmdWrite(29) // stop_da1
		}
		else if (gSeasonNum == 1) {
			return writeCmdWrite(53) // stop_da2
		}
		else if (gSeasonNum == 2) {
			return writeCmdWrite(77) // stop_da3
		}
		else {
			return writeCmdWrite(101) // stop_da4
		}
	})
	.then(_ => {
		let mix_season = Season.getMixSeason()
		return writeUi8(mix_season)
	})
	.then(_ => {
		return writeCmdWrite(124) // mix_season
	})
	.then(_ => {
		let startHH1 = Season.getStartHH1()
		let startMM1 = Season.getStartMM1()
		let start1 = startHH1 * 60 + startMM1
		return writeUi16(start1)
	})
	.then(_ => {
		if (gSeasonNum == 0) {
			return writeCmdWrite(30) // start1_1_or_end
		}
		else if (gSeasonNum == 1) {
			return writeCmdWrite(54) // start1_2
		}
		else if (gSeasonNum == 2) {
			return writeCmdWrite(78) // start1_3
		}
		else {
			return writeCmdWrite(102) // start1_4
		}
	})
	.then(_ => {
		let startHH2 = Season.getStartHH2()
		let startMM2 = Season.getStartMM2()
		let start2 = startHH2 * 60 + startMM2
		return writeUi16(start2)
	})
	.then(_ => {
		if (gSeasonNum == 0) {
			return writeCmdWrite(31) // start2_1
		}
		else if (gSeasonNum == 1) {
			return writeCmdWrite(55) // start2_2
		}
		else if (gSeasonNum == 2) {
			return writeCmdWrite(79) // start2_3
		}
		else {
			return writeCmdWrite(103) // start2_4
		}
	})
	.then(_ => {
		let startHH3 = Season.getStartHH3()
		let startMM3 = Season.getStartMM3()
		let start3 = startHH3 * 60 + startMM3
		return writeUi16(start3)
	})
	.then(_ => {
		if (gSeasonNum == 0) {
			return writeCmdWrite(146) // start3_1
		}
		else if (gSeasonNum == 1) {
			return writeCmdWrite(166) // start3_2
		}
		else if (gSeasonNum == 2) {
			return writeCmdWrite(186) // start3_3
		}
		else {
			return writeCmdWrite(206) // start3_4
		}
	})
	.then(_ => {
		let startHH4 = Season.getStartHH4()
		let startMM4 = Season.getStartMM4()
		let start4 = startHH4 * 60 + startMM4
		return writeUi16(start4)
	})
	.then(_ => {
		if (gSeasonNum == 0) {
			return writeCmdWrite(147) // start4_1
		}
		else if (gSeasonNum == 1) {
			return writeCmdWrite(167) // start4_2
		}
		else if (gSeasonNum == 2) {
			return writeCmdWrite(187) // start4_3
		}
		else {
			return writeCmdWrite(207) // start4_4
		}
	})
	.then(_ => {
		if (gSeasonNum == 0) {
			return writeCmdManual(19) // write season1
		}
		else if (gSeasonNum == 1) {
			return writeCmdManual(20) // write season2
		}
		else if (gSeasonNum == 2) {
			return writeCmdManual(21) // write season3
		}
		else {
			return writeCmdManual(22) // write season4
		}
	})
	.then(_ => {
		disableSeasonSet(false)
		dispSeasonBack()
	})
	.catch(error => {
		console.log('error: ' + error)
		disableSeasonSet(false)
	})
})

const btnSeasonBack = document.getElementById("seasonBack")
btnSeasonBack.addEventListener("click", function(event) {
  dispSeasonBack()
})

let gWeekNum = 0

function writeWeek1() {
	if (gSeasonNum == 0) {
		return writeCmdRead(32) // week1_1
	}
	else if(gSeasonNum == 1) {
		return writeCmdRead(56) // week1_2
	}
	else if(gSeasonNum == 2) {
		return writeCmdRead(80) // week1_3
	}
	else {
		return writeCmdRead(104) // week1_4
	}
}

function writeWeek2() {
	if (gSeasonNum == 0) {
		return writeCmdRead(33) // week2_1
	}
	else if(gSeasonNum == 1) {
		return writeCmdRead(57) // week2_2
	}
	else if(gSeasonNum == 2) {
		return writeCmdRead(81) // week2_3
	}
	else {
		return writeCmdRead(105) // week2_4
	}
}

function writeWeek3() {
	if (gSeasonNum == 0) {
		return writeCmdRead(148) // week3_1
	}
	else if(gSeasonNum == 1) {
		return writeCmdRead(168) // week3_2
	}
	else if(gSeasonNum == 2) {
		return writeCmdRead(188) // week3_3
	}
	else {
		return writeCmdRead(208) // week3_4
	}
}

function writeWeek4() {
	if (gSeasonNum == 0) {
		return writeCmdRead(149) // week4_1
	}
	else if(gSeasonNum == 1) {
		return writeCmdRead(169) // week4_2
	}
	else if(gSeasonNum == 2) {
		return writeCmdRead(189) // week4_3
	}
	else {
		return writeCmdRead(209) // week4_4
	}
}

const btnSetWeek1 = document.getElementById("setWeek1")
btnSetWeek1.addEventListener("click", function(event) {
	disableSeasonSet(true)
	gWeekNum = 0
	return writeWeek1()
	.then(_ => {
		return readUi8()
	})
	.then(ui8 => {
		Week.setWday(ui8)
		disableSeasonSet(false)
		dispWeek()
	})
	.catch(error => {
		console.log('error: ' + error)
    	disableSeasonSet(false)
	})
})

let gOpeNum = 0

function writeOpe1(index) {
	if (gSeasonNum == 0) {
		return writeCmdRead(34 + index) // ope11_or_on[0]
	}
	else if(gSeasonNum == 1) {
		return writeCmdRead(58 + index) // ope1_2[0]
	}
	else if(gSeasonNum == 2) {
		return writeCmdRead(82 + index) // ope1_3[0]
	}
	else {
		return writeCmdRead(106 + index) // ope1_4[0]
	}
}

function writeOpe2(index) {
	if (gSeasonNum == 0) {
		return writeCmdRead(42 + index) // ope2_1[0]
	}
	else if(gSeasonNum == 1) {
		return writeCmdRead(66 + index) // ope2_2[0]
	}
	else if(gSeasonNum == 2) {
		return writeCmdRead(90 + index) // ope2_3[0]
	}
	else {
		return writeCmdRead(114 + index) // ope2_4[0]
	}
}

function writeOpe3(index) {
	if (gSeasonNum == 0) {
		return writeCmdRead(150 + index) // ope3_1[0]
	}
	else if(gSeasonNum == 1) {
		return writeCmdRead(170 + index) // ope3_2[0]
	}
	else if(gSeasonNum == 2) {
		return writeCmdRead(190 + index) // ope3_3[0]
	}
	else {
		return writeCmdRead(210 + index) // ope3_4[0]
	}
}

function writeOpe4(index) {
	if (gSeasonNum == 0) {
		return writeCmdRead(158 + index) // ope4_1[0]
	}
	else if(gSeasonNum == 1) {
		return writeCmdRead(178 + index) // ope4_2[0]
	}
	else if(gSeasonNum == 2) {
		return writeCmdRead(198 + index) // ope4_3[0]
	}
	else {
		return writeCmdRead(218 + index) // ope4_4[0]
	}
}

const btnSetOpeTime1 = document.getElementById("setOpeTime1")
btnSetOpeTime1.addEventListener("click", function(event) {
	disableSeasonSet(true)
	gOpeNum = 0
	return writeOpe1(0)
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime1(ui16)
		return writeOpe1(1)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime2(ui16)
		return writeOpe1(2)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime3(ui16)
		return writeOpe1(3)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime4(ui16)
		return writeOpe1(4)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime5(ui16)
		return writeOpe1(5)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime6(ui16)
		return writeOpe1(6)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime7(ui16)
		return writeOpe1(7)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime8(ui16)
		disableSeasonSet(false)
		dispOpeTime()
	})
	.catch(error => {
		console.log('error: ' + error)
    	disableSeasonSet(false)
	})
})

const btnSetWeek2 = document.getElementById("setWeek2")
btnSetWeek2.addEventListener("click", function(event) {
	disableSeasonSet(true)
	gWeekNum = 1
	return writeWeek2()
	.then(_ => {
		return readUi8()
	})
	.then(ui8 => {
		Week.setWday(ui8)
		disableSeasonSet(false)
		dispWeek()
	})
	.catch(error => {
		console.log('error: ' + error)
    	disableSeasonSet(false)
	})
})

const btnSetOpeTime2 = document.getElementById("setOpeTime2")
btnSetOpeTime2.addEventListener("click", function(event) {
	disableSeasonSet(true)
	gOpeNum = 1
	return writeOpe2(0)
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime1(ui16)
		return writeOpe2(1)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime2(ui16)
		return writeOpe2(2)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime3(ui16)
		return writeOpe2(3)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime4(ui16)
		return writeOpe2(4)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime5(ui16)
		return writeOpe2(5)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime6(ui16)
		return writeOpe2(6)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime7(ui16)
		return writeOpe2(7)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime8(ui16)
		disableSeasonSet(false)
		dispOpeTime()
	})
	.catch(error => {
		console.log('error: ' + error)
    	disableSeasonSet(false)
	})
})

const btnSetWeek3 = document.getElementById("setWeek3")
btnSetWeek3.addEventListener("click", function(event) {
	disableSeasonSet(true)
	gWeekNum = 2
	return writeWeek3()
	.then(_ => {
		return readUi8()
	})
	.then(ui8 => {
		Week.setWday(ui8)
		disableSeasonSet(false)
		dispWeek()
	})
	.catch(error => {
		console.log('error: ' + error)
    	disableSeasonSet(false)
	})
})

const btnSetOpeTime3 = document.getElementById("setOpeTime3")
btnSetOpeTime3.addEventListener("click", function(event) {
	disableSeasonSet(true)
	gOpeNum = 2
	return writeOpe3(0)
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime1(ui16)
		return writeOpe3(1)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime2(ui16)
		return writeOpe3(2)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime3(ui16)
		return writeOpe3(3)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime4(ui16)
		return writeOpe3(4)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime5(ui16)
		return writeOpe3(5)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime6(ui16)
		return writeOpe3(6)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime7(ui16)
		return writeOpe3(7)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime8(ui16)
		disableSeasonSet(false)
		dispOpeTime()
	})
	.catch(error => {
		console.log('error: ' + error)
    	disableSeasonSet(false)
	})
})

const btnSetWeek4 = document.getElementById("setWeek4")
btnSetWeek4.addEventListener("click", function(event) {
	disableSeasonSet(true)
	gWeekNum = 3
	return writeWeek4()
	.then(_ => {
		return readUi8()
	})
	.then(ui8 => {
		Week.setWday(ui8)
		disableSeasonSet(false)
		dispWeek()
	})
	.catch(error => {
		console.log('error: ' + error)
    	disableSeasonSet(false)
	})
})

const btnSetOpeTime4 = document.getElementById("setOpeTime4")
btnSetOpeTime4.addEventListener("click", function(event) {
	disableSeasonSet(true)
	gOpeNum = 3
	return writeOpe4(0)
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime1(ui16)
		return writeOpe4(1)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime2(ui16)
		return writeOpe4(2)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime3(ui16)
		return writeOpe4(3)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime4(ui16)
		return writeOpe4(4)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime5(ui16)
		return writeOpe4(5)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime6(ui16)
		return writeOpe4(6)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime7(ui16)
		return writeOpe4(7)
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		SprTime.setSprTime8(ui16)
		disableSeasonSet(false)
		dispOpeTime()
	})
	.catch(error => {
		console.log('error: ' + error)
    	disableSeasonSet(false)
	})
})

const btnWeekSet = document.getElementById("weekSet")
btnWeekSet.addEventListener("click", function(event) {
	disableWeekSet(true)
	let wday = Week.getWday()
	return writeUi8(wday)
	.then(_ => {
		if (gSeasonNum == 0) {
			if (gWeekNum == 0) {
				return writeCmdWrite(32) // week1_1
			}
			else if (gWeekNum == 1) {
				return writeCmdWrite(33) // week2_1
			}
			else if (gWeekNum == 2) {
				return writeCmdWrite(148) // week3_1
			}
			else {
				return writeCmdWrite(149) // week4_1
			}
		}
		else if (gSeasonNum == 1) {
			if (gWeekNum == 0) {
				return writeCmdWrite(56) // week1_2
			}
			else if (gWeekNum == 1) {
				return writeCmdWrite(57) // week2_2
			}
			else if (gWeekNum == 2) {
				return writeCmdWrite(168) // week3_2
			}
			else {
				return writeCmdWrite(169) // week4_2
			}
		}
		else if (gSeasonNum == 2) {
			if (gWeekNum == 0) {
				return writeCmdWrite(80) // week1_3
			}
			else if (gWeekNum == 1) {
				return writeCmdWrite(81) // week2_3
			}
			else if (gWeekNum == 2) {
				return writeCmdWrite(188) // week3_3
			}
			else {
				return writeCmdWrite(189) // week4_3
			}
		}
		else {
			if (gWeekNum == 0) {
				return writeCmdWrite(104) // week1_4
			}
			else if (gWeekNum == 1) {
				return writeCmdWrite(105) // week2_4
			}
			else if (gWeekNum == 2) {
				return writeCmdWrite(208) // week3_4
			}
			else {
				return writeCmdWrite(209) // week4_4
			}
		}
	})
	.then(_ => {
		if (gSeasonNum == 0) {
			return writeCmdManual(19) // write season1
		}
		else if (gSeasonNum == 1) {
			return writeCmdManual(20) // write season2
		}
		else if (gSeasonNum == 2) {
			return writeCmdManual(21) // write season3
		}
		else {
			return writeCmdManual(22) // write season4
		}
	})
	.then(_ => {
		disableWeekSet(false)
		dispWeekBack()
	})
	.catch(error => {
		console.log('error: ' + error)
		disableWeekSet(false)
	})
})

const btnWeekBack = document.getElementById("weekBack")
btnWeekBack.addEventListener("click", function(event) {
  dispWeekBack()
})

function sprTimeSet(index) {
	if (gSeasonNum == 0) {
		if (gOpeNum == 0) {
			return writeCmdWrite(34 + index) // ope11_or_on[0]
		}
		else if (gOpeNum == 1) {
			return writeCmdWrite(42 + index) // ope2_1[0]
		}
		else if (gOpeNum == 2) {
			return writeCmdWrite(150 + index) // ope3_1[0]
		}
		else {
			return writeCmdWrite(158 + index) // ope4_1[0]
		}
	}
	else if (gSeasonNum == 1) {
		if (gOpeNum == 0) {
			return writeCmdWrite(58 + index) // ope1_2[0]
		}
		else if (gOpeNum == 1) {
			return writeCmdWrite(66 + index) // ope2_2[0]
		}
		else if (gOpeNum == 2) {
			return writeCmdWrite(170 + index) // ope3_2[0]
		}
		else {
			return writeCmdWrite(178 + index) // ope4_2[0]
		}
	}
	else if (gSeasonNum == 2) {
		if (gOpeNum == 0) {
			return writeCmdWrite(82 + index) // ope1_3[0]
		}
		else if (gOpeNum == 1) {
			return writeCmdWrite(90 + index) // ope2_3[0]
		}
		else if (gOpeNum == 2) {
			return writeCmdWrite(190 + index) // ope3_3[0]
		}
		else {
			return writeCmdWrite(198 + index) // ope4_3[0]
		}
	}
	else {
		if (gOpeNum == 0) {
			return writeCmdWrite(106 + index) // ope1_4[0]
		}
		else if (gOpeNum == 1) {
			return writeCmdWrite(114 + index) // ope2_4[0]
		}
		else if (gOpeNum == 2) {
			return writeCmdWrite(210 + index) // ope3_4[0]
		}
		else {
			return writeCmdWrite(218 + index) // ope4_4[0]
		}
	}
}

const btnSprTimeSet = document.getElementById("sprTimeSet")
btnSprTimeSet.addEventListener("click", function(event) {
	disableOpeTimeSet(true)
	let time1 = SprTime.getSprTime1()
	return writeUi16(time1)
	.then(_ => {
		return sprTimeSet(0)
	})
	.then(_ => {
		let time2 = SprTime.getSprTime2()
		return writeUi16(time2)
	})
	.then(_ => {
		return sprTimeSet(1)
	})
	.then(_ => {
		let time3 = SprTime.getSprTime3()
		return writeUi16(time3)
	})
	.then(_ => {
		return sprTimeSet(2)
	})
	.then(_ => {
		let time4 = SprTime.getSprTime4()
		return writeUi16(time4)
	})
	.then(_ => {
		return sprTimeSet(3)
	})
	.then(_ => {
		let time5 = SprTime.getSprTime5()
		return writeUi16(time5)
	})
	.then(_ => {
		return sprTimeSet(4)
	})
	.then(_ => {
		let time6 = SprTime.getSprTime6()
		return writeUi16(time6)
	})
	.then(_ => {
		return sprTimeSet(5)
	})
	.then(_ => {
		let time7 = SprTime.getSprTime7()
		return writeUi16(time7)
	})
	.then(_ => {
		return sprTimeSet(6)
	})
	.then(_ => {
		let time8 = SprTime.getSprTime8()
		return writeUi16(time8)
	})
	.then(_ => {
		return sprTimeSet(7)
	})
	.then(_ => {
		if (gSeasonNum == 0) {
			return writeCmdManual(23) // write season1_ope
		}
		else if (gSeasonNum == 1) {
			return writeCmdManual(24) // write season2_ope
		}
		else if (gSeasonNum == 2) {
			return writeCmdManual(25) // write season3_ope
		}
		else {
			return writeCmdManual(26) // write season4_ope
		}
	})
	.then(_ => {
		disableOpeTimeSet(false)
		dispOpeTimeBack()
	})
	.catch(error => {
		console.log('error: ' + error)
		disableOpeTimeSet(false)
	})
})

const btnSprTimeBack = document.getElementById("sprTimeBack")
btnSprTimeBack.addEventListener("click", function(event) {
  dispOpeTimeBack()
})
