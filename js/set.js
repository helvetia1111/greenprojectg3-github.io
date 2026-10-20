import * as Liquid from './liquid.js'
import * as Irrigation from './irrigation.js'
import * as IrrigationErr from './irrigation_err.js'
import * as RainOrValve from './rain_or_valve.js'

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

function disableSet(dis) {
	btnSetLiquid.disabled = dis
	btnSetIrrigation.disabled = dis
	btnSetIrrigationErr.disabled = dis
	btnSetRainOrValve.disabled = dis
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

function disableLiquid(dis) {
	Liquid.disableLiquid(dis)
	btnLiquidSet.disabled = dis
	btnLiquidBack.disabled = dis
}

function dispIrrigation() {
  	set1.style.display = 'none'
  	set2.style.display = 'none'
  	set3.style.display = 'none'
  	set4.style.display = 'none'
  	set5.style.display = 'none'

  	irrigation1.style.display = 'block'
  	irrigation2.style.display = 'block'
  	irrigation3.style.display = 'block'
  	irrigation4.style.display = 'block'
  	irrigation5.style.display = 'block'
	if (gType == 0) {
		irrigation6.style.display = 'block'
	}
	else {
		irrigation7.style.display = 'block'
		if (gType == 2) {
			irrigation8.style.display = 'block'
		}
	}
	irrigation9.style.display = 'block'
	irrigation10.style.display = 'block'
}

function dispIrrigationBack() {
  	set1.style.display = 'block'
  	set2.style.display = 'block'
  	set3.style.display = 'block'
  	set4.style.display = 'block'
  	set5.style.display = 'block'

  	irrigation1.style.display = 'none'
	irrigation2.style.display = 'none'
	irrigation3.style.display = 'none'
	irrigation4.style.display = 'none'
	irrigation5.style.display = 'none'
	irrigation6.style.display = 'none'
	irrigation7.style.display = 'none'
	irrigation8.style.display = 'none'
	irrigation9.style.display = 'none'
	irrigation10.style.display = 'none'
}

function disableIrrigation(dis) {
	Irrigation.disableIrrigation(dis)
	btnIrrigationSet.disabled = dis
	btnIrrigationPassword.disabled = dis
	btnIrrigationBack.disabled = dis
}

function dispIrrigationErr() {
	set1.style.display = 'none'
  	set2.style.display = 'none'
  	set3.style.display = 'none'
  	set4.style.display = 'none'
  	set5.style.display = 'none'

  	irrigation_err1.style.display = 'block'
	irrigation_err2.style.display = 'block'
	irrigation_err3.style.display = 'block'
	irrigation_err4.style.display = 'block'
	irrigation_err5.style.display = 'block'
	irrigation_err6.style.display = 'block'
	irrigation_err7.style.display = 'block'
	irrigation_err8.style.display = 'block'
	irrigation_err9.style.display = 'block'
	irrigation_err10.style.display = 'block'
	irrigation_err11.style.display = 'block'
}

function dispIrrigationErrBack() {
  	set1.style.display = 'block'
  	set2.style.display = 'block'
  	set3.style.display = 'block'
  	set4.style.display = 'block'
  	set5.style.display = 'block'

  	irrigation_err1.style.display = 'none'
	irrigation_err2.style.display = 'none'
	irrigation_err3.style.display = 'none'
	irrigation_err4.style.display = 'none'
	irrigation_err5.style.display = 'none'
	irrigation_err6.style.display = 'none'
	irrigation_err7.style.display = 'none'
	irrigation_err8.style.display = 'none'
	irrigation_err9.style.display = 'none'
	irrigation_err10.style.display = 'none'
	irrigation_err11.style.display = 'none'
}

function disableIrrigationErr(dis) {
	IrrigationErr.disableIrrigationErr(dis)
	btnIrrigationErrSet.disabled = dis
	btnIrrigationErrBack.disabled = dis
}

function dispRainOrValve() {
	set1.style.display = 'none'
  	set2.style.display = 'none'
  	set3.style.display = 'none'
  	set4.style.display = 'none'
  	set5.style.display = 'none'

	if (gType == 0) {
  		rain_or_valve1.style.display = 'block'
		rain_or_valve2.style.display = 'block'
		rain_or_valve3.style.display = 'block'
	}
	else {
		rain_or_valve4.style.display = 'block'
		if (gType == 1) {
			rain_or_valve5.style.display = 'block'
			rain_or_valve6.style.display = 'block'
			rain_or_valve7.style.display = 'block'
			rain_or_valve8.style.display = 'block'
			rain_or_valve9.style.display = 'block'
			rain_or_valve10.style.display = 'block'
			rain_or_valve11.style.display = 'block'
			rain_or_valve12.style.display = 'block'
		}
		else {
			rain_or_valve13.style.display = 'block'
			rain_or_valve14.style.display = 'block'
			rain_or_valve15.style.display = 'block'
			rain_or_valve16.style.display = 'block'
			rain_or_valve17.style.display = 'block'
			rain_or_valve18.style.display = 'block'
			rain_or_valve19.style.display = 'block'
			rain_or_valve20.style.display = 'block'
		}
	}
	rain_or_valve21.style.display = 'block'
	rain_or_valve22.style.display = 'block'
}

function dispRainOrValveBack() {
  	set1.style.display = 'block'
  	set2.style.display = 'block'
  	set3.style.display = 'block'
  	set4.style.display = 'block'
  	set5.style.display = 'block'

  	rain_or_valve1.style.display = 'none'
	rain_or_valve2.style.display = 'none'
	rain_or_valve3.style.display = 'none'
	rain_or_valve4.style.display = 'none'
	rain_or_valve5.style.display = 'none'
	rain_or_valve6.style.display = 'none'
	rain_or_valve7.style.display = 'none'
	rain_or_valve8.style.display = 'none'
	rain_or_valve9.style.display = 'none'
	rain_or_valve10.style.display = 'none'
	rain_or_valve11.style.display = 'none'
	rain_or_valve12.style.display = 'none'
	rain_or_valve13.style.display = 'none'
	rain_or_valve14.style.display = 'none'
	rain_or_valve15.style.display = 'none'
	rain_or_valve16.style.display = 'none'
	rain_or_valve17.style.display = 'none'
	rain_or_valve18.style.display = 'none'
	rain_or_valve19.style.display = 'none'
	rain_or_valve20.style.display = 'none'
	rain_or_valve21.style.display = 'none'
	rain_or_valve22.style.display = 'none'
}

function disableRainOrValve(dis) {
	RainOrValve.disableRainOrValve(dis)
	btnRainOrValveSet.disabled = dis
	btnRainOrValveBack.disabled = dis
}

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

// 液肥制御
let btnSetLiquid = document.getElementById("setLiquid")
btnSetLiquid.addEventListener("click", function(event) {
	disableSet(true)
	return writeCmdRead(126) //mix
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		Liquid.setLiquidMix(ui16)
		return writeCmdRead(2) //ratio
		//dispLiquid()
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		Liquid.setLiquidRatio(ui16)
		return writeCmdRead(128) //pump_sel[0]
	})
	.then(_ => {
		return readUi8()
	})
	.then(ui8 => {
		Liquid.setLiquidPumpSel(ui8)
		return writeCmdRead(125) //pump_pls_ch
	})
	.then(_ => {
		return readUi8()
	})
	.then(ui8 => {
		Liquid.setLiquidPlsUse(ui8)
		disableSet(false)
		dispLiquid()
	})
	.catch(error => {
		console.log('error: ' + error)
		disableSet(false)
	})
})

let btnLiquidSet = document.getElementById("liquidSet")
btnLiquidSet.addEventListener("click", function(event) {
	disableLiquid(true)
	let mix = Liquid.getLiquidMix()
	return writeUi16(mix)
	.then(_ => {
		return writeCmdWrite(126) // mix
	})
	.then(_ => {
		let ratio = Liquid.getLiquidRatio()
		return writeUi16(ratio)
	})
	.then(_ => {
		return writeCmdWrite(2) // ratio
	})
	.then(_ => {
		let pump_sel = Liquid.getLiquidPumpSel()
		return writeUi8(pump_sel)
	})
	.then(_ => {
		return writeCmdWrite(128) //pump_sel[0]
	})
	.then(_ => {
		let pump_pls_ch = Liquid.getLiquidPlsUse()
		return writeUi8(pump_pls_ch)
	})
	.then(_ => {
		return writeCmdWrite(125) // pump_pls_ch
	})
	.then(_ => {
		return writeCmdManual(12) // write liquid_fe
	})
	.then(_ => {
		disableLiquid(false)
		dispLiquidBack()
	})
	.catch(error => {
		console.log('error: ' + error)
		disableLiquid(false)
	})
})

let btnLiquidBack = document.getElementById("liquidBack")
btnLiquidBack.addEventListener("click", function(event) {
  dispLiquidBack()
})

// 潅水流量
let btnSetIrrigation = document.getElementById("setIrrigation")
btnSetIrrigation.addEventListener("click", function(event) {
	disableSet(true)
	return writeCmdRead(23) //spr_fre
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		Irrigation.setFlowLMin(ui16)
		return writeCmdRead(24) //spr_fre2
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		Irrigation.setFlowHz(ui16)
		return writeCmdRead(122) // before_theory[0]
	})
	.then(_ => {
		return readUi8()
	})
	.then(ui8 => {
		Irrigation.setBeforeChecked(ui8)
		return writeCmdRead(22) // spr_err
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		Irrigation.setBeforeRatio(ui16)
		return writeCmdRead(25) // theory
	})
	.then(_ => {
		return readUi32()
	})
	.then(ui32 => {
		Irrigation.setBeforeTheoretical(ui32)
		return writeCmdRead(127) // spr_check_wait
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		Irrigation.setSprFlowMonitorWait(ui16)
		if (gType == 0) {
			return writeCmdRead(143) // spr_error_stop_en
		}
		else {
			return writeCmdRead(30) // start1_1_or_end
		}
	})
	.then(_ => {
		if (gType == 0) {
			return readUi8()
		}
		else {
			return readUi16()
		}
	})
	.then(val => {
		if (gType == 0) {
			Irrigation.setCheckSprStopChecked(val)
			return writeCmdRead(144) // spr_error_stop
		}
		else {
			Irrigation.setEndTime(val)
			if (gType == 2) {
				return writeCmdRead(130) // stop_ad_or_start_time
			}
			else {
				return Promise.resolve()
			}
		}
	})
	.then(_ => {
		if (gType == 0) {
			return readUi8()
		}
		else {
			return readUi16()
		}
	})
	.then(val => {
		if (gType == 0) {
			Irrigation.setCheckReleaseChecked(val)
		}
		else {
			Irrigation.setStartTime(val)
		}
		Irrigation.irrigationReadOnly()
		disableSet(false)
		dispIrrigation()
	})
	.catch(error => {
		console.log('error: ' + error)
		disableSet(false)
	})
})

let btnIrrigationSet = document.getElementById("irrigationSet")
btnIrrigationSet.addEventListener("click", function(event) {
	disableIrrigation(true)
	let spr_fre = Irrigation.getFlowLMin()
	return writeUi16(spr_fre)
	.then(_ => {
		return writeCmdWrite(23) // spr_fre
	})
	.then(_ => {
		let spr_fre2 = Irrigation.getFlowHz()
		return writeUi16(spr_fre2)
	})
	.then(_ => {
		return writeCmdWrite(24) // spr_fre2
	})
	.then(_ => {
		let before_theory = Irrigation.getBeforeChecked()
		return writeUi8(before_theory)
	})
	.then(_ => {
		return writeCmdWrite(122) //before_theory[0]
	})
	.then(_ => {
		let spr_err = Irrigation.getBeforeRatio()
		return writeUi16(spr_err)
	})
	.then(_ => {
		return writeCmdWrite(22) // spr_err
	})
	.then(_ => {
		let theory = Irrigation.getBeforeTheoretical()
		return writeUi32(theory)
	})
	.then(_ => {
		return writeCmdWrite(25) // theory
	})
	.then(_ => {
		let spr_check_wait = Irrigation.getSprFlowMonitorWait()
		return writeUi16(spr_check_wait)
	})
	.then(_ => {
		return writeCmdWrite(127) // spr_check_wait
	})	
	.then(_ => {
		if	(gType == 0) {
			let spr_error_stop_en = Irrigation.getCheckSprStopChecked()
			return writeUi8(spr_error_stop_en)
		}
		else {
			let start1_1_or_end = Irrigation.getEndTime()
			return writeUi16(start1_1_or_end)
		}
	})
	.then(_ => {
		if (gType == 0) {
			return writeCmdWrite(143) // spr_error_stop_en
		}
		else {
			return writeCmdWrite(30) // start1_1_or_end
		}
	})
	.then(_ => {
		if	(gType == 0) {
			let spr_error_stop = Irrigation.getCheckReleaseChecked()
			return writeUi8(spr_error_stop)
		}
		else {
			if (gType == 2) {
				let stop_ad_or_start_time = Irrigation.getStartTime()
				return writeUi16(stop_ad_or_start_time)
			}
			else {
				return Promise.resolve()
			}
		}
	})
	.then(_ => {
		if (gType == 0) {
			return writeCmdWrite(144) // spr_error_stop
		}
		else {
			return writeCmdWrite(130) // stop_ad_or_start_time
		}
	})
	.then(_ => {
		return writeCmdManual(13) // write irrigation
	})
	.then(_ => {
		disableIrrigation(false)
		dispIrrigationBack()
	})
	.catch(error => {
		console.log('error: ' + error)
		disableIrrigation(false)
	})
})

let btnIrrigationPassword = document.getElementById("irrigationPassword")
btnIrrigationPassword.addEventListener("click", function(event) {
  Irrigation.irrigationGate()
})

let btnIrrigationBack = document.getElementById("irrigationBack")
btnIrrigationBack.addEventListener("click", function(event) {
  dispIrrigationBack()
})

// 灌水流量異常
let btnSetIrrigationErr = document.getElementById("setIrrigationErr")
btnSetIrrigationErr.addEventListener("click", function(event) {
	disableSet(true)
	return writeCmdRead(3) // upper
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		IrrigationErr.setUpperLimit1(ui16)
		return writeCmdRead(6) // upper_2
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		IrrigationErr.setUpperLimit2(ui16)
		return writeCmdRead(8) // upper_3
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		IrrigationErr.setUpperLimit3(ui16)
		return writeCmdRead(10) // upper_4
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		IrrigationErr.setUpperLimit4(ui16)
		return writeCmdRead(12) // upper_5
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		IrrigationErr.setUpperLimit5(ui16)
		return writeCmdRead(14) // upper_6
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		IrrigationErr.setUpperLimit6(ui16)
		return writeCmdRead(16) // upper_7
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		IrrigationErr.setUpperLimit7(ui16)
		return writeCmdRead(18) // upper_8
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		IrrigationErr.setUpperLimit8(ui16)
		return writeCmdRead(4) // lower
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		IrrigationErr.setLowerLimit1(ui16)
		return writeCmdRead(7) // lower_2
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		IrrigationErr.setLowerLimit2(ui16)
		return writeCmdRead(9) // lower_3
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		IrrigationErr.setLowerLimit3(ui16)
		return writeCmdRead(11) // lower_4
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		IrrigationErr.setLowerLimit4(ui16)
		return writeCmdRead(13) // lower_5
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		IrrigationErr.setLowerLimit5(ui16)
		return writeCmdRead(15) // lower_6
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		IrrigationErr.setLowerLimit6(ui16)
		return writeCmdRead(17) // lower_7
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		IrrigationErr.setLowerLimit7(ui16)
		return writeCmdRead(19) // lower_8
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		IrrigationErr.setLowerLimit8(ui16)
		disableSet(false)
		dispIrrigationErr()
	})	
	.catch(error => {
		console.log('error: ' + error)
		disableSet(false)
	})
})

let btnIrrigationErrSet = document.getElementById("irrigationErrSet")
btnIrrigationErrSet.addEventListener("click", function(event) {
	disableIrrigationErr(true)
	let upper = IrrigationErr.getUpperLimit1()
	return writeUi16(upper)
	.then(_ => {
		return writeCmdWrite(3) // upper
	})
	.then(_ => {
		let upper_2 = IrrigationErr.getUpperLimit2()
		return writeUi16(upper_2)
	})
	.then(_ => {
		return writeCmdWrite(6) // upper_2
	})
	.then(_ => {
		let upper_3 = IrrigationErr.getUpperLimit3()
		return writeUi16(upper_3)
	})
	.then(_ => {
		return writeCmdWrite(8) // upper_3
	})
	.then(_ => {
		let upper_4 = IrrigationErr.getUpperLimit4()
		return writeUi16(upper_4)
	})
	.then(_ => {
		return writeCmdWrite(10) // upper_4
	})
	.then(_ => {
		let upper_5 = IrrigationErr.getUpperLimit5()
		return writeUi16(upper_5)
	})
	.then(_ => {
		return writeCmdWrite(12) // upper_5
	})
	.then(_ => {
		let upper_6 = IrrigationErr.getUpperLimit6()
		return writeUi16(upper_6)
	})
	.then(_ => {
		return writeCmdWrite(14) // upper_6
	})
	.then(_ => {
		let upper_7 = IrrigationErr.getUpperLimit7()
		return writeUi16(upper_7)
	})
	.then(_ => {
		return writeCmdWrite(16) // upper_7
	})
	.then(_ => {
		let upper_8 = IrrigationErr.getUpperLimit8()
		return writeUi16(upper_8)
	})
	.then(_ => {
		return writeCmdWrite(18) // upper_8
	})
	.then(_ => {
		let lower = IrrigationErr.getLowerLimit1()
		return writeUi16(lower)
	})
	.then(_ => {
		return writeCmdWrite(4) // lower
	})
	.then(_ => {
		let lower_2 = IrrigationErr.getLowerLimit2()
		return writeUi16(lower_2)
	})
	.then(_ => {
		return writeCmdWrite(7) // lower_2
	})
	.then(_ => {
		let lower_3 = IrrigationErr.getLowerLimit3()
		return writeUi16(lower_3)
	})
	.then(_ => {
		return writeCmdWrite(9) // lower_3
	})
	.then(_ => {
		let lower_4 = IrrigationErr.getLowerLimit4()
		return writeUi16(lower_4)
	})
	.then(_ => {
		return writeCmdWrite(11) // lower_4
	})
	.then(_ => {
		let lower_5 = IrrigationErr.getLowerLimit5()
		return writeUi16(lower_5)
	})
	.then(_ => {
		return writeCmdWrite(13) // lower_5
	})
	.then(_ => {
		let lower_6 = IrrigationErr.getLowerLimit6()
		return writeUi16(lower_6)
	})
	.then(_ => {
		return writeCmdWrite(15) // lower_6
	})
	.then(_ => {
		let lower_7 = IrrigationErr.getLowerLimit7()
		return writeUi16(lower_7)
	})
	.then(_ => {
		return writeCmdWrite(17) // lower_7
	})
	.then(_ => {
		let lower_8 = IrrigationErr.getLowerLimit8()
		return writeUi16(lower_8)
	})
	.then(_ => {
		return writeCmdWrite(19) // lower_8
	})
	.then(_ => {
		return writeCmdManual(14) // write irrigation_err
	})
	.then(_ => {
		disableIrrigationErr(false)
		dispIrrigationErrBack()
	})
	.catch(error => {
		console.log('error: ' + error)
		disableIrrigationErr(false)
	})
})

let btnIrrigationErrBack = document.getElementById("irrigationErrBack")
btnIrrigationErrBack.addEventListener("click", function(event) {
  dispIrrigationErrBack()
})

// 雨センサ・潅水バルブ
let btnSetRainOrValve = document.getElementById("setRainOrValve")
btnSetRainOrValve.addEventListener("click", function(event) {
	disableSet(true)
	if (gType == 0) {
		return writeCmdRead(140) // rain_ch
	}
	return writeCmdRead(5) // ch
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		if (gType == 0) {
			RainOrValve.setRain(ui16)
			return Promise.resolve()
		}
		RainOrValve.setValve(ui16)
		if (gType == 1) {
			return Promise.resolve()
		}
		return writeCmdRead(34) // ope11_or_on[0]
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		RainOrValve.setOn1(ui16)
		return writeCmdRead(35) // ope11_or_on[1]
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		RainOrValve.setOn2(ui16)
		return writeCmdRead(36) // ope11_or_on[2]
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		RainOrValve.setOn3(ui16)
		return writeCmdRead(37) // ope11_or_on[3]
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		RainOrValve.setOn4(ui16)
		return writeCmdRead(38) // ope11_or_on[4]
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		RainOrValve.setOn5(ui16)
		return writeCmdRead(39) // ope11_or_on[5]
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		RainOrValve.setOn6(ui16)
		return writeCmdRead(40) // ope11_or_on[6]
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		RainOrValve.setOn7(ui16)
		return writeCmdRead(41) // ope11_or_on[7]
	})
	.then(_ => {
		return readUi16()
	})
	.then(ui16 => {
		RainOrValve.setOn8(ui16)
		disableSet(false)
		dispRainOrValve()
	})	
	.catch(error => {
		console.log('error: ' + error)
		disableSet(false)
	})
})

let btnRainOrValve = document.getElementById("setRainOrValve")

