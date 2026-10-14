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
