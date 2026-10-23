let deviceName = 'H126B01_'
const bleService = '50499688-e043-4442-a383-aceb7170bb4a'
const monServiceUUID = 'd809bf63-38a0-4a10-99b4-079c41d401bb'
const manServiceUUID = 'af27b346-cd12-433e-a838-2e710f66eb60'
const logServiceUUID = '96df7c53-0429-41c0-a46c-c47654d2e4a3'
const timeServiceUUID = '052e2673-3d72-42b6-a288-3e9e1ae4d6de'
const setServiceUUID = 'b4950454-f5b3-47a9-815b-c46238452c90'
const setMailServiceUUID = 'f81a4bdf-7ab7-46e5-9f0d-4b9ecf3329f8'
let bleCharacteristic = '929d1c7c-ea65-4b35-96d8-38be71ce4251'
let bleCh = 'aaa9a54b-f70a-450a-baa2-67d921508d12'
let typeCh = '5ea393b0-d1da-4eb3-bc00-b622f2d548d5'
let revChUUID = '527f4889-e6ed-4237-9cde-4bcf09276ad1'

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
//main1.style.display = "none"

const main2 = document.getElementById("main2")
//main2.style.display = "none"

const main3 = document.getElementById("main3")
//main3.style.display = "none"

const main4 = document.getElementById("main4")
//main4.style.display = "none"

const main5 = document.getElementById("main5")
//main5.style.display = "none"

const monitor1 = document.getElementById("monitor1")
//monitor1.style.display = "none"

const monitor2 = document.getElementById("monitor2")
//monitor2.style.display = "none"

const operation1 = document.getElementById("operation1")
//operation1.style.display = "none"

const operation2 = document.getElementById("operation2")
//operation2.style.display = "none"

const operation3 = document.getElementById("operation3")
//operation3.style.display = "none"

const operation4 = document.getElementById("operation4")
//operation4.style.display = "none"

const manual1 = document.getElementById("manual1")
//manual1.style.display = "none"

const manual2 = document.getElementById("manual2")
//manual2.style.display = "none"

const manual3 = document.getElementById("manual3")
//manual3.style.display = "none"

const manual4 = document.getElementById("manual4")
//manual4.style.display = "none"

const manual5 = document.getElementById("manual5")
//manual5.style.display = "none"

const manual6 = document.getElementById("manual6")
//manual6.style.display = "none"

const log1 = document.getElementById("log1")
//log1.style.display = "none"

const log2 = document.getElementById("log2")
//log2.style.display = "none"

const log3 = document.getElementById("log3")
//log3.style.display = "none"

const log4 = document.getElementById("log4")
//log4.style.display = "none"

const log5 = document.getElementById("log5")
//log5.style.display = "none"

const log6 = document.getElementById("log6")
//log6.style.display = "none"

const log7 = document.getElementById("log7")
//log7.style.display = "none"

const time1 = document.getElementById("time1")
//time1.style.display = "none"

const time2 = document.getElementById("time2")
//time2.style.display = "none"

const time3 = document.getElementById("time3")
//time3.style.display = "none"

const set1 = document.getElementById("set1")
const set2 = document.getElementById("set2")
const set3 = document.getElementById("set3")
const set4 = document.getElementById("set4")
const set5 = document.getElementById("set5")

const liquid1 = document.getElementById("liquid1")
const liquid2 = document.getElementById("liquid2")
const liquid3 = document.getElementById("liquid3")
const liquid4 = document.getElementById("liquid4")
const liquid5 = document.getElementById("liquid5")
const liquid6 = document.getElementById("liquid6")
const liquid7 = document.getElementById("liquid7")
const liquid8 = document.getElementById("liquid8")

const irrigation1 = document.getElementById("irrigation1")
const irrigation2 = document.getElementById("irrigation2")
const irrigation3 = document.getElementById("irrigation3")
const irrigation4 = document.getElementById("irrigation4")
const irrigation5 = document.getElementById("irrigation5")
const irrigation6 = document.getElementById("irrigation6")
const irrigation7 = document.getElementById("irrigation7")
const irrigation8 = document.getElementById("irrigation8")
const irrigation9 = document.getElementById("irrigation9")
const irrigation10 = document.getElementById("irrigation10")

const irrigation_err1 = document.getElementById("irrigation_err1")
const irrigation_err2 = document.getElementById("irrigation_err2")
const irrigation_err3 = document.getElementById("irrigation_err3")
const irrigation_err4 = document.getElementById("irrigation_err4")
const irrigation_err5 = document.getElementById("irrigation_err5")
const irrigation_err6 = document.getElementById("irrigation_err6")
const irrigation_err7 = document.getElementById("irrigation_err7")
const irrigation_err8 = document.getElementById("irrigation_err8")
const irrigation_err9 = document.getElementById("irrigation_err9")
const irrigation_err10 = document.getElementById("irrigation_err10")
const irrigation_err11 = document.getElementById("irrigation_err11")

const rain_or_valve1 = document.getElementById("rain_or_valve1")
const rain_or_valve2 = document.getElementById("rain_or_valve2")
const rain_or_valve3 = document.getElementById("rain_or_valve3")
const rain_or_valve4 = document.getElementById("rain_or_valve4")
const rain_or_valve5 = document.getElementById("rain_or_valve5")
const rain_or_valve6 = document.getElementById("rain_or_valve6")
const rain_or_valve7 = document.getElementById("rain_or_valve7")
const rain_or_valve8 = document.getElementById("rain_or_valve8")
const rain_or_valve9 = document.getElementById("rain_or_valve9")
const rain_or_valve10 = document.getElementById("rain_or_valve10")
const rain_or_valve11 = document.getElementById("rain_or_valve11")
const rain_or_valve12 = document.getElementById("rain_or_valve12")
const rain_or_valve13 = document.getElementById("rain_or_valve13")
const rain_or_valve14 = document.getElementById("rain_or_valve14")
const rain_or_valve15 = document.getElementById("rain_or_valve15")
const rain_or_valve16 = document.getElementById("rain_or_valve16")
const rain_or_valve17 = document.getElementById("rain_or_valve17")
const rain_or_valve18 = document.getElementById("rain_or_valve18")
const rain_or_valve19 = document.getElementById("rain_or_valve19")
const rain_or_valve20 = document.getElementById("rain_or_valve20")
const rain_or_valve21 = document.getElementById("rain_or_valve21")
const rain_or_valve22 = document.getElementById("rain_or_valve22")

const alarm1 = document.getElementById("alarm1")
const alarm2 = document.getElementById("alarm2")
const alarm3 = document.getElementById("alarm3")
const alarm4 = document.getElementById("alarm4")

const mailSet1 = document.getElementById("mailSet1")
const mailSet2 = document.getElementById("mailSet2")

const server1 = document.getElementById("server1")
const server2 = document.getElementById("server2")
const server3 = document.getElementById("server3")
const server4 = document.getElementById("server4")
const server5 = document.getElementById("server5")
const server6 = document.getElementById("server6")

const address1 = document.getElementById("address1")
const address2 = document.getElementById("address2")
const address3 = document.getElementById("address3")
const address4 = document.getElementById("address4")
const address5 = document.getElementById("address5")
const address6 = document.getElementById("address6")
const address7 = document.getElementById("address7")
const address8 = document.getElementById("address8")
const address9 = document.getElementById("address9")
const address10 = document.getElementById("address10")
const address11 = document.getElementById("address11")
const address12 = document.getElementById("address12")
const address13 = document.getElementById("address13")
const address14 = document.getElementById("address14")
const address15 = document.getElementById("address15")
const address16 = document.getElementById("address16")
const address17 = document.getElementById("address17")
const address18 = document.getElementById("address18")
const address19 = document.getElementById("address19")
const address20 = document.getElementById("address20")
const address21 = document.getElementById("address21")
const address22 = document.getElementById("address22")
const address23 = document.getElementById("address23")

const season1 = document.getElementById("season1")
const season2 = document.getElementById("season2")
const season3 = document.getElementById("season3")
const season41 = document.getElementById("season41")
const season42 = document.getElementById("season42")
const season43 = document.getElementById("season43")
const season44 = document.getElementById("season44")
const season5 = document.getElementById("season5")
const season6 = document.getElementById("season6")
const season7 = document.getElementById("season7")
const season8 = document.getElementById("season8")
const season9 = document.getElementById("season9")
const season10 = document.getElementById("season10")
const season11 = document.getElementById("season11")
const season12 = document.getElementById("season12")
const season13 = document.getElementById("season13")
const season14 = document.getElementById("season14")

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
		optionalServices: [monServiceUUID, bleService, manServiceUUID, logServiceUUID, timeServiceUUID, setServiceUUID, setMailServiceUUID]
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
var gRev = ''

/*
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
		dispMain()
	})
	.catch(error => {
		console.log('[Error]: ' + error)
	})
}
*/

function updateFormAction(actionU) {
	form.action = actionU;
}

let button = document.getElementById("btnNext")
button.addEventListener("click", function(event) {
	if (isWebBluetoothEnabled()) { next() }
})
