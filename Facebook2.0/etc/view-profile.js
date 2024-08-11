// const result = localStorage.getItem("isSignIn");

// if(result) {
//   getAndDisplayUser();
// }

// if(!result) {
//   location.href = "sign-in.html";
// }


// // Customer get display Start
// async function getAndDisplayUser() {

//   const baseUrl = "http://localhost:8080/user"

//   const loc = document.location;
//   const queryString = loc.search;

//   const params = new URLSearchParams(queryString);
//   const id = parseInt(params.get("id"));
  
//   const url = (baseUrl + '?id=' + id);

//   const resp = await fetch(url);
//   const user = await resp.json();
  

//   if (user == 0) {
//     location.href = "sign-in.html"
//   } else {
//     displayUser(user);
//   }
// }

// function displayUser(user) {
//   const userContainerEl = document.getElementById("userContainer");

//   var displayHtml = '';
//   displayHtml = `
  
//   <!-- Top navbar Start -->
//   <div class="bg-white shadow-md py-2">
//     <div class="max-w-6xl mx-auto flex justify-between">
      
//       <div class="flex items-center text-xl font-semibold">
//         <i class="fa-solid fa-s text-green-700"></i>
//         <i class="fa-solid fa-b pl-1 text-green-700"></i>
//         <p class="pl-2">Social</p>
//       </div>

//       <div class="flex items-center">
//         <p class="font-semibold pr-2">Hi, <span>${user.name}</span></p>
//         <p class="h-10 w-10 bg-blue-500 rounded-full"></p>
//       </div>

//     </div>
//   </div>
//   <!-- Top navbar End -->

//     <!-- Side nav & info Start -->
//     <div class="max-w-6xl mx-auto pt-14 flex space-x-16">

//       <!-- side navbar Start -->
//       <div class="w-2/6 h-96 bg-white rounded-xl flex justify-center shadow-xl">
//         <div class="text-xl font-semibold text-gray-500 px-4 space-y-2 pt-6">
          
//           <div class="">
//             <p class="text-center text-gray-500 text-3xl font-semibold px-4 py-2">Profile</p>
//           </div>

//           <div class="pb-4">
//             <hr>
//           </div>

//           <div class="hover:bg-gray-200 hover:text-blue-600 bg-gray-400 text-white py-1 text-center rounded-xl">
//             <a href="">Intro</a>
//           </div>

//           <div class="hover:bg-gray-200 hover:text-blue-600 bg-gray-400 text-white py-1 text-center rounded-xl">
//             <a href="">Friends</a>
//           </div>

//           <div class="hover:bg-gray-200 hover:text-blue-600 bg-gray-400 text-white py-1 text-center rounded-xl">
//             <a href="">Photos</a>
//           </div>

//           <div class="hover:bg-gray-200 hover:text-blue-600 bg-gray-400 text-white py-1 text-center rounded-xl">
//             <a href="">Vedios</a>
//           </div>

//         </div>
//       </div>
//       <!-- side navbar End -->

//         <!-- info & img Start -->
//         <div class="bg-white rounded-xl w-2/3 h-80 py-6 shadow-xl">
//               <!-- info Start -->
//               <div>
//                 <p class="text-3xl font-semibold pb-4 text-center">Profile Info</p>
//               </div>

//               <div class="px-24">
//                 <hr>
//               </div>
//           <div class="flex items-center pl-48 pt-10 space-x-3">

//             <div class="text-xl font-semibold text-gray-600 space-y-1">
//               <p>Name :</p>
//               <p>Email :</p>
//               <p>Address :</p>
//               <p>Phone :</p>
//               <p>Gender :</p>
//             </div>

//             <div class="font-semibold text-gray-500 space-y-2">
//               <p>${user.name}</p>
//               <p>${user.email}</p>
//               <p>${user.address}</p>
//               <p>${user.phone}</p>
//               <p>${user.gender}</p>
//             </div>
            
//           </div>
//             <!-- info End -->

//             <!-- img Start -->
//             <div>
//               <img src="" alt="">
//             </div>
//             <!-- img End -->
//         </div>
//       <!-- info & img End -->

//     </div>
//     <!-- Side nav & info End -->`;

//   userContainerEl.innerHTML = displayHtml;
// }
// // Customer get display End