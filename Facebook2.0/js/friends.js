const signInStatus = localStorage.getItem("isSignIn");

if(signInStatus) {
  getAndDisplayUser();
  getAndDisplayFriends();
} 
if(!signInStatus) {
  location.href = "sign-in.html?redirect_url=http://127.0.0.1:5500/friends.html";
}


// Customer get display Start
async function getAndDisplayUser() {
  
  const userApi = "http://localhost:8080/user";
  
  const id = localStorage.getItem("userId");
  const url = (userApi + '?id=' + id);

  const resp = await fetch(url);
  const user = await resp.json();
  displayUser(user);

}

function displayUser(user) {
  const friendsContainerEl = document.getElementsByClassName("friendsContainer");

  var displayHtml = '';
  displayHtml = `
  
  <!-- Main div Start -->
  <div>
    
    <!-- Top navbar Start -->
  <div class="bg-gray-700 bg-opacity-80 shadow-md py-2">
    <div class="max-w-6xl mx-auto flex justify-between">
      
      <div class="flex items-center">
        <a class="flex items-center font-semibold" href="index.html">
          <div class="bg-blue-700 w-10 h-10 text-center rounded-full">
            <p class="text-4xl font-bold text-white">f</p>
          </div>
          <div>
            <p class="pl-2 text-2xl text-gray-500 font-bold">Facebook 2.0</p>
          </div>
        </a>
      </div>

      <div class="flex items-center">
        <div>
          <p class="font-semibold pr-2"> <span class="text-blue-600">${user.firstName} ${user.lastName}</span></p>
        </div>
        <div class="bg-gray-300 w-12 flex justify-center opacity-95 rounded-full">
            <button class="">
              <i class="fa-solid fa-circle-user px-3 py-2 text-3xl text-gray-600"></i>
            </button>
        </div>
      </div>

    </div>
  </div>
  <!-- Top navbar End -->

  <!-- Friens div Start -->
  <div class="max-w-6xl mx-auto bg-gray-800 mt-14 px-8 pt-8 rounded-t-xl">

        <!-- Top bar Start -->
        <div class="flex justify-between items-center">
          <div>
            <p class="text-xl font-bold text-gray-100">Friends</p>
          </div>

          <div class="flex items-center space-x-4">
            <div class="bg-gray-300 ml-3 rounded-full">
              <form action="">
                <button type="submit"><i class="fa fa-search pl-3 text-gray-500"></i></button>
                <input class="w-40 px-4 py-1 bg-gray-200 rounded-full outline-none" type="text" placeholder="Search Facebook.." name="search">
              </form>
            </div>

            <div>
              <button class="hover:bg-gray-200 rounded-md">
                <p class="font-semibold text-blue-600 px-2 py-1">Friend requests</p>
              </button>
            </div>

            <div>
              <button class="hover:bg-gray-200 rounded-md">
                <p class="font-semibold text-blue-600 px-2 py-1">Find Friends</p>
              </button>
            </div>

            <div class="bg-gray-200 hover:bg-gray-300 rounded-md">
              <button>
                <i class="fa-solid fa-ellipsis px-4 py-2 opacity-95"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- Top bar End -->

        <!-- Etc list Start -->
        <div class="flex mt-6 text-gray-500 font-semibold space-x-4">

          <div class="border-b-4 border-blue-500">
            <button>
              <p class="text-blue-600 font-semibold">All friends</p>
            </button>
          </div>
          
          <button class="hover:bg-gray-200 font-semibold rounded-md">
            <p class="px-2 py-1">Recently Added</p>
          </button>

          <button class="hover:bg-gray-200 font-semibold rounded-md">
            <p class="px-2 py-1">Birthdays</p>
          </button>

          <button class="hover:bg-gray-200 font-semibold rounded-md">
            <p class="px-2 py-1">Work</p>
          </button>

          <button class="hover:bg-gray-200 font-semibold rounded-md">
            <p class="px-2 py-1">Current City</p>
          </button>

          <button class="hover:bg-gray-200 font-semibold rounded-md">
            <p class="px-2 py-1">Hometown</p>
          </button>

          <button class="hover:bg-gray-200 font-semibold rounded-md">
            <p class="px-2 py-1">Followers</p>
          </button>

          <button class="hover:bg-gray-200 font-semibold rounded-md">
            <p class="px-2 py-1">Following</p>
          </button>

        </div>
        <!-- Etc list End -->
        <div class="pt-2">
          <hr>
        </div>
  </div>
  <!-- Friens div End -->

  </div>
  <!-- Main div End -->`;

  friendsContainerEl[0].innerHTML = displayHtml;
}
// Customer get display End

// get and display categories Start


async function getAndDisplayFriends() {

  const friendApi = "http://localhost:8080/friends";

  const AppId = localStorage.getItem("userId");
  const fUrl = (friendApi + '?id=' + AppId);

  const response = await fetch(fUrl);
  const friends = await response.json();
  console.log(friends);
  displayFriends(friends);
}

function displayFriends(friends) {
  const friendContainerEl = document.getElementsByClassName("friendList");

  var displayHtml = '';
  for (friends of friends) {
    displayHtml +=
    `
    <!-- Friends List Start -->

            <div class="w-2/5 flex justify-between items-center my-6">
              <div class="flex items-center">
                <img class="w-28 h-32 rounded-xl" src="${friends.imgUrl}" alt="shif">
                <div class="ml-4">
                  <p class="font-bold text-gray-100">${friends.firstName} ${friends.lastName}</p>
                  <div class="flex items-center my-1">
                    <i class="fa-solid fa-location-dot mr-1 text-gray-50"></i>
                    <p class="text-sm text-gray-100 font-semibold">${friends.address}</p>
                  </div>
                  <button class="mt-2 bg-blue-600 hover:bg-gray-300 opacity-95 rounded-md">
                  <a href="http://127.0.0.1:5500/user-profile.html?id=${friends.id}">
                    <p class="font-semibold text-white hover:text-blue-600 px-3 py-1">View Profile</p>
                  </a>
                  </button>
                </div>
              </div>

              <div>
                <button class="hover:bg-gray-300 rounded-full">
                  <i class="fa-solid fa-ellipsis p-3 text-xl text-gray-50"></i>
                </button>
              </div>
            </div>      

      <!-- Friends List End -->`
  }

  friendContainerEl[0].innerHTML = displayHtml;
}
// get and display categories End