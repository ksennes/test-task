import {createSelector} from 'reselect';

export const getJogsSelector = createSelector(
    [(state) => state.jogsReducer.jogs],
    (jogs) => jogs
)