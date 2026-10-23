const textEmailFrom = document.getElementById('emailFrom')
const checkChecked1 = document.getElementById('checked1')
const checkChecked2 = document.getElementById('checked2')
const checkChecked3 = document.getElementById('checked3')
const checkChecked4 = document.getElementById('checked4')
const checkChecked5 = document.getElementById('checked5')
const checkChecked6 = document.getElementById('checked6')
const checkChecked7 = document.getElementById('checked7')
const checkChecked8 = document.getElementById('checked8')
const textEmailTo1 = document.getElementById('emailTo1')
const textEmailTo2 = document.getElementById('emailTo2')
const textEmailTo3 = document.getElementById('emailTo3')
const textEmailTo4 = document.getElementById('emailTo4')
const textEmailTo5 = document.getElementById('emailTo5')
const textEmailTo6 = document.getElementById('emailTo6')
const textEmailTo7 = document.getElementById('emailTo7')
const textEmailTo8 = document.getElementById('emailTo8')
const textPlace = document.getElementById('place')
const textInterval = document.getElementById('interval')

export function setEmailFrom(from) {
  textEmailFrom.value = from
}

export function getEmailFrom() {
  let from = textEmailFrom.value
  return from
}

export function setChecked(chk) {
  checkChecked1.checked = ((chk & 0x0100) != 0)
  checkChecked2.checked = ((chk & 0x0200) != 0)
  checkChecked3.checked = ((chk & 0x0400) != 0)
  checkChecked4.checked = ((chk & 0x0800) != 0)
  checkChecked5.checked = ((chk & 0x1000) != 0)
  checkChecked6.checked = ((chk & 0x2000) != 0)
  checkChecked7.checked = ((chk & 0x4000) != 0)
  checkChecked8.checked = ((chk & 0x8000) != 0)
}

export function getChecked() {
  let chk = 0
  if (checkChecked1.checked) {
    chk |= 0x0001
  }
  if (checkChecked2.checked) {
    chk |= 0x0002
  }
  if (checkChecked3.checked) {
    chk |= 0x0004
  }
  if (checkChecked4.checked) {
    chk |= 0x0008
  }
  if (checkChecked5.checked) {
    chk |= 0x0010
  }
  if (checkChecked6.checked) {
    chk |= 0x0020
  }
  if (checkChecked7.checked) {
    chk |= 0x0040
  }
  if (checkChecked8.checked) {
    chk |= 0x0080
  }
  return chk
}

export function setEmailTo1(to) {
  textEmailTo1.value = to
}
export function setEmailTo2(to) {
  textEmailTo2.value = to
}
export function setEmailTo3(to) {
  textEmailTo3.value = to
}
export function setEmailTo4(to) {
  textEmailTo4.value = to
}
export function setEmailTo5(to) {
  textEmailTo5.value = to
}
export function setEmailTo6(to) {
  textEmailTo6.value = to
}
export function setEmailTo7(to) {
  textEmailTo7.value = to
}
export function setEmailTo8(to) {
  textEmailTo8.value = to
}

export function getEmailTo1() {
  let to = textEmailTo1.value
  return to
}
export function getEmailTo2() {
  let to = textEmailTo2.value
  return to
}
export function getEmailTo3() {
  let to = textEmailTo3.value
  return to
}
export function getEmailTo4() {
  let to = textEmailTo4.value
  return to
}
export function getEmailTo5() {
  let to = textEmailTo5.value
  return to
}
export function getEmailTo6() {
  let to = textEmailTo6.value
  return to
}
export function getEmailTo7() {
  let to = textEmailTo7.value
  return to
}
export function getEmailTo8() {
  let to = textEmailTo8.value
  return to
}

export function setPlace(plc) {
  textPlace.value = plc
}

export function getPlace() {
  let plc = textPlace.value
  return plc
}

export function setInterval(val) {
  textInterval.value = val
}

export function getInterval() {
  let val = textInterval.value
  return parseInt(val, 10)
}

export function mailGate() {
  var UserInput = prompt('パスワードを入力してください', '');
  if (UserInput != null) {
    if (UserInput == 'pass') {
      textEmailFrom.readOnly = false
      textEmailTo1.readOnly = false
      textEmailTo2.readOnly = false
      textEmailTo3.readOnly = false
    }
    else {
      alert('パスワードが違います')
    }
  }
}

export function mailReadOnly() {
  textEmailFrom.readOnly = true
  textEmailTo1.readOnly = true
  textEmailTo2.readOnly = true
  textEmailTo3.readOnly = true
}

export function disableMail(dis) {
  textEmailFrom.disabled = dis
  checkChecked1.disabled = dis
  checkChecked2.disabled = dis
  checkChecked3.disabled = dis
  checkChecked4.disabled = dis
  checkChecked5.disabled = dis
  checkChecked6.disabled = dis
  checkChecked7.disabled = dis
  checkChecked8.disabled = dis
  textEmailTo1.disabled = dis
  textEmailTo2.disabled = dis
  textEmailTo3.disabled = dis
  textEmailTo4.disabled = dis
  textEmailTo5.disabled = dis
  textEmailTo6.disabled = dis
  textEmailTo7.disabled = dis
  textEmailTo8.disabled = dis
  textPlace.disabled = dis
  textInterval.disabled = dis
}
