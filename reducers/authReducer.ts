import { AuthState } from "../context/AuthConext";

type AuthAction =
  | { type: "signIn"; payload: string; id: string }
  | { type: "signOut" }
  | { type: "checkLogin"; payload: string };

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "signIn":
      return { ...state, isLoggedIn: true, rol: action.payload, id: action.id };

    case "signOut":
      return { ...state, isLoggedIn: false, rol: undefined };

    case "checkLogin":
      return { ...state, isLoggedIn: true, rol: action.payload };

    default:
      return state;
  }
};
