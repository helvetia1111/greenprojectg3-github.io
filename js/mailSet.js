function dispMailSet() {
	main1.style.display = 'none'
	main2.style.display = 'none'
	main5.style.display = 'none'
	main3.style.display = 'none'
	main4.style.display = 'none'

	mailSet1.style.display = 'block'
  mailSet2.style.display = 'block'
}

function dispMailSetBack() {
	main1.style.display = 'block'
	main2.style.display = 'block'
	main5.style.display = 'block'
	main3.style.display = 'block'
	main4.style.display = 'block'

	mailSet1.style.display = 'none'
  mailSet2.style.display = 'none'
}

function setSettingServiceMail() {
	return gattServer.getPrimaryService(setServiceUUID)
	.then(service => {
		setService = service
		return service.getCharacteristic(cmdReadSetChUUID)
	})
	.then(cmdReadCh => {
		cmdReadSetCh = cmdReadCh
    	return setService.getCharacteristic(cmdWriteSetChUUID)
	})
  .then(cmdWriteCh => {
		cmdWriteSetCh = cmdWriteCh
    	return setService.getCharacteristic(ui8SetChUUID)
	})
  .then(ui8Ch => {
		ui8SetCh = ui8Ch
    	return setService.getCharacteristic(ui16SetChUUID)
	})
  .then(ui16Ch => {
		ui16SetCh = ui16Ch
    	return setService.getCharacteristic(ui32SetChUUID)
	})
  .then(ui32Ch => {
		ui32SetCh = ui32Ch
    	return setService.getCharacteristic(strSetChUUID)
	})
  .then(strCh => {
		strSetCh = strCh
    	dispMailSet()
	})
	.catch(error => {
		console.log('error: ' + error)
	})
}

let btnEmail = document.getElementById("email")
btnEmail.addEventListener("click", function(event) {
  if (setService && cmdReadSetCh && cmdWriteSetCh && ui8SetCh && ui16SetCh && ui32SetCh && strSetCh) {
	  dispMailSet()
	  return Promise.resolve()
  }
	else {
		setSettingServiceMail()
	}
})
