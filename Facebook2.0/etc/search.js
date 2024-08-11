const apiUrl = "http://localhost:8080/search-result";

async function search(e) {
  // e.preventDefault();
  const loc = document.location;
  const queryString = loc.search;

  const params = new URLSearchParams(queryString);
  const parmSearchName = params.get("search");
  console.log(parmSearchName)

  if(parmSearchName) {
    const name = parmSearchName;
    
    var fullName = name.split(' '),
      firstName = fullName[0],
      lastName = fullName[fullName.length - 1];
    
  // console.log(fullName);
  console.log(firstName);
  console.log(lastName);

  //Submit
    const url = (apiUrl + '?firstName=' + firstName + '&lastName=' + lastName);
    console.log(url);

    sessionStorage.setItem("search", name);
    const result = await fetch(url);
    // const result = await resp.json();
    console.log(result);

    if (result.ok) {
      setTimeout(function() {
        // Redirect to update-user-profile.html page
        window.location.href = "search-result.html";
    }, 1000);
    }
  }



  if(!parmSearchName) {
    const name = document.getElementsByClassName("name")[0].value;
    
    
    var fullName = name.split(' '),
      firstName = fullName[0],
      lastName = fullName[fullName.length - 1];
    
  // console.log(fullName);
  console.log(firstName);
  console.log(lastName);

  //Submit
    const url = (apiUrl + '?firstName=' + firstName + '&lastName=' + lastName);
    console.log(url);

    sessionStorage.setItem("search", name);
    const result = await fetch(url);
    // const result = await resp.json();
    console.log(result);

    if (result.ok) {
      setTimeout(function() {
        // Redirect to update-user-profile.html page
        window.location.href = "search-result.html";
    }, 1000);
    }
  }
  

  
}


//Search Result by press ENTER key
//searchInput c name was
// document.getElementsByClassName("name")[0].addEventListener("keydown", handleKeyPress);

// function handleKeyPress(event) {
//   // event.preventDefault();
//   if (event.key === "Enter") {
//     search();
//   }
// }

