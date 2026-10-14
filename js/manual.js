let manCmdChUUID = '3ec0fd25-f1fd-432b-b73e-0a8cfa7cd445'

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

let btnManual = document.getElementById("manual")
btnManual.addEventListener("click", function(event) {
  dispManual()
})
