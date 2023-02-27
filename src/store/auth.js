import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Router } from "@/router/index";
import { auth } from "../../src/firebaseconfig";
import { toastSuccess, toastError } from "@/utils/toast";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      isLogin: false,
      user: {},
    };
  },
  getters: {
    userDetail: (state) => {
      return state.user;
    },
    authError: (state) => {
      return state.error;
    },
    isLoggedIn: (state) => {
      const isBrowserLogin = localStorage.getItem("isLogin");
      return isBrowserLogin || state.isLogin ? true : false;
    },
  },
  actions: {
    async registerUser(body) {
      let userdata = null;
      await createUserWithEmailAndPassword(auth, body.email, body.password)
        .then((userCredential) => {
          this.user = userCredential.user;
          this.isLogin = true;
          localStorage.setItem("isLogin", true);
          Router.push({ path: "/" });
          toastSuccess("Register Successfull!");
          return userCredential;
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/email-already-in-use":
              toastError("This Email is already in Use.");
              break;
            case "auth/invalid-email":
              toastError("Email address is invalid.");
              break;
            case "auth/operation-not-allowed":
              toastError("Error during sign up.");
              break;
            case "auth/weak-password":
              toastError(
                "Password is not strong enough. Add additional characters including special characters and numbers."
              );
              break;
            default:
              console.log(error.message);
              break;
          }
          this.error = error;
          return error;
        });
      return userdata;
    },
    async loginUser(body) {
      let userdata = null;
      await signInWithEmailAndPassword(auth, body.email, body.password)
        .then((userCredential) => {
          this.user = userCredential.user;
          this.isLogin = true;
          localStorage.setItem("isLogin", true);
          Router.push({ path: "/" });
          toastSuccess("Login Successfull!");
          return userCredential;
        })
        .catch((error) => {
          this.error = error;
          switch (error.code) {
            case "auth/user-not-found":
              toastError("User Not Found.");
              break;
            case "auth/wrong-password":
              toastError("Invalid Password.");
              break;
            case "auth/operation-not-allowed":
              toastError("Error during sign up.");
              break;
            case "auth/weak-password":
              toastError(
                "Password is not strong enough. Add additional characters including special characters and numbers."
              );
              break;
            default:
              console.log(error.message);
              break;
          }
          return error;
        });
      return userdata;
    },
    logout() {
      signOut(auth)
        .then(() => {
          this.user = {};
          this.isLogin = false;
          localStorage.removeItem("isLogin");
          toastSuccess("Logout Successfully.");
        })
        .catch((er) => {
          console.log("not logout", er);
        });
    },
  },
});
