import { INCREAMENT } from "../constant/action-type";

const initialState={
    counter: 0
}
 const increamentReducer = (state = initialState ,action) => {
    switch (action.type) {
        case INCREAMENT:
          return {
            ...state,
            counter: action.payload,
          };
        default:
          return state;
      }
}


export default increamentReducer;