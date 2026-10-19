const textFlowLMin = document.getElementById('flowLmin')
const textFlowHz = document.getElementById('flowHz')
const radioBeforeRatioChecked = document.getElementById('beforeRatioChecked')
const textBeforeRatio = document.getElementById('beforeRatio')
const radioBeforeTheoreticalChecked = document.getElementById('beforeTheoreticalChecked')
const textBeforeTheoretical = document.getElementById('beforeTheoretical')
const textSprFlowMonitorWait = document.getElementById('sprFlowMonitorWait')
const checkSprStopChecked = document.getElementById('sprStopChecked')
const checkReleaseChecked = document.getElementById('releaseChecked')
const textEndTime = document.getElementById('endTime')
const textStartTime = document.getElementById('startTime')

export function setFlowLMin(flow) {
  textFlowLMin.value = flow
}
export function setFlowHz(flow) {
  textFlowHz.value = flow
}

export function setBeforeChecked(check) {
  radioBeforeRatioChecked.checked = ((check & 0x01) != 0)
  radioBeforeTheoreticalChecked.checked = !radioBeforeRatioChecked.checked
}

export function setBeforeRatio(ratio) {
  textBeforeRatio.value = ratio
}

export function setBeforeTheoretical(theo) {
  textBeforeTheoretical.value = theo
}

export function setSprFlowMonitorWait(wait) {
  textSprFlowMonitorWait.value = wait
}

export function setCheckSprStopChecked(chk) {
  checkSprStopChecked.checked = ((chk & 0x01) != 0)
}

export function setCheckReleaseChecked(chk) {
  checkReleaseChecked.checked = ((chk & 0x01) != 0)
}

export function setEndTime(time) {
  textEndTime.value = time
}

export function setStartTime(time) {
  textStartTime.value = time
}

export function irrigationGate() {
  var UserInput = prompt('パスワードを入力してください', '');
  if (UserInput != null) {
    if (UserInput == 'pass') {
      textFlowLMin.readOnly = false
      textFlowHz.readOnly = false
      textBeforeRatio.readOnly = false
      textBeforeTheoretical.readOnly = false
    }
    else {
      alert('パスワードが違います')
    }
  }
}
