const manCmdChUUID = '3ec0fd25-f1fd-432b-b73e-0a8cfa7cd445'
let manService
var manCmdCh

const btnMonitor = document.getElementById("monitor")
const btnSetting = document.getElementById("setting")
const btnEmail = document.getElementById("email")
let btnSetSeason1 = document.getElementById("setSeason1")
let btnSetSeason2 = document.getElementById("setSeason2")
let btnSetSeason3 = document.getElementById("setSeason3")
let btnSetSeason4 = document.getElementById("setSeason4")
let btnMessage = document.getElementById("message")

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

function dispBackOperation() {
	main1.style.display = 'block'
	main2.style.display = 'block'
	main5.style.display = 'block'
	main3.style.display = 'block'
	main4.style.display = 'block'

	operation1.style.display = 'none'
	operation2.style.display = 'none'
  	operation4.style.display = 'none'
	operation3.style.display = 'none'
}

function disableMain(dis) {
	btnMonitor.disabled = dis
	btnOperation.disabled = dis
	btnSetting.disabled = dis
  	btnEmail.disabled = dis
  	btnSetSeason1.disabled = dis
  	btnSetSeason2.disabled = dis
  	btnSetSeason3.disabled = dis
  	btnSetSeason4.disabled = dis
  	btnMessage.disabled = dis
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

function next() {
	const str = 'greenprg3'
	const encoder = new TextEncoder()
	const encoded = encoder.encode(str)

	writeData(encoded)
	.then(_ => {
		console.log('Write ...')
		return gattService.getCharacteristic(bleCh)
	})
	.then(ch => {
		gattCh = ch
		return gattCh.readValue()
	})
	.then(value => {
		console.log('read... ' + value.getUint8(0))
		if (value.getUint8(0) == 1) {
			return gattService.getCharacteristic(typeCh)
		}
		Promise.resolve()
	})
	.then(ch => {
		return ch.readValue()
	})
	.then(type => {
		gType = type.getUint8(0)
		console.log('type... ' + gType)
		//dispMain()
		return gattService.getCharacteristic(revChUUID)
	})
	.then(revCh => {
		return revCh.readValue()
	})
	.then(rev => {
		gRev = new TextDecoder('utf-8').decode(rev).replace(/\0/g, '')
		console.log(`rev ${gRev}`)
		//dispMain()
		return gattServer.getPrimaryService(manServiceUUID)
	})
	.then(service => {
		manService = service
		return service.getCharacteristic(manCmdChUUID)
	})
	.then(cmdCh => {
		manCmdCh = cmdCh
		dispMain()
		//dispOperation()
	})
	.catch(error => {
		console.log('[Error]: ' + error)
	})
}


const btnOperation = document.getElementById("operation")
btnOperation.addEventListener("click", function(event) {
	/*
	return gattServer.getPrimaryService(manServiceUUID)
	.then(service => {
		manService = service
		return service.getCharacteristic(manCmdChUUID)
	})
	.then(cmdCh => {
		manCmdCh = cmdCh
		dispOperation()
	})
	.catch(error => {
		console.log('error: ' + error)
	})
	*/
	dispOperation()
})

let btnOperationBack = document.getElementById("operationBack")
btnOperationBack.addEventListener("click", function(event) {
	dispBackOperation()
})

