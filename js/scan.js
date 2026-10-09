var deviceName = 'H126B01_'
var bleService = "50499688-e043-4442-a383-aceb7170bb4a"
var bleCharacteristic = '929d1c7c-ea65-4b35-96d8-38be71ce4251'
var bleCh = 'aaa9a54b-f70a-450a-baa2-67d921508d12'
var typeCh = '5ea393b0-d1da-4eb3-bc00-b622f2d548d5'
var bluetoothDeviceDetected
var gattService
var gattCharacteristic
var gattCh

const scan = document.getElementById("scan")
scan.style.display = "block"

const main1 = document.getElementById("main1")
main1.style.display = "none"

const main2 = document.getElementById("main2")
main2.style.display = "none"

const main3 = document.getElementById("main3")
main3.style.display = "none"

const main4 = document.getElementById("main4")
main4.style.display = "none"

const main5 = document.getElementById("main5")
main5.style.display = "none"

document.querySelector('#btnScan').addEventListener('click', function() {
	if (isWebBluetoothEnabled()) { scanBle() }
})

function isWebBluetoothEnabled() {
	if (!navigator.bluetooth) {
		console.log('Web Bluetooth API is not available in this browser!')
		return false
	}
	
	return true
}

function getDeviceInfo() {
	let options = {
		filters: [
			{ namePrefix: deviceName }
		],
		optionalServices: [bleService]
	}
	
	console.log('Requesting any Bluetooth Device...')
	return navigator.bluetooth.requestDevice(options).then(device => {
		bluetoothDeviceDetected = device
	}).catch(error => {
		console.log('Argh! ' + error)
	})
}

function scanBle() {
	return (bluetoothDeviceDetected ? Promise.resolve() : getDeviceInfo())
	.then(connectGATT)
	.catch(error => {
		console.log('Waiting to start reading: ' + error)
	})
}

function connectGATT() {
	if (bluetoothDeviceDetected.gatt.connected && gattCharacteristic) {
		return Promise.resolve()
	}
	
	return bluetoothDeviceDetected.gatt.connect()
	.then(server => {
		console.log('Getting GATT Service...')
		return server.getPrimaryService(bleService)
	})
	.then(service => {
		console.log('Getting GATT Characteristic...')
		gattService = service
		localStorage.setItem('Service', service);
		return service.getCharacteristic(bleCharacteristic)
	})
	.then(characteristic => {
		gattCharacteristic = characteristic
		button.disabled = false
	})
	.catch(error => {console.error(error) })
}

async function writeData(val) {
	try {
		
		if (gattCharacteristic.properties.writeWithoutResponse) {
			await gattCharacteristic.writeValueWithoutResponse(val)
		}
		else {
			await gattCharacteristic.writeValueWithResponse(val)
		}
	} catch (error) {
		console.error('書き込みに失敗しました: ', error)
	}
}

function getNc() {
	return gattService.getCharacteristic(bleCh)
	.then(ch => {
		gattCh = ch

		/*
		const val = Uint8Array.of(1)
		if (gattCh.properties.writeWithoutResponse) {
			return gattCh.writeValueWithoutResponse(val)
		}
		else {
			return gattCh.writeValueWithResponse(val)
		}
		*/
		return gattCh.readValue()
	})	
		/*
	.then(_ => {
		console.log('write 1...')
		return gattCh.readValue()
	})
	*/
	.then(value => {
		console.log('read... ' + value.getUint8(0))
	})
	.catch(error => {
		console.log('error: ' + error)
	})
}

function dispMain(type) {
	scan.style.display = "none"
	main1.style.display = "block"
	main2.style.display = "block"
	main5.style.display = "block"
	if (type == 0) {
		main3.style.display = "block"
		main4.style.display = "block"
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
		Type = type.getUint8(0)
		console.log('type... ' + Type)
		//localStorage.setItem('Type', Type);
		dispMain(Type)
	})
	.catch(error => {
		console.log('[Error]: ' + error)
	})

	//getNc()
}

function updateFormAction(actionU) {
	form.action = actionU;
}

let button = document.getElementById("btnNext")
button.addEventListener("click", function(event) {
	if (isWebBluetoothEnabled()) { next() }
})

