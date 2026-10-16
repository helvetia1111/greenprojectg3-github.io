const chekMixUse1 = document.getElementById("use1")
const chekMixUse2 = document.getElementById("use2")
const chekMixUse3 = document.getElementById("use3")
const chekMixUse4 = document.getElementById("use4")
const chekMixUse5 = document.getElementById("use5")
const chekMixUse6 = document.getElementById("use6")
const chekMixUse7 = document.getElementById("use7")
const chekMixUse8 = document.getElementById("use8")

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
