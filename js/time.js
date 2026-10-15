let flagTimeChUUID = 'bfbd1ff0-5669-4133-b822-7c77fad5330e'
let yearTimeChUUID = '4c07b33b-a2ce-40a8-af4f-7bee57fc394e'
let monTimeChUUID = '918946cb-ec5e-4c5c-9c33-e00a5e8d684a'
let dayTimeChUUID = '7f0086e7-2a36-4460-ac69-1252efa5c71e'
let hhTimeChUUID = '4dec731c-449d-41a1-bd2f-a1845f1fe860'
let mmTimeChUUID = 'df32b5c1-04f7-474b-9848-7991a76e0a74'
let ssTimeChUUID = '72ac2ba1-e37a-4180-89a7-482c5c819823'
let timeService
let yearTimeCh
let monTimeCh
let dayTimeCh
let hhTimeCh
let mmTimeCh
let ssTimeCh

function dispTime() {
  operation1.style.display = 'none'
  operation2.style.display = 'none'
  operation3.style.display = 'none'
  operation4.style.display = 'none'

	time1.style.display = 'block'
  time2.style.display = 'block'
  time3.style.display = 'block'
}

function dispBackTime() {
  operation1.style.display = 'block'
  operation2.style.display = 'block'
  operation3.style.display = 'block'
  operation4.style.display = 'block'

	time1.style.display = 'none'
  time2.style.display = 'none'
  time3.style.display = 'none'
}

let btnTimeSetting = document.getElementById("timeSetting")
btnTimeSetting.addEventListener("click", function(event) {
	return gattServer.getPrimaryService(timeServiceUUID)
	.then(service => {
		timeService = service
		return service.getCharacteristic(flagTimeChUUID)
	})
	.then(flagCh => {
		flagTimeCh = flagCh
		return timeService.getCharacteristic(yearTimeChUUID)
	})
	.then(yearCh => {
		yearTimeCh = yearCh
		return timeService.getCharacteristic(monTimeChUUID)
	})
	.then(monCh => {
		monTimeCh = monCh
		return timeService.getCharacteristic(dayTimeChUUID)
	})
	.then(dayCh => {
		dayTimeCh = dayCh
    return timeService.getCharacteristic(hhTimeChUUID)
	})
  .then(hhCh => {
		hhTimeCh = hhCh
    return timeService.getCharacteristic(mmTimeChUUID)
	})
  .then(mmCh => {
		mmTimeCh = mmCh
    return timeService.getCharacteristic(ssTimeChUUID)
	})
  .then(ssCh => {
		ssTimeCh = ssCh
    dispTime()
	})
	.catch(error => {
		console.log('error: ' + error)
	})
})

async function writeFlagTime(flag) {
	const val = Uint8Array.of(flag)
	try {
		if (flagTimeCh.properties.writeWithoutResponse) {
			await flagTimeCh.writeValueWithoutResponse(val)
			console.log('write ' + val[0])
		}
		else {
			await flagTimeCh.writeValueWithResponse(val)
			console.log('write ' + val[0])
		}
	} catch (error) {
		console.error('書き込みに失敗しました: ', error)
	}
}

async function writeYearTime(year) {
  const buffer = new ArrayBuffer(2)
  const view = new DataView(buffer)
  view.setUint16(0, year, true)
  
	try {
		if (flagTimeCh.properties.writeWithoutResponse) {
			await yearTimeCh.writeValueWithoutResponse(buffer)
			console.log('write ' + view.getUint16(0, true))
		}
		else {
			await yearTimeCh.writeValueWithResponse(buffer)
			console.log('write ' + view.getUint16(0, true))
		}
	} catch (error) {
		console.error('書き込みに失敗しました: ', error)
	}
}

async function writeMonTime(mon) {
	const val = Uint8Array.of(mon)
	try {
		if (monTimeCh.properties.writeWithoutResponse) {
			await monTimeCh.writeValueWithoutResponse(mon)
			console.log('write ' + val[0])
		}
		else {
			await monTimeCh.writeValueWithResponse(val)
			console.log('write ' + val[0])
		}
	} catch (error) {
		console.error('書き込みに失敗しました: ', error)
	}
}

async function writeDayTime(day) {
	const val = Uint8Array.of(day)
	try {
		if (dayTimeCh.properties.writeWithoutResponse) {
			await dayTimeCh.writeValueWithoutResponse(val)
			console.log('write ' + val[0])
		}
		else {
			await dayTimeCh.writeValueWithResponse(val)
			console.log('write ' + val[0])
		}
	} catch (error) {
		console.error('書き込みに失敗しました: ', error)
	}
}

async function writeHHTime(hh) {
	const val = Uint8Array.of(hh)
	try {
		if (hhTimeCh.properties.writeWithoutResponse) {
			await hhTimeCh.writeValueWithoutResponse(val)
			console.log('write ' + val[0])
		}
		else {
			await hhTimeCh.writeValueWithResponse(val)
			console.log('write ' + val[0])
		}
	} catch (error) {
		console.error('書き込みに失敗しました: ', error)
	}
}

async function writeMMTime(mm) {
	const val = Uint8Array.of(mm)
	try {
		if (mmTimeCh.properties.writeWithoutResponse) {
			await mmTimeCh.writeValueWithoutResponse(val)
			console.log('write ' + val[0])
		}
		else {
			await mmTimeCh.writeValueWithResponse(val)
			console.log('write ' + val[0])
		}
	} catch (error) {
		console.error('書き込みに失敗しました: ', error)
	}
}

async function writeSSTime(ss) {
	const val = Uint8Array.of(ss)
	try {
		if (ssTimeCh.properties.writeWithoutResponse) {
			await ssTimeCh.writeValueWithoutResponse(val)
			console.log('write ' + val[0])
		}
		else {
			await ssTimeCh.writeValueWithResponse(val)
			console.log('write ' + val[0])
		}
	} catch (error) {
		console.error('書き込みに失敗しました: ', error)
	}
}

let yearElement = document.getElementById("timeYear")
let monElement = document.getElementById("timeMon")
let dayElement = document.getElementById("timeDay")
let hhElement = document.getElementById("timeHH")
let mmElement = document.getElementById("timeMM")
let ssElement = document.getElementById("timeSS")

let btnTimeSet = document.getElementById("timeSet")
btnTimeSet.addEventListener("click", function(event) {
	if (yearElement.value.trim() === '') {
		console.log('yera empty')
		return Promise.resolve()
	}
  	let year = parseInt(yearElement.value, 10)
  	console.log('year ' + year)
	return writeYearTime(year)
	.then(_ => {
    	let mon = monElement.selectedIndex + 1
    	if ((mon <= 0) || (mon > 12)) {
     		return Promise.resolve()
    	}
    	return writeMonTime(mon)
	})
  	.then(_ => {
    	let day = dayElement.selectedIndex + 1
		if ((day <= 0) || (day > 31)) {
			return Promise.resolve()
		}
		return writeDayTime(day)
  	})
	.then(_ => {
		let hh = hhElement.selectedIndex
		if ((hh <= 0) || (hh > 23)) {
			return Promise.resolve()
		}
		return writeHHTime(hh)
	})
	.then(_ => {
		let mm = mmElement.selectedIndex
		if ((mm <= 0) || (mm > 59)) {
			return Promise.resolve()
		}
		return writeMMTime(hh)
	})
	.then(_ => {
		let ss = ssElement.selectedIndex
		if ((ss <= 0) || (ss > 59)) {
			return Promise.resolve()
		}
		return writeSSTime(hh)
	})
	.then(_ => {
		return writeFlagTime(1)
	})
	.catch(error => {
		console.log('error: ' + error)
	})
})

let btnTimeBack = document.getElementById("timeBack")
btnTimeBack.addEventListener("click", function(event) {
	dispBackTime()
})
