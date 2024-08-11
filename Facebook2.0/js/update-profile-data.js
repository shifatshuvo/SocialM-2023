const baseUrl = "http://localhost:8080/update-user-profile";

async function saveChanges() {

  const id = localStorage.getItem("userId");
  
  const name = document.getElementsByClassName("name")[0].value;
  const address = document.getElementsByClassName("address")[0].value;
  const phone = document.getElementsByClassName("phone")[0].value;
  const gender = document.getElementsByClassName("gender")[0].value;

  var fullName = name.split(' '),
      firstName = fullName[0],
      lastName = fullName[fullName.length - 1];

  //Submit
    const url = (baseUrl + '?id=' + id + '&firstName=' + firstName + '&lastName=' + lastName + '&address=' + address + '&phone=' + phone + '&gender=' + gender);
    console.log(url);

    const result = await fetch(url);

    if (result.ok) {
      setTimeout(function() {
        // Redirect to update-user-profile.html page
        window.location.href = "update-user-profile.html";
    }, 1000);
    }
}