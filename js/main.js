function dispOperation() {
	main1.style.display = 'none'
	main2.style.display = 'none'
	main5.style.display = 'none'
	main3.style.display = 'none'
	main4.style.display = 'none'

	operation1.style.display = 'block'
	operation2.style.display = 'block'
  	operation4.style.display = 'block'
	if (gType == 0) {
		operation3.style.display = 'block'
	}
}

function dispLog() {
	main1.style.display = 'none'
	main2.style.display = 'none'
	main5.style.display = 'none'
	main3.style.display = 'none'
	main4.style.display = 'none'

	log1.style.display = 'block'
	log2.style.display = 'block'
	log3.style.display = 'block'
	log4.style.display = 'block'
	log5.style.display = 'block'
	log6.style.display = 'block'
}

let btnOperation = document.getElementById("operation")
btnOperation.addEventListener("click", function(event) {
  dispOperation()
})

let btnLog = document.getElementById("log")
btnLog.addEventListener("click", function(event) {
  dispLog()
})
