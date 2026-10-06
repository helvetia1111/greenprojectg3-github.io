var deviceName = 'DA14531_TEST'
var bleService = '50499688-e043-4442-a383-aceb7170bb4a'
var bleCharacteristic = '929d1c7c-ea65-4b35-96d8-38be71ce4251'
var bluetoothDeviceDetected
var gattCharacteristic

document.querySelector('#scan').addEventListener('click', function() {
	if (isWebBluetoothEnabled()) { read() }
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
			{ name: deviceName }
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

function read() {
	return (bluetoothDeviceDetected ? Promise.resolve() : getDeviceInfo())
	.then(connectGATT)
	.then(_ => {
		console.log('Reading UV Index...')
		return gattCharacteristic.readValue()
	})
	.catch(error => {
		console.log('Waiting to start reading: ' + error)
	})
}

await function connectGATT() {
	if (bluetoothDeviceDetected.gatt.connected && gattCharacteristic) {
		return Promise.resolve()
	}
	
	return bluetoothDeviceDetected.gatt.connect()
	.then(server => {
		console.log('Getting GATT Service...')
		return await server.getPrimaryService(bleService)
	})
	.then(service => {
		console.log('Getting GATT Characteristic...')
		return service.getCharacteristic(bleCharacteristic)
	})
	.then(characteristic => {
		gattCharacteristic = characteristic
		return gattCharacteristic.readValue()
	})
	.then(value => {
		console.log('Value is ' + value.getUint8(0))
	})
	.catch(error => {console.error(error) })
}

async function writeData(val) {
	try {
		/*
		if (gattCharacteristic.properties.writeWithoutResponse) {
			await gattCharacteristic.writeValueWithoutResponse(val)
		}
		else {
			await gattCharacteristic.writeValueWithResponse(val)
		}
		*/
		await gattCharacteristic.writeValue(val)
	} catch (error) {
		console.error('書き込みに失敗しました: ', error)
	}
}

function test() {
	const str = 'test'
	const encoder = new TextEncoder()
	const encoded = encoder.encode(str)

	writeData(encoded)
	//gattCharacteristic.writeValue(encoded)
	.then(_ => {
		console.log('Write ...')
	})
	.catch(error => {
		console.log('[Error]: ' + error)
	})
}

let button = document.getElementById("button")
button.addEventListener("click", test)
