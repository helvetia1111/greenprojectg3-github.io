function monitor() {
	return gattService.getCharacteristic(bleCh)
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
