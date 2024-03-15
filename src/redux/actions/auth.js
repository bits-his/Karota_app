import {
    AUTH,
    LOADING_LOGIN,
    LOGOUT,
    LOADING_APP,
    ERRORS,
    TAX_ACCOUNT,
} from "./type";
import { apiURL } from "./api";
import { _get } from "../../Utils/Helper";
import { WALLET } from "../types";
// import { useHistory } from 'react-router-dom';

export function login({ username, password, history }, success, error) {
    return (dispatch) => {
        dispatch({ type: LOADING_LOGIN });
        fetch(`${apiURL}/sign_in`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((raw) => raw.json())
            .then((data) => {
                // console.log(data, "KKDKDKDDK");
                dispatch({ type: LOADING_LOGIN });
                // console.log(data);
                if (data.success) {
                    const { token } = data;
                    // console.log(token);
                    if (token) {
                        localStorage.setItem("@@token", token);
                    }

                    getUserProfile(token)
                        .then((userData) => {
                            // console.log(userData, data, "KKDKDKDDK");
                            if (data.success) {
                                /**
                                 * Token is valid
                                 * navigate user to dashboard */
                                // callback();
                                dispatch({ type: LOADING_APP });
                                const { user, tax_accounts } = userData;
                                if (user.role === "user") {
                                    dispatch({
                                        type: AUTH,
                                        payload: {
                                            user,
                                            tax_account: tax_accounts ? tax_accounts[0] : [],
                                        },
                                    });
                                    success(data);
                                } else {
                                    dispatch({
                                        type: AUTH,
                                        payload: {
                                            user,
                                        },
                                    });
                                    success(data);
                                }

                                // history.push("/selection");
                            } else {
                                // callback();
                                localStorage.removeItem("@@token");
                                // history.push("/");

                                dispatch(logout(history));
                            }
                        })
                        .catch((error) => {
                            dispatch(logout(history));
                            dispatch({
                                type: ERRORS,
                                payload: { msg: "Authentication failed", error },
                            });
                        });
                } else {
                    dispatch({ type: ERRORS, payload: data.msg });
                    error(data.error);
                    // console.log(data);
                }
            })
            .catch((err) => {
                dispatch({ type: LOADING_LOGIN });
                // console.log(err)
            });
    };
}

export async function getUserProfile(_token) {
    try {
        let response = await fetch(`${apiURL}/verify-token`, {
            method: "GET",
            headers: {
                authorization: _token,
            },
        });
        let data = await response.json();
        return data;
    } catch (error) {
        if (error.status === 401) {
            logout();
            window.location.reload();
        }
        return error;
    }
}

export function getWallet(cb = (f) => f, err = (f) => f) {
    return (dispatch) => {
        _get(
            `/users/get-wallet`,
            (resp) => {
                if (resp.success) {
                    dispatch({
                        type: WALLET,
                        payload: resp.data,
                    });
                    cb();
                }
            },
            (error) => {
                console.error(error);
                err();
            }
        );
    };
}

export function init(history, success = (f) => f, error = (f) => f) {
    return (dispatch) => {
        let _token = localStorage.getItem("@@token");
        if (_token) {
            /**
             * Token present
             * verifyToken */
            getUserProfile(_token)
                .then((data) => {
                    if (data.success) {
                        const { user, tax_accounts } = data;
                        if (user && user.role !== "user") {
                            dispatch({
                                type: AUTH,
                                payload: {
                                    user,
                                },
                            });
                            // navigateBasedOnAccess(user.accessTo, history);
                            success();
                        } else {
                            console.log(tax_accounts)
                            dispatch({
                                type: AUTH,
                                payload: {
                                    user,
                                    tax_account: tax_accounts[0] || [],
                                    taxaccounts: tax_accounts,
                                },
                            });
                            success();
                        }
                    } else {
                        // callback();
                        localStorage.removeItem("@@token");
                        dispatch(logout(history));
                        success();
                    }
                })
                .catch((error) => {
                    dispatch({
                        type: ERRORS,
                        payload: { msg: "Authentication failed", error },
                    });
                    dispatch(logout(history));
                    error();
                });
        } else {
            /**
             * No token found
             * navigate user to auth page
             */
            dispatch(logout(history));
            dispatch({ type: ERRORS, payload: { msg: "Authentication failed" } });
            error();
        }
    };
}

export function logout(history) {
    return (dispatch) => {
        history.push("/");
        localStorage.removeItem("@@token");
        dispatch({ type: LOGOUT });
    };
}
