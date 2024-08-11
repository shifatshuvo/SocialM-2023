const baseUrl = "http://localhost:8080/sign-in";

const emailEl = document.getElementById('email');
const emailErrorEl = document.getElementById('emailError');
const passwordEl = document.getElementById('password');
const passwordErrorEl = document.getElementById('passwordError');

async function signIn(e) {
  e.preventDefault();

  //get values
  const email = emailEl.value;
  const password = passwordEl.value;

  //validation
  var error = false;
  if (email.trim() === '') {
    errors = true;
    emailErrorEl.classList.remove('hidden');
  }
  if (password.trim() === '') {
    error = true;
    passwordErrorEl.classList.remove('hidden');
  }

  //submit
  if (error === false) {
    const url = (baseUrl + '?email=' + email + '&password=' + password);
    console.log(url);

    const resp = await fetch(url);

    const user = await resp.json();
    localStorage.setItem("userId", user);

    if (resp.ok) {
      setTimeout(function() {
        localStorage.setItem("isSignIn", 'true');

        const redirectUrl = getRedirectUrl();
        if (redirectUrl) {
          window.location.href = redirectUrl;
        } else {
          window.location.href = "index.html";
        }
      }, 1000);
    }
  }

  function getRedirectUrl() {
    const queryStr = document.location.search;
    const params = new URLSearchParams(queryStr);
    return params.get('redirect_url');
  }
}