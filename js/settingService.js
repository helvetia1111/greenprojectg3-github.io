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

export async function writeCmdRead(cmd) {
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

export async function writeCmdWrite(cmd) {
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

export async function writeUi8(ui8) {
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

export async function readUi8() {
	try {
		let ret = await ui8SetCh.readValue()
    return ret.getUint8(0, true)
	} catch (error) {
		console.error('読み込みに失敗しました: ', error)
	}
}

export async function writeUi16(ui16) {
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

export async function readUi16() {
	try {
		let ret = await ui16SetCh.readValue()
    return ret.getUint16(0, true)
	} catch (error) {
		console.error('読み込みに失敗しました: ', error)
	}
}

export async function writeUi32(ui32) {
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

export async function readUi32() {
	try {
		let ret = await ui32SetCh.readValue()
    return ret.getUint32(0, true)
	} catch (error) {
		console.error('読み込みに失敗しました: ', error)
	}
}

export async function writeStr(str) {
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

export async function readStr() {
	try {
		let ret = await strSetCh.readValue()
    return new TextDecoder('utf-8').decode(ret).replace(/\0/g, '') 
    return ret.getUint8(0, true)
	} catch (error) {
		console.error('読み込みに失敗しました: ', error)
	}
}

function setSettingService() {
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
	})
	.catch(error => {
		console.log('error: ' + error)
	})
}

export async function setBleService() {
  if (setService && cmdReadSetCh && cmdWriteSetCh && ui8SetCh && ui16SetCh && ui32SetCh && strSetCh) {
	  return Promise.resolve()
  }
	else {
		await setSettingService()
	}
}
