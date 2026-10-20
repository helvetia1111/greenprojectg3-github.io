const checkRain1 = document.getElementById('rainChecked1')
const checkRain2 = document.getElementById('rainChecked2')
const checkRain3 = document.getElementById('rainChecked3')
const checkRain4 = document.getElementById('rainChecked4')
const checkRain5 = document.getElementById('rainChecked5')
const checkRain6 = document.getElementById('rainChecked6')
const checkRain7 = document.getElementById('rainChecked7')
const checkRain8 = document.getElementById('rainChecked8')
const checkValve1 = document.getElementById('valveChecked1')
const checkValve2 = document.getElementById('valveChecked2')
const checkValve3 = document.getElementById('valveChecked3')
const checkValve4 = document.getElementById('valveChecked4')
const checkValve5 = document.getElementById('valveChecked5')
const checkValve6 = document.getElementById('valveChecked6')
const checkValve7 = document.getElementById('valveChecked7')
const checkValve8 = document.getElementById('valveChecked8')
const checkValveF1 = document.getElementById('valveChecked21')
const checkValveF2 = document.getElementById('valveChecked22')
const checkValveF3 = document.getElementById('valveChecked23')
const checkValveF4 = document.getElementById('valveChecked24')
const checkValveF5 = document.getElementById('valveChecked25')
const checkValveF6 = document.getElementById('valveChecked26')
const checkValveF7 = document.getElementById('valveChecked27')
const checkValveF8 = document.getElementById('valveChecked28')
const textOn1 = document.getElementById('on1')
const textOn2 = document.getElementById('on2')
const textOn3 = document.getElementById('on3')
const textOn4 = document.getElementById('on4')
const textOn5 = document.getElementById('on5')
const textOn6 = document.getElementById('on6')
const textOn7 = document.getElementById('on7')
const textOn8 = document.getElementById('on8')

export function setRain(rain) {
	checkRain1.checked = ((rain & 0x0001) != 0)
	checkRain2.checked = ((rain & 0x0002) != 0)
	checkRain3.checked = ((rain & 0x0004) != 0)
	checkRain4.checked = ((rain & 0x0008) != 0)
	checkRain5.checked = ((rain & 0x0010) != 0)
	checkRain6.checked = ((rain & 0x0020) != 0)
	checkRain7.checked = ((rain & 0x0040) != 0)
	checkRain8.checked = ((rain & 0x0080) != 0)
}

export function getRain() {
	let rain = 0
  	if (checkRain1.checked) {
    	rain |= 0x0001
  	}
	if (checkRain2.checked) {
    	rain |= 0x0002
  	}
	if (checkRain3.checked) {
    	rain |= 0x0004
  	}
	if (checkRain4.checked) {
    	rain |= 0x0008
  	}
	if (checkRain5.checked) {
    	rain |= 0x0010
  	}
	if (checkRain6.checked) {
    	rain |= 0x0020
  	}
	if (checkRain7.checked) {
    	rain |= 0x0040
  	}
	if (checkRain8.checked) {
    	rain |= 0x0080
  	}
  	return rain
}

export function setValve(valve) {
	checkValve1.checked = ((valve & 0x0001) != 0)
	checkValve2.checked = ((valve & 0x0001) != 0)
	checkValve3.checked = ((valve & 0x0001) != 0)
	checkValve4.checked = ((valve & 0x0001) != 0)
	checkValve5.checked = ((valve & 0x0001) != 0)
	checkValve6.checked = ((valve & 0x0001) != 0)
	checkValve7.checked = ((valve & 0x0001) != 0)
	checkValve8.checked = ((valve & 0x0001) != 0)

	checkValveF1.checked = ((valve & 0x0001) != 0)
	checkValveF2.checked = ((valve & 0x0001) != 0)
	checkValveF3.checked = ((valve & 0x0001) != 0)
	checkValveF4.checked = ((valve & 0x0001) != 0)
	checkValveF5.checked = ((valve & 0x0001) != 0)
	checkValveF6.checked = ((valve & 0x0001) != 0)
	checkValveF7.checked = ((valve & 0x0001) != 0)
	checkValveF8.checked = ((valve & 0x0001) != 0)
}

export function getValve(type) {
	if (type == 1) {
		return getValveT()
	}
	return getValveTF()
}

function getValveT() {
	let valve = 0
  	if (checkValve1.checked) {
    	valve |= 0x0001
  	}
	if (checkValve2.checked) {
    	valve |= 0x0002
  	}
	if (checkValve3.checked) {
    	valve |= 0x0004
  	}
	if (checkValve4.checked) {
    	valve |= 0x0008
  	}
	if (checkValve5.checked) {
    	valve |= 0x0010
  	}
	if (checkValve6.checked) {
    	valve |= 0x0020
  	}
	if (checkValve7.checked) {
    	valve |= 0x0040
  	}
	if (checkValve8.checked) {
    	valve |= 0x0080
  	}
  	return valve
}

function getValveTF() {
	let valve = 0
  	if (checkValveF1.checked) {
    	valve |= 0x0001
  	}
	if (checkValveF2.checked) {
    	valve |= 0x0002
  	}
	if (checkValveF3.checked) {
    	valve |= 0x0004
  	}
	if (checkValveF4.checked) {
    	valve |= 0x0008
  	}
	if (checkValveF5.checked) {
    	valve |= 0x0010
  	}
	if (checkValveF6.checked) {
    	valve |= 0x0020
  	}
	if (checkValveF7.checked) {
    	valve |= 0x0040
  	}
	if (checkValveF8.checked) {
    	valve |= 0x0080
  	}
  	return valve
}

export function setOn1(on) {
  textOn1.value = on
}

export function setOn2(on) {
  textOn2.value = on
}

export function setOn3(on) {
  textOn3.value = on
}

export function setOn4(on) {
  textOn4.value = on
}

export function setOn5(on) {
  textOn5.value = on
}

export function setOn6(on) {
  textOn6.value = on
}

export function setOn7(on) {
  textOn7.value = on
}

export function setOn8(on) {
  textOn8.value = on
}

export function getOn1() {
  let on = textOn1.value
  return parseInt(on, 10)
}

export function getOn2() {
  let on = textOn2.value
  return parseInt(on, 10)
}

export function getOn3() {
  let on = textOn3.value
  return parseInt(on, 10)
}

export function getOn4() {
  let on = textOn4.value
  return parseInt(on, 10)
}

export function getOn5() {
  let on = textOn5.value
  return parseInt(on, 10)
}

export function getOn6() {
  let on = textOn6.value
  return parseInt(on, 10)
}

export function getOn7() {
  let on = textOn7.value
  return parseInt(on, 10)
}

export function getOn8() {
  let on = textOn8.value
  return parseInt(on, 10)
}

export function disableRainOrValve(dis) {
	checkRain1.disabled = dis
  	checkRain2.disabled = dis
  	checkRain3.disabled = dis
  	checkRain4.disabled = dis
  	checkRain5.disabled = dis
  	checkRain6.disabled = dis
  	checkRain7.disabled = dis
  	checkRain8.disabled = dis
  	checkValve1.disabled = dis
  	checkValve2.disabled = dis
  	checkValve3.disabled = dis
  	checkValve4.disabled = dis
  	checkValve5.disabled = dis
  	checkValve6.disabled = dis
  	checkValve7.disabled = dis
  	checkValve8.disabled = dis
  	checkValveF1.disabled = dis
  	checkValveF2.disabled = dis
  	checkValveF3.disabled = dis
  	checkValveF4.disabled = dis
  	checkValveF5.disabled = dis
  	checkValveF6.disabled = dis
  	checkValveF7.disabled = dis
  	checkValveF8.disabled = dis
  	textOn1.disabled = dis
  	textOn2.disabled = dis
  	textOn3.disabled = dis
  	textOn4.disabled = dis
  	textOn5.disabled = dis
  	textOn6.disabled = dis
  	textOn7.disabled = dis
  	textOn8.disabled = dis
}
