async function signOut(e) {
  e.preventDefault();
  // localStorage.setItem("isSignIn", 'false');
  localStorage.removeItem("isSignIn");
  localStorage.removeItem("userId");

  setTimeout(function() {
  // Redirect to sign-in.html page
  window.location.href = 'sign-in.html';
  }, 1000);
  
}