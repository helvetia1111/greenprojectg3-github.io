var deviceName = 'H126B01_'
var bleService = '50499688-e043-4442-a383-aceb7170bb4a'
var monServiceUUID = 'd809bf63-38a0-4a10-99b4-079c41d401bb'
var manServiceUUID = 'af27b346-cd12-433e-a838-2e710f66eb60'
var logServiceUUID = '96df7c53-0429-41c0-a46c-c47654d2e4a3'
var bleCharacteristic = '929d1c7c-ea65-4b35-96d8-38be71ce4251'
var bleCh = 'aaa9a54b-f70a-450a-baa2-67d921508d12'
var typeCh = '5ea393b0-d1da-4eb3-bc00-b622f2d548d5'
//let monStateChUUID = '971d283e-c157-4284-8bed-bf31198bf5d7'
//let monValChUUID = 'db61a960-0657-4ba0-8825-d743f12f602e'

var bluetoothDeviceDetected
var gattServer
var gattService
var gattCharacteristic
var gattCh
//var monCh
//let monService

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

const monitor1 = document.getElementById("monitor1")
monitor1.style.display = "none"

const monitor2 = document.getElementById("monitor2")
monitor2.style.display = "none"

const operation1 = document.getElementById("operation1")
operation1.style.display = "none"

const operation2 = document.getElementById("operation2")
operation2.style.display = "none"

const operation3 = document.getElementById("operation3")
operation3.style.display = "none"

const operation4 = document.getElementById("operation4")
operation4.style.display = "none"

const manual1 = document.getElementById("manual1")
manual1.style.display = "none"

const manual2 = document.getElementById("manual2")
manual2.style.display = "none"

const manual3 = document.getElementById("manual3")
manual3.style.display = "none"

const manual4 = document.getElementById("manual4")
manual4.style.display = "none"

const manual5 = document.getElementById("manual5")
manual5.style.display = "none"

const manual6 = document.getElementById("manual6")
manual6.style.display = "none"

const log1 = document.getElementById("log1")
log1.style.display = "none"

const log2 = document.getElementById("log2")
log2.style.display = "none"

const log3 = document.getElementById("log3")
log3.style.display = "none"

const log4 = document.getElementById("log4")
log4.style.display = "none"

const log5 = document.getElementById("log5")
log5.style.display = "none"

const log6 = document.getElementById("log6")
log6.style.display = "none"

const log7 = document.getElementById("log7")
log7.style.display = "none"

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
		optionalServices: [monServiceUUID, bleService, manServiceUUID, logServiceUUID]
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
		gattServer = server
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
		//return gattServer.getPrimaryService(monServiceUUID)
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
		return gattCh.readValue()
	})	
	.then(value => {
		console.log('read... ' + value.getUint8(0))
	})
	.catch(error => {
		console.log('error: ' + error)
	})
}

function dispMain() {
	scan.style.display = "none"
	main1.style.display = "block"
	main2.style.display = "block"
	main3.style.display = "block"
	main4.style.display = "block"
	main5.style.display = "block"
}

var gType = 0

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
		dispMain()
	})
	.catch(error => {
		console.log('[Error]: ' + error)
	})
}

function updateFormAction(actionU) {
	form.action = actionU;
}

let button = document.getElementById("btnNext")
button.addEventListener("click", function(event) {
	if (isWebBluetoothEnabled()) { next() }
})
