var monStateChUUID = '971d283e-c157-4284-8bed-bf31198bf5d7'
var monValChUUID = 'db61a960-0657-4ba0-8825-d743f12f602e'
var monService
var monStateCh
var monValCh

var time_flag
var systime

function dispMonitor() {
	main1.style.display = "none"
	main2.style.display = "none"
	main5.style.display = "none"
	main3.style.display = "none"
	main4.style.display = "none"

	monitor1.style.display = "block"
	monitor2.style.display = "block"
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
		console.log('write state monitor...')
		return readValueMonitor()
	})
	.then(value => {
		console.log('read val... ' + value.getUint32(0))
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
		readSystemTime()
		//writeStateMonitor(1)
	})
	.then(_ => {
		console.log('write state monitor...')
	})
	.catch(error => {
		console.log('error: ' + error)
	})
	//dispMonitor()
})
