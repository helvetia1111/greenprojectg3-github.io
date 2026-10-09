var bleCh = 'aaa9a54b-f70a-450a-baa2-67d921508d12'

function monitor() {
	const Type = localStorage.getItem('Type');
	console.log('type... ' + Type)
	if (Type == 0) {
		//location.href = "views/monitor.html"
	}
	else {
	}

	const service = localStorage.getItem('Service');
	return service.getCharacteristic(bleCh)
	.then(ch => {
		return ch.readValue()
	})
	.then(value => {
		console.log('read... ' + value.getUint8(0))
	})
	.catch(error => {
		console.log('error: ' + error)
	})
}

let btnMonitor = document.getElementById("monitor")
btnMonitor.addEventListener("click", function(event) {
	monitor()
})
