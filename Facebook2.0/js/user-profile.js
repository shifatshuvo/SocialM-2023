const result = localStorage.getItem("isSignIn");

if(result) {
  getAndDisplayUser();
  
} 
if(!result) {
  location.href = "sign-in.html?redirect_url=http://127.0.0.1:5500/user-profile.html";
}

// User get display Start
async function getAndDisplayUser() {

  const baseUrl = "http://localhost:8080/user"

  const loc = document.location;
  const queryString = loc.search;

  const params = new URLSearchParams(queryString);
  const parmId = parseInt(params.get("id"));

  const appId = localStorage.getItem("userId");

  // get id from Application Start
  if (appId || appId === parmId) {

    const appId = localStorage.getItem("userId");

    const url = (baseUrl + '?id=' + appId);
    const resp = await fetch(url);
    const user = await resp.json();
    displayUser(user);
  }
  // get id from Application End

  // get id from URL Start
  if(parmId && parmId != appId) {

    const loc = document.location;
    const queryString = loc.search;
  
    const params = new URLSearchParams(queryString);
    const parmId = parseInt(params.get("id"));

    const url = (baseUrl + '?id=' + parmId);
    const resp = await fetch(url);
    const userF = await resp.json();



    const appId = localStorage.getItem("userId");

    const url2 = (baseUrl + '?id=' + appId);
    const response = await fetch(url2);
    const user = await response.json();

    displayFriendProfile(userF, user);
  }
  // get id from URL End

}

// User get display End


  // Display loggedin user profile Start

function displayUser(user) {
  const userContainerEl = document.getElementsByClassName("userContainer");

  document.addEventListener('DOMContentLoaded', function view() {
    // function view() {
        const profileButton = document.getElementsByClassName('profileButton')[0];
        const userArea = document.getElementsByClassName('userArea')[0];
        const closeButton = document.getElementsByClassName('closeButton')[0];

        profileButton.addEventListener('click', function () {
            userArea.classList.remove('hidden');
        });

        closeButton.addEventListener('click', function () {
            userArea.classList.add('hidden');
        });

        document.addEventListener('click', function (event) {
            // Check if the click target is not within the user area
            if (!userArea.contains(event.target) && event.target !== profileButton) {
                userArea.classList.add('hidden');
            }
        });
    // }
});

  var displayHtml = '';
  displayHtml = `
  
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

      <div class="flex items-center justify-center">
        <div>
          <p class="font-semibold pr-2"><span class="text-blue-600">${user.firstName} ${user.lastName}</span>
          </p>
        </div>

        <!-- click profile button Start -->

        <img onclick="view()" id="profileButton"  class="bg-gray-300 profileButton w-12 h-12 opacity-95 rounded-full ring-2 cursor-pointer" src="${user.imgUrl}" alt="user pic">

          <div id="userArea" class="userArea hidden fixed top-36 right-2 transform -translate-x-1/2 -translate-y-1/2 pt-4 pb-2 border shadow-md max-w-6xl bg-gray-200 rounded-md">

              <div id="closeButton" class="closeButton absolute top-0.5 right-3 text-gray-600 cursor-pointer hover:text-red-500 font-semibold text-xl">X</div>
  
              <div class="hover:bg-gray-300 my-1 px-">
                <button>
                  <a class="px-6 py-1 font-semibold text-lg text-gray-500" href="user-profile.html">View Profile</a>
                </button>
              </div>

              <div class="hover:bg-gray-300 my-1 px-">
                <button>
                  <a class="px-6 py-1 font-semibold text-lg text-gray-500" href="update-user-profile.html">Update Profile</a>
                </button>
              </div>

              <div class="hover:bg-gray-300 my-1 px-">
                <button>
                  <a class="px-6 py-1 font-semibold text-lg text-gray-500" href="change-user-pass.html">Change Password</a>
                </button>
              </div>

              <div class="hover:bg-gray-300 my-1 px-">
                <button>
                  <a class="px-6 py-1 font-semibold text-lg text-gray-500" href="friends.html">Friends</a>
                </button>
              </div>
  
          </div>
        </img>

        <!-- click profile button End -->

      </div>

    </div>
  </div>
  <!-- Top navbar End -->

    <!-- Side nav & info Start -->
    <div class="max-w-6xl mx-auto pt-14 flex space-x-16">

      <!-- side navbar Start -->
      <div class="w-2/6 h-96 bg-gray-700 bg-opacity-80 rounded-xl flex justify-center shadow-xl">
        <div class="text-xl font-semibold text-gray-500 px-4 space-y-2 pt-6">
          
          <div class="">
            <p class="text-center text-gray-500 text-3xl font-semibold px-4 py-2">Profile</p>
          </div>

          <div class="pb-4">
            <hr>
          </div>

          <div class="hover:bg-gray-200 hover:text-blue-600 bg-green-700 text-white py-1 px-4 rounded-xl">
            <a href="user-profile.html">View Profile</a>
          </div>

          <div class="hover:bg-gray-200 hover:text-blue-600 py-1 px-4 rounded-xl">
            <a href="update-user-profile.html">Update Profile</a>
          </div>

          <div class="hover:bg-gray-200 hover:text-blue-600 py-1 px-4 rounded-xl">
            <a href="change-user-pass.html">Change Password</a>
          </div>

          <div class="hover:bg-gray-200 hover:text-blue-600 py-1 px-4 rounded-xl cursor-pointer">
              <p onclick="viewFriends(event)">Friends</p>
          </div>

        </div>
      </div>
      <!-- side navbar End -->

      <!-- inf-img div Start -->
      <div class="bg-gray-700 bg-opacity-80 rounded-xl w-2/3 h-80 py-6 shadow-xl">
        <div>
          <p class="text-3xl font-semibold pb-4 text-center text-gray-100">Profile Info</p>
        </div>

        <div class="px-24">
          <hr>
        </div>

        <!-- info & img Start -->
        <div class="flex items-center justify-center space-x-24 mt-10">
          <!-- info Start -->  
          <div class="flex items-center pl--48 pt--10 space-x-3">

            <div class="text-xl font-semibold text-gray-200 space-y-1">
              <p>Name :</p>
              <p>Email :</p>
              <p>Address :</p>
              <p>Phone :</p>
              <p>Gender :</p>
            </div>

            <div class="font-semibold text-gray-300 space-y-2">
              <p>${user.firstName} ${user.lastName}</p>
              <p>${user.email}</p>
              <p>${user.address}</p>
              <p>${user.phone}</p>
              <p>${user.gender}</p>
            </div>
            
          </div>
          <!-- info End -->

            <!-- img Start -->
            <div>
              <img class="w-32 h-36 rounded-md" src="${user.imgUrl}" alt="user friend photo">
            </div>
            <!-- img End -->
        </div>
        <!-- info & img End -->
      </div>
      <!-- inf-img div End -->

    </div>
    <!-- Side nav & info End -->`;

  userContainerEl[0].innerHTML = displayHtml;
}
  // Display loggedin user profile Start



// display Just user Start

function displayFriendProfile(userF , user) {
  const userContainerEl = document.getElementsByClassName("viewUser");

  var displayHtml = '';
  displayHtml = `
  
  <!-- Top navbar Start -->
  <div class="bg-gray-800 bg-opacity-95 shadow-md py-2">
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

    <!-- Side nav & info Start -->
    <div class="max-w-6xl mx-auto pt-14 flex space-x-16">

      <!-- side navbar Start -->
      <div class="w-2/6 h-96 bg-gray-800 rounded-xl flex justify-center shadow-xl">
        <div class="text-xl font-semibold text-gray-500 px-4 space-y-2 pt-6">
          
          <div class="">
            <p class="text-center text-gray-500 text-3xl font-semibold px-4 py-2">Profile</p>
          </div>

          <div class="pb-4">
            <hr>
          </div>

          <div class="hover:bg-gray-200 hover:text-blue-600 bg-gray-400 text-white py-1 text-center rounded-xl">
            <a href="">Intro</a>
          </div>

          <div class="hover:bg-gray-200 hover:text-blue-600 bg-gray-400 text-white py-1 text-center rounded-xl">
            <a href="">Friends</a>
          </div>

          <div class="hover:bg-gray-200 hover:text-blue-600 bg-gray-400 text-white py-1 text-center rounded-xl">
            <a href="">Photos</a>
          </div>

          <div class="hover:bg-gray-200 hover:text-blue-600 bg-gray-400 text-white py-1 text-center rounded-xl">
            <a href="">Vedios</a>
          </div>

        </div>
      </div>
      <!-- side navbar End -->

      <!-- inf-img div Start -->
      <div class="bg-gray-800 rounded-xl w-2/3 h-80 py-6 shadow-xl">
        <div>
          <p class="text-3xl font-semibold pb-4 text-center text-gray-100">Profile Info</p>
        </div>

        <div class="px-24">
          <hr>
        </div>

        <!-- info & img Start -->
        <div class="flex items-center justify-center space-x-24 mt-10">
              <!-- info Start -->
              
          <div class="flex items-center pl--48 pt--10 space-x-3">

            <div class="text-xl font-semibold text-gray-200 space-y-1">
              <p>Name :</p>
              <p>Email :</p>
              <p>Address :</p>
              <p>Phone :</p>
              <p>Gender :</p>
            </div>

            <div class="font-semibold text-gray-300 space-y-2">
              <p>${userF.firstName} ${user.lastName}</p>
              <p>${userF.email}</p>
              <p>${userF.address}</p>
              <p>${userF.phone}</p>
              <p>${userF.gender}</p>
            </div>
            
          </div>
            <!-- info End -->

            <!-- img Start -->
            <div>
              <img class="w-32 h-36 rounded-md" src="${userF.imgUrl}" alt="user friend photo">
            </div>
            <!-- img End -->
        </div>
        <!-- info & img End -->
      </div>
      <!-- inf-img div End -->

    </div>
    <!-- Side nav & info End -->`;

  userContainerEl[0].innerHTML = displayHtml;
}

// display Just user End
