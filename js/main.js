function monitor() {
	const Type = localStorage.getItem('Type');
	console.log('type... ' + Type)
	if (Type == 0) {
		//location.href = "views/monitor.html"
	}
	else {
	}
}

let btnMonitor = document.getElementById("monitor")
btnMonitor.addEventListener("click", function(event) {
	monitor()
})
