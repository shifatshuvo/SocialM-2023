
    function view() {
        const profileButton = document.getElementById('profileButton');
        const userArea = document.getElementById('userArea');
        const closeButton = document.getElementById('closeButton');
            // const userArea = document.getElementsByClassName('userArea')[0];
            // const closeButton = document.getElementsByClassName('closeButton')[0];


    
            profileButton.addEventListener('click', ()=> {
                userArea.classList.remove('hidden');
            });
    
            closeButton.addEventListener('click', ()=> {
                userArea.classList.add('hidden');
            });
    
            document.addEventListener('click', (event)=> {
                // Check if the click target is not within the user area
                if (!userArea.contains(event.target) && event.target !== profileButton) {
                    userArea.classList.add('hidden');
                }
            });
    }

    // document.onloadedmetadata = view;


    //     function view() {
            
    // }

//     window.onload= view;
    
//     function view() {
//         const profileButton = document.getElementsByClassName('profileButton')[0];
//         const userArea = document.getElementsByClassName('userArea')[0];
//         const closeButton = document.getElementsByClassName('closeButton')[0];

//         profileButton.addEventListener('click', function () {
//             userArea.classList.remove('hidden');
//         });

//         closeButton.addEventListener('click', function () {
//             userArea.classList.add('hidden');
//         });

//         document.addEventListener('click', function (event) {
//             // Check if the click target is not within the user area
//             if (!userArea.contains(event.target) && event.target !== profileButton) {
//                 userArea.classList.add('hidden');
//             }
//         });
// }
















// document.addEventListener('DOMContentLoaded', function view() {

    
//     const profileButton = document.getElementsByClassName('profileButton')[0];
//     const userArea = document.getElementsByClassName('userArea')[0];
//     const closeButton = document.getElementsByClassName('closeButton')[0];
  
//     profileButton.addEventListener('click', function () {
//         userArea.classList.remove('hidden');
//     });
  
//     closeButton.addEventListener('click', function () {
//         userArea.classList.add('hidden');
//     });
  
//     document.addEventListener('click', function (event) {
//         // Check if the click target is not within the user area
//         if (!userArea.contains(event.target) && event.target !== profileButton) {
//             userArea.classList.add('hidden');
//         }
//     });
  
// });