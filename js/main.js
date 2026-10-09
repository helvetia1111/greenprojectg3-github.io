var monService = 'd809bf63-38a0-4a10-99b4-079c41d401bb'
var monStateCh = '971d283e-c157-4284-8bed-bf31198bf5d7'
var monValCh = 'db61a960-0657-4ba0-8825-d743f12f602e'

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

let btnMonitor = document.getElementById("monitor")
btnMonitor.addEventListener("click", function(event) {
	dispMonitor()
})
