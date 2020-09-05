import {
  JOGS_FETCH_REQUEST,
  JOGS_FETCH_SUCCESS,
  JOGS_FETCH_FAILED,
} from "./jogs.actions";

const initialState = {
  jogs: null,
  error: null,
};

export const jogsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case JOGS_FETCH_REQUEST:
      return {
        ...state,
      };
    case JOGS_FETCH_SUCCESS:
      return {
        ...state,
        jogs: payload.jogs,
      };
    case JOGS_FETCH_FAILED:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};
