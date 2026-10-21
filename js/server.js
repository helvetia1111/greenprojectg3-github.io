const textSmtpServer = document.getElementById('smtpServer')
const textSmtpId = document.getElementById('smtpId')
const textSmtpPw = document.getElementById('smtpPw')

export function setStmpServer(smtp) {
  textSmtpServer.value = smtp
}

export function getSmtpServer() {
  let smtp = textSmtpServer.value
  return smtp
}

export function setStmpId(id) {
  textSmtpId.value = id
}

export function getSmtpId() {
  let id = textSmtpId.value
  return id
}

export function setStmpPw(pw) {
  textSmtpPw.value = pw
}

export function getSmtpPw() {
  let pw = textSmtpPw.value
  return pw
}

export function disableServer(dis) {
  textSmtpServer.disabled = dis
  textSmtpId.disabled = dis
  textSmtpPw.disabled = dis
}
