const result = localStorage.getItem("isSignIn");

if(result) {
  displayTopnav();
  getAndDisplaySearch();
} 
if(!result) {
  location.href = "sign-in.html?redirect_url=http://127.0.0.1:5500/search-result.html";
}


// Search result get display Start
async function getAndDisplaySearch() {

  const Api = "http://localhost:8080/search-result";

  const searchName = sessionStorage.getItem("search");
  console.log(searchName);

  var fullName = searchName.split(' '),
      firstName = fullName[0],
      lastName = fullName[fullName.length - 1];

  const Url = (Api + '?firstName=' + firstName + '&lastName=' + lastName);
  console.log(Url);

  const response = await fetch(Url);
  const users = await response.json();
  console.log(users);

  displayUsers(users);
  
}

// function displayEmpty() {
//   const usersContainerEmpty = document.getElementsByClassName("usersContainerEmpty");

//   var displayHtml = '';
//   displayHtml = `
//   <div class="text-center">
//     <p class="text-xl font-semibold text-red-600">User Not Found!!</p>
//   </div>`
//   usersContainerEmpty[0].innerHTML = displayHtml;
// }

function displayUsers(users) {
  const usersContainerEl = document.getElementsByClassName("usersContainer");

  var displayHtml = '';
  for (users of users) {
    displayHtml +=
    `
    <!-- Friends List Start -->

            <div class="w-2/5 flex justify-between items-center my-6">
              <div class="flex items-center">
                <img class="w-28 h-32 rounded-md" src="${users.imgUrl}" alt="shif">
                <div class="ml-4">
                  <p class="font-bold text-white">${users.firstName} ${users.lastName == 'null'? '':'' || users.lastName != null? users.lastName: ''}</p>
                  <div class="flex items-center my-1">
                    <i class="fa-solid fa-location-dot mr-1" style="color: white;"></i>
                    <p class="text-sm text-white font-semibold">${users.address}</p>
                  </div>
                  <button class="mt-2 bg-blue-600 hover:bg-gray-300 opacity-95 rounded-md">
                  <a href="http://127.0.0.1:5500/user-profile.html?id=${users.id}">
                    <p class="font-semibold text-white hover:text-blue-600 px-3 py-1">View Profile</p>
                  </a>
                  </button>
                </div>
              </div>

              <div>
                <button class="hover:bg-gray-500 rounded-full">
                  <i class="fa-solid fa-ellipsis p-3 text-xl text-white"></i>
                </button>
              </div>
            </div>      

      <!-- Friends List End -->`
  }

  usersContainerEl[0].innerHTML = displayHtml;
}
// Search result get display End

//display Start

function displayTopnav() {
  const topNavContainerEl = document.getElementsByClassName("topNavContainer");

  var displayHtml = '';
  displayHtml = `
  
  <!-- Main div Start -->
  <div>
    <!-- Top Navbar Start -->
    <div class="bg-gray-800 bg-opacity-95 ">

      <!-- top nav wide div Start -->
      <div class="max-w-screen-xl mx-auto">
        <!-- icon - mid - acc Start -->
        <div class="flex items-center">
             <!-- icon & search Start -->
            <div class="flex items-center py-2">

              <a href="index.html">
                <div class="bg-blue-700 w-10 h-10 text-center rounded-full">
                  <p class="text-4xl font-bold text-white">f</p>
                </div>
              </a>

              <div class="bg-gray-200 ml-3 rounded-full">
                <div class="flex items-center">
                  <button class="flex items-center" onclick="search()"><i class="fa fa-search pl-3 text-gray-600 text-lg font-semibold"></i>
                  </button>
                  <input onkeypress="keyHandler(event)" class="name  px-4 py-1 bg-gray-200 rounded-full outline-none" type="text" placeholder="Search Facebook.." name="search">
                </div>
              </div>

            </div>
            <!-- icon & search End -->

            <!-- Mid items section Start -->
            <div class="w-7/12 flex justify-center space-x-10 text-2xl text-gray-400 font-semibold">
              
              <button class="border-b-2 transform hover:-translate-y-1 duration-500">
                <i class="fa-solid fa-house text-blue-700"></i>
              </button>

              <button class="transform hover:-translate-y-1 duration-500">
                <i class="fa-brands fa-youtube"></i>
              </button>

              <button class="transform hover:-translate-y-1 duration-500">
                <i class="fa-solid fa-store"></i>
              </button>

              <button class="transform hover:-translate-y-1 duration-500">
                <i class="fa-solid fa-people-group"></i>
              </button>

              <button class="transform hover:-translate-y-1 duration-500">
                <i class="fa-solid fa-gamepad"></i>
              </button>

            </div>
            <!-- Mid items section End -->

            <!-- Account section Start -->
            <div class="w-56 px-1 text-gray-500 font-semibold flex justify-between text-2xl text-center">

              <div class="bg-gray-500 w-10 h-10 rounded-full flex justify-center transform hover:scale-105 duration-300">
                <button class="">
                  <i class="fa-solid fa-bars text-gray-50"></i>
                </button>
              </div>

              <div class="bg-gray-500 w-10 h-10 relative flex justify-center rounded-full transform hover:scale-105 duration-300">
                <button class="px-3 py-1">
                  <i class="fa-brands fa-facebook-messenger text-gray-50"></i>
                  <span class="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold absolute -top-1.5 -right-1">7</span>
                </button>
              </div>

              <div class="bg-gray-500 w-10 h-10 relative flex justify-center rounded-full transform hover:scale-105 duration-300">
                <button class="px-3 py-1">
                  <i class="fa-solid fa-bell text-gray-50"></i>
                  <span class="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold absolute -top-1.5 -right-1">3</span>
                </button>
              </div>

              <!-- Only Account div start -->
              <div class="text-gray-500 font-semibold">
                
                <div id="accountBtn" onmouseenter="accountMouseEnter()" onmouseleave="accountMouseLeave()"
                class="w-10 h-10 flex justify-center cursor-pointer focus:outline-none bg-gray-500 rounded-full text-center transform hover:scale-105 duration-300">
                <button class="flex items-center justify-center ring-2 ring-blue-500 ring-inset rounded-full p-1">
                  <!-- i class="fa-solid fa-circle-user px-3 py-2 text-gray-50"/i -->
                  <img class="rounded-full w-10 h-auto" src="https://i.ibb.co/Tt0zcV6/avt2.png" alt="logged in user img">
                </button>
                  <!-- Account -->
                  <!-- <i class="fa-solid fa-chevron-down pl-1"></i> -->
                </div>
                <div id="accountArea" onmouseleave="this.classList.add('hidden')" class="max-w-7xl hidden absolute 2xl:right-80 md:right-14 md:top-11 bg-gray-200 w-48 rounded-xl -mt-1 py-2 text-xl font-semibold">
                  <a href="user-profile.html" class="block hover:bg-gray-100 py-2 px-4 cursor-pointer">Profile</a>
                  <a href="update-user-profile.html" class="block hover:bg-gray-100 py-2 px-4 cursor-pointer">Update Profile</a>
                  <a href="change-user-pass.html" class="block hover:bg-gray-100 py-2 px-4 cursor-pointer">Change Password</a>
                  <a onclick="signOut(event)" href="#" class="block hover:bg-gray-100 py-2 px-4">Sign out</a>
                </div>
            
              </div>
              <!-- Only Account div end -->
            </div>
            <!-- Account section End -->

        </div>
        <!-- icon - mid - acc End -->
      </div>
      <!-- top nav wide div End -->

    </div>
    <!-- Top Navbar End -->
  </div>
  <!-- Main div End -->`;

  topNavContainerEl[0].innerHTML = displayHtml;
}
//display End