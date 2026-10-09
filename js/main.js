var monServiceUUID = 'd809bf63-38a0-4a10-99b4-079c41d401bb'
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

function readMonitor(state) {
	const val = Uint8Array.of(state)
	if (monStateCh.writeValueWithoutResponse) {
		return monStateCh.writeValueWithoutResponse(val)
	}
	else {
		return monStateCh.writeValueWithResponse(val)
	}
	.then(_ => {
		return monValCh.readValue()
	})
	.then(value => {
		console.log('read... ' + value.getUint32(0))
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
		return service.getCharacteristic(monValChUUID)
	})
	.then(valCh => {
		monValCh = valCh
		readMonitor(1)
	})
	//dispMonitor()
})
