import type { Auth } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function SignIn(auth: Auth) {
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    console.log(provider);
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        // // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        // // The signed-in user info.
        // const user = result.user;
        // // IdP data available using getAdditionalUserInfo(result)
        // // ...
      })
      .catch((error) => {
        console.log(error);
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // // ...
      });
  }
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}
