const checkMessOff = document.getElementById('messOffChecked')
const checkMessOn = document.getElementById('messOnChecked')
const checkMessEmpty = document.getElementById('messEmptyChecked')
const checkMessInErr = document.getElementById('messInErrChecked')
const checkMessSpr1 = document.getElementById('messSpr1Checked')
const checkMessSpr2 = document.getElementById('messSpr2Checked')
const checkMessSpr3 = document.getElementById('messSpr3Checked')
const checkMessSpr4 = document.getElementById('messSpr4Checked')
const checkMessSpr5 = document.getElementById('messSpr5Checked')
const checkMessSpr6 = document.getElementById('messSpr6Checked')
const checkMessSpr7 = document.getElementById('messSpr7Checked')
const checkMessSpr8 = document.getElementById('messSpr8Checked')
const checkMessBeforeErr = document.getElementById('messBeforeErrChecked')
const checkMessAd = document.getElementById('messAdChecked')
const checkMessSprErr = document.getElementById('messSprErrChecked')
const textMessOff = document.getElementById('messOff')
const textMessOn = document.getElementById('messOn')
const textMessEmpty = document.getElementById('messEmpty')
const textMessInErr = document.getElementById('messInErr')
const textMessSpr1 = document.getElementById('messSpr1')
const textMessSpr2 = document.getElementById('messSpr2')
const textMessSpr3 = document.getElementById('messSpr3')
const textMessSpr4 = document.getElementById('messSpr4')
const textMessSpr5 = document.getElementById('messSpr5')
const textMessSpr6 = document.getElementById('messSpr6')
const textMessSpr7 = document.getElementById('messSpr7')
const textMessSpr8 = document.getElementById('messSpr8')
const textMessBeforeErr = document.getElementById('messBeforeErr')
const textMessAd = document.getElementById('messAd')
const textMessSprErr = document.getElementById('messSprErr')

export function setMessChecked(chk) {
  checkMessOff.checked = ((chk & 0x0001) != 0)
  checkMessOn.checked = ((chk & 0x0002) != 0)
  checkMessEmpty.checked = ((chk & 0x0004) != 0)
  checkMessInErr.checked = ((chk & 0x0008) != 0)
  checkMessSpr1.checked = ((chk & 0x0010) != 0)
  checkMessSpr2.checked = ((chk & 0x0020) != 0)
  checkMessSpr3.checked = ((chk & 0x0040) != 0)
  checkMessSpr4.checked = ((chk & 0x0080) != 0)
  checkMessSpr5.checked = ((chk & 0x0100) != 0)
  checkMessSpr6.checked = ((chk & 0x0200) != 0)
  checkMessSpr7.checked = ((chk & 0x0400) != 0)
  checkMessSpr8.checked = ((chk & 0x0800) != 0)
  checkMessBeforeErr.checked = ((chk & 0x1000) != 0)
  checkMessAd.checked = ((chk & 0x2000) != 0)
  checkMessSprErr.checked = ((chk & 0x4000) != 0)
}

export function getMessChecked() {
  let chk = 0
  if (checkMessOff.checked) {
    chk |= 0x0001
  }
  if (checkMessOn.checked) {
    chk |= 0x0002
  }
  if (checkMessEmpty.checked) {
    chk |= 0x0004
  }
  if (checkMessInErr.checked) {
    chk |= 0x0008
  }
  if (checkMessSpr1.checked) {
    chk |= 0x0010
  }
  if (checkMessSpr2.checked) {
    chk |= 0x0020
  }
  if (checkMessSpr3.checked) {
    chk |= 0x0040
  }
  if (checkMessSpr4.checked) {
    chk |= 0x0080
  }
  if (checkMessSpr5.checked) {
    chk |= 0x0100
  }
  if (checkMessSpr6.checked) {
    chk |= 0x0200
  }
  if (checkMessSpr7.checked) {
    chk |= 0x0400
  }
  if (checkMessSpr8.checked) {
    chk |= 0x0800
  }
  if (checkMessBeforeErr.checked) {
    chk |= 0x1000
  }
  if (checkMessAd.checked) {
    chk |= 0x2000
  }
  if (checkMessSprErr.checked) {
    chk |= 0x4000
  }
  return chk
}

export function setMessOff(mess) {
  textMessOff.value = mess
}

export function getMessOff() {
  let mess = textMessOff.value
  return mess
}

export function setMessOn(mess) {
  textMessOn.value = mess
}

export function getMessOn() {
  let mess = textMessOn.value
  return mess
}

export function setMessEmpty(mess) {
  textMessEmpty.value = mess
}

export function getMessEmpty() {
  let mess = textMessEmpty.value
  return mess
}

export function setMessInErr(mess) {
  textMessInErr.value = mess
}

export function getMessInErr() {
  let mess = textMessInErr.value
  return mess
}

export function setMessSpr1(mess) {
  textMessSpr1.value = mess
}

export function getMessSpr1() {
  let mess = textMessSpr1.value
  return mess
}

export function setMessSpr2(mess) {
  textMessSpr2.value = mess
}

export function getMessSpr2() {
  let mess = textMessSpr2.value
  return mess
}

export function setMessSpr3(mess) {
  textMessSpr3.value = mess
}

export function getMessSpr3() {
  let mess = textMessSpr3.value
  return mess
}

export function setMessSpr4(mess) {
  textMessSpr4.value = mess
}

export function getMessSpr4() {
  let mess = textMessSpr4.value
  return mess
}

export function setMessSpr5(mess) {
  textMessSpr5.value = mess
}

export function getMessSpr5() {
  let mess = textMessSpr5.value
  return mess
}

export function setMessSpr6(mess) {
  textMessSpr6.value = mess
}

export function getMessSpr6() {
  let mess = textMessSpr6.value
  return mess
}

export function setMessSpr7(mess) {
  textMessSpr7.value = mess
}

export function getMessSpr7() {
  let mess = textMessSpr7.value
  return mess
}

export function setMessSpr8(mess) {
  textMessSpr8.value = mess
}

export function getMessSpr8() {
  let mess = textMessSpr8.value
  return mess
}

export function setMessBeforeErr(mess) {
  textMessBeforeErr.value = mess
}

export function getMessBeforeErr() {
  let mess = textMessBeforeErr.value
  return mess
}

export function setMessAd(mess) {
  textMessAd.value = mess
}

export function getMessAd() {
  let mess = textMessAd.value
  return mess
}

export function setMessSprErr(mess) {
  textMessSprErr.value = mess
}

export function getMessSprErr() {
  let mess = textMessSprErr.value
  return mess
}

export function disableMess(dis) {
  checkMessOff.disabled = dis
  textMessOff.disabled = dis
  checkMessOn.disabled = dis
  textMessOn.disabled = dis
  checkMessEmpty.disabled = dis
  textMessEmpty.disabled = dis
  checkMessInErr.disabled = dis
  textMessInErr.disabled = dis
  checkMessSpr1.disabled = dis
  textMessSpr1.disabled = dis
  checkMessSpr2.disabled = dis
  textMessSpr2.disabled = dis
  checkMessSpr3.disabled = dis
  textMessSpr3.disabled = dis
  checkMessSpr4.disabled = dis
  textMessSpr4.disabled = dis
  checkMessSpr5.disabled = dis
  textMessSpr5.disabled = dis
  checkMessSpr6.disabled = dis
  textMessSpr6.disabled = dis
  checkMessSpr7.disabled = dis
  textMessSpr7.disabled = dis
  checkMessSpr8.disabled = dis
  textMessSpr8.disabled = dis
  checkMessBeforeErr.disabled = dis
  textMessBeforeErr.disabled = dis
  checkMessAd.disabled = dis
  textMessAd.disabled = dis
  checkMessSprErr.disabled = dis
  textMessSprErr.disabled = dis
}
