const apUrl = "http://localhost:8080/post";

const textinputEl = document.getElementById('postText');
// const textErrorEl = document.getElementById('textError');


async function createPost() {
  const postText = textinputEl.value;
  const id = localStorage.getItem("userId");


  //validation
  // var error = false;
  // if (text.trim() === '') {
  //   error = true;
  //   textErrorEl.classList.remove('hidden');
  // }


  //Submit
  // if (error === false) {
    const url = (apUrl + '?id=' + id + '&postText=' + postText);
    console.log(url);
    // window.location.href = "index.html";

    const result = await fetch(url);

    if (result.ok) {

      setTimeout(function() {
        // Redirect to signIn.html page
        window.location.href = "index.html";
      }, 1000);

    }
  // }
}