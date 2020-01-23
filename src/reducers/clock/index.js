import { TICK } from '../../actions/types';

const initialState = {
  lastUpdate: 0,
  light: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TICK:
      return {
        ...state, 
        lastUpdate: action.ts,
        light: !!action.light
      };
    default:
      return state;
  }
};  

export default reducer;
