import { SET, FLIP } from '../types/coin'

export function set(payload) {
  return {
    type: SET,
    payload,
  }
}

export function flip() {
  return {
    type: FLIP,
  }
}
