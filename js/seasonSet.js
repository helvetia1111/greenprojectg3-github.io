import {writeCmdRead, writeCmdWrite, writeUi8, readUi8, writeUi16, readUi16, writeUi32, readUi32, setBleService} from './settingService.js'

function dispSeasonSet(num) {
	main1.style.display = 'none'
	main2.style.display = 'none'
	main5.style.display = 'none'
	main3.style.display = 'none'
	main4.style.display = 'none'

  season1.style.display = 'block'
  season2.style.display = 'block'
  season3.style.display = 'block'
  if (num == 0) {
    season41.style.display = 'block'
  }
  else if (num == 1) {
    season42.style.display = 'block'
  }
  else if (num == 2) {
    season43.style.display = 'block'
  }
  else if (num == 3) {
    season44.style.display = 'block'
  }
  if(gType == 0) {
    season5.style.display = 'block'
    season6.style.display = 'block'
    season7.style.display = 'block'
    season8.style.display = 'block'
    season9.style.display = 'block'
    season10.style.display = 'block'
    season11.style.display = 'block'
    season12.style.display = 'block'
    season13.style.display = 'block'
    season14.style.display = 'block'
  }
}

function dispSeasonBack() {
	main1.style.display = 'block'
	main2.style.display = 'block'
	main5.style.display = 'block'
	main3.style.display = 'block'
	main4.style.display = 'block'

	season1.style.display = 'none'
  season2.style.display = 'none'
  season3.style.display = 'none'
  season41.style.display = 'none'
  season42.style.display = 'none'
  season43.style.display = 'none'
  season44.style.display = 'none'
  season5.style.display = 'none'
  season6.style.display = 'none'
  season7.style.display = 'none'
  season8.style.display = 'none'
  season9.style.display = 'none'
  season10.style.display = 'none'
  season11.style.display = 'none'
  season12.style.display = 'none'
  season13.style.display = 'none'
  season14.style.display = 'none'
}

function disableMain(dis) {
	btnMonitor.disabled = dis
	btnSetting.disabled = dis
  btnEmail.disabled = dis
  btnSetSeason1.disabled = dis
  btnSetSeason2.disabled = dis
  btnSetSeason3.disabled = dis
  btnSetSeason4.disabled = dis
  btnMessage.disabled = dis
}

function disableSeasonSet(dis) {
	btnSetWeek1.disabled = dis
	btnSetWeek2.disabled = dis
  btnSetWeek3.disabled = dis
  btnSetWeek4.disabled = dis
  btnSetOpeTime1.disabled = dis
  btnSetOpeTime2.disabled = dis
  btnSetOpeTime3.disabled = dis
  btnSetOpeTime4.disabled = dis
  btnSeasonSet.disabled = dis
	btnSeasonBack.disabled = dis
}

btnSetSeason1.addEventListener("click", function(event) {
  disableMain(true)
	return setBleService()
  .then(_ => {
    return writeCmdRead(26) // start_mo1
  })
	.then(_ => {
		return readUi8()
	})
	.then(ui8 => {
		Liquid.setLiquidMix(ui16)
		return writeCmdRead(27) //rat
	})
  .then(_ => {
		return readUi8()
	})
	.then(ui8 => {
    disableMain(false)
    dispSeasonSet(0)
	})
	.catch(error => {
		console.log('error: ' + error)
    disableMain(false)
	})
})
