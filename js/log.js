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
	log6.style.display = 'block'
}

let btnLog = document.getElementById("log")
btnLog.addEventListener("click", function(event) {
  dispLog()
})

function downloadCSV() {
  const filename = "download.csv"
  const data = 'テスト, テスト, テスト\nテスト, テスト, テスト'
  const bom = new Uint8Array([0xef, 0xbb, 0xbf])
  const blob = new Blob([bom, data], {type: 'text/csv' })
  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(blob, filename)
  }
  else {
    const url = (window.URL || window.webkitURL).createObjectURL(blob)
    const download = document.createElement('a')
    download.href = url
    download.download = filename
    download.click()
    (window.URL || window.webkitURL).revokeObjectURL(url)
  }
}

let btnSprLog1 = document.getElementById("sprLog1")
btnSprLog1.addEventListener("click", function(event) {
  downloadCSV()
})
