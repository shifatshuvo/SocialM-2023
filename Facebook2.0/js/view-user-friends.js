const api = "http://localhost:8080/friends";

async function viewFriends() {

  const id = localStorage.getItem("userId");

  //Submit
    const url = (api + '?id=' + id);
    console.log(url);

    const result = await fetch(url);

    if (result.ok) {
      setTimeout(function() {
        // Redirect to update-user-profile.html page
        window.location.href = "friends.html";
    }, 1000);
    }
}