let stateLogChUUID = '25f82846-2555-4f41-840d-4015ef0a88fc'
let indexLogChUUID = '1302dae1-5c5d-4a28-8725-5152420ee764'
let tsLogChUUID = '933b26ef-68fb-4c15-9e81-aa2eafca1beb'
let dataLogChUUID = '97ad78a8-55f6-459e-a282-b1bbb01b0395'
let logService
let stateLogCh
let indexLogCh
let tsLogCh
let dataLogCh

function dispLog() {
	operation1.style.display = 'none'
  	operation2.style.display = 'none'
  	operation3.style.display = 'none'
  	operation4.style.display = 'none'

	log1.style.display = 'block'
	log2.style.display = 'block'
	log3.style.display = 'block'
	log4.style.display = 'block'
	log5.style.display = 'block'
	log7.style.display = 'block'
}

function dispBackLog() {
	operation1.style.display = 'block'
  	operation2.style.display = 'block'
  	operation3.style.display = 'block'
  	operation4.style.display = 'block'

	log1.style.display = 'none'
	log2.style.display = 'none'
	log3.style.display = 'none'
	log4.style.display = 'none'
	log5.style.display = 'none'
	log7.style.display = 'none'
}

let dispRes = 0
function resultLog() {
	dispRes = 1
	log1.style.display = 'none'
	log2.style.display = 'none'
	log3.style.display = 'none'
	log4.style.display = 'none'
	log5.style.display = 'none'
	log6.style.display = 'block'
}

function resultBackLog() {
	dispRes = 0
	log1.style.display = 'block'
	log2.style.display = 'block'
	log3.style.display = 'block'
	log4.style.display = 'block'
	log5.style.display = 'block'
	log6.style.display = 'none'
}

let btnLog = document.getElementById("log")
btnLog.addEventListener("click", function(event) {
	return gattServer.getPrimaryService(logServiceUUID)
	.then(service => {
		logService = service
		return service.getCharacteristic(stateLogChUUID)
	})
	.then(stateCh => {
		stateLogCh = stateCh
		return logService.getCharacteristic(indexLogChUUID)
	})
	.then(indexCh => {
		indexLogCh = indexCh
		return logService.getCharacteristic(tsLogChUUID)
	})
	.then(tsCh => {
		tsLogCh = tsCh
		return logService.getCharacteristic(dataLogChUUID)
	})
	.then(dataCh => {
		dataLogCh = dataCh
		dispLog()
	})
	.catch(error => {
		console.log('error: ' + error)
	})
  	//dispLog()
})

async function writeStateLog(state) {
	const val = Uint8Array.of(state)
	try {
		if (stateLogCh.properties.writeWithoutResponse) {
			await stateLogCh.writeValueWithoutResponse(val)
			console.log('write ' + val[0])
		}
		else {
			await stateLogCh.writeValueWithResponse(val)
			console.log('write ' + val[0])
		}
	} catch (error) {
		console.error('書き込みに失敗しました: ', error)
	}
}

async function readIndexLog() {
	try {
		return　await indexLogCh.readValue()
	} catch (error) {
		console.error('読み込みに失敗しました: ', error)
	}
}

async function writeIndexLog(index) {
	const val = Uint8Array.of(index)
	try {
		if (indexLogCh.properties.writeWithoutResponse) {
			await indexLogCh.writeValueWithoutResponse(val)
			console.log('write ' + val[0])
		}
		else {
			await indexLogCh.writeValueWithResponse(val)
			console.log('write ' + val[0])
		}
	} catch (error) {
		console.error('書き込みに失敗しました: ', error)
	}
}

async function readTsLog() {
	try {
		return　await tsLogCh.readValue()
	} catch (error) {
		console.error('読み込みに失敗しました: ', error)
	}
}

async function readDataLog() {
	try {
		return　await dataLogCh.readValue()
	} catch (error) {
		console.error('読み込みに失敗しました: ', error)
	}
}

let stLog = ''
async function readLog(num) {
	try {
		await writeStateLog(num)
		let indexTemp = await readIndexLog()
		let index = indexTemp.getUint8(0, true)
		console.log('index ' + index)
		for (let i = 0; i < 110; i++) {
			if (index > 0) {
				index--;
			}
			else {
				index = (110 - 1)
			}
			await writeIndexLog(index)
			await writeStateLog(num + 1)
			let ts = await readTsLog()
			let data = await readDataLog()
			if (ts.getUint32(0, true) == 0) {
				break;
			}
			let ss = (ts.getUint8(0, true) & 0x3f).toString().padStart(2, '0')
			let mm = (((ts.getUint8(1, true) << 2) & 0x3c) | ((ts.getUint8(0, true) >> 6) & 0x03)).toString().padStart(2, '0')
			let hh = (ts.getUint8(2, true) & 0x1f).toString().padStart(2, '0')
			let day = (((ts.getUint8(3, true) << 3) & 0x18) | ((ts.getUint8(2, true) >> 5) & 0x07)).toString().padStart(2, '0')
			let mon = ((ts.getUint8(3, true) >> 2) & 0x0f).toString().padStart(2, '0')
			let val = data.getUint32(0, true)
			//stLog += mon + '/' + day + ' ' + hh + ':' + mm + ':' + ss + ' ' + val + '\r\n'
			stLog += '${mon}/${day} ${hh}:${mm}:${ss} ${val}\r\n'
		}
	} catch (error) {
		console.error('読み込みに失敗しました: ', error)
	}
}

function downloadCSV() {
	const filename = "download.csv"
  	const data = 'テスト, テスト, テスト\nテスト, テスト, テスト'
  	const bom = new Uint8Array([0xef, 0xbb, 0xbf])
  	const blob = new Blob([bom, data], {type: "text/csv" })
  	const objectUrl = URL.createObjectURL(blob)

	const downloadLink = document.createElement("a")
	downloadLink.download = filename
	downloadLink.href = objectUrl
	downloadLink.click()
	downloadLink.remove()
}

let btnSprLog1 = document.getElementById("sprLog1")
btnSprLog1.addEventListener("click", function(event) {
	/*
	const data = 'テスト, テスト, テスト\nテスト, テスト, テスト'
	log6.innerText = data
	resultLog()
	*/
	stLog = ''
	return readLog(1)
	.then(_ => {
		log6.innerText = stLog
		resultLog()
	})
	.catch(error => {
		console.log('error: ' + error)
	})
})

let btnLogBack = document.getElementById("logBack")
btnLogBack.addEventListener("click", function(event) {
	if (dispRes == 0) {
		dispBackLog()
	}
	else {
		resultBackLog()
	}
})
