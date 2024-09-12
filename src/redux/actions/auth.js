import {
  AUTH,
  LOADING_LOGIN,
  LOGOUT,
  LOADING_APP,
  ERRORS,
  MY_WALLET,
} from "../types";
import { _get, server_url } from "../../Utils/Helper";

export function login({ username, password, history }, success, error) {
  return (dispatch) => {
    dispatch({ type: LOADING_LOGIN });
    fetch(`${server_url}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((raw) => raw.json())
      .then((data) => {
        if (data.success) {
          const { token } = data;

          if (token) {
            localStorage.setItem("@@token", token);
          }

          getUserProfile(token)
            .then((userData) => {
              console.log(userData);

              dispatch({ type: LOADING_APP });
              dispatch({
                type: AUTH,
                payload: {
                  user: userData,
                  tax_account: userData.tax_accounts ? userData.tax_accounts[0] : [],
                },
              });
              success(data);
            })
            .catch((error) => {
              console.log(error);
              
              // dispatch(logout(history));
              dispatch({
                type: ERRORS,
                payload: { msg: "Authentication failed", error },
              });
            });
        } else {
          dispatch({ type: ERRORS, payload: data.msg });
          error(data);
        }
      })
      .catch((err) => {
        dispatch({ type: LOADING_LOGIN });
      });
  };
}



export async function getUserProfile(_token) {
  try {
    let response = await fetch(`${server_url}/verify-token`, {
      method: "GET",
      headers: {
        authorization: _token,
      },
    });

    let data = await response.json();

    console.log(data);

    if (data.success) {
      return data.user;
    } else {
      throw new Error('Failed to fetch user profile');
    }
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
            type: MY_WALLET,
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
            const { user, profile } = data;
            dispatch({
              type: AUTH,
              payload: {
                user,
                profile,
              },
            });
            // navigateBasedOnAccess(user.accessTo, history);
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

export function logout(history=f=>f) {
  return (dispatch) => {
    localStorage.removeItem("@@token");
    history("/login");
    dispatch({ type: LOGOUT });
  };
}
