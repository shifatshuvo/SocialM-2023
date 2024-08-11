const apiUrl = "http://localhost:8080/search-result";

async function search() {
  // e.preventDefault();
  
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
    console.log(result);

    if (result.ok) {
        // Redirect to update-user-profile.html page
        window.location.href = "search-result.html";
    }
}


function keyHandler(e){
  if(e.key === "Enter"){ //tried keycode too
    search(); 
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

