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

function setLiquidMix(mix) {
  checkMixUse1.checked = ((mix & 0x0001) != 0)
  checkMixUse2.checked = ((mix & 0x0002) != 0)
  checkMixUse3.checked = ((mix & 0x0004) != 0)
  checkMixUse4.checked = ((mix & 0x0008) != 0)
  checkMixUse5.checked = ((mix & 0x0010) != 0)
  checkMixUse6.checked = ((mix & 0x0020) != 0)
  checkMixUse7.checked = ((mix & 0x0040) != 0)
  checkMixUse8.checked = ((mix & 0x0080) != 0)
}

function setLiquidRatio(ratio) {
  textLiquidRatio.value = ratio
}

function setLiquidPumpSel(iwaki) {
  radioLiquidIwaki.checked = ((iwaki & 0x01) != 0)
  radioLiquidGrundfos.checked = !radioLiquidIwaki.checked
}
