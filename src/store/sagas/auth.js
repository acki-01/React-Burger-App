/** @format */

import { put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as actions from 'store/actions';
import createAuthAxiosInstance from 'services/axios-auth';

export function* logoutSaga(action) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationTime');
    yield localStorage.removeItem('userId');
    yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout());
}

export function* authUserSaga(action) {
    yield put(actions.authStart());
    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true,
    };
    let mode = 'SIGNUP';
    if (!action.isSignup) {
        mode = 'SIGNIN';
    }
    let axios = createAuthAxiosInstance(mode);
    try {
        const response = yield axios.post('', authData);
        const expirationTime = new Date(
            new Date().getTime() + response.data.expiresIn * 1000,
        );
        yield localStorage.setItem('token', response.data.idToken);
        yield localStorage.setItem('expirationTime', expirationTime);
        yield localStorage.setItem('userId', response.data.localId);
        yield put(
            actions.authSuccess(response.data.idToken, response.data.localId),
        );
        yield put(actions.checkAuthTimeout(response.data.expiresIn));
    } catch (error) {
        yield put(actions.authFail(error.response.data.error));
    }
}

export function* authCheckStateSaga(action) {
    const token = yield localStorage.getItem('token');
    if (!token) {
        yield put(actions.logout());
    } else {
        const expirationTime = yield new Date(
            localStorage.getItem('expirationTime'),
        );
        if (expirationTime > new Date()) {
            const userId = yield localStorage.getItem('userId');
            yield put(actions.authSuccess(token, userId));
            yield put(
                actions.checkAuthTimeout(
                    (expirationTime.getTime() - new Date().getTime()) / 1000,
                ),
            );
        } else {
            yield put(actions.logout());
        }
    }
}
