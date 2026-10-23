const checkMon = document.getElementById('mon')
const checkTue = document.getElementById('tue')
const checkWed = document.getElementById('wed')
const checkThu = document.getElementById('thu')
const checkFri = document.getElementById('fri')
const checkSat = document.getElementById('sat')
const checkSun = document.getElementById('sun')

export function setWday(check) {
  checkMon.checked = ((check & 0x01) != 0)
  checkTue.checked = ((check & 0x02) != 0)
  checkWed.checked = ((check & 0x04) != 0)
  checkThu.checked = ((check & 0x08) != 0)
  checkFri.checked = ((check & 0x10) != 0)
  checkSat.checked = ((check & 0x20) != 0)
  checkSun.checked = ((check & 0x40) != 0)
}

export function getWday() {
  let check = 0;
  if (checkMon.checked) {
    check |= 0x01
  }
  if (checkTue.checked) {
    check |= 0x02
  }
  if (checkWed.checked) {
    check |= 0x04
  }
  if (checkThu.checked) {
    check |= 0x08
  }
  if (checkFri.checked) {
    check |= 0x10
  }
  if (checkSat.checked) {
    check |= 0x20
  }
  if (checkSun.checked) {
    check |= 0x40
  }
  return check
}

export function disableWeek(dis) {
  checkMon.disabled = dis
  checkTue.disabled = dis
  checkWed.disabled = dis
  checkThu.disabled = dis
  checkFri.disabled = dis
  checkSat.disabled = dis
  checkSun.disabled = dis
}
