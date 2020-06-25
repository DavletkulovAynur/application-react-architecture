import {FOLDER_STATE, TEST} from '../types'

export function changeStateTest() {
  return ({
    type: TEST
  })
}

export function folderStateChange(payload) {
  return({
    type: FOLDER_STATE,
    payload
  })
}
