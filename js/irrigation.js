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

export function getFlowLMin() {
  let flow = textFlowLMin.value
  return parseInt(flow, 10)
}

export function setFlowHz(flow) {
  textFlowHz.value = flow
}

export function getFlowHz() {
  let flow = textFlowHz.value
  return parseInt(flow, 10)
}

export function setBeforeChecked(check) {
  radioBeforeRatioChecked.checked = ((check & 0x01) != 0)
  radioBeforeTheoreticalChecked.checked = !radioBeforeRatioChecked.checked
}

export function getBeforeChecked() {
  let check = 0;
  if (radioBeforeRatioChecked.checked) {
    check |= 0x01
  }
  return check
}

export function setBeforeRatio(ratio) {
  textBeforeRatio.value = ratio
}

export function getBeforeRatio() {
  let ratio = textBeforeRatio.value
  return parseInt(ratio, 10)
}

export function setBeforeTheoretical(theo) {
  textBeforeTheoretical.value = theo
}

export function getBeforeTheoretical() {
  let theo = textBeforeTheoretical.value
  return parseInt(theo, 10)
}

export function setSprFlowMonitorWait(wait) {
  textSprFlowMonitorWait.value = wait
}

export function getSprFlowMonitorWait() {
  let wait = textSprFlowMonitorWait.value
  return parseInt(wait, 10)
}

export function setCheckSprStopChecked(chk) {
  checkSprStopChecked.checked = ((chk & 0x01) != 0)
}

export function getCheckSprStopChecked() {
  let chk = 0
  if (checkSprStopChecked.checked) {
    chk |= 0x01
  }
  return chk
}

export function setCheckReleaseChecked(chk) {
  checkReleaseChecked.checked = ((chk & 0x02) != 0)
}

export function getCheckReleaseChecked() {
  let chk = 0
  if (checkReleaseChecked.checked) {
    chk |= 0x01
  }
  return chk
}

export function setEndTime(time) {
  textEndTime.value = time
}

export function getEndTime() {
  let time = textEndTime.value
  return parseInt(time, 10)
}

export function setStartTime(time) {
  textStartTime.value = time
}

export function getStartTime() {
  let time = textStartTime.value
  return parseInt(time, 10)
}

export function irrigationReadOnly(val) {
  textFlowLMin.readOnly = val
  textFlowHz.readOnly = val
  textBeforeRatio.readOnly = val
  textBeforeTheoretical.readOnly = val
}

export function disableIrrigation(dis) {
	textFlowLMin.disabled = dis
  	textFlowHz.disabled = dis
  	radioBeforeRatioChecked.disabled = dis
  	textBeforeRatio.disabled = dis
  	radioBeforeTheoreticalChecked.disabled = dis
  	textBeforeTheoretical.disabled = dis
  	textSprFlowMonitorWait.disabled = dis
  	checkSprStopChecked.disabled = dis
  	checkReleaseChecked.disabled = dis
  	textEndTime.disabled = dis
  	textStartTime.disabled = dis
}
