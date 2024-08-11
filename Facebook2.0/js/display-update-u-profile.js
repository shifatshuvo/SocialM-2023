const result = localStorage.getItem("isSignIn");

if(result) {
  getAndDisplayUser();
} 
if(!result) {
  location.href = "sign-in.html?redirect_url=http://127.0.0.1:5500/update-user-profile.html";
}


// Customer get display Start
async function getAndDisplayUser() {
  
  const baseUrl = "http://localhost:8080/user"
  
  const id = localStorage.getItem("userId");
  const url = (baseUrl + '?id=' + id);

  const resp = await fetch(url);
  const user = await resp.json();
  displayUser(user);
}

function displayUser(user) {
  const userContainerEl = document.getElementsByClassName("update-userContainer");

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

          <div class="hover:bg-gray-200 hover:text-blue-600 bg-green-700 text-white py-1 px-4 rounded-xl">
            <a href="update-user-profile.html">Update Profile</a>
          </div>

          <div class="hover:bg-gray-200 hover:text-blue-600 py-1 px-4 rounded-xl">
            <a href="change-user-pass.html">Change Password</a>
          </div>
        </div>
      </div>
      <!-- side navbar End -->

        <!-- info & img Start -->
        <div class="bg-white rounded-xl w-2/3 h-auto py-6 shadow-xl">
              <!-- info Start -->
              <div>
                <p class="text-3xl font-semibold pb-4 text-center">Update Profile</p>
              </div>

              <div class="px-24">
                <hr>
              </div>
          <!-- input data Start -->
          <div class="space-y-4 pt-8 px-44">
         
            <div class="flex items-center space-x-12">
              <lable class="font-semibold text-xl" for="name">Name</lable>
              <input id="name" class="w-full border-b-2 border-gray-300 outline-none py-1 name" type="text" value="${user.firstName} ${user.lastName}" placeholder="Enter your name">
            </div>
        
            <div class="flex items-center space-x-11">
              <lable class="font-semibold text-xl" for="email">Email*</lable>
              <input id="email" class="w-full border-b-2 border-gray-300 outline-none py-1 email" type="email" value="${user.email}" placeholder="Enter your Email" disabled> 
            </div>
        
            <div class="flex items-center space-x-7">
              <lable class="font-semibold text-xl" for="address">Address</lable>
              <input id="address" class="w-full border-b-2 border-gray-300 outline-none py-1 address" type="address" value="${user.address}" placeholder="Enter your address">
            </div>
        
            <div class="flex items-center space-x-11">
              <lable class="font-semibold text-xl" for="phone">Phone</lable>
              <input id="phone" class="w-full border-b-2 border-gray-300 outline-none py-1 phone" type="tel" value="${user.phone}" placeholder="Enter your phone no">
            </div>
        
            <div class="flex items-center space-x-11">
              <lable class="font-semibold text-xl pr-1" for="genderSelectOption">Gender</lable>
              <select class="bg-gray-300 rounded pl-1 gender" id="genderSelectOption" name="genders" form="genderform">
                <option value="male" ${user.gender == 'male'? 'selected' : ''}>Male</option>
                <option value="female" ${user.gender == 'female'? 'selected' : ''}>Female</option>
                <option value="others" ${user.gender == 'others'? 'selected' : ''}>Others</option>
              </select>

            

            </div>
          </div>
          <!-- input data End -->
            <!-- info End -->

            <div class="flex justify-center pt-10 pb-2 cursor-pointer">
              <button>
                <p onclick="saveChanges()" class="bg-green-700 hover:bg-blue-600 text-white text-xl font-semibold text-center py-2 px-4 rounded-xl">Save Change</p>
              </button>
            </div>
        </div>
      <!-- info & img End -->

    </div>
    <!-- Side nav & info End -->`;

  userContainerEl[0].innerHTML = displayHtml;
}
// Customer get display End