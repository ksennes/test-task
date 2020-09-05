import { getJogs } from './jogs.services';

export const JOGS_FETCH_REQUEST = 'JOGS_FETCH_REQUEST';
export const JOGS_FETCH_SUCCESS = 'JOGS_FETCH_SUCCESS';
export const JOGS_FETCH_FAILED = 'JOGS_FETCH_FAILED';

export const getJogsAction = (token) => (dispatch) => {
    dispatch(getJogsRequestAction());

    getJogs(token)
    .then(res => {
        dispatch(getJogsSuccessAction(res.data.response.jogs));
    })
    .catch(err => {
        dispatch(getJogsFailedAction(err.message));
    })
}

const getJogsRequestAction = () => ({
    type: JOGS_FETCH_REQUEST,
});

const getJogsSuccessAction = (jogs) => ({
    type: JOGS_FETCH_SUCCESS,
    payload: { jogs },
})

const getJogsFailedAction = (message) => ({
    type: JOGS_FETCH_FAILED,
    payload: { error: message },
})