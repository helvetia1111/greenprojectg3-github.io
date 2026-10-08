var deviceName = 'H126B01_'
var bleService = "50499688-e043-4442-a383-aceb7170bb4a"
var bleCharacteristic = '929d1c7c-ea65-4b35-96d8-38be71ce4251'
var bleCh = 'aaa9a54b-f70a-450a-baa2-67d921508d12'
var bluetoothDeviceDetected
var gattService
var gattCharacteristic
var gattCh

document.querySelector('#scan').addEventListener('click', function() {
	if (isWebBluetoothEnabled()) { scan() }
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

function scan() {
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
		}
	})
	.catch(error => {
		console.log('[Error]: ' + error)
	})

	//getNc()
}

let button = document.getElementById("next")
button.addEventListener("click", function(event) {
	if (isWebBluetoothEnabled()) { next() }
})
