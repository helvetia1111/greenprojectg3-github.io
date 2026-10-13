let monStateChUUID = '971d283e-c157-4284-8bed-bf31198bf5d7'
let monValChUUID = 'db61a960-0657-4ba0-8825-d743f12f602e'
let monService
let monStateCh
let monValCh

let setIntervalId

let time_flag
let systime
let flowmeter

let tdSystemTime = document.getElementById('systemTime')
let tdFlowmeter = document.getElementById('fre')
let tdFloat = document.getElementById('float')
let tdRain = document.getElementById('rain')
let tdAd = document.getElementById('ad')
let tdState = document.getElementById('state')
let tdOpeTime = document.getElementById('opeTime')
let tdStopFlag = document.getElementById('stopFlag')
let tdLiquidErrFlag = document.getElementById('liquidErrFlag')
let tdPwrErrFlag = document.getElementById('pwrErrFlag')
let tdAdErrFlag = document.getElementById('adErrFlag')
let tdBatt = document.getElementById('batt')
let tdVIn = document.getElementById('vIn')
let tdV5 = document.getElementById('v5')
let tdV33 = document.getElementById('v33')
let tdV3 = document.getElementById('v3')
let tdV18 = document.getElementById('v18')
let tdVBtn = document.getElementById('vBtn')
let tdValveT = document.getElementById('valveT')

//const valveIf = document.getElementById("valveIf")
//valveIf.style.display = "none"

function dispMonitor() {
	main1.style.display = "none"
	main2.style.display = "none"
	main5.style.display = "none"
	main3.style.display = "none"
	main4.style.display = "none"

	monitor1.style.display = "block"
	monitor2.style.display = "block"
	if (gType == 1) {
		//valveIf.style.display = "block"
	}
}

function dispMonBack() {
	main1.style.display = "block"
	main2.style.display = "block"
	main3.style.display = "block"
	main4.style.display = "block"
	main5.style.display = "block"

	monitor1.style.display = "none"
	monitor2.style.display = "none"
	//valveIf.style.display = "none"
}

async function writeStateMonitor(state) {
	const val = Uint8Array.of(state)
	try {
		if (monStateCh.properties.writeWithoutResponse) {
			await monStateCh.writeValueWithoutResponse(val)
			console.log('write ' + val[0])
		}
		else {
			await monStateCh.writeValueWithResponse(val)
			console.log('write ' + val[0])
		}
	} catch (error) {
		console.error('書き込みに失敗しました: ', error)
	}
}

async function readValueMonitor() {
	try {
		return　await monValCh.readValue()
	} catch (error) {
		console.error('読み込みに失敗しました: ', error)
	}
}

function readSystemTime(){
	return writeStateMonitor(1)
	.then(_ => {
		console.log('req systemTime...')
		return readValueMonitor()
	})
	.then(value => {
		console.log('systemTime... ' + value.getUint32(0, true))
		const hour = value.getUint32(0, true) / (60 * 60)
		const min = (value.getUint32(0, true) / 60) % 60
		const sec = value.getUint32(0, true) % 60
		console.log((hour | 0) + ':' + (min | 0) + ':' + (sec | 0))
		systime = (hour | 0) + ':' + (min | 0) + ':' + (sec | 0)
    	//tdSystemTime.textContent = systime
	})
	.catch(error => {
		console.log('error: ' + error)
	})
}

function readFlag(){
	return writeStateMonitor(2)
	.then(_ => {
		console.log('req flag...')
		return readValueMonitor()
	})
	.then(value => {
		console.log('readFlag... ' + value.getUint8(0, true))
		console.log('readFlag... ' + value.getUint8(1, true))
		console.log('readFlag... ' + value.getUint8(2, true))
		console.log('readFlag... ' + value.getUint8(3, true))
		time_flag = value.getUint8(0, true)
		const sw = value.getUint8(1, true)
    	tdSystemTime.textContent = '取得フラグ:' + time_flag + ' 時間:' + systime
		tdFloat.textContent = sw >> 1
		tdRain.textContent = sw & 0x01
		tdState.textContent = '潅水:' + value.getUint8(2, true)
		tdStopFlag.textContent = value.getUint8(3, true)
	})
	.catch(error => {
		console.log('error: ' + error)
	})
}

function readFlowmeter(){
	return writeStateMonitor(3)
	.then(_ => {
		console.log('req flowmeter...')
		return readValueMonitor()
	})
	.then(value => {
		console.log('readFlometer... ' + value.getUint32(0, true))
		flowmeter = value.getUint32(0, true)
		return writeStateMonitor(4)
	})
	.then(_ => {
		console.log('req counter...')
		return readValueMonitor()
	})
	.then(value => {
		console.log('readCounter... ' + value.getUint32(0, true))
		tdFlowmeter.textContent = '周波数:' + flowmeter + ' カウンタ:' + value.getUint32(0, true)
	})
	.catch(error => {
		console.log('error: ' + error)
	})
}

function readAd(){
	return writeStateMonitor(5)
	.then(_ => {
		console.log('req ad...')
		return readValueMonitor()
	})
	.then(value => {
		console.log('readad... ' + value.getUint32(0, true))
		tdAd.textContent = value.getUint32(0, true)
	})
	.catch(error => {
		console.log('error: ' + error)
	})
}

function readSprLimitTimer(){
	return writeStateMonitor(6)
	.then(_ => {
		console.log('req sprLimitTimer...')
		return readValueMonitor()
	})
	.then(value => {
		console.log('readSprLimitTimer... ' + value.getUint32(0, true))
		tdOpeTime.textContent = value.getUint32(0, true)
	})
	.catch(error => {
		console.log('error: ' + error)
	})
}

function readFlag2(){
	return writeStateMonitor(7)
	.then(_ => {
		console.log('req flag...')
		return readValueMonitor()
	})
	.then(value => {
		console.log('readFlag2... ' + value.getUint8(0, true))
		console.log('readFlag2... ' + value.getUint8(1, true))
		console.log('readFlag2... ' + value.getUint8(2, true))
		console.log('readFlag2... ' + value.getUint8(3, true))
		tdLiquidErrFlag.textContent = value.getUint8(0, true)
		tdPwrErrFlag.textContent = value.getUint8(1, true)
		tdAdErrFlag.textContent = value.getUint8(2, true)
	})
	.catch(error => {
		console.log('error: ' + error)
	})
}

function readVBattVIn(){
	return writeStateMonitor(8)
	.then(_ => {
		console.log('req vBatt vIn...')
		return readValueMonitor()
	})
	.then(value => {
		console.log('readVBatt... ' + value.getUint16(0, true))
		console.log('readVIn... ' + value.getUint16(2, true))
		tdBatt.textContent = value.getUint16(0, true) * 2 / 1000
		tdVIn.textContent = value.getUint16(2, true) * 2 / 1000
	})
	.catch(error => {
		console.log('error: ' + error)
	})
}

function readV5V33(){
	return writeStateMonitor(9)
	.then(_ => {
		console.log('req v5 v3.3...')
		return readValueMonitor()
	})
	.then(value => {
		console.log('readV5... ' + value.getUint16(0, true))
		console.log('readV3.3... ' + value.getUint16(2, true))
		tdV5.textContent = value.getUint16(0, true) * 2 / 1000
		tdV33.textContent = value.getUint16(2, true) / 1000
	})
	.catch(error => {
		console.log('error: ' + error)
	})
}

function readV3V18(){
	return writeStateMonitor(10)
	.then(_ => {
		console.log('req v3 v1.8...')
		return readValueMonitor()
	})
	.then(value => {
		console.log('readV3... ' + value.getUint16(0, true))
		console.log('readV1.8... ' + value.getUint16(2, true))
		tdV3.textContent = value.getUint16(0, true) / 1000
		tdV18.textContent = value.getUint16(2, true) / 1000
	})
	.catch(error => {
		console.log('error: ' + error)
	})
}

function readVBtnValveT(){
	return writeStateMonitor(11)
	.then(_ => {
		console.log('req vBtn...')
		return readValueMonitor()
	})
	.then(value => {
		console.log('readVBtn... ' + value.getUint16(0, true))
		tdVBtn.textContent = value.getUint16(0, true) / 1000
		let valve = value.getUint16(2, true)
		tdValveT.textContent = (valve & 0x01) + ':' + ((valve >> 1) & 0x01) + ':' + ((valve >> 2) & 0x01) + ':' + ((valve >> 3) & 0x01) + ':' + ((valve >> 4) & 0x01) + ':' + ((valve >> 5) & 0x01) + ':' + ((valve >> 6) & 0x01) + ':' + ((valve >> 7) & 0x01)
	})
	.catch(error => {
		console.log('error: ' + error)
	})
}

function readMonitor() {
	return readSystemTime()
	.then(_ => {
		return readFlag()
	})
	.then(_ => {
		return readFlowmeter()
	})
	.then(_ => {
		return readAd()
	})
	.then(_ => {
		return readSprLimitTimer()
	})
	.then(_ => {
		return readFlag2()
	})
	.then(_ => {
		return readVBattVIn()
	})
	.then(_ => {
		return readV5V33()
	})
	.then(_ => {
		return readV3V18()
	})
	.then(_ => {
		return readVBtnValveT()
	})
	.catch(error => {
		console.log('error: ' + error)
	})
}

let btnMonitor = document.getElementById("monitor")
btnMonitor.addEventListener("click", function(event) {
	return gattServer.getPrimaryService(monServiceUUID)
	.then(service => {
		monService = service
		return service.getCharacteristic(monStateChUUID)
	})
	.then(stateCh => {
		monStateCh = stateCh
		return monService.getCharacteristic(monValChUUID)
	})
	.then(valCh => {
		monValCh = valCh
		readMonitor()
	})
	.then(_ => {
		dispMonitor()
		setIntervalId = setInterval(readMonitor, 5000)
	})
	.catch(error => {
		console.log('error: ' + error)
	})
})

let btnMonBack = document.getElementById("monBack")
btnMonBack.addEventListener("click", function(event) {
	clearInterval(setIntervalId)
	dispMonBack()
})
