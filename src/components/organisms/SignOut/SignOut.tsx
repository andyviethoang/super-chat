export function SignOut(auth: any) {
  return auth.currentUser && <button onClick={auth.signOut()}>Sign Out</button>;
}
