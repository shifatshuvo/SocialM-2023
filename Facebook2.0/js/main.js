// checkSignInStatusAndDisplayButton();

// function checkSignInStatusAndDisplayButton() {
//   const signInBtn = document.getElementById('signInBtn');
//   const accountBtn = document.getElementById('accountBtn');

//   const signInStatus = localStorage.getItem("isSignIn");
//   if (signInStatus === 'true') {
//     accountBtn.classList.remove('hidden');
//     signInBtn.classList.add('hidden');
//   } else {
//     signInBtn.classList.remove('hidden');
//     accountBtn.classList.add('hidden');
//   }
// }

function accountMouseEnter() {
  const accountArea = document.getElementById('accountArea');
  accountArea.classList.remove('hidden');
}

function accountMouseLeave() {
  const accountArea = document.getElementById('accountArea');
  if (!accountArea.matches(':hover')) {
    accountArea.classList.add('hidden');
  }
}