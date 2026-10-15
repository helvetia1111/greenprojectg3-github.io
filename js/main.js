var manCmdChUUID = '3ec0fd25-f1fd-432b-b73e-0a8cfa7cd445'
var manService

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

let btnOperation = document.getElementById("operation")
btnOperation.addEventListener("click", function(event) {
	return gattServer.getPrimaryService(manServiceUUID)
	.then(service => {
		manService = service
		dispOperation()
	})
})
