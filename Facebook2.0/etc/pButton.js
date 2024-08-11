document.addEventListener('DOMContentLoaded', function () {

    
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

        // view();
      
});













// function view() {
//     document.addEventListener('DOMContentLoaded', function () {
//         const profileButton = document.getElementsByClassName('profileButton')[0];
//         const userArea = document.getElementsByClassName('userArea')[0];
//         const closeButton = document.getElementsByClassName('close-button')[0];

//         profileButton.addEventListener('click', function () {
//             userArea.classList.remove('hidden');
//         });

//         closeButton.addEventListener('click', function () {
//             userArea.classList.add('hidden');
//         });

//         document.addEventListener('click', function (event) {
//             if (!userArea.contains(event.target) && event.target !== profileButton) {
//                 userArea.classList.add('hidden');
//             }
//         });
//     });
// }

// // Call the view() function to set up the event listeners when the page loads.
// view();















// document.addEventListener('DOMContentLoaded', function () {

    
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
      
// });
