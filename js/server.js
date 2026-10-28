const textSmtpServer = document.getElementById('smtpServer')
const textSmtpId = document.getElementById('smtpId')
const textSmtpPw = document.getElementById('smtpPw')

export function setSmtpServer(smtp) {
  textSmtpServer.value = smtp
}

export function getSmtpServer() {
  let smtp = textSmtpServer.value
  return smtp
}

export function setSmtpId(id) {
  textSmtpId.value = id
}

export function getSmtpId() {
  let id = textSmtpId.value
  return id
}

export function setSmtpPw(pw) {
  textSmtpPw.value = pw
}

export function getSmtpPw() {
  let pw = textSmtpPw.value
  return pw
}

/*
export function serverGate() {
  var UserInput = prompt('パスワードを入力してください', '');
  if (UserInput != null) {
    if (UserInput == 'pass') {
      textSmtpServer.readOnly = false
      textSmtpId.readOnly = false
      textSmtpPw.readOnly = false
    }
    else {
      alert('パスワードが違います')
    }
  }
}
*/

export function serverReadOnly(val) {
  textSmtpServer.readOnly = val
  textSmtpId.readOnly = val
  textSmtpPw.readOnly = val
}

export function disableServer(dis) {
  textSmtpServer.disabled = dis
  textSmtpId.disabled = dis
  textSmtpPw.disabled = dis
}
