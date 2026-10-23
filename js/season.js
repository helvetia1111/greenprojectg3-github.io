const cmbStartMo = document.getElementById('startMo')
const cmbStartDa = document.getElementById('startDa')
const cmbStopMo = document.getElementById('stopMo')
const cmbStopDa = document.getElementById('stopDa')
const checkMixSeason1 = document.getElementById('mixSeason1')
const checkMixSeason2 = document.getElementById('mixSeason2')
const checkMixSeason3 = document.getElementById('mixSeason3')
const checkMixSeason4 = document.getElementById('mixSeason4')
const cmbStartHH1 = document.getElementById('startHH1')
const cmbStartMM1 = document.getElementById('startMM1')
const cmbStartHH2 = document.getElementById('startHH2')
const cmbStartMM2 = document.getElementById('startMM2')
const cmbStartHH3 = document.getElementById('startHH3')
const cmbStartMM3 = document.getElementById('startMM3')
const cmbStartHH4 = document.getElementById('startHH4')
const cmbStartMM4 = document.getElementById('startMM4')

export function setStartMo(mo) {
  cmbStartMo.selectedIndex = mo - 1
}

export function getStartMo() {
  let mo = cmbStartMo.selectedIndex + 1
  return mo
}

export function setStartDa(da) {
  cmbStartDa.selectedIndex = da - 1
}

export function getStartDa() {
  let da = cmbStartDa.selectedIndex + 1
  return da
}

export function setStopMo(mo) {
  cmbStopMo.selectedIndex = mo - 1
}

export function getStopMo() {
  let mo = cmbStopMo.selectedIndex + 1
  return mo
}

export function setStopDa(da) {
  cmbStopDa.selectedIndex = da - 1
}

export function getStopDa() {
  let da = cmbStopDa.selectedIndex + 1
  return da
}

export function setMixSeason(check, num) {
  if (num == 0) {
    checkMixSeason1.checked = ((check & 0x01) != 0)
  }
  else if (num == 1) {
    checkMixSeason2.checked = ((check & 0x02) != 0)
  }
  else if (num == 2) {
    checkMixSeason3.checked = ((check & 0x04) != 0)
  }
  else if (num == 3) {
    checkMixSeason4.checked = ((check & 0x08) != 0)
  }
}

export function getMixSeason() {
  let check = 0;
  if (checkMixSeason1.checked) {
    check |= 0x01
  }
  if (checkMixSeason2.checked) {
    check |= 0x02
  }
  if (checkMixSeason3.checked) {
    check |= 0x04
  }
  if (checkMixSeason4.checked) {
    check |= 0x08
  }
  return check
}

export function setStartHH1(hh) {
  cmbStartHH1.selectedIndex = hh
}

export function getStartHH1() {
  let hh = cmbStartHH1.selectedIndex
  return hh
}

export function setStartHH2(hh) {
  cmbStartHH2.selectedIndex = hh
}

export function getStartHH2() {
  let hh = cmbStartHH2.selectedIndex
  return hh
}

export function setStartHH3(hh) {
  cmbStartHH3.selectedIndex = hh
}

export function getStartHH3() {
  let hh = cmbStartHH3.selectedIndex
  return hh
}

export function setStartHH4(hh) {
  cmbStartHH4.selectedIndex = hh
}

export function getStartHH4() {
  let hh = cmbStartHH4.selectedIndex
  return hh
}

export function setStartMM1(mm) {
  cmbStartMM1.selectedIndex = mm
}

export function getStartMM1() {
  let mm = cmbStartMM1.selectedIndex
  return mm
}

export function setStartMM2(mm) {
  cmbStartMM2.selectedIndex = mm
}

export function getStartMM2() {
  let mm = cmbStartMM2.selectedIndex
  return mm
}

export function setStartMM3(mm) {
  cmbStartMM3.selectedIndex = mm
}

export function getStartMM3() {
  let mm = cmbStartMM3.selectedIndex
  return mm
}

export function setStartMM4(mm) {
  cmbStartMM4.selectedIndex = mm
}

export function getStartMM4() {
  let mm = cmbStartMM4.selectedIndex
  return mm
}

export function disableSeason(dis) {
	cmbStartMo.disabled = dis
 	cmbStartDa.disabled = dis
  	cmbStopMo.disabled = dis
  	cmbStopDa.disabled = dis
  	checkMixSeason1.disabled = dis
  	checkMixSeason2.disabled = dis
  	checkMixSeason3.disabled = dis
  	checkMixSeason4.disabled = dis
  	cmbStartHH1.disabled = dis
  	cmbStartMM1.disabled = dis
  	cmbStartHH2.disabled = dis
  	cmbStartMM2.disabled = dis
  	cmbStartHH3.disabled = dis
  	cmbStartMM3.disabled = dis
  	cmbStartHH4.disabled = dis
  	cmbStartMM4.disabled = dis
}
