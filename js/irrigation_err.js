const textUpperLimit1 = document.getElementById('upperLimit1')
const textUpperLimit2 = document.getElementById('upperLimit2')
const textUpperLimit3 = document.getElementById('upperLimit3')
const textUpperLimit4 = document.getElementById('upperLimit4')
const textUpperLimit5 = document.getElementById('upperLimit5')
const textUpperLimit6 = document.getElementById('upperLimit6')
const textUpperLimit7 = document.getElementById('upperLimit7')
const textUpperLimit8 = document.getElementById('upperLimit8')
const textLowerLimit1 = document.getElementById('lowerLimit1')
const textLowerLimit2 = document.getElementById('lowerLimit2')
const textLowerLimit3 = document.getElementById('lowerLimit3')
const textLowerLimit4 = document.getElementById('lowerLimit4')
const textLowerLimit5 = document.getElementById('lowerLimit5')
const textLowerLimit6 = document.getElementById('lowerLimit6')
const textLowerLimit7 = document.getElementById('lowerLimit7')
const textLowerLimit8 = document.getElementById('lowerLimit8')

export function setUpperLimit1(upper) {
  textUpperLimit1.value = upper
}
export function setUpperLimit2(upper) {
  textUpperLimit2.value = upper
}
export function setUpperLimit3(upper) {
  textUpperLimit3.value = upper
}
export function setUpperLimit4(upper) {
  textUpperLimit4.value = upper
}
export function setUpperLimit5(upper) {
  textUpperLimit5.value = upper
}
export function setUpperLimit6(upper) {
  textUpperLimit6.value = upper
}
export function setUpperLimit7(upper) {
  textUpperLimit7.value = upper
}
export function setUpperLimit8(upper) {
  textUpperLimit8.value = upper
}

export function getUpperLimit1() {
  let upper = textUpperLimit1.value
  return parseInt(upper, 10)
}
export function getUpperLimit2() {
  let upper = textUpperLimit2.value
  return parseInt(upper, 10)
}
export function getUpperLimit3() {
  let upper = textUpperLimit3.value
  return parseInt(upper, 10)
}
export function getUpperLimit4() {
  let upper = textUpperLimit4.value
  return parseInt(upper, 10)
}
export function getUpperLimit5() {
  let upper = textUpperLimit5.value
  return parseInt(upper, 10)
}
export function getUpperLimit6() {
  let upper = textUpperLimit6.value
  return parseInt(upper, 10)
}
export function getUpperLimit7() {
  let upper = textUpperLimit7.value
  return parseInt(upper, 10)
}
export function getUpperLimit8() {
  let upper = textUpperLimit8.value
  return parseInt(upper, 10)
}

export function setLowerLimit1(lower) {
  textLowerLimit1.value = lower
}
export function setLowerLimit2(lower) {
  textLowerLimit2.value = lower
}
export function setLowerLimit3(lower) {
  textLowerLimit3.value = lower
}
export function setLowerLimit4(lower) {
  textLowerLimit4.value = lower
}
export function setLowerLimit5(lower) {
  textLowerLimit5.value = lower
}
export function setLowerLimit6(lower) {
  textLowerLimit6.value = lower
}
export function setLowerLimit7(lower) {
  textLowerLimit7.value = lower
}
export function setLowerLimit8(lower) {
  textLowerLimit8.value = lower
}

export function getLowerLimit1() {
  let lower = textLowerLimit1.value
  return parseInt(lower, 10)
}
export function getLowerLimit2() {
  let lower = textLowerLimit2.value
  return parseInt(lower, 10)
}
export function getLowerLimit3() {
  let lower = textLowerLimit3.value
  return parseInt(lower, 10)
}
export function getLowerLimit4() {
  let lower = textLowerLimit4.value
  return parseInt(lower, 10)
}
export function getLowerLimit5() {
  let lower = textLowerLimit5.value
  return parseInt(lower, 10)
}
export function getLowerLimit6() {
  let lower = textLowerLimit6.value
  return parseInt(lower, 10)
}
export function getLowerLimit7() {
  let lower = textLowerLimit7.value
  return parseInt(lower, 10)
}
export function getLowerLimit8() {
  let lower = textLowerLimit8.value
  return parseInt(lower, 10)
}

export function disableIrrigation(dis) {
  textUpperLimit1.disabled = dis
  textUpperLimit2.disabled = dis
  textUpperLimit3.disabled = dis
  textUpperLimit4.disabled = dis
  textUpperLimit5.disabled = dis
  textUpperLimit6.disabled = dis
  textUpperLimit7.disabled = dis
  textUpperLimit8.disabled = dis

  textLowerLimit1.disabled = dis
  textLowerLimit2.disabled = dis
  textLowerLimit3.disabled = dis
  textLowerLimit4.disabled = dis
  textLowerLimit5.disabled = dis
  textLowerLimit6.disabled = dis
  textLowerLimit7.disabled = dis
  textLowerLimit8.disabled = dis
}
