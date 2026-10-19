const checkMixUse1 = document.getElementById('use1')
const checkMixUse2 = document.getElementById('use2')
const checkMixUse3 = document.getElementById('use3')
const checkMixUse4 = document.getElementById('use4')
const checkMixUse5 = document.getElementById('use5')
const checkMixUse6 = document.getElementById('use6')
const checkMixUse7 = document.getElementById('use7')
const checkMixUse8 = document.getElementById('use8')
const textLiquidRatio = document.getElementById('liquidRatio')
const radioLiquidIwaki = document.getElementById('iwaki')
const radioLiquidGrundfos = document.getElementById('grundfos')
const checkLiquidPlsUse = document.getElementById('plsUse')

export function setLiquidMix(mix) {
  checkMixUse1.checked = ((mix & 0x0001) != 0)
  checkMixUse2.checked = ((mix & 0x0002) != 0)
  checkMixUse3.checked = ((mix & 0x0004) != 0)
  checkMixUse4.checked = ((mix & 0x0008) != 0)
  checkMixUse5.checked = ((mix & 0x0010) != 0)
  checkMixUse6.checked = ((mix & 0x0020) != 0)
  checkMixUse7.checked = ((mix & 0x0040) != 0)
  checkMixUse8.checked = ((mix & 0x0080) != 0)
}

export function getLiquidMix() {
  let mix = 0
  if (checkMixUse1.checked) {
    mix |= 0x0001
  }
  if (checkMixUse2.checked) {
    mix |= 0x0002
  }
  if (checkMixUse3.checked) {
    mix |= 0x0004
  }
  if (checkMixUse4.checked) {
    mix |= 0x0008
  }
  if (checkMixUse5.checked) {
    mix |= 0x0010
  }
  if (checkMixUse6.checked) {
    mix |= 0x0020
  }
  if (checkMixUse7.checked) {
    mix |= 0x0040
  }
  if (checkMixUse8.checked) {
    mix |= 0x0080
  }
  return mix
}

export function setLiquidRatio(ratio) {
  textLiquidRatio.value = ratio
}

export function getLiquidRatio() {
  let ratio = textLiquidRatio.value
  return parseInt(ratio, 10)
}

export function setLiquidPumpSel(iwaki) {
  radioLiquidIwaki.checked = ((iwaki & 0x01) != 0)
  radioLiquidGrundfos.checked = !radioLiquidIwaki.checked
}

export function getLiquidPumpSel() {
  let iwaki = 0;
  if (radioLiquidIwaki.checked) {
    iwaki |= 0x01
  }
  return iwaki
}

export function setLiquidPlsUse(use) {
  checkLiquidPlsUse.checked = ((use & 0x01) != 0)
}

export function getLiquidPlsUse() {
  let use = 0
  if (checkLiquidPlsUse.checked) {
    use |= 0x01
  }
  return use
}

export function disableLiquid(dis) {
	checkMixUse1.disabled = dis
  checkMixUse2.disabled = dis
  checkMixUse3.disabled = dis
  checkMixUse4.disabled = dis
  checkMixUse5.disabled = dis
  checkMixUse6.disabled = dis
  checkMixUse7.disabled = dis
  checkMixUse8.disabled = dis
  textLiquidRatio.disabled = dis
  radioLiquidIwaki.disabled = dis
  radioLiquidGrundfos.disabled = dis
  checkLiquidPlsUse.disabled = dis
}
