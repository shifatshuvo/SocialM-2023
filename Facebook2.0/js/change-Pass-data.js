const baseUrl = "http://localhost:8080/change-user-pass";



async function savePass() {

  //get values
  const id = localStorage.getItem("userId");
  const currentpassword = document.getElementsByClassName("currentPassword")[0].value;
  const password = document.getElementsByClassName("password")[0].value;

  //Submit
    const url = (baseUrl + '?id=' + id + '&currentPassword=' + currentpassword + '&password=' + password);
    console.log(url);

    const result = await fetch(url);

    if (result.ok) {
      setTimeout(function() {
        // Redirect to change-user-pass.html page
        window.location.href = "change-user-pass.html";
    }, 1000);
    }
}