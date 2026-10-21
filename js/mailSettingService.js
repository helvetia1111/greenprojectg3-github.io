const cmdReadSetChUUID = '1e069265-cd95-438c-874b-ff0612310e1f'
const cmdWriteSetChUUID = '05578520-5f01-402b-81d1-9b08dc1f4349'
const strSetChUUID = '878c0c12-0f16-4fbe-9cde-91a887249802'
let setMailService
let cmdReadSetCh
let cmdWriteSetCh
let strSetCh

export async function writeMailCmdRead(cmd) {
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

export async function writeMailCmdWrite(cmd) {
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
	} catch (error) {
		console.error('読み込みに失敗しました: ', error)
	}
}

function setSettingService() {
	return gattServer.getPrimaryService(setMailServiceUUID)
	.then(service => {
		setMailService = service
		return service.getCharacteristic(cmdReadSetChUUID)
	})
	.then(cmdReadCh => {
		  cmdReadSetCh = cmdReadCh
    	return setMailService.getCharacteristic(cmdWriteSetChUUID)
	})
  	.then(cmdWriteCh => {
		  cmdWriteSetCh = cmdWriteCh
    	return setMailService.getCharacteristic(strSetChUUID)
	})
  	.then(strCh => {
		  strSetCh = strCh
	})
	.catch(error => {
		console.log('error: ' + error)
	})
}

export async function setBleMailService() {
  if (setMailService && cmdReadSetCh && cmdWriteSetCh && strSetCh) {
	  return Promise.resolve()
  }
	else {
		await setSettingService()
	}
}
