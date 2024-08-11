// // get id from URL Start
// const loc = document.location;
// const queryString = loc.search;

// const params = new URLSearchParams(queryString);
// const id = parseInt(params.get("id"));

// if (id) {

// const loc = document.location;
// const queryString = loc.search;

// const params = new URLSearchParams(queryString);
// const id = parseInt(params.get("id"));

// const url = (baseUrl + '?id=' + id);
// const resp = await fetch(url);
// const user = await resp.json();
// displayUser(user);
// }
// // get id from URL End

// // get id from application Start
// else {

//   const id = localStorage.getItem("userId");

//   const url = (baseUrl + '?id=' + id);
//   const resp = await fetch(url);
//   const user = await resp.json();
//   displayUser(user);
// }
// // get id from application End





// const apiUrl = "http://localhost:8080/search-result"; //create search result html


// async function search(event) {
//   // event.preventDefault()

//   const name = document.getElementsByClassName("name")[0].value;

//   // var fullName = name.split(' '),
//   //     firstName = fullName[0],
//   //     lastName = fullName[fullName.length - 1];

//   //Submit
//     // const url = (apiUrl + '?name=' + name + '&firstName=' + firstName + '&lastName=' + lastName);
//     const url = (apiUrl + '?name=' + name);
//     console.log(url);

//     // const result = await fetch(url);

//     // if (result.ok) {
//     //   setTimeout(function() {
//     //     // Redirect to update-user-profile.html page
//     //     window.location.href = "search-result.html";
//     // }, 1000);
//     // }
// }