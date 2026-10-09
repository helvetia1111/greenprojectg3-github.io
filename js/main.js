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
