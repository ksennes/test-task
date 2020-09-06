import {
  JOGS_FETCH_REQUEST,
  JOGS_FETCH_SUCCESS,
  JOGS_FETCH_FAILED,
  JOG_ADD_REQUEST,
  JOG_ADD_SUCCESS,
  JOG_ADD_FAILED,
} from "./jogs.actions";
import { format, fromUnixTime } from "date-fns";

const initialState = {
  jogs: null,
  error: null,
  pending: false,
};

export const jogsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case JOGS_FETCH_REQUEST:
      return {
        ...state,
        pending: payload.pending
      };
    case JOGS_FETCH_SUCCESS:
      return {
        ...state,
        jogs: payload.jogs.map(jog => ({
          ...jog,
          date: format(fromUnixTime(jog.date), 'dd.MM.yyyy')
        })),
        pending: payload.pending
      };
    case JOGS_FETCH_FAILED:
      return {
        ...state,
        error: payload.error,
        pending: payload.pending
      };
    case JOG_ADD_REQUEST:
      return {
        ...state,
        pending: payload.pending
      };
    case JOG_ADD_SUCCESS:
      return {
        ...state,
        jogs: [{...payload.jog, date: format(payload.jog.date, 'dd.MM.yyyy')}].concat(state.jogs),
        pending: payload.pending
      };
    case JOG_ADD_FAILED:
      return {
        ...state,
        error: payload.error,
        pending: payload.pending
      };
    default:
      return state;
  }
};
