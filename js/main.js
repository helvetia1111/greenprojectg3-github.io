function test() {
  console.log('type... ' + gType)
}

let btnMonitor = document.getElementById("monitor")
btnMonitor.addEventListener("click", function(event) {
	test()
})
