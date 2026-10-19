//let manCmdChUUID = '3ec0fd25-f1fd-432b-b73e-0a8cfa7cd445'
//let manService
//let manCmdCh

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

function dispManBack() {
	operation1.style.display = 'block'
	operation2.style.display = 'block'
	if (gType == 0) {
		operation3.style.display = 'block'
	}
  	operation4.style.display = 'block'

	manual1.style.display = 'none'
	manual2.style.display = 'none'
	manual3.style.display = 'none'
	manual4.style.display = 'none'
	manual5.style.display = 'none'
	manual6.style.display = 'none'
}

let btnManual = document.getElementById('manual')
btnManual.addEventListener('click', function(event) {
	dispManual()
})

let btnManOpe1 = document.getElementById('manOpe1')
btnManOpe1.addEventListener('click', function(event) {
	return writeCmdManual(1)
	.catch(error => {
		console.log('error: ' + error)
	})
})

let btnManOpe2 = document.getElementById('manOpe2')
btnManOpe2.addEventListener('click', function(event) {
	return writeCmdManual(2)
	.catch(error => {
		console.log('error: ' + error)
	})
})

let btnManOpe3 = document.getElementById('manOpe3')
btnManOpe3.addEventListener('click', function(event) {
	return writeCmdManual(3)
	.catch(error => {
		console.log('error: ' + error)
	})
})

let btnManOpe4 = document.getElementById('manOpe4')
btnManOpe4.addEventListener('click', function(event) {
	return writeCmdManual(4)
	.catch(error => {
		console.log('error: ' + error)
	})
})

let btnManOpe5 = document.getElementById('manOpe5')
btnManOpe5.addEventListener('click', function(event) {
	return writeCmdManual(5)
	.catch(error => {
		console.log('error: ' + error)
	})
})

let btnManOpe6 = document.getElementById('manOpe6')
btnManOpe6.addEventListener('click', function(event) {
	return writeCmdManual(6)
	.catch(error => {
		console.log('error: ' + error)
	})
})

let btnManOpe7 = document.getElementById('manOpe7')
btnManOpe7.addEventListener('click', function(event) {
	return writeCmdManual(7)
	.catch(error => {
		console.log('error: ' + error)
	})
})

let btnManOpe8 = document.getElementById('manOpe8')
btnManOpe8.addEventListener('click', function(event) {
	return writeCmdManual(8)
	.catch(error => {
		console.log('error: ' + error)
	})
})

let btnManPump = document.getElementById('manPump')
btnManPump.addEventListener('click', function(event) {
	return writeCmdManual(9)
	.catch(error => {
		console.log('error: ' + error)
	})
})

let btnManStop = document.getElementById('manStop')
btnManStop.addEventListener('click', function(event) {
	return writeCmdManual(10)
	.catch(error => {
		console.log('error: ' + error)
	})
})

let btnErrStopRelease = document.getElementById('sprErrStopRelease')
btnErrStopRelease.addEventListener('click', function(event) {
	return writeCmdManual(11)
	.catch(error => {
		console.log('error: ' + error)
	})
})

let btnManBack = document.getElementById('manBack')
btnManBack.addEventListener('click', function(event) {
	return writeCmdManual(10)
	.then(_ => {
		dispManBack()
	})
	.catch(error => {
		console.log('error: ' + error)
	})
})
