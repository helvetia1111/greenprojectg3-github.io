const cmdReadSetChUUID = '091272b5-575f-4231-bd87-9c614889aa7d'
const cmdWriteSetChUUID = 'a54b15b0-6e03-4bd2-ac89-e8009bfee496'
const ui8SetChUUID = '39e5bed1-b05a-4302-8bda-9a78d0e0e387'
const ui16SetChUUID = '302ad424-9906-44e0-b721-45d85e19abad'
const ui32SetChUUID = '8045fced-4830-40c2-8e2b-49d2452af5e5'
const strSetChUUID = '9ad400f5-d46d-4cc0-aeb5-a0dd0e68f90a'
let setService
let cmdReadSetCh
let cmdWriteSetCh
let ui8SetCh
let ui16SetCh
let ui32SetCh
let strSetCh

function dispSetting() {
	main1.style.display = 'none'
	main2.style.display = 'none'
	main5.style.display = 'none'
	main3.style.display = 'none'
	main4.style.display = 'none'

	set1.style.display = 'block'
	set2.style.display = 'block'
  	set3.style.display = 'block'
	set4.style.display = 'block'
	set5.style.display = 'block'

	set1.textContent = `Rev. ${gRev}`
	if (gType == 0) {
		btnRainOrValve.textContent = '雨センサ'
	}
	else {
		btnRainOrValve.textContent = 'バルブ選択'
	}
}

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

const btnRainOrValve = document.getElementById("setRainOrValve")

async function writeCmdRead(cmd) {
	const val = Uint8Array.of(cmd)
	try {
		if (cmdReadSetCh.properties.writeWithoutResponse) {
			await cmdReadSetCh.writeValueWithoutResponse(val)
		}
		else {
			await cmdReadSetCh.writeValueWithResponse(val)
		}
	} catch (error) {
		console.error('書き込みに失敗しました: ', error)
	}
}

async function writeCmdWrite(cmd) {
	const val = Uint8Array.of(cmd)
	try {
		if (cmdWriteSetCh.properties.writeWithoutResponse) {
			await cmdWriteSetCh.writeValueWithoutResponse(val)
		}
		else {
			await cmdWriteSetCh.writeValueWithResponse(val)
		}
	} catch (error) {
		console.error('書き込みに失敗しました: ', error)
	}
}

async function writeUi8(ui8) {
	const val = Uint8Array.of(ui8)
	try {
		if (ui8SetCh.properties.writeWithoutResponse) {
			await ui8SetCh.writeValueWithoutResponse(val)
		}
		else {
			await ui8SetCh.writeValueWithResponse(val)
		}
	} catch (error) {
		console.error('書き込みに失敗しました: ', error)
	}
}

async function readUi8() {
	try {
		let ret = await ui8SetCh.readValue()
    return ret.getUint8(0, true)
	} catch (error) {
		console.error('読み込みに失敗しました: ', error)
	}
}

async function writeUi16(ui16) {
  const buffer = new ArrayBuffer(2)
  const view = new DataView(buffer)
  view.setUint16(0, ui16, true)
  
	try {
		if (ui16SetCh.properties.writeWithoutResponse) {
			await ui16SetCh.writeValueWithoutResponse(buffer)
			console.log('write ' + view.getUint16(0, true))
		}
		else {
			await ui16SetCh.writeValueWithResponse(buffer)
			console.log('write ' + view.getUint16(0, true))
		}
	} catch (error) {
		console.error('書き込みに失敗しました: ', error)
	}
}

async function readUi16() {
	try {
		let ret = await ui16SetCh.readValue()
    return ret.getUint16(0, true)
	} catch (error) {
		console.error('読み込みに失敗しました: ', error)
	}
}

async function writeUi32(ui32) {
  const buffer = new ArrayBuffer(4)
  const view = new DataView(buffer)
  view.setUint32(0, ui32, true)
  
	try {
		if (ui32SetCh.properties.writeWithoutResponse) {
			await ui32SetCh.writeValueWithoutResponse(buffer)
			console.log('write ' + view.getUint32(0, true))
		}
		else {
			await ui32SetCh.writeValueWithResponse(buffer)
			console.log('write ' + view.getUint32(0, true))
		}
	} catch (error) {
		console.error('書き込みに失敗しました: ', error)
	}
}

async function readUi32() {
	try {
		let ret = await ui32SetCh.readValue()
    return ret.getUint32(0, true)
	} catch (error) {
		console.error('読み込みに失敗しました: ', error)
	}
}

async function writeStr(str) {
	const encoder = new TextEncoder()
	const encoded = encoder.encode(str)
  
	try {
		if (strSetCh.properties.writeWithoutResponse) {
			await strSetCh.writeValueWithoutResponse(encoded)
		}
		else {
			await strSetCh.writeValueWithResponse(encoded)
		}
	} catch (error) {
		console.error('書き込みに失敗しました: ', error)
	}
}

async function readStr() {
	try {
		let ret = await strSetCh.readValue()
    return new TextDecoder('utf-8').decode(ret).replace(/\0/g, '') 
    return ret.getUint8(0, true)
	} catch (error) {
		console.error('読み込みに失敗しました: ', error)
	}
}

let btnSetting = document.getElementById("setting")
btnSetting.addEventListener("click", function(event) {
  return gattServer.getPrimaryService(setServiceUUID)
	.then(service => {
		setService = service
		return service.getCharacteristic(cmdReadSetChUUID)
	})
	.then(cmdReadCh => {
		cmdReadSetCh = cmdReadCh
    return setService.getCharacteristic(cmdWriteSetChUUID)
	})
  .then(cmdWriteCh => {
		cmdWriteSetCh = cmdWriteCh
    return setService.getCharacteristic(ui8SetChUUID)
	})
  .then(ui8Ch => {
		ui8SetCh = ui8Ch
    return setService.getCharacteristic(ui16SetChUUID)
	})
  .then(ui16Ch => {
		ui16SetCh = ui16Ch
    return setService.getCharacteristic(ui32SetChUUID)
	})
  .then(ui32Ch => {
		ui32SetCh = ui32Ch
    return setService.getCharacteristic(strSetChUUID)
	})
  .then(strCh => {
		strSetCh = strCh
    dispSetting()
	})
	.catch(error => {
		console.log('error: ' + error)
	})
})

let btnSetLiquid = document.getElementById("setLiquid")
btnSetLiquid.addEventListener("click", function(event) {
	return writeCmdRead(126) //mix
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		setLiquidMix(ui16)
		return writeCmdRead(2) //ratio
		//dispLiquid()
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		setLiquidRatio(ui16)
		return writeCmdRead(128) //pump_sel[0]
	})
	.then(_ => {
		return readUi8()
	})
	.then(ui8 => {
		setLiquidPumpSel(ui8)
		return writeCmdRead(125) //pump_pls_ch
	})
	.then(_ => {
		return readUi8()
	})
	.then(ui8 => {
		setLiquidPlsUse(ui8)
		dispLiquid()
	})
	.catch(error => {
		console.log('error: ' + error)
	})
})

let btnLiquidSet = document.getElementById("liquidSet")
btnLiquidSet.addEventListener("click", function(event) {
	mix = getLiquidMix()
	return writeUi16(mix)
	.then(_ => {
		return writeCmeWrite(126) // mix
	})
	.then(_ => {
		ratio = getLiquidRatio()
		return writeUi16(ratio)
	})
	.then(_ => {
		return writeCmeWrite(2) // ratio
	})
	.then(_ => {
		pump_sel = getLiquidPumpSel()
		return writeUi8(pump_sel)
	})
	.then(_ => {
		return writeCmeWrite(128) //pump_sel[0]
	})
	.then(_ => {
		pump_pls_ch = getLiquidPlsUse()
		return writeUi8(pump_pls_ch)
	})
	.then(_ => {
		return writeCmeWrite(125) // pump_pls_ch
	})
	.then(_ => {
		return writeCmdManual(12) // write liquid_fe
	})
	.then(_ => {
		dispLiquidBack()
	}
	.catch(error => {
		console.log('error: ' + error)
	})
})

let btnLiquidBack = document.getElementById("liquidBack")
btnLiquidBack.addEventListener("click", function(event) {
  dispLiquidBack()
})
