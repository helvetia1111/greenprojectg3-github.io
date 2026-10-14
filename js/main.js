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

function dispManual() {
	operation1.style.display = 'none'
	operation2.style.display = 'none'
	operation3.style.display = 'none'
  	operation4.style.display = 'none'

	if (gType == 0) {
		manual1.style.display = 'block'
		manual2.style.display = 'block'
		manual3.style.display = 'block'
		manual4.style.display = 'block'
	}
	manual5.style.display = 'block'
	manual6.style.display = 'block'
}

let btnOperation = document.getElementById("operation")
btnOperation.addEventListener("click", function(event) {
  dispOperation()
})

let btnManual = document.getElementById("manual")
btnManual.addEventListener("click", function(event) {
  dispManual()
})
