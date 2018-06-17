import { SET, FLIP } from '../types/coin'

const HEADS = 'HEADS'
const TAILS = 'TAILS'

const initialState = {
  face: 'UNKNOWN',
}

export default function reducer(state = initialState, action) {
  const flippedFace = state.face !== HEADS ? HEADS : TAILS
  switch (action.type) {
    case SET:
      return { ...state, ...action.payload }
    case FLIP:
      return { ...state, face: flippedFace }
    default:
      return state
  }
}

