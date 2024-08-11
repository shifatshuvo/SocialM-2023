const baseUrl = "http://localhost:8080/sign-up";

const emailEl = document.getElementById('email');
const emailErrorEl = document.getElementById('emailError');

const passwordEl = document.getElementById('password');
const passwordErrorEl = document.getElementById('passwordError');

const firstNameEl = document.getElementById('firstName');
const lastNameEl = document.getElementById('lastName');
const addressEl = document.getElementById('address');
const phoneEl = document.getElementById('phone');
const genderEl = document.getElementById('genderSelectOption');

async function signUp(e) {
  e.preventDefault();

  const email = emailEl.value;
  const password = passwordEl.value;
  const firstName = firstNameEl.value;
  const lastName = lastNameEl.value;
  const address = addressEl.value;
  const phone = phoneEl.value;
  const gender = genderEl.value;

  //validation
  var error = false;
  if (email.trim() === '') {
    error = true;
    emailErrorEl.classList.remove('hidden');
  }
  if (password.trim() === '') {
    error = true;
    passwordErrorEl.classList.remove('hidden');
  }

  //Submit
  if (error === false) {
    const url = (baseUrl + '?email=' + email + '&password=' + password + '&firstName=' + firstName + '&lastName=' + lastName + '&address=' + address + '&phone=' + phone + '&gender=' + gender);
    console.log(url);

    const result = await fetch(url);

    if (result.ok) {

      setTimeout(function() {
        // Redirect to signIn.html page
        window.location.href = "sign-in.html";
    }, 2000);

    }
  }
}