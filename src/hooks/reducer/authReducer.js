import React from 'react'
export const initialAuthState = {
  user: null,
  token: null,
  error: null,
  loading: false,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START": return { ...state, loading: true, error: null };

    case "LOGIN_SUCCESS": return {
      ...state, loading: false, user: action.payload.user, token: action.payload.token
    };

    case "LOGIN_FAILURE": return {
      ...state, loading: false, error: action.payload
    };

    case "LOGOUT": return {
      ...initialAuthState
    };
 
 default:
      return state
  }
}

