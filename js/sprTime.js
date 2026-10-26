const textSprTime1 = document.getElementById('sprTime1')
const textSprTime2 = document.getElementById('sprTime2')
const textSprTime3 = document.getElementById('sprTime3')
const textSprTime4 = document.getElementById('sprTime4')
const textSprTime5 = document.getElementById('sprTime5')
const textSprTime6 = document.getElementById('sprTime6')
const textSprTime7 = document.getElementById('sprTime7')
const textSprTime8 = document.getElementById('sprTime8')

export function setSprTime1(time) {
  textSprTime1.value = time
}

export function setSprTime2(time) {
  textSprTime2.value = time
}

export function setSprTime3(time) {
  textSprTime3.value = time
}

export function setSprTime4(time) {
  textSprTime4.value = time
}

export function setSprTime5(time) {
  textSprTime5.value = time
}

export function setSprTime6(time) {
  textSprTime6.value = time
}

export function setSprTime7(time) {
  textSprTime7.value = time
}

export function setSprTime8(time) {
  textSprTime8.value = time
}

export function getSprTime1() {
  let time = textSprTime1.value
  return parseInt(time, 10)
}

export function getSprTime2() {
  let time = textSprTime2.value
  return parseInt(time, 10)
}

export function getSprTime3() {
  let time = textSprTime3.value
  return parseInt(time, 10)
}

export function getSprTime4() {
  let time = textSprTime4.value
  return parseInt(time, 10)
}

export function getSprTime5() {
  let time = textSprTime5.value
  return parseInt(time, 10)
}

export function getSprTime6() {
  let time = textSprTime6.value
  return parseInt(time, 10)
}

export function getSprTime7() {
  let time = textSprTime7.value
  return parseInt(time, 10)
}

export function getSprTime8() {
  let time = textSprTime8.value
  return parseInt(time, 10)
}

export function disableSprTime(dis) {
	textSprTime1.disabled = dis
  textSprTime2.disabled = dis
  textSprTime3.disabled = dis
  textSprTime4.disabled = dis
  textSprTime5.disabled = dis
  textSprTime6.disabled = dis
  textSprTime7.disabled = dis
  textSprTime8.disabled = dis
}
