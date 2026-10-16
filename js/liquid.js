function dispLiquid() {
  set1.style.display = 'none'
  set2.style.display = 'none'
  set3.style.display = 'none'
  set4.style.display = 'none'
  set5.style.display = 'none'

  liquid1.style.display = 'block'
  liquid2.style.display = 'block'
  liquid3.style.display = 'block'
  liquid4.style.display = 'block'
  liquid5.style.display = 'block'
  liquid6.style.display = 'block'
  liquid7.style.display = 'block'
  liquid8.style.display = 'block'
}

function dispLiquidBack() {
  set1.style.display = 'block'
  set2.style.display = 'block'
  set3.style.display = 'block'
  set4.style.display = 'block'
  set5.style.display = 'block'

  liquid1.style.display = 'none'
  liquid2.style.display = 'none'
  liquid3.style.display = 'none'
  liquid4.style.display = 'none'
  liquid5.style.display = 'none'
  liquid6.style.display = 'none'
  liquid7.style.display = 'none'
  liquid8.style.display = 'none'
}

let btnSetLiquid = document.getElementById("setLiquid")
btnSetLiquid.addEventListener("click", function(event) {
  dispLiquid()
})

let btnLiquidBack = document.getElementById("liquidBack")
btnLiquidBack.addEventListener("click", function(event) {
  dispLiquidBack()
})
