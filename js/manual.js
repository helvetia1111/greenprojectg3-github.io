let manCmdChUUID = '3ec0fd25-f1fd-432b-b73e-0a8cfa7cd445'
let manService
let manCmdCh

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

async function writeCmdManual(cmd) {
	const val = Uint8Array.of(cmd)
	try {
		if (manCmdCh.properties.writeWithoutResponse) {
			await manCmdCh.writeValueWithoutResponse(val)
			console.log('write ' + val[0])
		}
		else {
			await manCmdCh.writeValueWithResponse(val)
			console.log('write ' + val[0])
		}
	} catch (error) {
		console.error('書き込みに失敗しました: ', error)
	}
}

let btnManual = document.getElementById("manual")
btnManual.addEventListener("click", function(event) {
	return gattServer.getPrimaryService(manServiceUUID)
	.then(service => {
		manService = service
		return service.getCharacteristic(manCmdChUUID)
	})
	.then(cmdCh => {
		manCmdCh = cmdCh
		dispManual()
	})
	.catch(error => {
		console.log('error: ' + error)
	})
})

let btnManOpe1 = document.getElementById("manOpe1")
btnManOpe1.addEventListener("click", function(event) {
	return writeCmdManual(1)
	.catch(error => {
		console.log('error: ' + error)
	})
})
