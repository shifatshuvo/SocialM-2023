const result = localStorage.getItem("isSignIn");

if(result) {
  // displayPass();
  getAndDisplayUser();
} 
if(!result) {
  location.href = "sign-in.html?redirect_url=http://127.0.0.1:5500/change-user-pass.html";
}

//display Start


async function getAndDisplayUser() {
  
  const baseUrl = "http://localhost:8080/user"
  
  const id = localStorage.getItem("userId");
  const url = (baseUrl + '?id=' + id);

  const resp = await fetch(url);
  const user = await resp.json();
  displayPass(user);
}


function displayPass(user) {
  const passContainerEl = document.getElementsByClassName("passContainer");

  var displayHtml = '';
  displayHtml = `
  
  <!-- Top navbar Start -->
  <div class="bg-white shadow-md py-2">
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
      <div class="w-2/6 h-96 bg-white rounded-xl flex justify-center shadow-xl">
        <div class="text-xl font-semibold text-gray-500 px-4 space-y-2 pt-6">
          
          <div class="">
            <p class="text-center text-gray-500 text-3xl font-semibold px-4 py-2">Profile</p>
          </div>

          <div class="pb-4">
            <hr>
          </div>

          <div class="hover:bg-gray-200 hover:text-blue-600 py-1 px-4 rounded-xl">
            <a href="user-profile.html">View Profile</a>
          </div>

          <div class="hover:bg-gray-200 hover:text-blue-600 py-1 px-4 rounded-xl">
            <a href="update-user-profile.html">Update Profile</a>
          </div>

          <div class="hover:bg-gray-200 hover:text-blue-600 bg-green-700 text-white py-1 px-4 rounded-xl">
            <a href="change-user-pass.html">Change Password</a>
          </div>
        </div>
      </div>
      <!-- side navbar End -->

        <!-- info & img Start -->
        <div class="bg-white rounded-xl w-2/3 h-80 py-6 shadow-xl">
              
              <div>
                <p class="text-3xl font-semibold pb-4 text-center">Update Password</p>
              </div>

              <div class="px-24">
                <hr>
              </div>

          <!-- input data Start -->
          <div class="space-y-4 pt-8 px-28">
        
              <div class="flex items-center space-x-6">
                <lable class="font-semibold text-xl" for="currentPassword"><span class="pr-1">Current</span><span>Password</span></lable>
                <input id="currentPassword" class="w-full border-b-2 border-gray-300 outline-none py-1 currentPassword" type="password" placeholder="Enter your current password">
              </div>
          
              <div class="flex items-center space-x-8">
                <lable class="font-semibold text-xl text-gray-600" for="password"><span class="pr-1">Create</span><span>Password</span></lable>
                <input id="password" class="w-full border-b-2 border-gray-300 outline-none py-1 password" type="password" placeholder="Enter a new password">
              </div>
      
          </div>
          <!-- input data End -->

          <div class="flex justify-center pt-10 cursor-pointer">
            <button>
              <p onclick="savePass()" class="bg-green-700 hover:bg-blue-600 text-white text-xl font-semibold text-center py-2 px-4 rounded-xl">Save Change</p>
            </button>
          </div>

        </div>
      <!-- info & img End -->

    </div>
    <!-- Side nav & info End -->
    <script src="js/change-Pass-data.js"></script>`;

  passContainerEl[0].innerHTML = displayHtml;
}
//display End