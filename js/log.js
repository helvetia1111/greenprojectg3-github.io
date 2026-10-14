function dispLog() {
	operation1.style.display = 'none'
  	operation2.style.display = 'none'
  	operation3.style.display = 'none'
  	operation4.style.display = 'none'

	log1.style.display = 'block'
	log2.style.display = 'block'
	log3.style.display = 'block'
	log4.style.display = 'block'
	log5.style.display = 'block'
	log7.style.display = 'block'
}

function dispBackLog() {
	operation1.style.display = 'block'
  	operation2.style.display = 'block'
  	operation3.style.display = 'block'
  	operation4.style.display = 'block'

	log1.style.display = 'none'
	log2.style.display = 'none'
	log3.style.display = 'none'
	log4.style.display = 'none'
	log5.style.display = 'none'
	log7.style.display = 'none'
}

let dispRes = 0
function resultLog() {
	dispRes = 1
	log1.style.display = 'none'
	log2.style.display = 'none'
	log3.style.display = 'none'
	log4.style.display = 'none'
	log5.style.display = 'none'
	log6.style.display = 'block'
}

function resultBackLog() {
	dispRes = 0
	log1.style.display = 'block'
	log2.style.display = 'block'
	log3.style.display = 'block'
	log4.style.display = 'block'
	log5.style.display = 'block'
	log6.style.display = 'none'
}

let btnLog = document.getElementById("log")
btnLog.addEventListener("click", function(event) {
  	dispLog()
})

function downloadCSV() {
	const filename = "download.csv"
  	const data = 'テスト, テスト, テスト\nテスト, テスト, テスト'
  	const bom = new Uint8Array([0xef, 0xbb, 0xbf])
  	const blob = new Blob([bom, data], {type: "text/csv" })
  	const objectUrl = URL.createObjectURL(blob)

	const downloadLink = document.createElement("a")
	downloadLink.download = filename
	downloadLink.href = objectUrl
	downloadLink.click()
	downloadLink.remove()
}

let btnSprLog1 = document.getElementById("sprLog1")
btnSprLog1.addEventListener("click", function(event) {
	const data = 'テスト, テスト, テスト\nテスト, テスト, テスト'
	log6.innerText = data
	resultLog()
})

let btnLogBack = document.getElementById("logBack")
btnLogBack.addEventListener("click", function(event) {
	if (dispRes == 0) {
		dispBackLog()
	}
	else {
		resultBackLog()
	}
})
