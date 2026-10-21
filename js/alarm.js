const checkAlarm = document.getElementById('almChecked')

export function setCheckAlarm(alm) {
  checkAlarm.checked = ((alm & 0x01) != 0)
}

export function getCheckAlarm() {
  let alm = 0
  if (checkAlarm.checked) {
    alm |= 0x01
  }
  return alm
}

export function disableAlarm(dis) {
	checkAlarm.disabled = dis
}
